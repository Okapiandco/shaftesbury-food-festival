import { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, TreePine, Beef, Wine, Wheat } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import CTAButton from '@/components/shared/CTAButton'

export const metadata: Metadata = {
  title: 'Food Trail | Shaftesbury Food Festival 3rd May 2026',
  description:
    'Follow the Shaftesbury Food Trail around local food producers including Dorset Blue Vinny, Gold Hill Organic Farm, Olives Et Al and Cann Mills. Farm walks, BBQs, tours and tastings.',
  alternates: { canonical: '/food-trail' },
}

interface TrailStop {
  name: string
  location?: string
  description: string
  activities: string[]
  logo?: string
  image?: string
  mapPosition: { top: string; left: string }
}

const trailStops: TrailStop[] = [
  {
    name: 'Dorset Blue Vinny',
    description:
      'Home of the famous Dorset Blue Vinny cheese — a traditional blue cheese unique to Dorset, made with hand-skimmed milk. Visit the dairy, meet the cheesemakers and sample this iconic local product.',
    activities: ['Cheese tastings', 'Dairy tours', 'Meet the cheesemakers'],
    logo: '',
    image: '',
    mapPosition: { top: '30%', left: '25%' },
  },
  {
    name: 'Gold Hill Organic Farm',
    location: 'Child Okeford',
    description:
      'Gold Hill Farm Kitchen is a small but perfectly formed café positioned on Gold Hill Organic Farm in Child Okeford. Everything is cooked from scratch — bread, pastries, smoothies, pickles, fermentations and cordials — with the aim of being the only process on your food\'s journey from field to plate. With the help of Wogan Coffee in Bristol, they also deliver an unrivalled cup of coffee. Do you know where your next meal is coming from? Come and find out on Saturday 3rd May.',
    activities: ['Farm walk with growers — 11am', 'Farm walk with growers — 2pm', 'Farm Kitchen café', 'Coffee by Wogan Coffee'],
    logo: '',
    image: '/Events/Gold hill organic farm.jpg',
    mapPosition: { top: '20%', left: '60%' },
  },
  {
    name: 'Olives Et Al',
    description:
      'Award-winning producers of antipasti, olives, pestos and tapenades. Based in Dorset, they source the finest Mediterranean ingredients and craft them into stunning products loved across the UK.',
    activities: ['Tasting sessions', 'Production tour', 'Meet the team'],
    logo: '',
    image: '',
    mapPosition: { top: '55%', left: '45%' },
  },
  {
    name: 'Cann Mills',
    description:
      'A beautifully restored historic watermill producing stoneground flour using traditional methods. Discover the art of milling and take home freshly milled flour and baked goods.',
    activities: ['Mill tours', 'Flour milling demos', 'Bread baking workshop'],
    logo: '',
    image: '',
    mapPosition: { top: '70%', left: '30%' },
  },
]

