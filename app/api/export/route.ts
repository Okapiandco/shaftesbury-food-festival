import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'node:crypto'
import { checkRateLimit } from '@/lib/rateLimit'

const EXPORT_SECRET = process.env.EXPORT_SECRET

function isAuthorized(request: NextRequest): boolean {
  if (!EXPORT_SECRET) return false
  const header = request.headers.get('authorization') || ''
  const provided = header.startsWith('Bearer ') ? header.slice(7) : ''
  const providedBuf = Buffer.from(provided)
  const secretBuf = Buffer.from(EXPORT_SECRET)
  if (providedBuf.length !== secretBuf.length) return false
  return timingSafeEqual(providedBuf, secretBuf)
}

const TYPES = {
  'trade-stands': {
    query: `SELECT business_name, contact_name, email, phone, category, pitches, description, special_requirements, submitted_at FROM trade_stand_enquiries ORDER BY submitted_at DESC`,
    headers: ['Business Name', 'Contact', 'Email', 'Phone', 'Category', 'Pitches', 'Description', 'Special Requirements', 'Submitted'],
    fields: ['business_name', 'contact_name', 'email', 'phone', 'category', 'pitches', 'description', 'special_requirements', 'submitted_at'],
    filename: 'trade-stand-enquiries',
  },
  'cheese-race': {
    query: `SELECT first_name, surname, email, age, gender, entry_date FROM cheese_race_entries ORDER BY entry_date DESC`,
    headers: ['First Name', 'Surname', 'Email', 'Age', 'Gender', 'Entry Date'],
    fields: ['first_name', 'surname', 'email', 'age', 'gender', 'entry_date'],
    filename: 'cheese-race-entries',
  },
  volunteers: {
    query: `SELECT full_name, email, phone, preferred_roles, availability, skills, previous_experience, submitted_at FROM volunteer_enquiries ORDER BY submitted_at DESC`,
    headers: ['Name', 'Email', 'Phone', 'Preferred Roles', 'Availability', 'Skills', 'Previous Experience', 'Submitted'],
    fields: ['full_name', 'email', 'phone', 'preferred_roles', 'availability', 'skills', 'previous_experience', 'submitted_at'],
    filename: 'volunteer-enquiries',
  },
  newsletter: {
    query: `SELECT email, signup_date FROM newsletter_signups ORDER BY signup_date DESC`,
    headers: ['Email', 'Signup Date'],
    fields: ['email', 'signup_date'],
    filename: 'newsletter-signups',
  },
} as const

type ExportType = keyof typeof TYPES

function escapeCsv(value: unknown): string {
  if (value == null) return ''
  const str = value instanceof Date
    ? value.toISOString()
    : Array.isArray(value) ? value.join('; ') : String(value)
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const type = searchParams.get('type') as ExportType | null

  if (!EXPORT_SECRET) {
    return NextResponse.json({ error: 'Export not configured. Set EXPORT_SECRET in environment variables.' }, { status: 500 })
  }

  if (!checkRateLimit(request, 'export', { limit: 10, windowMs: 60_000 })) {
    return NextResponse.json({ error: 'Too many requests, please try again shortly' }, { status: 429 })
  }

  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!type || !TYPES[type]) {
    return NextResponse.json(
      { error: `Invalid type. Use one of: ${Object.keys(TYPES).join(', ')}` },
      { status: 400 }
    )
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  const { sql } = await import('@/lib/db')
  const config = TYPES[type]
  const results = await sql.query(config.query)

  const rows = [config.headers.join(',')]
  for (const row of results as Record<string, unknown>[]) {
    rows.push(config.fields.map((field) => escapeCsv(row[field])).join(','))
  }

  const csv = rows.join('\n')
  const date = new Date().toISOString().slice(0, 10)

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="${config.filename}-${date}.csv"`,
    },
  })
}
