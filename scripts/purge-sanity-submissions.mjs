#!/usr/bin/env node
/**
 * ONE-TIME cleanup: permanently deletes cheeseRaceEntry, tradeStandEnquiry,
 * volunteerEnquiry and newsletterSignup documents from the public Sanity
 * dataset. Only run this AFTER scripts/migrate-sanity-to-postgres.mjs has
 * completed and its counts have been checked against Sanity Studio — this
 * is what actually closes the public PII exposure.
 *
 * Usage:
 *   node scripts/purge-sanity-submissions.mjs           # dry run, counts only
 *   node scripts/purge-sanity-submissions.mjs --confirm # actually deletes
 *
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local
 */
import { createClient } from '@sanity/client'
import { config } from 'dotenv'

config({ path: '.env.local' })

const TYPES = ['cheeseRaceEntry', 'tradeStandEnquiry', 'volunteerEnquiry', 'newsletterSignup']
const confirmed = process.argv.includes('--confirm')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

for (const type of TYPES) {
  const ids = await client.fetch(`*[_type == $type]._id`, { type })

  if (!confirmed) {
    console.log(`${type}: ${ids.length} document(s) would be deleted (dry run — pass --confirm to actually delete)`)
    continue
  }

  if (!ids.length) {
    console.log(`${type}: 0 documents — nothing to delete`)
    continue
  }

  const tx = client.transaction()
  for (const id of ids) tx.delete(id)
  await tx.commit()
  console.log(`${type}: deleted ${ids.length} document(s)`)
}
