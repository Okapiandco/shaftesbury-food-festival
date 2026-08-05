#!/usr/bin/env node
/**
 * Export Sanity form submissions to CSV files in ./exports/
 *
 * Usage:
 *   node scripts/export-forms.mjs                  # exports all form types
 *   node scripts/export-forms.mjs cheeseRaceEntry  # exports only the named type(s)
 *
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_READ_TOKEN in .env.local
 */
import { createClient } from '@sanity/client'
import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { config } from 'dotenv'

config({ path: '.env.local' })

const FORM_TYPES = {
  cheeseRaceEntry: ['_createdAt', 'firstName', 'surname', 'email', 'age', 'gender', 'acknowledgement', 'entryDate'],
  tradeStandEnquiry: null,
  volunteerEnquiry: null,
  newsletterSignup: null,
}

const requested = process.argv.slice(2)
const types = requested.length ? requested : Object.keys(FORM_TYPES)

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token: process.env.SANITY_API_READ_TOKEN,
  useCdn: false,
})

if (!client.config().projectId || !client.config().token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_READ_TOKEN — check .env.local')
  process.exit(1)
}

const escape = (v) => {
  if (v === null || v === undefined) return ''
  const s = typeof v === 'object' ? JSON.stringify(v) : String(v)
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

const outDir = resolve('exports')
mkdirSync(outDir, { recursive: true })

const stamp = new Date().toISOString().slice(0, 10)

for (const type of types) {
  const docs = await client.fetch(`*[_type == $type] | order(_createdAt desc)`, { type })

  if (!docs.length) {
    console.log(`${type}: 0 entries — skipping`)
    continue
  }

  const preferred = FORM_TYPES[type]
  const headers =
    preferred ??
    [...new Set(docs.flatMap(Object.keys))].filter((k) => !k.startsWith('_') || k === '_createdAt')

  const csv = [
    headers.join(','),
    ...docs.map((d) => headers.map((h) => escape(d[h])).join(',')),
  ].join('\n')

  const filename = `${type}-${stamp}.csv`
  writeFileSync(resolve(outDir, filename), csv)
  console.log(`${type}: ${docs.length} entries → exports/${filename}`)
}
