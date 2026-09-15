'use client'

import { useRouter } from 'next/navigation'

export default function AdminLogoutButton() {
  const router = useRouter()

  async function onLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <button
      onClick={onLogout}
      className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-text-light hover:bg-gray-50 transition-colors"
    >
      Log Out
    </button>
  )
}
