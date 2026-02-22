import { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Users, Store, Award } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import CTAButton from '@/components/shared/CTAButton'

export const metadata: Metadata = {
  title: 'About | Shaftesbury Food Festival 3rd May 2026',
  description:
    'Shaftesbury Food Festival on 3rd May 2026 celebrates Dorset food and drink on the historic high street. 100+ trade stands, the Gold Hill Cheese Race, chef talks and live entertainment.',
}

const highlights = [
  { icon: Store, title: '100+ Trade Stands', description: 'Food vendors, beverage stalls, craft producers and more.' },
  { icon: Users, title: 'Community Run', description: 'Organised by volunteers from Shaftesbury Chamber of Commerce.' },
  { icon: Award, title: 'Town Council Supported', description: 'Proudly supported by Shaftesbury Town Council.' },
  { icon: MapPin, title: 'Historic Location', description: 'Set across the high street, Park Walk and surrounding areas.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About the Festival"
        subtitle="Celebrating local food producers and regional Dorset cuisine in historic Shaftesbury."
      />

      {/* Overview */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-text md:text-3xl">A Celebration of Food &amp; Community</h2>
              <p className="mt-4 text-text-light leading-relaxed">
                The Shaftesbury Food Festival is a day packed full of fun food and festivities, held on 3rd May 2026 — the bank holiday. Set in the stunning historic hilltop town of Shaftesbury, the festival brings together local food producers, regional Dorset cuisine, and a vibrant community celebration.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                Stretching across the high street, Park Walk and surrounding areas, the festival features over 100 trade stands and food outlets, the world-famous Gold Hill Cheese Race, chef talks organised by The Kitchen Table, live entertainment and much more.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                The festival is run entirely by volunteers from the Shaftesbury Chamber of Commerce and proudly supported by Shaftesbury Town Council. It celebrates the best of what this historic hilltop town has to offer — from vibrant shops, bars and restaurants to the unique character of one of England&apos;s most beautiful small towns.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/high-street-festival.jpg"
                alt="The festival on the high street in Shaftesbury"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Festival Highlights</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="mt-3 text-lg font-bold text-text">{item.title}</h3>
                <p className="mt-2 text-sm text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/food-stalls.jpg"
          alt="Food stalls at the Shaftesbury Food Festival"
          fill
          className="object-cover"
        />
      </section>

      {/* Message from Organisers */}
      <section className="section">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-text md:text-3xl">A Message from the Organisers</h2>
          <blockquote className="mt-6 rounded-xl border-l-4 border-accent bg-accent/5 p-6 text-left text-text-light italic leading-relaxed">
            &ldquo;We are thrilled to invite you to the Shaftesbury Food Festival 2026. This event is a true celebration of our local food producers, our incredible community, and our beautiful town. Whether you&apos;re here to race a cheese up Gold Hill, sample the finest Dorset produce, or simply enjoy a fantastic day out — we can&apos;t wait to welcome you.&rdquo;
          </blockquote>
          <p className="mt-4 font-semibold text-text">— Shaftesbury Chamber of Commerce</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Explore the Full Schedule</h2>
          <p className="mx-auto mt-3 max-w-xl text-blue-100">
            Check out our timetable of events, chef talks, races and entertainment.
          </p>
          <div className="mt-6">
            <CTAButton href="/events" variant="accent">View Events &amp; Timetable</CTAButton>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Shaftesbury Food Festival 2026',
            startDate: '2026-05-03T09:00:00+01:00',
            endDate: '2026-05-03T18:00:00+01:00',
            location: {
              '@type': 'Place',
              name: 'Shaftesbury High Street & Park Walk',
              address: { '@type': 'PostalAddress', addressLocality: 'Shaftesbury', addressRegion: 'Dorset', addressCountry: 'GB' },
            },
            organizer: { '@type': 'Organization', name: 'Shaftesbury Chamber of Commerce' },
          }),
        }}
      />
    </>
  )
}
