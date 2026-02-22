import { defineType, defineField } from 'sanity'

export const cheeseRaceEntry = defineType({
  name: 'cheeseRaceEntry',
  title: 'Cheese Race Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'surname',
      title: 'Surname',
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
      name: 'age',
      title: 'Age',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(120),
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          { title: 'Male', value: 'male' },
          { title: 'Female', value: 'female' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'acknowledgement',
      title: 'Medical Acknowledgement',
      type: 'boolean',
    }),
    defineField({
      name: 'entryDate',
      title: 'Entry Date',
      type: 'datetime',
    }),
  ],
  preview: {
    select: { title: 'firstName', subtitle: 'surname' },
    prepare({ title, subtitle }) {
      return { title: `${title} ${subtitle}` }
    },
  },
})
