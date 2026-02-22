import { Clock, MapPin } from 'lucide-react'
import PlaceholderImage from '@/components/shared/PlaceholderImage'

interface EventCardProps {
  title: string
  time: string
  location?: string
  description?: string
  speaker?: string
  eventType?: string
}

export default function EventCard({ title, time, location, description, speaker, eventType }: EventCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <PlaceholderImage label="Event image" />
      <div className="p-5">
        {eventType && (
          <span className="mb-2 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
            {eventType}
          </span>
        )}
        <h3 className="text-lg font-bold text-text">{title}</h3>
        <div className="mt-2 flex flex-wrap gap-3 text-sm text-text-light">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {time}
          </span>
          {location && (
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {location}
            </span>
          )}
        </div>
        {speaker && <p className="mt-2 text-sm font-medium text-primary">with {speaker}</p>}
        {description && <p className="mt-2 text-sm text-text-light line-clamp-3">{description}</p>}
      </div>
    </article>
  )
}
