'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
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
    return <p className="text-sm text-green-300">Thanks! You&apos;re signed up.</p>
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full rounded-md border-0 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-blue-300 focus:ring-2 focus:ring-accent"
        aria-label="Email address for newsletter"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="whitespace-nowrap rounded-md bg-accent px-4 py-2 text-sm font-bold text-primary hover:bg-accent-dark transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? '...' : 'Sign Up'}
      </button>
      {status === 'error' && (
        <p className="mt-1 text-xs text-red-300">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
