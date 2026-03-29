import { Metadata } from 'next'
import Image from 'next/image'
import { CalendarDays, MapPin, Palette } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import CTAButton from '@/components/shared/CTAButton'

export const metadata: Metadata = {
  title: 'Feast for the Eyes | Art Exhibition | Shaftesbury Food Festival 2026',
  description:
    'A Feast for the Eyes — an exhibition of art with food at its heart at Shaftesbury Arts Centre, 29th April to 5th May 2026. Featuring works by Maja Barker, Alison Turner, Joanne Rutter, Kate Toms, Becca Perl, Lucy Bentley and Charlotte Lorimer.',
  alternates: { canonical: '/feast-for-the-eyes' },
}

const artists = [
  'Maja Barker',
  'Alison Turner',
  'Joanne Rutter',
  'Kate Toms',
  'Becca Perl',
  'Lucy Bentley',
  'Charlotte Lorimer',
]

export default function FeastForTheEyesPage() {
  return (
    <>
      <PageHeader
        title="A Feast for the Eyes"
        subtitle="An exhibition of art with food at its heart"
      />

      {/* Poster & details */}
      <section className="section">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            {/* Poster image */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/Events/WhatsApp Image 2026-03-20 at 15.01.08.jpeg"
                alt="A Feast for the Eyes exhibition poster — art with food at its heart"
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <h2 className="text-2xl font-bold text-text md:text-3xl">About the Exhibition</h2>
              <p className="mt-4 text-text-light leading-relaxed">
                A Feast for the Eyes brings together seven talented artists for a vibrant exhibition celebrating the connection between art and food. Running throughout the festival week at Shaftesbury Arts Centre, this is a chance to enjoy stunning food-inspired artwork from some of the area&apos;s finest creative talent.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <CalendarDays className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-text">Dates</p>
                    <p className="text-sm text-text-light">29th April &ndash; 5th May 2026</p>
                    <p className="text-sm text-text-light">10am–4pm daily</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-text">Venue</p>
                    <p className="text-sm text-text-light">Shaftesbury Arts Centre</p>
                  </div>
                </div>
              </div>

              {/* Artists */}
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="w-5 h-5 text-secondary" />
                  <h3 className="text-lg font-bold text-text">Featuring Works By</h3>
                </div>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {artists.map((artist) => (
                    <li key={artist} className="text-sm text-text-light">{artist}</li>
                  ))}
                </ul>
              </div>

              {/* Sponsor */}
              <div className="mt-8 rounded-xl bg-gray-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Sponsored by</p>
                <p className="mt-1 text-sm font-bold text-text">The Kitchen Table</p>
              </div>

              <div className="mt-8">
                <CTAButton href="/contact" variant="secondary">
                  Get in Touch
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
