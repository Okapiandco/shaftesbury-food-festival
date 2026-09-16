#!/usr/bin/env node
/**
 * Export form submissions (stored in Postgres) to CSV files in ./exports/
 *
 * Usage:
 *   node scripts/export-forms.mjs                  # exports all form types
 *   node scripts/export-forms.mjs cheeseRaceEntry  # exports only the named type(s)
 *
 * Requires DATABASE_URL in .env.local
 */
import { neon } from '@neondatabase/serverless'
import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { config } from 'dotenv'

config({ path: '.env.local' })

const FORM_TYPES = {
  cheeseRaceEntry: {
    table: 'cheese_race_entries',
    orderBy: 'entry_date desc',
    headers: ['created_at', 'first_name', 'surname', 'email', 'age', 'gender', 'acknowledgement', 'entry_date'],
  },
  tradeStandEnquiry: {
    table: 'trade_stand_enquiries',
    orderBy: 'submitted_at desc',
    headers: ['created_at', 'business_name', 'contact_name', 'email', 'phone', 'nearest_town', 'county', 'category', 'pitches', 'description', 'special_requirements', 'submitted_at'],
  },
  volunteerEnquiry: {
    table: 'volunteer_enquiries',
    orderBy: 'submitted_at desc',
    headers: ['created_at', 'full_name', 'email', 'phone', 'preferred_roles', 'availability', 'skills', 'previous_experience', 'submitted_at'],
  },
  newsletterSignup: {
    table: 'newsletter_signups',
    orderBy: 'signup_date desc',
    headers: ['created_at', 'email', 'signup_date'],
  },
}

const requested = process.argv.slice(2)
const types = requested.length ? requested : Object.keys(FORM_TYPES)

if (!process.env.DATABASE_URL) {
  console.error('Missing DATABASE_URL — check .env.local')
  process.exit(1)
}

const sql = neon(process.env.DATABASE_URL)

const escape = (v) => {
  if (v === null || v === undefined) return ''
  const s = v instanceof Date ? v.toISOString() : Array.isArray(v) ? v.join('; ') : String(v)
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

const outDir = resolve('exports')
mkdirSync(outDir, { recursive: true })

const stamp = new Date().toISOString().slice(0, 10)

for (const type of types) {
  const def = FORM_TYPES[type]
  if (!def) {
    console.log(`${type}: unknown type — skipping`)
    continue
  }

  const rows = await sql.query(`SELECT * FROM ${def.table} ORDER BY ${def.orderBy}`)

  if (!rows.length) {
    console.log(`${type}: 0 entries — skipping`)
    continue
  }

  const csv = [
    def.headers.join(','),
    ...rows.map((r) => def.headers.map((h) => escape(r[h])).join(',')),
  ].join('\n')

  const filename = `${type}-${stamp}.csv`
  writeFileSync(resolve(outDir, filename), csv)
  console.log(`${type}: ${rows.length} entries → exports/${filename}`)
}
