import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, TreePine, ExternalLink, Navigation } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import FAQAccordion from '@/components/shared/FAQAccordion'
import TrailStopSlideshow from '@/components/shared/TrailStopSlideshow'
import { getFaqs } from '@/lib/faqs'

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
  shortDescription: string
  description: string
  highlight?: string
  hours?: string
  activities: string[]
  images: string[]
  website?: string
  mapPosition: { top: string; left: string }
}

const trailStops: TrailStop[] = [
  {
    name: 'Gold Hill Organic Farm',
    location: 'Child Okeford',
    address: 'Ridgeway Lane, Child Okeford, Blandford, Dorset DT11 8HB',
    shortDescription:
      'Guided farm walks at 11 & 2 with Andrew and Sara — see how organic Dorset vegetables are grown all year round.',
    highlight:
      'Join founders Andrew and Sara for guided farm walks at 11am and 2pm to learn how they produce organic Dorset vegetables all year round.',
    description:
      'Gold Hill Farm Kitchen is a small but perfectly formed café positioned on Gold Hill Organic Farm in Child Okeford. Everything is cooked from scratch — bread, pastries, smoothies, pickles, fermentations and cordials — with the aim of being the only process on your food\'s journey from field to plate. With the help of Wogan Coffee in Bristol, they also deliver an unrivalled cup of coffee.',
    hours: 'Open 10am – 4pm',
    activities: [
      'Guided farm walk with Andrew & Sara — 11am',
      'Guided farm walk with Andrew & Sara — 2pm',
      'Farm Kitchen café',
      'Coffee by Wogan Coffee',
    ],
    images: ['/Events/Gold hill organic farm.jpg'],
    website: 'https://www.goldhillorganicfarm.co.uk',
    mapPosition: { top: '20%', left: '60%' },
  },
  {
    name: 'Sorelle Dorset',
    location: 'Motcombe, Shaftesbury',
    address: 'Brook Farm, Bittles Green, Motcombe, Shaftesbury SP7 9NX',
    shortDescription:
      'Take a break at the charming café — and enter the prize draw to win a two-night stay in one of Sorelle\'s stunning yurts.',
    highlight:
      'Take a break at the charming café. While you\'re there, enter the prize draw to win a two-night stay in one of Sorelle\'s stunning yurts.',
    description:
      'Sorelle is home to a popular café, glamping site and wellness space. The heart of the business lies in the Dorset countryside and they\'re determined to always source fresh, local ingredients for the kitchen. They\'re passionate about coffee too — proudly serving specialty coffee sourced exclusively from women producers and roasted just outside Warminster. The café specialises in seasonal brunch with a great range of locally made cakes and pastries alongside the daily menu.',
    activities: [
      'Prize draw — win a two-night yurt stay',
      'Seasonal brunch',
      'Specialty coffee',
      'Locally made cakes & pastries',
    ],
    images: [
      '/images/Food Trail/Sorelle/ABxSorelle-95.jpg',
      '/images/Food Trail/Sorelle/ABxSorelle-151.jpg',
      '/images/Food Trail/Sorelle/IMG_2257.JPG',
      '/images/Food Trail/Sorelle/366d0aca-0c82-483f-a4c9-391a56b2fcd4.JPG',
    ],
    website: 'https://www.sorelledorset.com',
    mapPosition: { top: '35%', left: '40%' },
  },
  {
    name: 'Compton McRae',
    location: 'Semley, Shaftesbury',
    address: 'Semley, Shaftesbury, Dorset SP7 9AP',
    shortDescription:
      'A beautifully curated delicatessen celebrating artisan produce and ingredient-led craft.',
    description:
      'Compton McRae is a café and deli in Semley, celebrating seasonal food, great coffee and artisan produce. Known for its relaxed atmosphere and community feel, Compton McRae serves simple, delicious dishes alongside a deli with a cheese room, stocked with carefully sourced ingredients, wines and provisions from local and independent producers.',
    activities: ['Café & seasonal dishes', 'Deli & cheese room', 'Artisan produce & wines', 'Great coffee'],
    images: [
      '/images/Food Trail/COmpton Macrae/Shelves.jpg',
      '/images/Food Trail/COmpton Macrae/Coffee 1.jpg',
      '/images/Food Trail/COmpton Macrae/Meat.jpg',
      '/images/Food Trail/COmpton Macrae/Produce.jpeg',
      '/images/Food Trail/COmpton Macrae/Quiche.jpeg',
      '/images/Food Trail/COmpton Macrae/Salad.jpg',
    ],
    website: 'http://www.comptonmcrae.com/',
    mapPosition: { top: '30%', left: '50%' },
  },
  {
    name: 'Madjeston Milk Station & Animal Park',
    location: 'Gillingham, Dorset',
    address: 'Newhouse Farm, Cole Street Lane, Gillingham, Dorset SP8 5JQ',
    shortDescription:
      'Sample Madjeston\'s wonderful homemade ice creams — made on the farm with milk from their own herd. Ginger and honey, rich smooth chocolate…',
    highlight:
      'Sample Madjeston\'s wonderful homemade ice creams, made on the farm with milk from their herd. Ginger and honey, rich smooth chocolate…',
    description:
      'Madjeston Animal Park is a family-run farm set in the heart of the Dorset countryside. They produce fresh Ayrshire cow\'s milk and delicious homemade ice cream right on site, available anytime from their 24/7 self-service Milk Station alongside a range of locally sourced produce. As well as being a working farm, Madjeston has grown into a welcoming destination for families, with an animal park, café and play area.',
    hours: 'Open 10am – 4pm',
    activities: [
      'Homemade ice cream — ginger & honey, chocolate and more',
      'Fresh Ayrshire milk from the Milk Station',
      'Meet the animals',
      'Café, farm produce & play area',
    ],
    images: [
      '/images/Food Trail/Madjeston Milk Station/IMG_4106.jpeg',
      '/images/Food Trail/Madjeston Milk Station/IMG_2589.jpeg',
      '/images/Food Trail/Madjeston Milk Station/IMG_3071.jpeg',
      '/images/Food Trail/Madjeston Milk Station/IMG_4107.jpeg',
      '/images/Food Trail/Madjeston Milk Station/IMG_4108.jpeg',
      '/images/Food Trail/Madjeston Milk Station/IMG_4110.jpeg',
      '/images/Food Trail/Madjeston Milk Station/IMG_4111.jpeg',
      '/images/Food Trail/Madjeston Milk Station/IMG_4112.jpeg',
      '/images/Food Trail/Madjeston Milk Station/IMG_4114.jpeg',
      '/images/Food Trail/Madjeston Milk Station/IMG_5585.jpeg',
    ],
    website: 'https://www.madjestonanimalpark.co.uk',
    mapPosition: { top: '55%', left: '45%' },
  },
  {
    name: 'Primrose Organic Produce',
    location: 'Lymburghs Farm, Marnhull',
    address: 'Lymburghs Farm, Marnhull, Sturminster Newton, Dorset',
    shortDescription:
      'Farm and shop open all day — a regenerative farm walk with Jim at 11, BBQ from 12, and an afternoon explore with Gilla at 2.',
    highlight:
      'Farm and shop open for the day. At 11am Jim leads a farm walk focusing on regenerative farming, the soil and the role cows and sheep play in keeping it all in balance. From 12 the BBQ is firing — home-produced burgers, mutton, sausages and halloumi. At 2pm join Gilla to explore the farm\'s vegetable production and chickens.',
    description:
      'Primrose Organic Produce is a family-run organic farm, shop and café at Lymburghs Farm near Marnhull. For 60 years, three generations of the Primrose family have farmed here. Around 20 years ago, Jim and Gilla returned to convert the farm to organic, beginning with 100% pasture-fed Red Devon cattle. Sheep for mutton followed, and in recent years they\'ve introduced free-range eggs alongside a thriving market garden. The farm is alive with restored hedgerows, ponds, wildflower meadows and winter flood meadows, all maintained using regenerative, ecological farming techniques.',
    activities: [
      'Farm walk with Jim — regenerative farming — 11am',
      'BBQ from 12pm — burgers, mutton, sausages & halloumi',
      'Vegetable garden & chickens with Gilla — 2pm',
      'Farm shop & café open all day',
    ],
    images: [
      '/images/Food Trail/Primrose Organic/Primrose Organic Shop Front.jpeg',
      '/images/Food Trail/Primrose Organic/Primrose Inside Shop End Shot.jpeg',
      '/images/Food Trail/Primrose Organic/Jim Promo Image.jpg',
      '/images/Food Trail/Primrose Organic/Gilla Promo Image.jpg',
      '/images/Food Trail/Primrose Organic/Primrose Promo 3.jpg',
      '/images/Food Trail/Primrose Organic/Primrose Promo 8.jpg',
    ],
    website: 'https://www.primroseorganic.co.uk',
    mapPosition: { top: '70%', left: '30%' },
  },
  {
    name: 'Pythouse Kitchen Garden',
    location: 'West Hatch, Tisbury',
    address: 'Pyt House, West Hatch, Tisbury SP3 6PA',
    shortDescription:
      'Taste Sprigster non-alcoholic botanical drinks at the garden bar in the heart of the garden that inspired them — with garden tours through the day.',
    highlight:
      'Taste Sprigster non-alcoholic botanical drinks at the garden bar in the heart of the garden that inspired them. Tours of the garden through the day.',
    description:
      'Tucked away just outside Tisbury, Pythouse Kitchen Garden is a seasonal restaurant, working kitchen garden and gathering place set in the Wiltshire countryside. Behind the walls sits a productive garden where vegetables, herbs and fruit are grown just steps from the kitchen and harvested daily for the menu. Pythouse holds both a Michelin Green Star — awarded for sustainable, environmentally responsible cooking — and a Bib Gourmand for exceptional food at good value, the only restaurant in the UK currently to hold both together.',
    hours: 'Open 12pm – 4.30pm',
    activities: [
      'Sprigster botanical drinks at the garden bar',
      'Tours of the kitchen garden through the day',
      'Garden-to-plate seasonal restaurant',
      'Michelin Green Star & Bib Gourmand',
    ],
    images: [
      '/images/Food Trail/Pythouse Kitchen Garden/Outside Bar.jpg',
      '/images/Food Trail/Pythouse Kitchen Garden/Sprigster Original Perfect Serve.jpg',
      '/images/Food Trail/Pythouse Kitchen Garden/Hedgerow Blush Pour.jpg',
    ],
    website: 'https://www.pythousekitchengarden.co.uk',
    mapPosition: { top: '40%', left: '70%' },
  },
  {
    name: 'Dorset Blue Vinny',
    location: 'Woodbridge Farm, Dorset',
    address: 'Woodbridge Farm, Dorset',
    shortDescription:
      'Meet the makers of the iconic cheese \u2014 Blue Vinny and Woodbridge Farm\'s delicious chutneys combine for a ploughman\'s extraordinaire.',
    highlight:
      'Meet the makers of the iconic cheese. Blue Vinny and Woodbridge Farm\'s delicious chutneys combine for a ploughman\'s extraordinaire.',
    description:
      'Woodbridge Farm is where Michael Davies resurrected the 300-year-old recipe for Dorset Blue Vinny cheese back in 1980. Each cheese takes over 24 hours to make using fresh milk from their herd of 270 Friesian cows, and up to 20 weeks to mature. In 1998, Woodbridge Farm became the first food producer awarded PGI (Protected Geographical Indication) status \u2014 and they remain the only producers of Dorset Blue Vinny.',
    hours: 'Open 10am \u2013 4pm',
    activities: [
      'Meet the makers of Dorset Blue Vinny',
      'Ploughman\'s extraordinaire \u2014 cheese & Woodbridge Farm chutneys',
      '300-year-old recipe, made from 270 Friesian cows',
      'PGI Protected status since 1998',
    ],
    images: [
      '/images/Food Trail/Blue Vinny/Michael Davies- Dorset Blue Vinny.avif',
      '/images/Food Trail/Blue Vinny/Dorset Blue Chutneys.avif',
    ],
    website: 'https://www.dorsetblue.com',
    mapPosition: { top: '50%', left: '55%' },
  },
  {
    name: 'Olives Et Al',
    location: 'Sturminster Newton, Dorset',
    address: 'Sturminster Newton, Dorset',
    shortDescription:
      'Try amazing foods and ingredients from around the world \u2014 including their latest creation, Vivo Verde Green Olive Tapenade.',
    highlight:
      'Try some of Olives Et Al\'s amazing foods and ingredients from all around the world, including their latest creation, Vivo Verde Green Olive Tapenade.',
    description:
      'Just outside Sturminster Newton sits the Olives Et Al HQ Deli, alongside the Production Kitchen where they make well over 260 individual products stocked in delis and farm shops from the Scilly Isles to the Orkneys. The HQ Deli is a great showcase of what they make and have sourced from various trips to warmer climes. Headed up by Olena with Sarah, Maddie and Sadie, they make, bake and prepare fresh dishes every day \u2014 from sourdough and super salads to cakes, sandwiches, tarts and traybakes, all with their particular Mediterranean twist.',
    hours: 'Open 10am \u2013 4pm',
    activities: [
      'Vivo Verde Green Olive Tapenade \u2014 new launch',
      'Fabulous olive bar & great olive oils',
      'Dressings, sauces & fresh sourdough',
      'Organic wines',
    ],
    images: ['/images/Food Trail/Olives Et Al/OLIVES ET AL - DELI HOLDING IMAGE.jpg'],
    website: 'https://www.olivesetal.co.uk',
    mapPosition: { top: '45%', left: '60%' },
  },
  {
    name: 'Breezy Ridge Vineyard',
    address: 'TBC',
    shortDescription:
      'A celebratory vineyard stop with sparkling wine tastings, sweeping views and a relaxed disco atmosphere.',
    description:
      'Breezy Ridge Vineyard is a haven of food and wine located in the rolling hills of North Dorset. Known for its idyllic setting, chic and contemporary identity, it is the perfect place to come and relax for an afternoon. Specializing in the production of English Sparkling wine, guests can enjoy wine flights, cheese tastings and signature grazing boards, all carefully curated with handpicked products from selected independent suppliers. Opening hours: 12pm–6pm on Saturday.',
    hours: 'Open 12pm – 6pm Saturday',
    activities: ['English Sparkling Wine', 'Wine flights', 'Cheese tastings', 'Signature Cheese & Charcuterie Boards', 'Live music'],
    images: ['/images/Food Trail/Breezy Ridge/Breezy Ridge.jpg'],
    website: 'https://breezyridgevineyard.com',
    mapPosition: { top: '60%', left: '50%' },
  },
  {
    name: 'Cann Mills — Stoate & Sons',
    address: 'TBC',
    shortDescription:
      'A historic working mill exploring traditional stone milling and generational grain-to-flour craftsmanship.',
    description:
      'Stoate & Sons is a family-run flour milling business with roots dating back to 1832, when brothers William and Thomas Stoate began trading in Somerset. The company expanded steadily, moving to Bristol in 1912 to meet growing demand, and later becoming part of Spillers while still maintaining strong family involvement. In 1947, the business returned to independent roots at Cann Mills, a historic site recorded in the Domesday Book, where it initially focused on supplying animal feed to local farms. In 1970, Stoate & Sons revived traditional stoneground milling, reconnecting with its heritage techniques using French Burr millstones. Now in its Sixth generation, the company continues to balance tradition with modern demand, supplying both home bakers and the wider baking trade. With the next generation joining the business, Stoate & Sons remains committed to preserving its legacy while continuing to grow into its third century.',
    activities: ['Traditional stoneground flour milling', 'Heritage French Burr millstones'],
    images: ['/images/Food Trail/Cann mills/Cann mills.png'],
    website: 'https://stoatesflour.co.uk',
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
        title="The Food Trail"
        subtitle="Saturday 2nd May"
        backgroundImage="/images/Food Trail/Blue Vinny/Michael Davies- Dorset Blue Vinny.avif"
        backgroundAlt="Michael Davies at Woodbridge Farm making Dorset Blue Vinny cheese"
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
              Select your destinations from the map below. Will it be a farm walk followed by cheese tasting?
              Organic beef from the BBQ and a tour of a historic mill? Fabulous ice creams and walled kitchen gardens?
              The choice is yours!
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
          <div className="mt-8 mx-auto max-w-6xl grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {trailStops.map((stop, index) => (
              <div key={stop.name} className="flex flex-col rounded-lg bg-white p-4 shadow-sm">
                <div className="flex items-start gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-text text-sm leading-tight">{stop.name}</h3>
                </div>
                {stop.website && (
                  <Link
                    href={stop.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent-dark break-all"
                  >
                    <ExternalLink size={10} />
                    Visit website
                  </Link>
                )}
                <p className="mt-2 text-xs text-text-light leading-relaxed">{stop.shortDescription}</p>
                <Link
                  href={getDirectionsUrl(stop.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent-dark"
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

                    {stop.highlight && (
                      <div className="mt-4 rounded-lg border-l-4 border-accent bg-accent/10 px-4 py-3">
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent-dark">On the day</p>
                        <p className="mt-1 text-text leading-relaxed">{stop.highlight}</p>
                        {stop.hours && (
                          <p className="mt-2 text-sm font-semibold text-primary">{stop.hours}</p>
                        )}
                      </div>
                    )}

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

                    <p className="mt-4 text-sm text-text-light leading-relaxed whitespace-pre-line">{stop.description}</p>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
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
                  </div>

                  {/* Image side */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <TrailStopSlideshow images={stop.images} alt={stop.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Food Trail FAQs"
        subtitle="Planning your Saturday? Here’s what to know."
        items={getFaqs(['foodTrail', 'foodTrailChildren', 'dogs'])}
        className="bg-gray-50"
      />

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
