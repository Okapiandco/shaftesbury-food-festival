'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Auto-applies scroll-triggered fade-in to every <section> inside <main>.
 * Opt out by adding `data-no-reveal` to a section, or by giving it any
 * existing `animate-*` class (those handle their own motion).
 */
export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (pathname === '/food-trail') return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const main = document.querySelector('main')
    if (!main) return

    const sections = Array.from(main.querySelectorAll('section'))
    const targets = sections.filter((el) => {
      if (el.hasAttribute('data-no-reveal')) return false
      return !Array.from(el.classList).some((cls) => cls.startsWith('animate-'))
    })

    if (prefersReduced) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    targets.forEach((el) => el.classList.add('reveal'))

    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    targets.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-visible')
      } else {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
