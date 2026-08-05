import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'
import { SITE_KNOWLEDGE } from '@/lib/chatKnowledge'
import { checkRateLimit } from '@/lib/rateLimit'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const MAX_MESSAGES = 12
const MAX_USER_MESSAGE_LEN = 1500

type ClientMessage = {
  role: 'user' | 'assistant'
  content: string
}

function isValidMessage(m: unknown): m is ClientMessage {
  if (!m || typeof m !== 'object') return false
  const x = m as Record<string, unknown>
  return (
    (x.role === 'user' || x.role === 'assistant') &&
    typeof x.content === 'string' &&
    x.content.length > 0
  )
}

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response('Chat is not configured', { status: 503 })
  }

  if (!checkRateLimit(req, 'chat', { limit: 20, windowMs: 60_000 })) {
    return new Response('Too many requests, please try again shortly', { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  const messagesIn = (body as { messages?: unknown }).messages
  if (!Array.isArray(messagesIn) || messagesIn.length === 0) {
    return new Response('messages array required', { status: 400 })
  }

  const messages = messagesIn
    .filter(isValidMessage)
    .slice(-MAX_MESSAGES)
    .map((m) => ({
      role: m.role,
      content: m.content.slice(0, MAX_USER_MESSAGE_LEN),
    }))

  if (messages.length === 0 || messages[messages.length - 1].role !== 'user') {
    return new Response('last message must be from user', { status: 400 })
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const apiStream = client.messages.stream({
          model: 'claude-haiku-4-5',
          max_tokens: 800,
          system: [
            {
              type: 'text',
              text: SITE_KNOWLEDGE,
              cache_control: { type: 'ephemeral' },
            },
          ],
          messages,
        })

        apiStream.on('text', (delta) => {
          controller.enqueue(encoder.encode(delta))
        })

        await apiStream.finalMessage()
        controller.close()
      } catch (err) {
        const msg =
          err instanceof Anthropic.APIError
            ? `\n\n[Sorry, something went wrong. Please email hello@shaftesbury-food-festival.co.uk]`
            : `\n\n[Sorry, something went wrong. Please try again.]`
        controller.enqueue(encoder.encode(msg))
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Accel-Buffering': 'no',
    },
  })
}
