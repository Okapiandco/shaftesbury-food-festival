import { defineType, defineField } from 'sanity'

export const tradeStand = defineType({
  name: 'tradeStand',
  title: 'Trade Stand',
  type: 'document',
  fields: [
    defineField({
      name: 'stallName',
      title: 'Stall Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stallCategory',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Food Vendor', value: 'food-vendor' },
          { title: 'Beverage', value: 'beverage' },
          { title: 'Craft', value: 'craft' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'platform', title: 'Platform', type: 'string' }),
            defineField({ name: 'handle', title: 'Handle', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Stall Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'standNumber',
      title: 'Stand Number',
      type: 'string',
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'stallName', subtitle: 'stallCategory' },
  },
})
