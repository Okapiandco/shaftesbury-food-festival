'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  surname: z.string().min(1, 'Surname is required'),
  email: z.string().email('Please enter a valid email'),
  age: z.coerce.number().min(1, 'Age is required').max(120, 'Please enter a valid age'),
  gender: z.enum(['male', 'female', 'other'], { errorMap: () => ({ message: 'Please select a gender' }) }),
  acknowledgement: z.literal(true, { errorMap: () => ({ message: 'You must acknowledge the health warning' }) }),
})

type FormData = z.infer<typeof schema>

export default function CheeseRaceForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    setStatus('loading')
    try {
      const res = await fetch('/api/cheese-race', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-center">
        <h3 className="text-lg font-bold text-green-800">Thank you for entering!</h3>
        <p className="mt-2 text-sm text-green-700">You will receive race details and your race number via email.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-text">First Name *</label>
          <input id="firstName" {...register('firstName')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
          {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="surname" className="block text-sm font-medium text-text">Surname *</label>
          <input id="surname" {...register('surname')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
          {errors.surname && <p className="mt-1 text-xs text-red-600">{errors.surname.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text">Email *</label>
        <input id="email" type="email" {...register('email')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-text">Age *</label>
          <input id="age" type="number" {...register('age')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
          {errors.age && <p className="mt-1 text-xs text-red-600">{errors.age.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-text">Gender *</label>
          <div className="mt-2 flex gap-4">
            {['male', 'female', 'other'].map((g) => (
              <label key={g} className="flex items-center gap-2 text-sm text-text">
                <input type="radio" value={g} {...register('gender')} className="text-primary focus:ring-primary" />
                <span className="capitalize">{g}</span>
              </label>
            ))}
          </div>
          {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender.message}</p>}
        </div>
      </div>

      <div className="rounded-lg bg-yellow-50 p-4">
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" {...register('acknowledgement')} className="mt-0.5 text-primary focus:ring-primary" />
          <span className="text-text-light">
            I understand this is a strenuous race and confirm I have no medical conditions that would prevent participation. *
          </span>
        </label>
        {errors.acknowledgement && <p className="mt-1 text-xs text-red-600">{errors.acknowledgement.message}</p>}
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-md bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary hover:bg-accent-dark transition-colors disabled:opacity-50 min-h-[44px]"
      >
        {status === 'loading' ? 'Submitting...' : 'Register for Cheese Race'}
      </button>
    </form>
  )
}
