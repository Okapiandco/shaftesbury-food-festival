import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChefHat, Store, Trophy, Heart } from 'lucide-react'
import CTAButton from '@/components/shared/CTAButton'
import VendorCard from '@/components/cards/VendorCard'

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
    title: 'Chef Talks & Demos',
    description: 'Enjoy talks and demonstrations from famous chefs, organised by The Kitchen Table. Learn tips and techniques.',
    href: '/events',
    color: 'bg-primary/10 text-primary',
    image: '/images/Food Demos.jpg',
  },
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
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">3rd May 2026 — Bank Holiday</p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl lg:text-7xl">
            Shaftesbury<br />Food Festival 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-200 md:text-xl">
            A day brimming with food, fun, and festivities across Shaftesbury&apos;s historic High Street, Park Walk, and surrounding areas.
          </p>
          <p className="mt-3 text-sm italic text-blue-300">
            Shaftesbury Food Festival &hellip; proudly local, deliciously global.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton href="/cheese-race" variant="accent">Register for Cheese Race</CTAButton>
            <CTAButton href="/trade-stands" variant="secondary">Register as Trade Stand</CTAButton>
            <CTAButton href="/volunteers" variant="primary" className="border-2 border-white/30 bg-transparent hover:bg-white/10">Become a Volunteer</CTAButton>
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
                <p className="mt-1 text-xs text-text-light">Art exhibition at Shaftesbury Arts Centre.</p>
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
                <p className="mt-1 text-xs text-text-light">Street Market, Cheese Race, demos &amp; live music.</p>
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

      {/* Trade Stand Call-to-Action */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Trade Stands Available</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Calling All Dorset &amp; South Wiltshire Producers!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-200">
            We still have trade stand spaces available for local food and drink producers.
            If you&apos;re based in Dorset or South Wiltshire and want to showcase your products
            to thousands of visitors, we&apos;d love to hear from you.
          </p>
          <div className="mt-6">
            <CTAButton href="/trade-stands" variant="accent">
              <Store size={16} className="mr-2" /> Apply for a Trade Stand
            </CTAButton>
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

      {/* Sponsors Carousel */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-text-muted">Thanks to Our Sponsors</p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll gap-16 w-max">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 shrink-0">
                <a href="https://www.countrycarsshaftesbury.co.uk/" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-opacity hover:opacity-70">
                  <img src="/Sponsors/COuntry Cars.avif" alt="Country Cars" className="h-16 w-auto object-contain" />
                </a>
                <a href="https://www.themitredorset.co.uk" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-opacity hover:opacity-70">
                  <img src="/Sponsors/The Mitre Inn Dorset.jpeg" alt="The Mitre" className="h-16 w-auto object-contain" />
                </a>
                <a href="https://www.worldcheeseawards.com" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-opacity hover:opacity-70">
                  <img src="/Sponsors/world-cheese-awards-logo.svg" alt="World Cheese Awards" className="h-16 w-auto object-contain" />
                </a>
                <a href="https://www.truckletruck.co.uk" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-opacity hover:opacity-70">
                  <img src="/Sponsors/TT_Brandmark_FULL_Col_B.avif" alt="The Truckle Truck" className="h-16 w-auto object-contain" />
                </a>
                <a href="https://www.gff.co.uk" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-opacity hover:opacity-70">
                  <img src="/Sponsors/gff-logo.svg" alt="Guild of Fine Food" className="h-16 w-auto object-contain" />
                </a>
                <div className="shrink-0">
                  <img src="/images/SHaftesbury Chamber logo.png" alt="Shaftesbury &amp; District Chamber of Commerce" className="h-16 w-auto object-contain" />
                </div>
              </div>
            ))}
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
              'A day packed full of fun food and festivities on Shaftesbury\'s historic high street, featuring the Gold Hill Cheese Race, a variety of local food and drink producers, chef talks and entertainment.',
            organizer: {
              '@type': 'Organization',
              name: 'Shaftesbury Chamber of Commerce',
              url: 'https://shaftesbury-food-festival.co.uk',
            },
            image: 'https://shaftesbury-food-festival.co.uk/images/gold-hill.jpg',
          }),
        }}
      />
    </>
  )
}
