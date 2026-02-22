import { cn } from '@/lib/utils'

interface PlaceholderImageProps {
  label?: string
  className?: string
  aspectRatio?: 'video' | 'square' | 'portrait'
}

const ratios = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
}

export default function PlaceholderImage({
  label = 'Image to be added',
  className,
  aspectRatio = 'video',
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-lg bg-gray-200 text-sm text-text-muted',
        ratios[aspectRatio],
        className
      )}
      role="img"
      aria-label={label}
    >
      {label}
    </div>
  )
}
