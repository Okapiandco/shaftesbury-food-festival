import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const FESTIVAL_EMAIL = 'hello@shaftesburyfoodfestival.co.uk'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { businessName, contactName, email, phone, category, description, specialRequirements } = body

    if (!businessName || !contactName || !email || !category || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Store in Sanity
    if (process.env.SANITY_API_WRITE_TOKEN) {
      const { writeClient } = await import('@/lib/sanity')
      await writeClient.create({
        _type: 'tradeStandEnquiry',
        businessName,
        contactName,
        email,
        phone: phone || '',
        category,
        description,
        specialRequirements: specialRequirements || '',
        submittedAt: new Date().toISOString(),
      })
    }

    // Send notification email
    if (resend) {
      await resend.emails.send({
        from: `Shaftesbury Food Festival <${process.env.RESEND_FROM_EMAIL || 'noreply@shaftesburyfoodfestival.co.uk'}>`,
        to: FESTIVAL_EMAIL,
        subject: `New Trade Stand Enquiry: ${businessName}`,
        html: `
          <h2>New Trade Stand Enquiry</h2>
          <p><strong>Business:</strong> ${businessName}</p>
          <p><strong>Contact:</strong> ${contactName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Description:</strong> ${description}</p>
          <p><strong>Special Requirements:</strong> ${specialRequirements || 'None'}</p>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Trade stand enquiry error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
