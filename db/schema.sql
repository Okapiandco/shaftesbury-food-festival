-- Form submission storage, moved off the public Sanity dataset (Sept 2026)
-- because Sanity's Free plan only supports public datasets and these
-- documents contain personal data (incl. children's ages for the cheese race).

CREATE TABLE IF NOT EXISTS cheese_race_entries (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  surname TEXT NOT NULL,
  email TEXT NOT NULL,
  age INTEGER NOT NULL,
  gender TEXT NOT NULL,
  acknowledgement BOOLEAN NOT NULL,
  entry_date TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS trade_stand_enquiries (
  id SERIAL PRIMARY KEY,
  business_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL DEFAULT '',
  county TEXT NOT NULL DEFAULT '',
  nearest_town TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL,
  pitches TEXT NOT NULL,
  description TEXT NOT NULL,
  special_requirements TEXT NOT NULL DEFAULT '',
  submitted_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Migration: added Sept 2026, kept as an idempotent ALTER so re-running
-- this file against an existing database (via scripts/db-migrate.mjs)
-- brings it up to date without dropping data.
ALTER TABLE trade_stand_enquiries ADD COLUMN IF NOT EXISTS county TEXT NOT NULL DEFAULT '';
ALTER TABLE trade_stand_enquiries ADD COLUMN IF NOT EXISTS nearest_town TEXT NOT NULL DEFAULT '';

CREATE TABLE IF NOT EXISTS volunteer_enquiries (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_roles TEXT[] NOT NULL,
  availability TEXT NOT NULL DEFAULT '',
  skills TEXT NOT NULL DEFAULT '',
  previous_experience TEXT NOT NULL DEFAULT '',
  submitted_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS newsletter_signups (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  signup_date TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
