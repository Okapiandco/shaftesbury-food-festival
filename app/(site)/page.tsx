import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChefHat, Store, Trophy, Heart, Sparkles } from 'lucide-react'
import CTAButton from '@/components/shared/CTAButton'
import VendorCard from '@/components/cards/VendorCard'
import SponsorsCarousel from '@/components/shared/SponsorsCarousel'

export const metadata: Metadata = {
  title: 'Shaftesbury Food Festival 2026 | 3rd May Bank Holiday',
  description:
    'Join us on 3rd May for the Shaftesbury Food Festival. Watch the famous Gold Hill Cheese Race, enjoy a variety of local food and drink producers, chef talks and Dorset food and drink. Bank holiday celebration on Shaftesbury\'s historic high street.',
}

const highlights = [
  {
    icon: Trophy,
    title: 'Gold Hill Cheese Race',
    description: 'Watch contestants carry a 23kg cheese up the world-famous Gold Hill from the Hovis advert. All ages welcome!',
    href: '/cheese-race',
    color: 'bg-accent/10 text-accent-dark',
    image: '/images/Cheese Race Image.jpg',
  },
  {
    icon: Store,
    title: 'Local Producers',
    description: 'Explore a variety of local food and drink producers celebrating the best of Dorset produce.',
    href: '/trade-stands',
    color: 'bg-secondary/10 text-secondary-dark',
    image: '/Events/Gold Hill Farm shop.jpg',
  },
  {
    icon: ChefHat,
    title: 'MasterChefs Live',
    description: 'Live cookery from former MasterChef winners and finalists, hosted by The Kitchen Table.',
    href: '/events',
    color: 'bg-primary/10 text-primary',
    image: '/images/Food Demos.jpg',
  },
]


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden animate-fade-in">
        <Image
          src="/images/Cheese Race Image.jpg"
          alt="The Gold Hill Cheese Race at the Shaftesbury Food Festival"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white md:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">3rd May 2026 — That&apos;s a Wrap!</p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl lg:text-7xl">
            Thank You,<br />Shaftesbury!
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 md:text-xl">
            A heartfelt thank you to everyone who took part — our brilliant volunteers, traders, cheese racers, and our generous sponsors. You made the day unforgettable.
          </p>
          <p className="mt-3 text-sm italic text-blue-200">
            Shaftesbury Food Festival &hellip; proudly local, deliciously global.
          </p>
        </div>
      </section>

      {/* Post-Event Recap */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            A Record-Breaking Day
          </span>
          <h2 className="mt-4 text-3xl font-bold text-text md:text-4xl">Over 12,000 Visitors — A New Record</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            This year&apos;s festival welcomed more than 12,000 visitors to Shaftesbury — our biggest turnout ever. Shaftesbury also featured in most of the major newspapers on Bank Holiday Monday, including <span className="font-semibold text-text">The Times</span>, <span className="font-semibold text-text">The Telegraph</span> and <span className="font-semibold text-text">The Guardian</span>.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            We look forward to welcoming you back on <span className="font-semibold text-text">Sunday 2nd May 2027</span>.
          </p>

          <div className="mt-10 rounded-2xl bg-white border border-gray-200 shadow-sm p-8 md:p-10">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Store className="w-5 h-5" />
              <p className="text-xs font-semibold uppercase tracking-widest">Traders — 2nd May 2027</p>
            </div>
            <h3 className="mt-3 text-2xl font-bold text-text md:text-3xl">Expressions of Interest Now Open</h3>
            <p className="mx-auto mt-3 max-w-xl text-text-light">
              We are now taking expressions of interest from traders who would like to join us for the next festival on Sunday 2nd May 2027.
            </p>
            <div className="mt-6">
              <CTAButton href="/trade-stands#apply" variant="primary">Trade Stands 2027 — Register Interest</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Headline Sponsor */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">Headline Sponsor</p>
          <a href="https://www.countrycarsshaftesbury.co.uk/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block transition-opacity hover:opacity-80">
            <img src="/Sponsors/COuntry Cars.avif" alt="Country Cars — Headline Sponsor" className="h-20 w-auto object-contain mx-auto" />
          </a>
          <p className="mt-2 text-sm text-text-light max-w-md mx-auto">For comfortable, reliable and trusted taxi services covering Shaftesbury, Dorset and beyond...plus airport taxi services too!</p>
        </div>
      </section>

      {/* Sponsors Carousel */}
      <SponsorsCarousel />

      {/* Rest of the Weekend */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-text md:text-4xl">More Across the Weekend</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            The festival stretches beyond Sunday — here&apos;s what else is happening.
          </p>
          <div className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-4">
            {/* A Feast for the Eyes */}
            <Link
              href="/feast-for-the-eyes"
              className="group rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/Events/WhatsApp Image 2026-03-20 at 15.01.08.jpeg"
                  alt="A Feast for the Eyes — art exhibition poster"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-secondary">29th Apr – 5th May</p>
                <h3 className="mt-1 text-sm font-bold text-text group-hover:text-primary transition-colors">A Feast for the Eyes</h3>
                <p className="mt-1 text-xs text-text-light">Art exhibition — 10am–4pm daily at Shaftesbury Arts Centre.</p>
              </div>
            </Link>

            {/* The Great Food Quiz */}
            <Link
              href="/events#quiz"
              className="group rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/Events/Great food quiz.avif"
                  alt="The Great Food Quiz at Sorelle"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">Friday 1st May</p>
                <h3 className="mt-1 text-sm font-bold text-text group-hover:text-primary transition-colors">The Great Food Quiz</h3>
                <span className="inline-block mt-1 rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold uppercase text-white">Sold Out</span>
                <p className="mt-1 text-xs text-text-light">Fun quiz night at Sorelle, Motcombe.</p>
              </div>
            </Link>

            {/* Food Trail */}
            <Link
              href="/food-trail"
              className="group rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/Events/Gold hill organic farm.jpg"
                  alt="The Shaftesbury Food Trail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-secondary">Saturday 2nd May</p>
                <h3 className="mt-1 text-sm font-bold text-text group-hover:text-primary transition-colors">The Food Trail</h3>
                <p className="mt-1 text-xs text-text-light">Explore local producers with tastings and tours.</p>
              </div>
            </Link>

            {/* Food Festival, Street Market & Cheese Race */}
            <Link
              href="/about"
              className="group rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/Food festvial crowds.jpg"
                  alt="Shaftesbury Food Festival — Street Market and Cheese Race"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-accent-dark">Sunday 3rd May</p>
                <h3 className="mt-1 text-sm font-bold text-text group-hover:text-primary transition-colors">Food Festival Day</h3>
                <p className="mt-1 text-xs text-text-light">Street Market, Cheese Race, MasterChefs Live &amp; live music.</p>
              </div>
            </Link>
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
                className="group rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {'image' in item && item.image && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-8 text-center">
                  <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${item.color}`}>
                    <item.icon size={28} />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-text group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-light">{item.description}</p>
                </div>
              </Link>
            ))}
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
          <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <VendorCard name="Truckle Truck" category="food-vendor" image="/images/truckle-truck.jpg" />
            <VendorCard name="Book and Bucket Cheese" category="food-vendor" image="/images/TRade Stands/Book and Bucket Cheese.jpg" />
            <VendorCard name="Catherine Potter Crafts" category="craft" image="/images/TRade Stands/Catherine Potter crafts.jpg" />
            <VendorCard name="Compton Candle Co" category="craft" image="/images/TRade Stands/Compton Candle Co.jpg" />
            <VendorCard name="Crepe Salut" category="food-vendor" image="/images/TRade Stands/Crepe Salut.png" />
            <VendorCard name="Farmgirl Sausages" category="food-vendor" image="/images/TRade Stands/Farmgirl Sausages.jpg" />
            <VendorCard name="Hettie Hen Scotch Eggs" category="food-vendor" image="/images/TRade Stands/Hettie Hen Scotch Eggs.jpg" />
            <VendorCard name="Oxfords Bakery" category="food-vendor" image="/images/TRade Stands/Oxfords bakery.png" />
            <VendorCard name="Pretty Little Unicorn" category="craft" image="/images/TRade Stands/Pretty Little Unicorn.png" />
            <VendorCard name="South Paddocks" category="food-vendor" image="/images/TRade Stands/South Paddocks.png" />
            <VendorCard name="The Olive Pit" category="food-vendor" image="/images/TRade Stands/The Olive Pit.png" />
          </div>
          <div className="mt-8 text-center">
            <CTAButton href="/trade-stands" variant="secondary">View All Vendors</CTAButton>
          </div>
        </div>
      </section>

      {/* Chocolate Masterclasses Promo */}
      <section className="relative overflow-hidden bg-[#3a1f10] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/Food Demos/Chocolate Tasting.jpeg"
                  alt="Chocolate Gâteau Masterclass"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg mt-8">
                <Image
                  src="/images/Food Demos/Chocolate Tasting 2.jpeg"
                  alt="Bean-to-Bar Chocolate Tasting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                Festival Special
              </span>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">Bean-to-Bar Chocolate Masterclasses</h2>
              <p className="mt-3 text-base leading-relaxed text-amber-100/90">
                Two bonus sessions with Michael Barber of <span className="font-semibold text-white">Barber’s Bean-to-Bar</span>, hosted at <span className="font-semibold text-white">The Grosvenor</span>.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="font-bold text-accent shrink-0 w-20">10:00 AM</span>
                  <span className="text-amber-100/90">Chocolate Gâteau Masterclass — show-stopping pastry &amp; finishing techniques.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent shrink-0 w-20">1:00 PM</span>
                  <span className="text-amber-100/90">Taste the Journey — a guided sensory tasting from cocoa bean to finished bar.</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/food-demos"
                  className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-bold text-primary hover:bg-accent/90 transition-colors"
                >
                  See the Chocolate Sessions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Chamber */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-2xl bg-primary p-8 md:p-12 text-white text-center shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary">
              <Sparkles className="w-7 h-7" />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-accent">Get Involved</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Join the Shaftesbury &amp; District Chamber of Commerce</h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100 leading-relaxed">
              The Chamber is the team behind the Food Festival and many other community projects. Join us to help promote our wonderful town, support local businesses, and get involved in projects like this one.
            </p>
            <div className="mt-8">
              <a
                href="https://www.shaftesburychamber.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-primary hover:bg-accent/90 transition-colors"
              >
                <Heart className="w-4 h-4" />
                Sign Up Online
              </a>
            </div>
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
            <CTAButton href="/trade-stands#apply" variant="primary">
              <Store size={16} className="mr-2" /> Trade Stands 2027
            </CTAButton>
            <CTAButton href="/cheese-race" variant="primary">
              <Trophy size={16} className="mr-2" /> Cheese Race Info
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
            startDate: '2026-05-03T10:00:00+01:00',
            endDate: '2026-05-03T16:00:00+01:00',
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
              'A day packed full of fun food and festivities on Shaftesbury\'s historic high street, featuring the Gold Hill Cheese Race, a variety of local food and drink producers, chef talks and entertainment.',
            organizer: {
              '@type': 'Organization',
              name: 'Shaftesbury Chamber of Commerce',
              url: 'https://shaftesbury-food-festival.co.uk',
            },
            image: 'https://shaftesbury-food-festival.co.uk/images/Food Demos.jpg',
          }),
        }}
      />
    </>
  )
}
