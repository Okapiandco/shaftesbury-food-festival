import { NextRequest, NextResponse } from 'next/server'
import { SUBMISSION_TYPES, escapeCsv, isSubmissionType } from '@/lib/submissionTypes'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const type = searchParams.get('type') || ''

  if (!isSubmissionType(type)) {
    return NextResponse.json(
      { error: `Invalid type. Use one of: ${Object.keys(SUBMISSION_TYPES).join(', ')}` },
      { status: 400 }
    )
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  const { sql } = await import('@/lib/db')
  const config = SUBMISSION_TYPES[type]
  const results = await sql.query(`SELECT * FROM ${config.table} ORDER BY ${config.orderBy}`)

  const headers = config.columns.map((c) => c.header)
  const rows = [headers.join(',')]
  for (const row of results as Record<string, unknown>[]) {
    rows.push(config.columns.map((c) => escapeCsv(row[c.field])).join(','))
  }

  const csv = rows.join('\n')
  const date = new Date().toISOString().slice(0, 10)

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="${config.filename}-${date}.csv"`,
      'Cache-Control': 'no-store',
    },
  })
}
