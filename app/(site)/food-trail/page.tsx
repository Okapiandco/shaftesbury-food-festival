import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, TreePine, Beef, IceCream, Salad, Leaf, ExternalLink, Navigation } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import CTAButton from '@/components/shared/CTAButton'

export const metadata: Metadata = {
  title: 'Food Trail | Shaftesbury Food Festival 2nd May 2026',
  description:
    'Follow the Shaftesbury Food Trail on Saturday 2nd May around local food producers including Gold Hill Organic Farm, Sorelle Dorset, Compton McRae, Madjeston Animal Park, Primrose Organic Produce, Pythouse Kitchen Garden, Dorset Blue Vinny, Olives Et Al, Breezy Ridge and Cann Mills.',
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
      'Do you know where your next meal is coming from? Maybe it\'s time you found out. Come to Gold Hill Organic Farm on Saturday 2nd May and learn about your shortest food chain. Farm walks with growers at 11am and 2pm. Gold Hill Farm Kitchen is a small but perfectly formed café positioned on Gold Hill Organic Farm in Child Okeford. Everything is cooked from scratch — bread, pastries, smoothies, pickles, fermentations and cordials — with the aim of being the only process on your food\'s journey from field to plate. With the help of Wogan Coffee in Bristol, they also deliver an unrivalled cup of coffee.',
    activities: ['Farm walk with growers — 11am', 'Farm walk with growers — 2pm', 'Farm Kitchen café', 'Coffee by Wogan Coffee'],
    image: '/Events/Gold hill organic farm.jpg',
    mapPosition: { top: '20%', left: '60%' },
  },
  {
    name: 'Sorelle Dorset',
    location: 'Motcombe, Shaftesbury',
    address: 'Brook Farm, Bittles Green, Motcombe, Shaftesbury SP7 9NX',
    description:
      'Sorelle is home to a popular cafe, glamping site and wellness space. The heart of our business lies in the Dorset countryside and we are determined to always source fresh, local ingredients for use in our kitchen. We are also passionate about coffee and proudly serve specialty coffee, sourced exclusively from women producers and roasted just outside Warminster. Our cafe specialises in seasonal brunch and always has a great range of locally made cakes and pastries alongside our daily menu. Opening hours: 9am-3pm, Wednesday-Sunday. Brunch served until 2.30pm. We open late on Fridays throughout the summer for pizza and live music or a quiz. We do not take reservations, unless your group is larger than 7 guests.',
    activities: ['Seasonal brunch', 'Specialty coffee', 'Locally made cakes & pastries', 'Friday pizza & live music'],
    image: '/images/Food Trail/Sorelle/ABxSorelle-95.jpg',
    website: 'https://www.sorelledorset.com/',
    mapPosition: { top: '35%', left: '40%' },
  },
  {
    name: 'Compton McRae',
    location: 'Semley, Shaftesbury',
    address: 'Semley, Shaftesbury, Dorset SP7 9AP',
    description:
      'Compton McRae is a café and deli in Semley, celebrating seasonal food, great coffee and artisan produce. Known for its relaxed atmosphere and community feel, Compton McRae serves simple, delicious dishes alongside a deli with a cheese room, stocked with carefully sourced ingredients, wines and provisions from local and independent producers.',
    activities: ['Café & seasonal dishes', 'Deli & cheese room', 'Artisan produce & wines', 'Great coffee'],
    image: '/images/Food Trail/COmpton Macrae/Shelves.jpg',
    website: 'https://www.comptonmcrae.co.uk',
    mapPosition: { top: '30%', left: '50%' },
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
  {
    name: 'Pythouse Kitchen Garden',
    location: 'West Hatch, Tisbury',
    address: 'Pyt House, West Hatch, Tisbury SP3 6PA',
    description:
      'Tucked away just outside Tisbury, Sprigs Co\'s Pythouse Kitchen Garden is a seasonal restaurant, working kitchen garden and gathering place set in the Wiltshire countryside. Behind the walls sits a productive garden where vegetables, herbs and fruit are grown just steps from the kitchen and harvested daily for the menu. Guests can eat among the gardens, wander through the growing beds and orchard, or simply enjoy relaxed, thoughtful cooking that celebrates the seasons and the surrounding landscape. Pythouse holds both a Michelin Green Star — awarded for sustainable, environmentally responsible cooking — and a Bib Gourmand for exceptional food at good value. It is currently the only restaurant in the UK to hold both awards together.',
    activities: ['Seasonal restaurant', 'Kitchen garden tours', 'Garden-to-plate dining', 'Michelin Green Star & Bib Gourmand'],
    image: '/images/Food Trail/Pythouse Kitchen Garden/Outside Bar.jpg',
    mapPosition: { top: '40%', left: '70%' },
  },
  {
    name: 'Dorset Blue Vinny',
    location: 'Woodbridge Farm, Dorset',
    address: 'Woodbridge Farm, Dorset',
    description:
      'Woodbridge Farm is where Michael Davies resurrected the 300 year old recipe for Dorset Blue Vinny cheese back in 1980. Mike took over the farm kitchen until he had perfected the recipe. Dorset Blue Vinny is still made on the same farm today, albeit no longer in the kitchen!\n\nDorset Blue Vinny takes over 24 hours to make. Each morning, the Davies\u2019 use fresh milk from their herd of 270 Friesian cows. Once it\u2019s been pasteurised, hand-skimmed and the starter culture, rennet and penicillin mould added, it\u2019s ready to be made into cheese.\n\nOnce the milk coagulates it is cut into small pieces before being left overnight. Next morning, once curds and whey have formed, the whey is drained off leaving the curd to be ground, salted and put into moulds where it stays for a few days, before being moved to the maturing room.\n\nThe cheeses need to be turned by hand every day for the first few weeks and then once a week after that. The cheeses are spiked with long narrow pins to allow air into the cheese which helps the mould grow and flavour to develop. It can take up to 20 weeks for the cheese to mature into Dorset Blue Vinny.\n\nIn 1998, Woodbridge Farm were the first food producer to be awarded PGI (Protected Geographical Indication) status and are the only producers of Dorset Blue Vinny.',
    activities: ['300 year old recipe', 'Made from 270 Friesian cows', 'Up to 20 weeks maturing', 'PGI Protected status since 1998'],
    image: '/images/Food Trail/Blue Vinny/Michael Davies- Dorset Blue Vinny.avif',
    mapPosition: { top: '50%', left: '55%' },
  },
  {
    name: 'Olives Et Al',
    location: 'Sturminster Newton, Dorset',
    address: 'Sturminster Newton, Dorset',
    description:
      'Nestling happily just outside Sturminster Newton, Dorset is the Olives Et Al HQ Deli which sits alongside their Production Kitchen where they make well over 260 individual products stocked in other deli\u2019s and farm shops from the Scilly Isles to the Orkneys and all points in between. The HQ Deli is a great showcase of what they make and have sourced from various trips to warmer climes. Headed up by Olena with Sarah, Maddie and Sadie, they make, bake, and prepare a host of fresh dishes every day ranging from fresh sourdough to some seriously super salads, cakes, sandwiches, tarts and traybakes all with their particular Mediterranean twist. They say: \u2018Call in for fresh Coffee, delightful service and interesting chats \u2014 we\u2019re always happy to see you!\u2019',
    activities: [
      'Fabulous Olive Bar \u2014 Great Olive Oils',
      'Nuts to die for \u2013 Dressings & Sauces to drool about',
      'Fresh bread \u2013 Wonderful baps',
      'Spicy People \u2014 Organic Wines',
    ],
    image: '/images/Food Trail/Olives Et Al/OLIVES ET AL - DELI HOLDING IMAGE.jpg',
    website: 'https://www.olivesetal.co.uk',
    mapPosition: { top: '45%', left: '60%' },
  },
  {
    name: 'Breezy Ridge Vineyard',
    address: 'TBC',
    description:
      'Breezy Ridge Vineyard is a haven of food and wine located in the rolling hills of North Dorset. Known for its idyllic setting, chic and contemporary identity, it is the perfect place to come and relax for an afternoon. Specializing in the production of English Sparkling wine, guests can enjoy wine flights, cheese tastings and signature grazing boards, all carefully curated with handpicked products from selected independent suppliers.',
    activities: ['English Sparkling Wine', 'Wine flights', 'Cheese tastings', 'Signature Cheese & Charcuterie Boards', 'Live music'],
    image: '/images/Food Trail/Breezy Ridge/Breezy Ridge.jpg',
    website: 'https://breezyridgevineyard.com/',
    mapPosition: { top: '60%', left: '50%' },
  },
  {
    name: 'Cann Mills — Stoate & Sons',
    address: 'TBC',
    description:
      'Stoate & Sons is a family-run flour milling business with roots dating back to 1832, when brothers William and Thomas Stoate began trading in Somerset. The company expanded steadily, moving to Bristol in 1912 to meet growing demand, and later becoming part of Spillers while still maintaining strong family involvement. In 1947, the business returned to independent roots at Cann Mills, a historic site recorded in the Domesday Book, where it initially focused on supplying animal feed to local farms. In 1970, Stoate & Sons revived traditional stoneground milling, reconnecting with its heritage techniques using French Burr millstones. Now in its Sixth generation, the company continues to balance tradition with modern demand, supplying both home bakers and the wider baking trade. With the next generation joining the business, Stoate & Sons remains committed to preserving its legacy while continuing to grow into its third century.',
    activities: ['Traditional stoneground flour milling', 'Heritage French Burr millstones'],
    image: '/images/Food Trail/Cann mills/Cann mills.png',
    mapPosition: { top: '65%', left: '40%' },
  },
]

