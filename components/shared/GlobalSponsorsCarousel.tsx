'use client'

import { usePathname } from 'next/navigation'
import SponsorsCarousel from './SponsorsCarousel'

export default function GlobalSponsorsCarousel() {
  const pathname = usePathname()
  if (pathname === '/') return null
  return <SponsorsCarousel />
}
