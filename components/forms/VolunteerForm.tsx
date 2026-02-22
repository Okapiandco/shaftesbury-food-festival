'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const roleOptions = [
  { value: 'marshal', label: 'Marshal' },
  { value: 'registration', label: 'Registration' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'setup-cleanup', label: 'Setup / Cleanup' },
  { value: 'pre-event', label: 'Pre-event Planning' },
  { value: 'other', label: 'Other' },
]

const schema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(1, 'Phone number is required'),
  preferredRoles: z.array(z.string()).min(1, 'Please select at least one role'),
  availability: z.string().optional(),
  skills: z.string().optional(),
  previousExperience: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function VolunteerForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { preferredRoles: [] },
  })

  async function onSubmit(data: FormData) {
    setStatus('loading')
    try {
      const res = await fetch('/api/volunteer-enquiry', {
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
        <h3 className="text-lg font-bold text-green-800">Thank you!</h3>
        <p className="mt-2 text-sm text-green-700">We&apos;ll contact you soon with more details.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-text">Full Name *</label>
        <input id="fullName" {...register('fullName')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
        {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text">Email *</label>
          <input id="email" type="email" {...register('email')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text">Phone *</label>
          <input id="phone" type="tel" {...register('phone')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text">Preferred Roles *</label>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {roleOptions.map((role) => (
            <label key={role.value} className="flex items-center gap-2 text-sm text-text">
              <input type="checkbox" value={role.value} {...register('preferredRoles')} className="text-primary focus:ring-primary" />
              {role.label}
            </label>
          ))}
        </div>
        {errors.preferredRoles && <p className="mt-1 text-xs text-red-600">{errors.preferredRoles.message}</p>}
      </div>

      <div>
        <label htmlFor="availability" className="block text-sm font-medium text-text">Availability</label>
        <input id="availability" {...register('availability')} placeholder="e.g. All day, morning only, etc." className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
      </div>

      <div>
        <label htmlFor="skills" className="block text-sm font-medium text-text">Special Skills or Experience</label>
        <textarea id="skills" rows={2} {...register('skills')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
      </div>

      <div>
        <label htmlFor="previousExperience" className="block text-sm font-medium text-text">Previous Volunteer Experience</label>
        <textarea id="previousExperience" rows={2} {...register('previousExperience')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
      </div>

      {status === 'error' && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-md bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-primary-dark transition-colors disabled:opacity-50 min-h-[44px]"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit Expression of Interest'}
      </button>
    </form>
  )
}
