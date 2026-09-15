// Session token signing for /admin. Uses Web Crypto (not node:crypto) so it
// also works in Next.js middleware, which runs on the Edge runtime.

export const ADMIN_COOKIE_NAME = 'admin_session'
export const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 12 // 12 hours

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2)
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16)
  }
  return bytes
}

function bytesToHex(bytes: ArrayBuffer): string {
  return Array.from(new Uint8Array(bytes))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

async function getKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  )
}

export async function createSessionToken(): Promise<string> {
  const secret = process.env.ADMIN_PASSWORD
  if (!secret) throw new Error('ADMIN_PASSWORD is not configured')

  const expiresAt = Date.now() + ADMIN_SESSION_MAX_AGE_SECONDS * 1000
  const payload = String(expiresAt)
  const key = await getKey(secret)
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload))
  return `${payload}.${bytesToHex(signature)}`
}

export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
  const secret = process.env.ADMIN_PASSWORD
  if (!secret || !token) return false

  const [payload, signatureHex] = token.split('.')
  if (!payload || !signatureHex) return false

  const expiresAt = Number(payload)
  if (!Number.isFinite(expiresAt) || Date.now() >= expiresAt) return false

  try {
    const key = await getKey(secret)
    return await crypto.subtle.verify(
      'HMAC',
      key,
      hexToBytes(signatureHex) as BufferSource,
      new TextEncoder().encode(payload) as BufferSource
    )
  } catch {
    return false
  }
}
