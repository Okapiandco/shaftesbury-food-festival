'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, HelpCircle, Footprints, UtensilsCrossed, Trophy, Palette, Search, CalendarDays, ChefHat, Facebook, Instagram } from 'lucide-react'

const sideEvents = [
  {
    href: '/feast-for-the-eyes',
    label: 'A Feast for the Eyes',
    description: '29th Apr – 5th May — Art exhibition',
    icon: Palette,
    color: 'text-secondary',
  },
  {
    href: '/events#quiz',
    label: 'The Great Food Quiz',
    description: 'Friday 1st May — Quiz night at Sorelle',
    icon: HelpCircle,
    color: 'text-primary',
  },
  {
    href: '/food-trail',
    label: 'Food Trail',
    description: 'Saturday 2nd May — Explore local producers',
    icon: Footprints,
    color: 'text-secondary',
  },
  {
    href: '/cheese-race',
    label: 'Cheese Race',
    description: 'Sunday 3rd May — The famous Gold Hill race',
    icon: Trophy,
    color: 'text-primary',
  },
  {
    href: '/food-demos',
    label: 'Food Demos',
    description: 'Sunday 3rd May — MasterChef chefs live at The Guild Hall',
    icon: ChefHat,
    color: 'text-accent-dark',
  },
  {
    href: '/ingredients-hunt',
    label: 'Ingredients Hunt',
    description: 'Sunday 3rd May — Family scavenger hunt',
    icon: Search,
    color: 'text-accent-dark',
  },
]

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/trade-stands', label: 'Street Market' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/volunteers', label: 'Volunteers' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false)
  const megaButtonRef = useRef<HTMLDivElement>(null)
  const megaPanelRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        headerRef.current?.setAttribute('data-scrolled', 'true')
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node
      const clickedButton = megaButtonRef.current?.contains(target)
      const clickedPanel = megaPanelRef.current?.contains(target)
      if (!clickedButton && !clickedPanel) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header ref={headerRef} data-scrolled="false" className="sticky top-0 z-50 bg-white shadow-sm group/header">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 group-data-[scrolled=true]/header:py-1 transition-[padding] duration-300 ease-in-out">
        {/* Logo */}
        <Link href="/" className="shrink-0 block">
          <div className="h-48 w-48 group-data-[scrolled=true]/header:h-16 group-data-[scrolled=true]/header:w-16 transition-[height,width] duration-300 ease-in-out">
            <Image
              src="/Shaftesbury food festival Logo.svg"
              alt="Shaftesbury Food Festival 2026"
              width={192}
              height={192}
              className="h-full w-full"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {/* What's On mega menu trigger */}
          <div ref={megaButtonRef} className="static">
            <button
              onClick={() => setMegaOpen(!megaOpen)}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-text hover:bg-gray-100 hover:text-primary transition-colors"
              aria-expanded={megaOpen}
              aria-haspopup="true"
            >
              What&apos;s On
              <ChevronDown className={`w-4 h-4 transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

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

        {/* Desktop social icons + CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <a href="https://www.facebook.com/ShaftesburyFoodFestival" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-md p-2 text-text hover:bg-gray-100 hover:text-primary transition-colors">
            <Facebook size={18} />
          </a>
          <a href="https://www.instagram.com/shaftesburyfoodfestival" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-md p-2 text-text hover:bg-gray-100 hover:text-primary transition-colors">
            <Instagram size={18} />
          </a>
          <Link
            href="/cheese-race"
            className="ml-1 rounded-md bg-accent px-4 py-2 text-sm font-bold text-primary hover:bg-accent-dark transition-colors"
          >
            Enter Cheese Race
          </Link>
        </div>

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

      {/* Full-width mega menu panel */}
      {megaOpen && (
        <div ref={megaPanelRef} className="hidden lg:block border-t border-gray-100 bg-white shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-12 gap-6">
              {/* Main event — Food Festival (featured) */}
              <Link
                href="/about"
                onClick={() => setMegaOpen(false)}
                className="col-span-4 group rounded-2xl bg-primary p-6 text-white hover:bg-primary-dark transition-colors"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">The Main Event</p>
                <UtensilsCrossed className="mt-3 w-10 h-10 text-accent" />
                <h3 className="mt-3 text-xl font-bold">Shaftesbury Food Festival</h3>
                <p className="mt-2 text-sm text-blue-200">
                  Sunday 3rd May 2026 — Bank Holiday
                </p>
                <p className="mt-3 text-sm text-blue-100 leading-relaxed">
                  The high street comes alive with 100+ food &amp; drink stalls, the Gold Hill Cheese Race, chef demos, live music and family fun.
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent group-hover:underline">
                  Find out more &rarr;
                </span>
              </Link>

              {/* Side events grid */}
              <div className="col-span-8 grid grid-cols-3 gap-3">
                {sideEvents.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMegaOpen(false)}
                    className="flex items-start gap-3 rounded-xl p-3 hover:bg-gray-50 transition-colors group"
                  >
                    <item.icon className={`w-6 h-6 shrink-0 mt-0.5 ${item.color}`} />
                    <div>
                      <p className="text-sm font-semibold text-text group-hover:text-primary transition-colors">{item.label}</p>
                      <p className="text-xs text-text-light mt-0.5">{item.description}</p>
                    </div>
                  </Link>
                ))}
                {/* View all events link */}
                <Link
                  href="/events"
                  onClick={() => setMegaOpen(false)}
                  className="flex items-center gap-2 rounded-xl p-3 hover:bg-gray-50 transition-colors"
                >
                  <CalendarDays className="w-6 h-6 shrink-0 text-text-muted" />
                  <p className="text-sm font-medium text-primary hover:text-primary-dark">View all events &rarr;</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t bg-white px-4 pb-4" aria-label="Mobile navigation">
          {/* What's On accordion */}
          <button
            onClick={() => setMobileMegaOpen(!mobileMegaOpen)}
            className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-text hover:bg-gray-100 hover:text-primary"
          >
            What&apos;s On
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileMegaOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileMegaOpen && (
            <div className="ml-4 mb-2 space-y-1">
              <Link
                href="/about"
                onClick={() => { setMobileOpen(false); setMobileMegaOpen(false) }}
                className="flex items-center gap-3 rounded-md bg-primary/5 px-3 py-2"
              >
                <UtensilsCrossed className="w-5 h-5 shrink-0 text-accent-dark" />
                <div>
                  <p className="text-sm font-bold text-text">Shaftesbury Food Festival</p>
                  <p className="text-xs text-text-light">Sunday 3rd May — The main event</p>
                </div>
              </Link>
              {sideEvents.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => { setMobileOpen(false); setMobileMegaOpen(false) }}
                  className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-50"
                >
                  <item.icon className={`w-5 h-5 shrink-0 ${item.color}`} />
                  <div>
                    <p className="text-sm font-medium text-text">{item.label}</p>
                    <p className="text-xs text-text-light">{item.description}</p>
                  </div>
                </Link>
              ))}
              <Link
                href="/events"
                onClick={() => { setMobileOpen(false); setMobileMegaOpen(false) }}
                className="block px-3 py-2 text-sm font-medium text-primary"
              >
                View all events &rarr;
              </Link>
            </div>
          )}

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
          <div className="mt-4 flex gap-3 px-3">
            <a href="https://www.facebook.com/ShaftesburyFoodFestival" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-gray-100 p-2 text-text hover:bg-gray-200 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/shaftesburyfoodfestival" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-gray-100 p-2 text-text hover:bg-gray-200 transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
