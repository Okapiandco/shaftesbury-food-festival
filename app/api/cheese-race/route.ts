import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { cheeseRaceSchema } from '@/lib/formSchemas'
import { escapeHtml } from '@/lib/utils'
import { checkRateLimit } from '@/lib/rateLimit'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const FESTIVAL_EMAIL = 'hello@shaftesbury-food-festival.co.uk'

export async function POST(request: NextRequest) {
  try {
    if (!checkRateLimit(request, 'cheese-race', { limit: 5, windowMs: 60_000 })) {
      return NextResponse.json({ error: 'Too many requests, please try again shortly' }, { status: 429 })
    }

    const body = await request.json()
    const parsed = cheeseRaceSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid submission', issues: parsed.error.flatten() }, { status: 400 })
    }
    const { firstName, surname, email, age, gender, acknowledgement } = parsed.data

    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL is not configured')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const { sql } = await import('@/lib/db')
    await sql`
      INSERT INTO cheese_race_entries (first_name, surname, email, age, gender, acknowledgement, entry_date)
      VALUES (${firstName}, ${surname}, ${email}, ${age}, ${gender}, ${acknowledgement}, ${new Date().toISOString()})
    `

    // Send notification email
    if (resend) {
      await resend.emails.send({
        from: `Shaftesbury Food Festival <${process.env.RESEND_FROM_EMAIL || 'noreply@shaftesbury-food-festival.co.uk'}>`,
        to: FESTIVAL_EMAIL,
        subject: `New Cheese Race Entry: ${firstName} ${surname}`,
        html: `
          <h2>New Cheese Race Entry</h2>
          <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(surname)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Age:</strong> ${age}</p>
          <p><strong>Gender:</strong> ${escapeHtml(gender)}</p>
          <p><strong>Medical Acknowledgement:</strong> Yes</p>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Cheese race submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
