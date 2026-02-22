import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import PlaceholderImage from '@/components/shared/PlaceholderImage'

interface VendorCardProps {
  name: string
  category: string
  description?: string
  website?: string
  image?: string
}

const categoryLabels: Record<string, string> = {
  'food-vendor': 'Food Vendor',
  beverage: 'Beverage',
  craft: 'Craft',
  other: 'Other',
}

export default function VendorCard({ name, category, description, website, image }: VendorCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      {image ? (
        <div className="relative h-48">
          <Image src={image} alt={`${name} stall`} fill className="object-cover" />
        </div>
      ) : (
        <PlaceholderImage label={`${name} stall`} aspectRatio="square" className="h-48" />
      )}
      <div className="p-5">
        <span className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-dark">
          {categoryLabels[category] || category}
        </span>
        <h3 className="text-lg font-bold text-text">{name}</h3>
        {description && <p className="mt-2 text-sm text-text-light line-clamp-2">{description}</p>}
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
      </div>
    </article>
  )
}
