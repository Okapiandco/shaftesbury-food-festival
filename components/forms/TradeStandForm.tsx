'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const schema = z.object({
  businessName: z.string().min(1, 'Business name is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  category: z.string().min(1, 'Please select a category'),
  description: z.string().min(1, 'Please describe what you offer'),
  specialRequirements: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function TradeStandForm() {
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
      const res = await fetch('/api/trade-stand-enquiry', {
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
        <p className="mt-2 text-sm text-green-700">We&apos;ll be in touch with more information soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-text">Business Name *</label>
          <input id="businessName" {...register('businessName')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
          {errors.businessName && <p className="mt-1 text-xs text-red-600">{errors.businessName.message}</p>}
        </div>
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-text">Contact Person *</label>
          <input id="contactName" {...register('contactName')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
          {errors.contactName && <p className="mt-1 text-xs text-red-600">{errors.contactName.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text">Email *</label>
          <input id="email" type="email" {...register('email')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text">Phone Number</label>
          <input id="phone" type="tel" {...register('phone')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
        </div>
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-text">Business Type *</label>
        <select id="category" {...register('category')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary">
          <option value="">Select a category</option>
          <option value="food-vendor">Food Vendor</option>
          <option value="beverage">Beverage</option>
          <option value="craft">Craft</option>
          <option value="other">Other</option>
        </select>
        {errors.category && <p className="mt-1 text-xs text-red-600">{errors.category.message}</p>}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-text">What Do You Offer? *</label>
        <textarea id="description" rows={3} {...register('description')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
        {errors.description && <p className="mt-1 text-xs text-red-600">{errors.description.message}</p>}
      </div>

      <div>
        <label htmlFor="specialRequirements" className="block text-sm font-medium text-text">Special Requirements</label>
        <textarea id="specialRequirements" rows={2} {...register('specialRequirements')} placeholder="Power, water, space, dietary info, etc." className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
      </div>

      {status === 'error' && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-md bg-secondary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-secondary-dark transition-colors disabled:opacity-50 min-h-[44px]"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit Expression of Interest'}
      </button>
    </form>
  )
}
