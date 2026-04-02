'use client'

import { useRef, useState, useEffect, ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface VendorCarouselProps {
  children: ReactNode
}

export default function VendorCarousel({ children }: VendorCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  function updateScrollState() {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  function scroll(direction: 'left' | 'right') {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector<HTMLElement>(':scope > *')?.offsetWidth ?? 300
    const gap = 24
    const distance = (cardWidth + gap) * 2
    el.scrollBy({ left: direction === 'left' ? -distance : distance, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`[data-vendor-carousel]::-webkit-scrollbar { display: none; }`}</style>
        {/* Wrap each child in a snap-aligned container */}
        {Array.isArray(children) ? children.map((child, i) => (
          <div key={i} className="w-64 shrink-0 snap-start">
            {child}
          </div>
        )) : (
          <div className="w-64 shrink-0 snap-start">{children}</div>
        )}
      </div>

      {/* Navigation arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-text hover:bg-gray-50 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-text hover:bg-gray-50 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  )
}
