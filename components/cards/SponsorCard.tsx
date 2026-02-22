import { ExternalLink } from 'lucide-react'
import PlaceholderImage from '@/components/shared/PlaceholderImage'

interface SponsorCardProps {
  name: string
  tier: string
  description?: string
  website?: string
}

const tierColors: Record<string, string> = {
  gold: 'bg-yellow-100 text-yellow-800',
  silver: 'bg-gray-100 text-gray-700',
  bronze: 'bg-orange-100 text-orange-800',
  'in-kind': 'bg-blue-100 text-blue-700',
}

export default function SponsorCard({ name, tier, description, website }: SponsorCardProps) {
  return (
    <article className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow">
      <PlaceholderImage label={`${name} logo`} aspectRatio="square" className="mb-4 h-24 w-24" />
      <span className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold capitalize ${tierColors[tier] || 'bg-gray-100 text-gray-700'}`}>
        {tier}
      </span>
      <h3 className="text-lg font-bold text-text">{name}</h3>
      {description && <p className="mt-2 text-sm text-text-light">{description}</p>}
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Visit website <ExternalLink size={14} />
        </a>
      )}
    </article>
  )
}
