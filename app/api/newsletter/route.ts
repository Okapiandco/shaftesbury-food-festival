import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { newsletterSchema } from '@/lib/formSchemas'
import { checkRateLimit } from '@/lib/rateLimit'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    if (!checkRateLimit(request, 'newsletter', { limit: 5, windowMs: 60_000 })) {
      return NextResponse.json({ error: 'Too many requests, please try again shortly' }, { status: 429 })
    }

    const body = await request.json()
    const parsed = newsletterSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }
    const { email } = parsed.data

    // Store in Sanity
    if (!process.env.SANITY_API_WRITE_TOKEN) {
      console.error('SANITY_API_WRITE_TOKEN is not configured')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const { writeClient } = await import('@/lib/sanity')
    await writeClient.create({
      _type: 'newsletterSignup',
      email,
      signupDate: new Date().toISOString(),
    })

    // Send confirmation email
    if (resend) {
      await resend.emails.send({
        from: `Shaftesbury Food Festival <${process.env.RESEND_FROM_EMAIL || 'noreply@shaftesbury-food-festival.co.uk'}>`,
        to: email,
        subject: 'Welcome to Shaftesbury Food Festival Updates!',
        html: `
          <h2>Thank you for signing up!</h2>
          <p>You'll receive the latest news and updates about the Shaftesbury Food Festival 2027.</p>
          <p><strong>Date:</strong> 2nd May 2027</p>
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
