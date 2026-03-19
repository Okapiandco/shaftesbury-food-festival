import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, TreePine, Beef, IceCream, Salad, Leaf, ExternalLink, Navigation } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import CTAButton from '@/components/shared/CTAButton'

export const metadata: Metadata = {
  title: 'Food Trail | Shaftesbury Food Festival 2nd May 2026',
  description:
    'Follow the Shaftesbury Food Trail on Saturday 2nd May around local food producers including Gold Hill Organic Farm, Sorelle Dorset, Madjeston Animal Park and Primrose Organic Produce.',
  alternates: { canonical: '/food-trail' },
}

interface TrailStop {
  name: string
  location?: string
  address: string
  description: string
  activities: string[]
  image?: string
  website?: string
  mapPosition: { top: string; left: string }
}

const trailStops: TrailStop[] = [
  {
    name: 'Gold Hill Organic Farm',
    location: 'Child Okeford',
    address: 'Ridgeway Lane, Child Okeford, Blandford, Dorset DT11 8HB',
    description:
      'Gold Hill Farm Kitchen is a small but perfectly formed café positioned on Gold Hill Organic Farm in Child Okeford. Everything is cooked from scratch — bread, pastries, smoothies, pickles, fermentations and cordials — with the aim of being the only process on your food\'s journey from field to plate. With the help of Wogan Coffee in Bristol, they also deliver an unrivalled cup of coffee. Do you know where your next meal is coming from? Come and find out on Saturday 2nd May.',
    activities: ['Farm walk with growers — 11am', 'Farm walk with growers — 2pm', 'Farm Kitchen café', 'Coffee by Wogan Coffee'],
    image: '/Events/Gold hill organic farm.jpg',
    mapPosition: { top: '20%', left: '60%' },
  },
  {
    name: 'Sorelle Dorset',
    location: 'Motcombe, Shaftesbury',
    address: 'Brook Farm, Bittles Green, Motcombe, Shaftesbury SP7 9NX',
    description:
      'Sorelle Dorset brings the flavours of Italy to the heart of Dorset. Discover their range of handcrafted Italian-inspired products, meet the team and enjoy tastings at this wonderful local food business.',
    activities: ['Tastings', 'Meet the team'],
    website: 'https://www.sorelledorset.com/',
    mapPosition: { top: '35%', left: '40%' },
  },
  {
    name: 'Madjeston Animal Park',
    location: 'Gillingham, Dorset',
    address: 'Newhouse Farm, Cole Street Lane, Gillingham, Dorset SP8 5JQ',
    description:
      'Madjeston Animal Park is a family-run farm set in the heart of the Dorset countryside. They proudly produce fresh Ayrshire cow\'s milk and delicious homemade ice cream right on site, available anytime from their 24/7 self-service Milk Station alongside a range of locally sourced produce. As well as being a working farm, Madjeston has grown into a welcoming destination for families, with an animal park, café and play area. From a scoop of their ice cream to locally made treats and pulled pork from their own home-reared pigs, they\'re passionate about creating a true farm-to-table experience.',
    activities: ['Fresh milk & homemade ice cream', 'Meet the animals', 'Café & farm produce', 'Family-friendly activities'],
    image: '/images/Food Trail/Madjeston Milk Station/IMG_4106.jpeg',
    mapPosition: { top: '55%', left: '45%' },
  },
  {
    name: 'Primrose Organic Produce',
    location: 'Lymburghs Farm, Marnhull',
    address: 'Lymburghs Farm, Marnhull, Sturminster Newton, Dorset',
    description:
      'Primrose Organic Produce is a family-run organic farm, shop and café at Lymburghs Farm near Marnhull. For 60 years, three generations of the Primrose family have farmed here. Around 20 years ago, Jim and Gilla returned to convert the farm to organic, beginning with 100% pasture-fed Red Devon cattle. Sheep for mutton followed, and in recent years they\'ve introduced free-range eggs alongside a thriving market garden. Their farm is alive with restored hedgerows, ponds, wildflower meadows and winter flood meadows, all maintained using regenerative, ecological farming techniques. The shop and café offer organic artisan coffee, specialty drinks, homemade cakes and a simple, seasonal lunch menu.',
    activities: ['Farm shop & café', 'Organic produce', 'Seasonal fruit & vegetables', '100% pasture-fed beef'],
    image: '/images/Food Trail/Primrose Organic/Primrose Organic Shop Front.jpeg',
    mapPosition: { top: '70%', left: '30%' },
  },
]

