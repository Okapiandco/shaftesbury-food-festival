import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const FESTIVAL_EMAIL = 'hello@shaftesburyfoodfestival.co.uk'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, surname, email, age, gender, acknowledgement } = body

    if (!firstName || !surname || !email || !age || !gender || !acknowledgement) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Store in Sanity (requires write token)
    if (process.env.SANITY_API_WRITE_TOKEN) {
      const { writeClient } = await import('@/lib/sanity')
      await writeClient.create({
        _type: 'cheeseRaceEntry',
        firstName,
        surname,
        email,
        age: Number(age),
        gender,
        acknowledgement,
        entryDate: new Date().toISOString(),
      })
    }

    // Send notification email
    if (resend) {
      await resend.emails.send({
        from: `Shaftesbury Food Festival <${process.env.RESEND_FROM_EMAIL || 'noreply@shaftesburyfoodfestival.co.uk'}>`,
        to: FESTIVAL_EMAIL,
        subject: `New Cheese Race Entry: ${firstName} ${surname}`,
        html: `
          <h2>New Cheese Race Entry</h2>
          <p><strong>Name:</strong> ${firstName} ${surname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Age:</strong> ${age}</p>
          <p><strong>Gender:</strong> ${gender}</p>
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
