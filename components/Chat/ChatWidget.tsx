'use client'

import { useEffect, useRef, useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const INITIAL_GREETING: Message = {
  role: 'assistant',
  content:
    "Hi! I can help with questions about the Shaftesbury Food Festival — the Cheese Race, Food Trail, MasterChefs Live, getting here, and more. What would you like to know?",
}

const SUGGESTIONS = [
  'When is the festival?',
  'How do I enter the Cheese Race?',
  'Where can I park?',
  "What's on Saturday?",
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_GREETING])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isStreaming])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  async function send(messageText: string) {
    const trimmed = messageText.trim()
    if (!trimmed || isStreaming) return

    setError(null)
    const next: Message[] = [
      ...messages,
      { role: 'user', content: trimmed },
      { role: 'assistant', content: '' },
    ]
    setMessages(next)
    setInput('')
    setIsStreaming(true)

    const controller = new AbortController()
    abortRef.current = controller

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: next.slice(0, -1).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
        signal: controller.signal,
      })

      if (!res.ok || !res.body) {
        throw new Error(`Request failed (${res.status})`)
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        setMessages((prev) => {
          const copy = [...prev]
          copy[copy.length - 1] = { role: 'assistant', content: buffer }
          return copy
        })
      }
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') return
      setError('Sorry, something went wrong. Please try again.')
      setMessages((prev) => prev.slice(0, -1))
    } finally {
      setIsStreaming(false)
      abortRef.current = null
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    send(input)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-5 right-5 z-50 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-xl hover:bg-primary-light transition-all hover:scale-105"
      >
        {open ? <X size={36} /> : <MessageCircle size={36} />}
      </button>

      {open && (
        <div className="fixed bottom-28 right-5 z-50 flex w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-200 sm:w-96">
          <div className="bg-primary px-4 py-3 text-white">
            <h2 className="text-sm font-bold">Festival Helper</h2>
            <p className="text-xs text-blue-200">
              Ask me anything about the festival
            </p>
          </div>
          <div className="bg-accent/20 border-b border-accent/40 px-4 py-2">
            <p className="text-[11px] leading-snug text-text">
              <strong>Heads up:</strong> I&apos;m a friendly bot, here to help make life easier. I do my best, but please don&apos;t get cheesed off if I don&apos;t have the answer you&apos;re after — drop us a line at <a href="mailto:hello@shaftesbury-food-festival.co.uk" className="text-primary underline">hello@shaftesbury-food-festival.co.uk</a> and a human will pick it up.
            </p>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-gray-50"
            style={{ height: '24rem', maxHeight: '60vh' }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-primary text-white rounded-br-sm'
                      : 'bg-white text-text shadow-sm border border-gray-100 rounded-bl-sm'
                  }`}
                >
                  {m.content || (isStreaming && i === messages.length - 1 ? '…' : '')}
                </div>
              </div>
            ))}

            {messages.length === 1 && !isStreaming && (
              <div className="pt-2">
                <p className="text-xs text-text-muted px-1 mb-2">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-primary/30 bg-white px-3 py-1 text-xs text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {error && (
              <p className="text-xs text-red-600 text-center">{error}</p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-gray-200 bg-white p-2">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about the festival…"
                rows={1}
                disabled={isStreaming}
                className="flex-1 resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:bg-gray-100"
                style={{ maxHeight: '6rem' }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isStreaming}
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary-light disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="mt-1 text-[10px] text-text-muted text-center">
              AI-generated answers — for booking issues email hello@shaftesbury-food-festival.co.uk
            </p>
          </form>
        </div>
      )}
    </>
  )
}