export default function FoodTrailPage() {
  return (
    <>
      <PageHeader
        title="The Shaftesbury Food Trail"
        subtitle="Explore the local food producers around Shaftesbury — farm walks, tastings, BBQs and behind-the-scenes tours."
      />

      {/* Introduction */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent-dark">
              <TreePine size={28} />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-text md:text-3xl">
              Discover Dorset&apos;s Finest Food Producers
            </h2>
            <p className="mt-4 text-text-light leading-relaxed">
              The Shaftesbury Food Trail takes you on a journey around the local area to meet the people behind the food.
              From award-winning cheeses to organic farms, artisan olives to historic flour mills — discover
              the incredible produce on our doorstep. Each stop on the trail offers something special: tastings,
              tours, farm walks and more.
            </p>
            <p className="mt-4 text-text-light leading-relaxed">
              Pick up a trail map at the festival or follow the route below. Visit all the stops to complete the trail!
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Trail Map</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Follow the trail around Shaftesbury&apos;s local food producers. Click a stop for more details.
          </p>
          <div className="mt-8 mx-auto max-w-4xl">
            <div className="relative aspect-[16/10] rounded-xl border-2 border-gray-200 bg-white overflow-hidden shadow-sm">
              {/* Map placeholder - replace with actual embedded map */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <MapPin size={48} className="mx-auto text-primary" />
                    <p className="mt-4 text-lg font-semibold text-text">Interactive Trail Map</p>
                    <p className="mt-2 text-sm text-text-light">
                      Map coming soon — explore the stops below for details on each location.
                    </p>
                  </div>
                </div>
                {/* Trail stop markers */}
                {trailStops.map((stop, index) => (
                  <a
                    key={stop.name}
                    href={`#${stop.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold shadow-lg hover:bg-accent hover:text-primary transition-colors"
                    style={{ top: stop.mapPosition.top, left: stop.mapPosition.left }}
                    title={stop.name}
                  >
                    {index + 1}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trail Stops */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Trail Stops</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Each producer is offering special activities and experiences during the festival.
          </p>

          <div className="mt-12 space-y-16">
            {trailStops.map((stop, index) => (
              <div
                key={stop.name}
                id={stop.name.toLowerCase().replace(/\s+/g, '-')}
                className="scroll-mt-32"
              >
                <div className={`grid gap-8 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  {/* Content side */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-text">{stop.name}</h3>
                        {stop.location && (
                          <p className="flex items-center gap-1 text-sm text-text-muted mt-0.5">
                            <MapPin size={12} />
                            {stop.location}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Logo placeholder */}
                    {stop.logo !== undefined && (
                      <div className="mt-4 h-16 w-48 rounded-lg bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                        <span className="text-xs text-text-muted">Logo — {stop.name}</span>
                      </div>
                    )}

                    <p className="mt-4 text-text-light leading-relaxed">{stop.description}</p>

                    <div className="mt-4">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary">What&apos;s On</h4>
                      <ul className="mt-2 space-y-1">
                        {stop.activities.map((activity) => (
                          <li key={activity} className="flex items-center gap-2 text-sm text-text-light">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image side */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                      {stop.image ? (
                        <Image
                          src={stop.image}
                          alt={stop.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 border-2 border-dashed border-gray-300 flex items-center justify-center">
                          <div className="text-center p-4">
                            {index === 0 && <Wheat size={48} className="mx-auto text-gray-300" />}
                            {index === 1 && <Beef size={48} className="mx-auto text-gray-300" />}
                            {index === 2 && <Wine size={48} className="mx-auto text-gray-300" />}
                            {index === 3 && <Wheat size={48} className="mx-auto text-gray-300" />}
                            <p className="mt-2 text-sm text-text-muted">Image — {stop.name}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Follow the Trail */}
      <section className="section bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-text md:text-3xl">How to Follow the Trail</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3 mx-auto max-w-3xl">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                1
              </div>
              <h3 className="mt-3 font-bold text-text">Pick Up a Map</h3>
              <p className="mt-1 text-sm text-text-light">
                Grab your trail map at the festival information point on the High Street.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                2
              </div>
              <h3 className="mt-3 font-bold text-text">Visit the Producers</h3>
              <p className="mt-1 text-sm text-text-light">
                Follow the trail to each location. Enjoy tours, tastings, farm walks and more.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                3
              </div>
              <h3 className="mt-3 font-bold text-text">Complete the Trail</h3>
              <p className="mt-1 text-sm text-text-light">
                Get your map stamped at each stop and return it for a special reward!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-text md:text-3xl">Want to Join the Food Trail?</h2>
          <p className="mx-auto mt-3 max-w-xl text-text-light">
            Are you a local food producer interested in being part of the Shaftesbury Food Trail? Get in touch with us.
          </p>
          <div className="mt-6">
            <CTAButton href="/contact" variant="primary">Get in Touch</CTAButton>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TouristTrip',
            name: 'Shaftesbury Food Trail',
            description: 'A trail around local food producers near Shaftesbury, featuring farm walks, tastings, BBQs and tours.',
            touristType: 'Food lovers',
            subjectOf: {
              '@type': 'Event',
              name: 'Shaftesbury Food Festival 2026',
              startDate: '2026-05-03',
            },
          }),
        }}
      />
    </>
  )
}
