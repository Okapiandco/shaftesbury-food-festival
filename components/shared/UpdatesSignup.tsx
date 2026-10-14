'use client'

import { useState } from 'react'

const TOPICS = [
  { value: 'chef-demos', label: 'Live Action Kitchen (chef demos)' },
  { value: 'food-trail', label: 'Food Trail' },
  { value: 'market', label: 'Street Market' },
  { value: 'general', label: 'General festival news' },
] as const

interface UpdatesSignupProps {
  /** Topics ticked to start with */
  defaultTopics?: string[]
  /** Heading shown above the form */
  heading?: string
  intro?: string
}

export default function UpdatesSignup({
  defaultTopics = ['general'],
  heading = 'Register for updates',
  intro = 'Tell us what you want to hear about and we will email you when there is news.',
}: UpdatesSignupProps) {
  const [email, setEmail] = useState('')
  const [topics, setTopics] = useState<string[]>(defaultTopics)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function toggle(value: string) {
    setTopics((prev) => (prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, topics: topics.length ? topics : ['general'] }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl bg-white p-6 text-center shadow-sm">
        <p className="text-lg font-bold text-leaf">Thank you, you are on the list.</p>
        <p className="mt-1 text-sm text-text-light">We will be in touch when there is news.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-xl font-bold text-text">{heading}</h3>
      <p className="mt-1 text-sm text-text-light">{intro}</p>

      <fieldset className="mt-4">
        <legend className="sr-only">Topics you want updates on</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {TOPICS.map((t) => (
            <label key={t.value} className="flex cursor-pointer items-center gap-2 text-sm text-text">
              <input
                type="checkbox"
                checked={topics.includes(t.value)}
                onChange={() => toggle(t.value)}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              {t.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Email address"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="whitespace-nowrap rounded-md bg-primary px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending...' : 'Register'}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
      <p className="mt-3 text-xs text-text-muted">
        We only use your email to send the updates you choose.
      </p>
    </form>
  )
}
