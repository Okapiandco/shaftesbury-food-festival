import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'node:crypto'
import { checkRateLimit } from '@/lib/rateLimit'
import { ADMIN_COOKIE_NAME, ADMIN_SESSION_MAX_AGE_SECONDS, createSessionToken } from '@/lib/adminAuth'

function checkPassword(provided: string): boolean {
  const secret = process.env.ADMIN_PASSWORD
  if (!secret) return false
  const providedBuf = Buffer.from(provided)
  const secretBuf = Buffer.from(secret)
  if (providedBuf.length !== secretBuf.length) return false
  return timingSafeEqual(providedBuf, secretBuf)
}

export async function POST(request: NextRequest) {
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Admin login is not configured' }, { status: 500 })
  }

  if (!checkRateLimit(request, 'admin-login', { limit: 5, windowMs: 60_000 })) {
    return NextResponse.json({ error: 'Too many attempts, please try again shortly' }, { status: 429 })
  }

  const body = await request.json().catch(() => null)
  const password = typeof body?.password === 'string' ? body.password : ''

  if (!checkPassword(password)) {
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
  }

  const token = await createSessionToken()
  const response = NextResponse.json({ success: true })
  response.cookies.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: ADMIN_SESSION_MAX_AGE_SECONDS,
  })
  return response
}
