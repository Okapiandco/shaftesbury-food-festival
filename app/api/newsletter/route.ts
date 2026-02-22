import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    // Store in Sanity
    if (process.env.SANITY_API_WRITE_TOKEN) {
      const { writeClient } = await import('@/lib/sanity')
      await writeClient.create({
        _type: 'newsletterSignup',
        email,
        signupDate: new Date().toISOString(),
      })
    }

    // Send confirmation email
    if (resend) {
      await resend.emails.send({
        from: `Shaftesbury Food Festival <${process.env.RESEND_FROM_EMAIL || 'noreply@shaftesburyfoodfestival.co.uk'}>`,
        to: email,
        subject: 'Welcome to Shaftesbury Food Festival Updates!',
        html: `
          <h2>Thank you for signing up!</h2>
          <p>You'll receive the latest news and updates about the Shaftesbury Food Festival 2026.</p>
          <p><strong>Date:</strong> 3rd May 2026</p>
          <p><strong>Location:</strong> High Street & Park Walk, Shaftesbury, Dorset</p>
          <p>See you there!</p>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
