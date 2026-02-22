'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/cheese-race', label: 'Cheese Race' },
  { href: '/trade-stands', label: 'Trade Stands' },
  { href: '/events', label: 'Events' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/volunteers', label: 'Volunteers' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Site Name */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Shaftesbury Food Festival 2026"
            width={48}
            height={48}
            className="h-12 w-12"
            priority
          />
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-primary">Shaftesbury</span>
            <span className="block text-xs text-text-light leading-tight">Food Festival 2026</span>
          </div>
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
