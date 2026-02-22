import { defineType, defineField } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'eventTitle',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventTime',
      title: 'Event Time',
      type: 'string',
      description: 'e.g. "10:00 AM - 11:00 AM"',
    }),
    defineField({
      name: 'eventDescription',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'eventLocation',
      title: 'Location',
      type: 'string',
      description: 'e.g. "High Street", "Park Walk"',
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Main Event', value: 'main-event' },
          { title: 'Chef Talk', value: 'chef-talk' },
          { title: 'Race', value: 'race' },
          { title: 'Entertainment', value: 'entertainment' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'speaker',
      title: 'Speaker / Chef',
      type: 'string',
    }),
    defineField({
      name: 'speakerBio',
      title: 'Speaker Biography',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'eventTitle', subtitle: 'eventTime' },
  },
})
