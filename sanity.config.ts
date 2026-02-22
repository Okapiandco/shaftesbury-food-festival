'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'shaftesbury-food-festival',
  title: 'Shaftesbury Food Festival CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Festival Settings')
              .child(
                S.document()
                  .schemaType('festivalConfig')
                  .documentId('festivalConfig')
              ),
            S.divider(),
            S.documentTypeListItem('tradeStand').title('Trade Stands'),
            S.documentTypeListItem('event').title('Events & Timetable'),
            S.documentTypeListItem('sponsor').title('Sponsors'),
            S.documentTypeListItem('page').title('Pages'),
            S.divider(),
            S.listItem()
              .title('Form Submissions')
              .child(
                S.list()
                  .title('Form Submissions')
                  .items([
                    S.documentTypeListItem('cheeseRaceEntry').title('Cheese Race Entries'),
                    S.documentTypeListItem('tradeStandEnquiry').title('Trade Stand Enquiries'),
                    S.documentTypeListItem('volunteerEnquiry').title('Volunteer Enquiries'),
                    S.documentTypeListItem('newsletterSignup').title('Newsletter Signups'),
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
