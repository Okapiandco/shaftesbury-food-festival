import { defineType, defineField } from 'sanity'

export const volunteerEnquiry = defineType({
  name: 'volunteerEnquiry',
  title: 'Volunteer Enquiry',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'preferredRoles',
      title: 'Preferred Roles',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Marshal', value: 'marshal' },
          { title: 'Registration', value: 'registration' },
          { title: 'Hospitality', value: 'hospitality' },
          { title: 'Setup / Cleanup', value: 'setup-cleanup' },
          { title: 'Pre-event Planning', value: 'pre-event' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Special Skills or Experience',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'previousExperience',
      title: 'Previous Volunteer Experience',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: { title: 'fullName', subtitle: 'email' },
  },
})
