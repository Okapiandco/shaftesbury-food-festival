#!/usr/bin/env node
/**
 * Apply db/schema.sql to the configured Postgres database.
 *
 * Usage: node scripts/db-migrate.mjs
 * Requires DATABASE_URL in .env.local
 */
import { neon } from '@neondatabase/serverless'
import { readFileSync } from 'node:fs'
import { config } from 'dotenv'

config({ path: '.env.local' })

if (!process.env.DATABASE_URL) {
  console.error('Missing DATABASE_URL — check .env.local')
  process.exit(1)
}

const sql = neon(process.env.DATABASE_URL)
const schema = readFileSync(new URL('../db/schema.sql', import.meta.url), 'utf8')

const statements = schema
  .split(/;\s*(?:\n|$)/)
  .map((s) => s.trim())
  .filter(Boolean)

for (const statement of statements) {
  await sql.query(statement)
  console.log('Applied:', statement.split('\n')[0].slice(0, 60) + '...')
}

console.log('Schema applied successfully.')
