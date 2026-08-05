import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(200),
  email: z.string().trim().email('Please enter a valid email').max(320),
  subject: z.string().trim().min(1, 'Subject is required').max(300),
  message: z.string().trim().min(10, 'Please enter at least 10 characters').max(5000),
})

export const cheeseRaceSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(200),
  surname: z.string().trim().min(1, 'Surname is required').max(200),
  email: z.string().trim().email('Please enter a valid email').max(320),
  age: z.coerce.number().min(1, 'Age is required').max(120, 'Please enter a valid age'),
  gender: z.enum(['male', 'female', 'other'], { errorMap: () => ({ message: 'Please select a gender' }) }),
  acknowledgement: z.literal(true, { errorMap: () => ({ message: 'You must acknowledge the health warning' }) }),
})

export const tradeStandSchema = z.object({
  businessName: z.string().trim().min(1, 'Business name is required').max(200),
  contactName: z.string().trim().min(1, 'Contact name is required').max(200),
  email: z.string().trim().email('Please enter a valid email').max(320),
  phone: z.string().trim().max(50).optional().or(z.literal('')),
  category: z.string().trim().min(1, 'Please select a category').max(100),
  description: z.string().trim().min(1, 'Please describe what you offer').max(3000),
  specialRequirements: z.string().trim().max(3000).optional().or(z.literal('')),
})

export const volunteerSchema = z.object({
  fullName: z.string().trim().min(1, 'Full name is required').max(200),
  email: z.string().trim().email('Please enter a valid email').max(320),
  phone: z.string().trim().min(1, 'Phone number is required').max(50),
  preferredRoles: z.array(z.string().max(100)).min(1, 'Please select at least one role').max(20),
  availability: z.string().trim().max(500).optional().or(z.literal('')),
  skills: z.string().trim().max(2000).optional().or(z.literal('')),
  previousExperience: z.string().trim().max(2000).optional().or(z.literal('')),
})

export const newsletterSchema = z.object({
  email: z.string().trim().email('Please enter a valid email').max(320),
})
