#!/usr/bin/env node
/**
 * ONE-TIME migration: copy existing form-submission documents out of the
 * public Sanity dataset and into Postgres. Run once, verify the printed
 * counts match Sanity Studio, THEN run scripts/purge-sanity-submissions.mjs
 * to delete the originals from Sanity.
 *
 * Usage: node scripts/migrate-sanity-to-postgres.mjs
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID, SANITY_API_READ_TOKEN and
 * DATABASE_URL in .env.local
 */
import { createClient } from '@sanity/client'
import { neon } from '@neondatabase/serverless'
import { config } from 'dotenv'

config({ path: '.env.local' })

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token: process.env.SANITY_API_READ_TOKEN,
  useCdn: false,
})

if (!process.env.DATABASE_URL) {
  console.error('Missing DATABASE_URL — check .env.local')
  process.exit(1)
}

const sql = neon(process.env.DATABASE_URL)

async function migrateCheeseRace() {
  const docs = await sanity.fetch(`*[_type == "cheeseRaceEntry"]`)
  for (const d of docs) {
    await sql`
      INSERT INTO cheese_race_entries (first_name, surname, email, age, gender, acknowledgement, entry_date, created_at)
      VALUES (${d.firstName}, ${d.surname}, ${d.email}, ${d.age}, ${d.gender}, ${!!d.acknowledgement}, ${d.entryDate || d._createdAt}, ${d._createdAt})
    `
  }
  console.log(`cheeseRaceEntry: migrated ${docs.length}`)
  return docs.length
}

async function migrateTradeStands() {
  const docs = await sanity.fetch(`*[_type == "tradeStandEnquiry"]`)
  for (const d of docs) {
    await sql`
      INSERT INTO trade_stand_enquiries (business_name, contact_name, email, phone, category, pitches, description, special_requirements, submitted_at, created_at)
      VALUES (${d.businessName}, ${d.contactName}, ${d.email}, ${d.phone || ''}, ${d.category || ''}, ${d.pitches || ''}, ${d.description || ''}, ${d.specialRequirements || ''}, ${d.submittedAt || d._createdAt}, ${d._createdAt})
    `
  }
  console.log(`tradeStandEnquiry: migrated ${docs.length}`)
  return docs.length
}

async function migrateVolunteers() {
  const docs = await sanity.fetch(`*[_type == "volunteerEnquiry"]`)
  for (const d of docs) {
    await sql`
      INSERT INTO volunteer_enquiries (full_name, email, phone, preferred_roles, availability, skills, previous_experience, submitted_at, created_at)
      VALUES (${d.fullName}, ${d.email}, ${d.phone || ''}, ${d.preferredRoles || []}, ${d.availability || ''}, ${d.skills || ''}, ${d.previousExperience || ''}, ${d.submittedAt || d._createdAt}, ${d._createdAt})
    `
  }
  console.log(`volunteerEnquiry: migrated ${docs.length}`)
  return docs.length
}

async function migrateNewsletter() {
  const docs = await sanity.fetch(`*[_type == "newsletterSignup"]`)
  for (const d of docs) {
    await sql`
      INSERT INTO newsletter_signups (email, signup_date, created_at)
      VALUES (${d.email}, ${d.signupDate || d._createdAt}, ${d._createdAt})
    `
  }
  console.log(`newsletterSignup: migrated ${docs.length}`)
  return docs.length
}

const results = {
  cheeseRaceEntry: await migrateCheeseRace(),
  tradeStandEnquiry: await migrateTradeStands(),
  volunteerEnquiry: await migrateVolunteers(),
  newsletterSignup: await migrateNewsletter(),
}

console.log('\nDone. Verify these counts match Sanity Studio before running the purge script:')
console.log(results)