const GOOGLE_MAPS_TRAIL_URL =
  'https://www.google.com/maps/dir/Gold+Hill+Organic+Farm,+Ridgeway+Lane,+Child+Okeford,+DT11+8HB/Brook+Farm,+Bittles+Green,+Motcombe,+SP7+9NX/Compton+McRae,+Semley,+Shaftesbury+SP7+9AP/Newhouse+Farm,+Cole+Street+Lane,+Gillingham,+SP8+5JQ/Lymburghs+Farm,+Marnhull,+Dorset/Pyt+House,+West+Hatch,+Tisbury+SP3+6PA'

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
              On <strong>Saturday 2nd May</strong>, The Food Trail takes the Festival into the stunning countryside
              around Shaftesbury. A curated selection of fabulous local producers open their doors to show
              you what they do, where and how&hellip;
            </p>
            <p className="mt-4 text-text-light leading-relaxed">
              Follow the route below and visit all the stops to complete the trail!
            </p>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Trail Map</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Our ten trail stops are dotted around the beautiful Dorset and Wiltshire countryside surrounding Shaftesbury.
          </p>
          <div className="mt-8 mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-xl border-2 border-gray-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1ZgB7vzPkOP1-_r9YuOm-cYz3LYMsBnU&z=10"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shaftesbury Food Trail Map"
              />
              <noscript>
                <p className="p-4 text-center text-sm text-text-muted">Please enable JavaScript to view the trail map.</p>
              </noscript>
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
          <div className="mt-8 mx-auto max-w-6xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
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

                    <p className="mt-4 text-text-light leading-relaxed whitespace-pre-line">{stop.description}</p>

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
