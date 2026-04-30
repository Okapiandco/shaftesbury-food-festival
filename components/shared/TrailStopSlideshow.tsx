'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TrailStopSlideshowProps {
  images: string[]
  alt: string
  intervalMs?: number
}

export default function TrailStopSlideshow({ images, alt, intervalMs = 4500 }: TrailStopSlideshowProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [images.length, intervalMs])

  if (images.length === 0) return null

  const go = (delta: number) => setIndex((i) => (i + delta + images.length) % images.length)

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 group">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} — image ${i + 1}`}
          fill
          className={`object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-text shadow-sm opacity-0 group-hover:opacity-100 hover:bg-white transition-opacity"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-text shadow-sm opacity-0 group-hover:opacity-100 hover:bg-white transition-opacity"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
