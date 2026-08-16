import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { tradeStandSchema } from '@/lib/formSchemas'
import { escapeHtml } from '@/lib/utils'
import { checkRateLimit } from '@/lib/rateLimit'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const FESTIVAL_EMAIL = 'hello@shaftesbury-food-festival.co.uk'

export async function POST(request: NextRequest) {
  try {
    if (!checkRateLimit(request, 'trade-stand-enquiry', { limit: 5, windowMs: 60_000 })) {
      return NextResponse.json({ error: 'Too many requests, please try again shortly' }, { status: 429 })
    }

    const body = await request.json()
    const parsed = tradeStandSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid submission', issues: parsed.error.flatten() }, { status: 400 })
    }
    const { businessName, contactName, email, phone, category, pitches, description, specialRequirements } = parsed.data

    // Store in Sanity
    if (!process.env.SANITY_API_WRITE_TOKEN) {
      console.error('SANITY_API_WRITE_TOKEN is not configured')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const { writeClient } = await import('@/lib/sanity')
    await writeClient.create({
      _type: 'tradeStandEnquiry',
      businessName,
      contactName,
      email,
      phone: phone || '',
      category,
      pitches,
      description,
      specialRequirements: specialRequirements || '',
      submittedAt: new Date().toISOString(),
    })

    // Send notification email
    if (resend) {
      await resend.emails.send({
        from: `Shaftesbury Food Festival <${process.env.RESEND_FROM_EMAIL || 'noreply@shaftesbury-food-festival.co.uk'}>`,
        to: FESTIVAL_EMAIL,
        subject: `New Trade Stand Enquiry: ${businessName}`,
        html: `
          <h2>New Trade Stand Enquiry</h2>
          <p><strong>Business:</strong> ${escapeHtml(businessName)}</p>
          <p><strong>Contact:</strong> ${escapeHtml(contactName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
          <p><strong>Category:</strong> ${escapeHtml(category)}</p>
          <p><strong>Pitches:</strong> ${pitches === '2' ? '2 pitches (3m each) — £100' : '1 pitch (3m) — £50'}</p>
          <p><strong>Description:</strong> ${escapeHtml(description)}</p>
          <p><strong>Special Requirements:</strong> ${escapeHtml(specialRequirements || 'None')}</p>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Trade stand enquiry error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
