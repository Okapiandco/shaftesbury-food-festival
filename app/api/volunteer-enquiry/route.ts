import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const FESTIVAL_EMAIL = 'hello@shaftesburyfoodfestival.co.uk'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, preferredRoles, availability, skills, previousExperience } = body

    if (!fullName || !email || !phone || !preferredRoles?.length) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Store in Sanity
    if (process.env.SANITY_API_WRITE_TOKEN) {
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
    }

    // Send notification email
    if (resend) {
      await resend.emails.send({
        from: `Shaftesbury Food Festival <${process.env.RESEND_FROM_EMAIL || 'noreply@shaftesburyfoodfestival.co.uk'}>`,
        to: FESTIVAL_EMAIL,
        subject: `New Volunteer Enquiry: ${fullName}`,
        html: `
          <h2>New Volunteer Enquiry</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Preferred Roles:</strong> ${preferredRoles.join(', ')}</p>
          <p><strong>Availability:</strong> ${availability || 'Not specified'}</p>
          <p><strong>Skills:</strong> ${skills || 'Not specified'}</p>
          <p><strong>Previous Experience:</strong> ${previousExperience || 'Not specified'}</p>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Volunteer enquiry error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
