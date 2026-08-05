import { NextRequest } from 'next/server'

const buckets = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) return forwardedFor.split(',')[0].trim()
  return request.headers.get('x-real-ip') || 'unknown'
}

/**
 * In-memory fixed-window rate limit, scoped per serverless instance.
 * Good enough to blunt casual abuse/spam; not a substitute for an edge/Redis
 * limiter under sustained or distributed attack.
 */
export function checkRateLimit(
  request: NextRequest,
  routeKey: string,
  { limit, windowMs }: { limit: number; windowMs: number }
): boolean {
  const key = `${routeKey}:${getClientIp(request)}`
  const now = Date.now()
  const bucket = buckets.get(key)

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return true
  }

  if (bucket.count >= limit) return false

  bucket.count += 1
  return true
}
