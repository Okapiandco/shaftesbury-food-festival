'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/volunteers', label: 'Volunteers' },
  { href: '/cheese-race', label: 'Cheese Race' },
  { href: '/food-trail', label: 'Food Trail' },
  { href: '/ingredients-hunt', label: 'Ingredients Hunt' },
  { href: '/trade-stands', label: 'Trade Stands' },
  { href: '/events', label: 'Events' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm transition-all duration-300">
      <div className={`container mx-auto flex items-center justify-between px-4 transition-all duration-300 ${scrolled ? 'py-1' : 'py-3'}`}>
        {/* Logo / Site Name */}
        <Link href="/">
          <Image
            src="/Shaftesbury food festival Logo.svg"
            alt="Shaftesbury Food Festival 2026"
            width={192}
            height={192}
            className={`transition-all duration-300 ${scrolled ? 'h-16 w-16' : 'h-48 w-48'}`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-text hover:bg-gray-100 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/cheese-race"
          className="hidden lg:inline-flex rounded-md bg-accent px-4 py-2 text-sm font-bold text-primary hover:bg-accent-dark transition-colors"
        >
          Enter Cheese Race
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden rounded-md p-2 text-text hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t bg-white px-4 pb-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-3 text-sm font-medium text-text hover:bg-gray-100 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cheese-race"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-md bg-accent px-4 py-3 text-center text-sm font-bold text-primary"
          >
            Enter Cheese Race
          </Link>
        </nav>
      )}
    </header>
  )
}
