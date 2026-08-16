import { defineType, defineField } from 'sanity'

export const tradeStandEnquiry = defineType({
  name: 'tradeStandEnquiry',
  title: 'Trade Stand Enquiry',
  type: 'document',
  fields: [
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactName',
      title: 'Contact Person',
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
    }),
    defineField({
      name: 'category',
      title: 'Business Type',
      type: 'string',
      options: {
        list: [
          { title: 'Food Vendor', value: 'food-vendor' },
          { title: 'Beverage', value: 'beverage' },
          { title: 'Craft', value: 'craft' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'pitches',
      title: 'Number of Pitches',
      type: 'string',
      options: {
        list: [
          { title: '1 pitch (3m) — £50', value: '1' },
          { title: '2 pitches (3m each) — £100', value: '2' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'What You Offer',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'specialRequirements',
      title: 'Special Requirements',
      type: 'text',
      rows: 3,
      description: 'Power, water, space, dietary info, etc.',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: { title: 'businessName', subtitle: 'contactName' },
  },
})
