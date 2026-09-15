import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SUBMISSION_TYPES, SubmissionType, isSubmissionType } from '@/lib/submissionTypes'
import AdminLogoutButton from './AdminLogoutButton'

export const dynamic = 'force-dynamic'

function formatValue(value: unknown): string {
  if (value == null) return ''
  if (value instanceof Date) return value.toLocaleString('en-GB')
  if (Array.isArray(value)) return value.join(', ')
  if (typeof value === 'boolean') return value ? 'Yes' : 'No'
  return String(value)
}

async function getRows(type: SubmissionType) {
  const { sql } = await import('@/lib/db')
  const config = SUBMISSION_TYPES[type]
  return sql.query(`SELECT * FROM ${config.table} ORDER BY ${config.orderBy}`) as Promise<Record<string, unknown>[]>
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>
}) {
  const params = await searchParams
  const activeTab: SubmissionType = isSubmissionType(params.tab || '') ? (params.tab as SubmissionType) : 'cheese-race'

  const rows = process.env.DATABASE_URL ? await getRows(activeTab) : []
  const config = SUBMISSION_TYPES[activeTab]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-text">Festival Submissions</h1>
          <AdminLogoutButton />
        </div>

        <nav className="mt-6 flex flex-wrap gap-2 border-b border-gray-200 pb-2">
          {(Object.keys(SUBMISSION_TYPES) as SubmissionType[]).map((key) => (
            <Link
              key={key}
              href={`/admin?tab=${key}`}
              className={cn(
                'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                key === activeTab
                  ? 'bg-primary text-white'
                  : 'text-text-light hover:bg-gray-100'
              )}
            >
              {SUBMISSION_TYPES[key].label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-text-light">{rows.length} {rows.length === 1 ? 'entry' : 'entries'}</p>
          <a
            href={`/api/admin/export?type=${activeTab}`}
            className="rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-white hover:bg-secondary/90 transition-colors"
          >
            Download CSV
          </a>
        </div>

        <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                {config.columns.map((c) => (
                  <th key={c.field} className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text">
                    {c.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  {config.columns.map((c) => (
                    <td key={c.field} className="max-w-xs px-4 py-3 align-top text-text-light">
                      {formatValue(row[c.field])}
                    </td>
                  ))}
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={config.columns.length} className="px-4 py-8 text-center text-text-light">
                    No entries yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