const GOOGLE_MAPS_TRAIL_URL =
  'https://www.google.com/maps/dir/Gold+Hill+Organic+Farm,+Ridgeway+Lane,+Child+Okeford,+DT11+8HB/Brook+Farm,+Bittles+Green,+Motcombe,+SP7+9NX/Newhouse+Farm,+Cole+Street+Lane,+Gillingham,+SP8+5JQ/Lymburghs+Farm,+Marnhull,+Dorset'

function getDirectionsUrl(address: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
}

export default function FoodTrailPage() {
  return (
    <>
      <PageHeader
        title="The Shaftesbury Food Trail"
        subtitle="Saturday 2nd May 2026 — Explore the local food producers around Shaftesbury with farm walks, tastings and behind-the-scenes tours."
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
              On <strong>Saturday 2nd May</strong>, the Shaftesbury Food Trail takes you on a journey around the local area
              to meet the people behind the food. From organic farms and artisan producers to family-run
              animal parks and Italian-inspired flavours — discover the incredible produce on our doorstep.
              Each stop on the trail offers something special: tastings, tours, farm walks and more.
            </p>
            <p className="mt-4 text-text-light leading-relaxed">
              Pick up a trail map at the festival or follow the route below. Visit all the stops to complete the trail!
            </p>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Trail Map</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Our four trail stops are dotted around the beautiful North Dorset countryside surrounding Shaftesbury.
          </p>
          <div className="mt-8 mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-xl border-2 border-gray-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d80000!2d-2.3!3d51.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sShaftesbury+Dorset+food+producers"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shaftesbury Food Trail Map"
              />
            </div>
            <div className="mt-4 text-center">
              <Link
                href={GOOGLE_MAPS_TRAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
              >
                <Navigation size={16} />
                View Full Trail Route on Google Maps
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>

          {/* Stop quick-links */}
          <div className="mt-8 mx-auto max-w-4xl grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trailStops.map((stop, index) => (
              <div key={stop.name} className="rounded-lg bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-text text-sm">{stop.name}</h3>
                </div>
                <p className="mt-2 text-xs text-text-muted">{stop.address}</p>
                <Link
                  href={getDirectionsUrl(stop.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent-dark"
                >
                  <Navigation size={10} />
                  Get Directions
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trail Stops */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Trail Stops</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Each producer is offering special activities and experiences on Saturday 2nd May.
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

                    <p className="mt-4 text-text-light leading-relaxed">{stop.description}</p>

                    <p className="mt-2 flex items-center gap-1 text-sm text-text-muted">
                      <MapPin size={12} />
                      {stop.address}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      {stop.website && (
                        <Link href={stop.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent-dark font-medium text-sm">
                          Visit website &rarr;
                        </Link>
                      )}
                      <Link
                        href={getDirectionsUrl(stop.address)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent-dark"
                      >
                        <Navigation size={12} />
                        Get Directions
                      </Link>
                    </div>

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
                            {index === 0 && <Beef size={48} className="mx-auto text-gray-300" />}
                            {index === 1 && <Salad size={48} className="mx-auto text-gray-300" />}
                            {index === 2 && <IceCream size={48} className="mx-auto text-gray-300" />}
                            {index === 3 && <Leaf size={48} className="mx-auto text-gray-300" />}
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
            description: 'A trail around local food producers near Shaftesbury on Saturday 2nd May, featuring farm walks, tastings and tours.',
            touristType: 'Food lovers',
            subjectOf: {
              '@type': 'Event',
              name: 'Shaftesbury Food Festival 2026',
              startDate: '2026-05-02',
            },
          }),
        }}
      />
    </>
  )
}
