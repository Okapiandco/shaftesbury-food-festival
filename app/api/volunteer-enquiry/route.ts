import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { volunteerSchema } from '@/lib/formSchemas'
import { escapeHtml } from '@/lib/utils'
import { checkRateLimit } from '@/lib/rateLimit'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const FESTIVAL_EMAIL = 'hello@shaftesbury-food-festival.co.uk'

export async function POST(request: NextRequest) {
  try {
    if (!checkRateLimit(request, 'volunteer-enquiry', { limit: 5, windowMs: 60_000 })) {
      return NextResponse.json({ error: 'Too many requests, please try again shortly' }, { status: 429 })
    }

    const body = await request.json()
    const parsed = volunteerSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid submission', issues: parsed.error.flatten() }, { status: 400 })
    }
    const { fullName, email, phone, preferredRoles, availability, skills, previousExperience } = parsed.data

    // Store in Sanity
    if (!process.env.SANITY_API_WRITE_TOKEN) {
      console.error('SANITY_API_WRITE_TOKEN is not configured')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const { writeClient } = await import('@/lib/sanity')
    await writeClient.create({
      _type: 'volunteerEnquiry',
      fullName,
      email,
      phone,
      preferredRoles,
      availability: availability || '',
      skills: skills || '',
      previousExperience: previousExperience || '',
      submittedAt: new Date().toISOString(),
    })

    // Send notification email
    if (resend) {
      await resend.emails.send({
        from: `Shaftesbury Food Festival <${process.env.RESEND_FROM_EMAIL || 'noreply@shaftesbury-food-festival.co.uk'}>`,
        to: FESTIVAL_EMAIL,
        subject: `New Volunteer Enquiry: ${fullName}`,
        html: `
          <h2>New Volunteer Enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Preferred Roles:</strong> ${escapeHtml(preferredRoles.join(', '))}</p>
          <p><strong>Availability:</strong> ${escapeHtml(availability || 'Not specified')}</p>
          <p><strong>Skills:</strong> ${escapeHtml(skills || 'Not specified')}</p>
          <p><strong>Previous Experience:</strong> ${escapeHtml(previousExperience || 'Not specified')}</p>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Volunteer enquiry error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
