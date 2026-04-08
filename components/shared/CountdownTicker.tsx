'use client'

import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

const TARGET_DATE = new Date('2026-05-03T00:00:00')

function getTimeLeft() {
  const now = new Date()
  const diff = TARGET_DATE.getTime() - now.getTime()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds, done: false }
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="inline-flex min-w-[2.25rem] justify-center rounded-md bg-primary px-2 py-1 font-mono text-base font-bold tabular-nums text-white shadow-inner ring-1 ring-primary-dark md:text-lg">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary md:text-xs">
        {label}
      </span>
    </span>
  )
}

function TickerContent({ time, mounted }: { time: ReturnType<typeof getTimeLeft>; mounted: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-4 px-6">
      <Sparkles
        className="h-4 w-4 text-primary md:h-5 md:w-5"
        style={{ animation: 'sff-ticker-pulse 2s ease-in-out infinite' }}
      />
      <span className="text-xs font-bold uppercase tracking-wide text-primary md:text-sm">
        A free day out for the family
      </span>
      <span className="text-primary/50">•</span>
      <span className="text-xs font-bold uppercase tracking-wide text-white drop-shadow-sm md:text-sm">
        Sunday 3rd May 2026
      </span>
      <span className="text-primary/50">•</span>
      <span className="flex items-center gap-2 md:gap-3">
        <Unit value={time.days} label="Days" />
        <Unit value={time.hours} label="Hrs" />
        <Unit value={time.minutes} label="Min" />
        <Unit value={mounted ? time.seconds : 0} label="Sec" />
      </span>
      <span className="text-primary/50">•</span>
    </div>
  )
}

export default function CountdownTicker() {
  const [time, setTime] = useState(getTimeLeft)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (time.done) return null

  return (
    <div
      className="relative overflow-hidden border-y-2 border-primary/20"
      style={{
        backgroundImage:
          'linear-gradient(115deg, #FFC94D 0%, #FFB81C 30%, #E6A000 55%, #FFB81C 80%, #FFC94D 100%)',
        backgroundSize: '250% 250%',
        animation: 'sff-ticker-gradient 12s ease-in-out infinite',
      }}
      role="status"
      aria-live="polite"
      aria-label={`${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds until the Shaftesbury Food Festival — a free day out for the family on Sunday 3rd May 2026`}
    >
      {/* Shimmer sheen */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)',
          backgroundSize: '200% 100%',
          animation: 'sff-ticker-shine 6s linear infinite',
        }}
      />

      {/* Rotating marquee */}
      <div className="relative flex py-2">
        <div
          className="flex shrink-0 items-center whitespace-nowrap"
          style={{ animation: 'sff-ticker-marquee 35s linear infinite' }}
        >
          <TickerContent time={time} mounted={mounted} />
          <TickerContent time={time} mounted={mounted} />
          <TickerContent time={time} mounted={mounted} />
          <TickerContent time={time} mounted={mounted} />
        </div>
        <div
          className="flex shrink-0 items-center whitespace-nowrap"
          aria-hidden="true"
          style={{ animation: 'sff-ticker-marquee 35s linear infinite' }}
        >
          <TickerContent time={time} mounted={mounted} />
          <TickerContent time={time} mounted={mounted} />
          <TickerContent time={time} mounted={mounted} />
          <TickerContent time={time} mounted={mounted} />
        </div>
      </div>

      <style jsx>{`
        @keyframes sff-ticker-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes sff-ticker-shine {
          0% { background-position: -150% 0; }
          100% { background-position: 150% 0; }
        }
        @keyframes sff-ticker-pulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes sff-ticker-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[style*="sff-ticker"] { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
