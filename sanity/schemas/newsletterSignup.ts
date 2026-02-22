import { defineType, defineField } from 'sanity'

export const newsletterSignup = defineType({
  name: 'newsletterSignup',
  title: 'Newsletter Signup',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'signupDate',
      title: 'Signup Date',
      type: 'datetime',
    }),
  ],
  preview: {
    select: { title: 'email', subtitle: 'signupDate' },
  },
})
