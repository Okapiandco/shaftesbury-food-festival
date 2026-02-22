import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChefHat, Store, Trophy, Heart } from 'lucide-react'
import CTAButton from '@/components/shared/CTAButton'
import EventCard from '@/components/cards/EventCard'
import VendorCard from '@/components/cards/VendorCard'

export const metadata: Metadata = {
  title: 'Shaftesbury Food Festival 2026 | 3rd May Bank Holiday',
  description:
    'Join us on 3rd May for the Shaftesbury Food Festival. Watch the famous Gold Hill Cheese Race, enjoy 100+ food stalls, chef talks and Dorset food and drink. Bank holiday celebration on Shaftesbury\'s historic high street.',
}

const highlights = [
  {
    icon: Trophy,
    title: 'Gold Hill Cheese Race',
    description: 'Watch contestants carry a 23kg cheese up the world-famous Gold Hill from the Hovis advert. All ages welcome!',
    href: '/cheese-race',
    color: 'bg-accent/10 text-accent-dark',
  },
  {
    icon: Store,
    title: '100+ Trade Stands',
    description: 'Explore over 100 food stalls, beverage vendors and craft stands celebrating the best of Dorset produce.',
    href: '/trade-stands',
    color: 'bg-secondary/10 text-secondary-dark',
  },
  {
    icon: ChefHat,
    title: 'Chef Talks & Demos',
    description: 'Enjoy talks and demonstrations from famous chefs, organised by The Kitchen Table. Learn tips and techniques.',
    href: '/events',
    color: 'bg-primary/10 text-primary',
  },
]

const sampleEvents = [
  { title: 'Festival Opening Ceremony', time: '9:00 AM - 9:30 AM', location: 'High Street', eventType: 'Main Event', description: 'Official opening of the Shaftesbury Food Festival 2026.' },
  { title: 'Gold Hill Cheese Race', time: '11:00 AM - 12:00 PM', location: 'Gold Hill', eventType: 'Race', description: 'The world-famous cheese race up iconic Gold Hill.' },
  { title: 'Chef Talk: Local Dorset Ingredients', time: '1:00 PM - 2:00 PM', location: 'Park Walk Stage', eventType: 'Chef Talk', description: 'Discover the finest local Dorset ingredients and how to cook with them.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gold-hill.jpg"
          alt="Gold Hill, Shaftesbury — home of the famous cheese race"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white md:py-32">
          <Image
            src="/images/logo.png"
            alt="Shaftesbury Food Festival 2026 logo"
            width={160}
            height={160}
            className="mx-auto mb-6 h-32 w-32 md:h-40 md:w-40"
            priority
          />
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">3rd May 2026 — Bank Holiday</p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl lg:text-7xl">
            Shaftesbury<br />Food Festival
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-200 md:text-xl">
            A day packed full of fun food and festivities on Shaftesbury&apos;s historic high street, Park Walk and surrounding areas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton href="/cheese-race" variant="accent">Register for Cheese Race</CTAButton>
            <CTAButton href="/trade-stands" variant="secondary">Register as Trade Stand</CTAButton>
            <CTAButton href="/volunteers" variant="primary" className="border-2 border-white/30 bg-transparent hover:bg-white/10">Become a Volunteer</CTAButton>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-text md:text-4xl">Festival Highlights</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Celebrating local food producers and regional Dorset cuisine on the bank holiday.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-xl border border-gray-200 p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${item.color}`}>
                  <item.icon size={28} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-text group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-light">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-text md:text-4xl">What&apos;s On</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            A packed schedule of events, races, chef talks and entertainment throughout the day.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sampleEvents.map((event) => (
              <EventCard key={event.title} title={event.title} time={event.time} location={event.location} eventType={event.eventType} description={event.description} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <CTAButton href="/events" variant="primary">View Full Timetable</CTAButton>
          </div>
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-text md:text-4xl">Featured Vendors</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Over 100 food stalls, beverage vendors and craft stands. More vendors to be announced soon.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-sm">
              <VendorCard name="Truckle Truck" category="food-vendor" description="Delicious grilled cheese sandwiches and artisan truckles — a festival favourite." image="/images/truckle-truck.jpg" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <CTAButton href="/trade-stands" variant="secondary">View All Vendors</CTAButton>
          </div>
        </div>
      </section>

      {/* Festival Atmosphere */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <Image
          src="/images/high-street-festival.jpg"
          alt="Shaftesbury Food Festival on the high street"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl font-bold md:text-4xl">Join Us on the Bank Holiday</h2>
            <p className="mt-3 text-lg text-blue-200">Eat and drink your way around Dorset</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Get Involved</h2>
          <p className="mx-auto mt-3 max-w-xl text-text">
            Whether you&apos;re racing, selling, volunteering or visiting — there&apos;s something for everyone.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton href="/cheese-race" variant="primary">
              <Trophy size={16} className="mr-2" /> Enter the Cheese Race
            </CTAButton>
            <CTAButton href="/trade-stands" variant="primary">
              <Store size={16} className="mr-2" /> Register a Trade Stand
            </CTAButton>
            <CTAButton href="/volunteers" variant="primary">
              <Heart size={16} className="mr-2" /> Volunteer With Us
            </CTAButton>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Shaftesbury Food Festival 2026',
            startDate: '2026-05-03T09:00:00+01:00',
            endDate: '2026-05-03T18:00:00+01:00',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            location: {
              '@type': 'Place',
              name: 'Shaftesbury High Street & Park Walk',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'High Street',
                addressLocality: 'Shaftesbury',
                addressRegion: 'Dorset',
                addressCountry: 'GB',
              },
            },
            description:
              'A day packed full of fun food and festivities on Shaftesbury\'s historic high street, featuring the Gold Hill Cheese Race, 100+ trade stands, chef talks and entertainment.',
            organizer: {
              '@type': 'Organization',
              name: 'Shaftesbury Chamber of Commerce',
              url: 'https://shaftesburyfoodfestival.co.uk',
            },
            image: 'https://shaftesburyfoodfestival.co.uk/images/gold-hill.jpg',
          }),
        }}
      />
    </>
  )
}
