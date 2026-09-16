export const SUBMISSION_TYPES = {
  'cheese-race': {
    label: 'Cheese Race Entries',
    table: 'cheese_race_entries',
    orderBy: 'entry_date desc',
    columns: [
      { field: 'first_name', header: 'First Name' },
      { field: 'surname', header: 'Surname' },
      { field: 'email', header: 'Email' },
      { field: 'age', header: 'Age' },
      { field: 'gender', header: 'Gender' },
      { field: 'entry_date', header: 'Entry Date' },
    ],
    filename: 'cheese-race-entries',
  },
  'trade-stands': {
    label: 'Trade Stand Enquiries',
    table: 'trade_stand_enquiries',
    orderBy: 'submitted_at desc',
    columns: [
      { field: 'business_name', header: 'Business Name' },
      { field: 'contact_name', header: 'Contact' },
      { field: 'email', header: 'Email' },
      { field: 'phone', header: 'Phone' },
      { field: 'nearest_town', header: 'Nearest Town' },
      { field: 'county', header: 'County' },
      { field: 'category', header: 'Category' },
      { field: 'pitches', header: 'Pitches' },
      { field: 'description', header: 'Description' },
      { field: 'special_requirements', header: 'Special Requirements' },
      { field: 'submitted_at', header: 'Submitted' },
    ],
    filename: 'trade-stand-enquiries',
  },
  volunteers: {
    label: 'Volunteer Enquiries',
    table: 'volunteer_enquiries',
    orderBy: 'submitted_at desc',
    columns: [
      { field: 'full_name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'phone', header: 'Phone' },
      { field: 'preferred_roles', header: 'Preferred Roles' },
      { field: 'availability', header: 'Availability' },
      { field: 'skills', header: 'Skills' },
      { field: 'previous_experience', header: 'Previous Experience' },
      { field: 'submitted_at', header: 'Submitted' },
    ],
    filename: 'volunteer-enquiries',
  },
  newsletter: {
    label: 'Newsletter Signups',
    table: 'newsletter_signups',
    orderBy: 'signup_date desc',
    columns: [
      { field: 'email', header: 'Email' },
      { field: 'signup_date', header: 'Signup Date' },
    ],
    filename: 'newsletter-signups',
  },
} as const

export type SubmissionType = keyof typeof SUBMISSION_TYPES

export function isSubmissionType(value: string): value is SubmissionType {
  return value in SUBMISSION_TYPES
}

export function escapeCsv(value: unknown): string {
  if (value == null) return ''
  const str = value instanceof Date
    ? value.toISOString()
    : Array.isArray(value) ? value.join('; ') : String(value)
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}
