import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent'
  className?: string
  external?: boolean
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark',
  accent: 'bg-accent text-primary font-bold hover:bg-accent-dark',
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className,
  external,
}: CTAButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors min-h-[44px]',
    variants[variant],
    className
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={baseClasses}>
      {children}
    </Link>
  )
}
