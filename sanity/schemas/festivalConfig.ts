import { defineType, defineField } from 'sanity'

export const festivalConfig = defineType({
  name: 'festivalConfig',
  title: 'Festival Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'festivalName',
      title: 'Festival Name',
      type: 'string',
      initialValue: 'Shaftesbury Food Festival 2026',
    }),
    defineField({
      name: 'festivalDate',
      title: 'Festival Date',
      type: 'date',
    }),
    defineField({
      name: 'festivalDescription',
      title: 'Festival Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'aboutShort',
      title: 'Short Tagline',
      type: 'string',
      description: 'Short tagline for the homepage hero section',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Banner Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
              },
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'hello@shaftesburyfoodfestival.co.uk',
    }),
    defineField({
      name: 'townCouncilLogo',
      title: 'Town Council Logo',
      type: 'image',
    }),
    defineField({
      name: 'chamberLogo',
      title: 'Chamber of Commerce Logo',
      type: 'image',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Festival Settings' }
    },
  },
})
