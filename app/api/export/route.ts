import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

const EXPORT_SECRET = process.env.EXPORT_SECRET

const TYPES = {
  'trade-stands': {
    query: `*[_type == "tradeStandEnquiry"] | order(submittedAt desc) {
      businessName, contactName, email, phone, category, description, specialRequirements, submittedAt
    }`,
    headers: ['Business Name', 'Contact', 'Email', 'Phone', 'Category', 'Description', 'Special Requirements', 'Submitted'],
    fields: ['businessName', 'contactName', 'email', 'phone', 'category', 'description', 'specialRequirements', 'submittedAt'],
    filename: 'trade-stand-enquiries',
  },
  'cheese-race': {
    query: `*[_type == "cheeseRaceEntry"] | order(entryDate desc) {
      firstName, surname, email, age, gender, entryDate
    }`,
    headers: ['First Name', 'Surname', 'Email', 'Age', 'Gender', 'Entry Date'],
    fields: ['firstName', 'surname', 'email', 'age', 'gender', 'entryDate'],
    filename: 'cheese-race-entries',
  },
  volunteers: {
    query: `*[_type == "volunteerEnquiry"] | order(submittedAt desc) {
      fullName, email, phone, preferredRoles, availability, skills, previousExperience, submittedAt
    }`,
    headers: ['Name', 'Email', 'Phone', 'Preferred Roles', 'Availability', 'Skills', 'Previous Experience', 'Submitted'],
    fields: ['fullName', 'email', 'phone', 'preferredRoles', 'availability', 'skills', 'previousExperience', 'submittedAt'],
    filename: 'volunteer-enquiries',
  },
  newsletter: {
    query: `*[_type == "newsletterSignup"] | order(signupDate desc) { email, signupDate }`,
    headers: ['Email', 'Signup Date'],
    fields: ['email', 'signupDate'],
    filename: 'newsletter-signups',
  },
} as const

type ExportType = keyof typeof TYPES

function escapeCsv(value: unknown): string {
  if (value == null) return ''
  const str = Array.isArray(value) ? value.join('; ') : String(value)
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const type = searchParams.get('type') as ExportType | null
  const secret = searchParams.get('secret')

  if (!EXPORT_SECRET) {
    return NextResponse.json({ error: 'Export not configured. Set EXPORT_SECRET in environment variables.' }, { status: 500 })
  }

  if (secret !== EXPORT_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!type || !TYPES[type]) {
    return NextResponse.json(
      { error: `Invalid type. Use one of: ${Object.keys(TYPES).join(', ')}` },
      { status: 400 }
    )
  }

  const config = TYPES[type]
  const results = await client.fetch(config.query)

  const rows = [config.headers.join(',')]
  for (const row of results) {
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
