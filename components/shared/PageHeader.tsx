import Image from 'next/image'
import { cn } from '@/lib/utils'

export type HeaderColor = 'primary' | 'tomato' | 'leaf' | 'plum' | 'accent'

interface PageHeaderProps {
  title: string
  subtitle?: string
  /** Short line above the title, e.g. the date */
  eyebrow?: string
  /** Section colour. Defaults to the brand navy. */
  color?: HeaderColor
  /** Photo shown beside the text (never behind it) */
  image?: string
  imageAlt?: string
}

const palette: Record<HeaderColor, { panel: string; eyebrow: string; subtitle: string }> = {
  primary: { panel: 'bg-primary text-white', eyebrow: 'text-accent', subtitle: 'text-white/90' },
  tomato: { panel: 'bg-tomato text-white', eyebrow: 'text-accent-light', subtitle: 'text-white/95' },
  leaf: { panel: 'bg-leaf text-white', eyebrow: 'text-accent-light', subtitle: 'text-white/95' },
  plum: { panel: 'bg-plum text-white', eyebrow: 'text-accent-light', subtitle: 'text-white/95' },
  accent: { panel: 'bg-accent text-primary', eyebrow: 'text-primary', subtitle: 'text-primary/90' },
}

export default function PageHeader({
  title,
  subtitle,
  eyebrow,
  color = 'primary',
  image,
  imageAlt,
}: PageHeaderProps) {
  const c = palette[color]

  const text = (
    <div className={cn(image ? 'text-center md:text-left' : 'text-center')}>
      {eyebrow && (
        <p className={cn('text-sm font-bold uppercase tracking-widest', c.eyebrow)}>{eyebrow}</p>
      )}
      <h1 className={cn('font-bold text-3xl md:text-5xl', eyebrow && 'mt-3')}>{title}</h1>
      {subtitle && (
        <p className={cn('mt-4 text-lg leading-relaxed', c.subtitle, !image && 'mx-auto max-w-2xl')}>
          {subtitle}
        </p>
      )}
    </div>
  )

  if (image) {
    return (
      <section className={cn('py-12 md:py-16', c.panel)}>
        <div className="container mx-auto grid items-center gap-8 px-4 animate-fade-in-up md:grid-cols-2">
          {text}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-4 ring-white/30">
            <Image
              src={image}
              alt={imageAlt || ''}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={cn('py-14 md:py-16', c.panel)}>
      <div className="container mx-auto px-4 animate-fade-in-up">{text}</div>
    </section>
  )
}
