import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChefHat, Store, Trophy, Heart, Footprints, ArrowRight, Sparkles } from 'lucide-react'
import CTAButton from '@/components/shared/CTAButton'
import VendorCard from '@/components/cards/VendorCard'
import SponsorsCarousel from '@/components/shared/SponsorsCarousel'
import UpdatesSignup from '@/components/shared/UpdatesSignup'
import { whatsNew } from '@/lib/whatsNew'

export const metadata: Metadata = {
  title: { absolute: 'Shaftesbury Food Festival 2027 | Food Trail 1st May, Festival 2nd May' },
  description:
    'Shaftesbury Food Festival 2027: the Food Trail on Saturday 1st May, then the Street Market, Gold Hill cheese races and chefs live on Sunday 2nd May. A weekend of fabulous food in the town and beyond.',
}

const topline = [
  {
    href: '/food-trail',
    icon: Footprints,
    title: 'Food Trail',
    when: 'Saturday 1st May',
    text: 'Visit local producers in the countryside.',
    style: 'bg-leaf text-white hover:bg-leaf-dark',
  },
  {
    href: '/cheese-race',
    icon: Trophy,
    title: 'Cheese Races',
    when: 'Sunday 2nd May',
    text: 'Up iconic Gold Hill. Watch, or enter if you dare.',
    style: 'bg-accent text-primary hover:bg-accent-dark',
  },
  {
    href: '/trade-stands',
    icon: Store,
    title: 'Market',
    when: 'Sunday 2nd May',
    text: 'Over 120 stalls of food, drink and crafts.',
    style: 'bg-tomato text-white hover:bg-tomato-dark',
  },
  {
    href: '/food-demos',
    icon: ChefHat,
    title: 'Live Action Kitchen',
    when: 'Sunday 2nd May',
    text: 'Top chefs cooking live at the Town Hall.',
    style: 'bg-plum text-white hover:bg-plum-dark',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero: text and photo side by side, never text over a photo */}
      <section className="bg-amber-50 animate-fade-in">
        <div className="container mx-auto grid items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
              Shaftesbury Food Festival 2027
            </h1>
            <div className="mt-5 space-y-2">
              <p className="inline-block rounded-lg bg-leaf px-4 py-2 text-base font-bold text-white md:text-lg">
                Food Trail: Saturday 1st May
              </p>
              <br />
              <p className="inline-block rounded-lg bg-tomato px-4 py-2 text-base font-bold text-white md:text-lg">
                Market, cheese races and chefs live: Sunday 2nd May
              </p>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-text">
              <span className="font-bold text-tomato">It&apos;s back!</span> Get ready for a weekend of fabulous food both in the town and beyond, chefs on stage and frantic cheese racing&hellip;
            </p>
            <p className="mt-3 text-sm italic text-text-light">
              Shaftesbury Food Festival &hellip; proudly local, deliciously global.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-accent" aria-hidden="true" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/Cheese Race Image.jpg"
                alt="The Gold Hill Cheese Race at the Shaftesbury Food Festival"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top line buttons */}
      <section className="bg-white py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {topline.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group flex flex-col rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg md:p-6 ${item.style}`}
              >
                <item.icon size={30} aria-hidden="true" />
                <h2 className="mt-3 text-lg font-bold md:text-xl">{item.title}</h2>
                <p className="text-xs font-bold uppercase tracking-wider opacity-90">{item.when}</p>
                <p className="mt-2 text-sm opacity-95">{item.text}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-bold">
                  Find out more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What's new */}
      <section className="bg-white pb-12 md:pb-16" aria-labelledby="whats-new">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border-2 border-accent bg-amber-50 p-6 md:p-8">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-tomato" aria-hidden="true" />
              <h2 id="whats-new" className="text-2xl font-bold text-primary md:text-3xl">What&apos;s new</h2>
            </div>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {whatsNew.map((item) => (
                <li key={item.title} className="flex flex-col rounded-xl bg-white p-4 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-tomato">{item.date}</span>
                  <h3 className="mt-1 font-bold text-text">{item.title}</h3>
                  <p className="mt-1 text-sm text-text-light">{item.text}</p>
                  <Link href={item.href} className="mt-auto pt-3 text-sm font-bold text-primary hover:underline">
                    {item.cta} &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Food Trail */}
      <section className="bg-leaf-light section-sm md:py-20">
        <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md md:order-first">
            <Image
              src="/Events/Gold hill organic farm.jpg"
              alt="Gold Hill Organic Farm, a stop on the Shaftesbury Food Trail"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-leaf-dark">Saturday 1st May</p>
            <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">Food Trail</h2>
            <p className="mt-4 text-lg leading-relaxed text-text">
              Visit wonderful local producers in situ on the Festival Food Trail (Saturday 1 May).
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/food-trail"
                className="inline-flex min-h-[44px] items-center rounded-md bg-leaf px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-leaf-dark"
              >
                Explore the trail
              </Link>
              <Link
                href="#updates"
                className="inline-flex min-h-[44px] items-center rounded-md border-2 border-leaf px-6 py-3 text-sm font-semibold uppercase tracking-wide text-leaf-dark transition-colors hover:bg-white"
              >
                Get trail updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sunday: market, cheese races, chefs */}
      <section className="bg-tomato-light section-sm md:py-20">
        <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-tomato-dark">Sunday 2nd May</p>
            <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
              Market, cheese races and chefs live
            </h2>
            <ul className="mt-5 space-y-4 text-lg leading-relaxed text-text">
              <li className="flex gap-3">
                <Store className="mt-1 h-5 w-5 shrink-0 text-tomato" aria-hidden="true" />
                Browse over 120 fantastic stalls offering the best of local and global food, drinks and crafts.
              </li>
              <li className="flex gap-3">
                <Heart className="mt-1 h-5 w-5 shrink-0 text-tomato" aria-hidden="true" />
                Savour delicious on-the-spot food offerings in historic surroundings.
              </li>
              <li className="flex gap-3">
                <Trophy className="mt-1 h-5 w-5 shrink-0 text-tomato" aria-hidden="true" />
                Watch, or enter if you dare, the famous cheese races up iconic Gold Hill.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/trade-stands"
                className="inline-flex min-h-[44px] items-center rounded-md bg-tomato px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-tomato-dark"
              >
                The market
              </Link>
              <Link
                href="/cheese-race"
                className="inline-flex min-h-[44px] items-center rounded-md bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-accent-dark"
              >
                Cheese races
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/images/Food festvial crowds.jpg"
              alt="Crowds enjoying the Shaftesbury Food Festival street market"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Market update */}
      <section className="section-sm bg-white md:py-20" id="market-update">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-tomato">Market update</p>
            <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">Street Market 2027</h2>
            <p className="mt-4 text-lg text-text">
              Shop, eat, browse, discover, eat some more! Even bigger for 2027. We are taking expressions of interest from traders now, and we will add new traders here as they confirm.
            </p>
            <p className="mt-3 text-text-light">
              Here&apos;s a taster of what&apos;s on offer (as per 2026).
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            <VendorCard name="Truckle Truck" category="food-vendor" image="/images/truckle-truck.jpg" />
            <VendorCard name="Book and Bucket Cheese" category="food-vendor" image="/images/TRade Stands/Book and Bucket Cheese.jpg" />
            <VendorCard name="Catherine Potter Crafts" category="craft" image="/images/TRade Stands/Catherine Potter crafts.jpg" />
            <VendorCard name="Compton Candle Co" category="craft" image="/images/TRade Stands/Compton Candle Co.jpg" />
            <VendorCard name="Crepe Salut" category="food-vendor" image="/images/TRade Stands/Crepe Salut.png" />
            <VendorCard name="Farmgirl Sausages" category="food-vendor" image="/images/TRade Stands/Farmgirl Sausages.jpg" />
            <VendorCard name="Hettie Hen Scotch Eggs" category="food-vendor" image="/images/TRade Stands/Hettie Hen Scotch Eggs.jpg" />
            <VendorCard name="Oxfords Bakery" category="food-vendor" image="/images/TRade Stands/Oxfords bakery.png" />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/trade-stands#apply"
              className="inline-flex min-h-[44px] items-center rounded-md bg-tomato px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-tomato-dark"
            >
              Be part of the market
            </Link>
            <CTAButton href="/trade-stands" variant="secondary">See the full taster</CTAButton>
          </div>
        </div>
      </section>

      {/* Live Action Kitchen */}
      <section className="bg-plum-light section-sm md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-plum-dark">Sunday 2nd May</p>
          <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">Live Action Kitchen</h2>
          <p className="mt-4 text-lg leading-relaxed text-text">
            Watch top chefs cook live from their latest books at free demonstration sessions in Shaftesbury&apos;s historic town hall. Hosted by destination bookshop The Kitchen Table.
          </p>
          <p className="mt-3 text-text-light">Participating chefs will be announced early in 2027.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="#updates"
              className="inline-flex min-h-[44px] items-center rounded-md bg-plum px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-plum-dark"
            >
              Register for updates
            </Link>
            <Link
              href="/food-demos"
              className="inline-flex min-h-[44px] items-center rounded-md border-2 border-plum px-6 py-3 text-sm font-semibold uppercase tracking-wide text-plum-dark transition-colors hover:bg-white"
            >
              About Live Action Kitchen
            </Link>
          </div>
        </div>
      </section>

      {/* Register for updates */}
      <section id="updates" className="bg-amber-50 section-sm md:py-20 scroll-mt-24">
        <div className="container mx-auto max-w-2xl px-4">
          <UpdatesSignup
            defaultTopics={['chef-demos', 'food-trail']}
            heading="Register for updates"
            intro="Be first to hear about the chefs, the Food Trail stops and new traders. Tick what you want to hear about."
          />
        </div>
      </section>

      {/* Headline Sponsor */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">Headline Sponsor</p>
          <a href="https://www.countrycarsshaftesbury.co.uk/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block transition-opacity hover:opacity-80">
            <img src="/Sponsors/COuntry Cars.avif" alt="Country Cars, Headline Sponsor" className="mx-auto h-20 w-auto object-contain" />
          </a>
          <p className="mx-auto mt-2 max-w-md text-sm text-text-light">For comfortable, reliable and trusted taxi services covering Shaftesbury, Dorset and beyond...plus airport taxi services too!</p>
        </div>
      </section>

      {/* Sponsors Carousel */}
      <SponsorsCarousel />

      {/* Volunteers and the Chamber */}
      <section className="bg-primary section-sm text-white md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Heart className="mx-auto h-10 w-10 text-accent" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Run by volunteers</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/95">
            Shaftesbury Food Festival is run on a not-for-profit basis by a small team of volunteers with the backing of the Chamber of Commerce.
          </p>
          <p className="mt-4 leading-relaxed text-white/90">
            If you love what we do and would like to be a part of it, why not volunteer? We can use anything from a few hours over the Festival weekend to a range of skills in the months of planning ahead of it&hellip;
          </p>
          <div className="mt-6">
            <CTAButton href="/volunteers" variant="accent">Volunteer with us</CTAButton>
          </div>
          <p className="mt-8 text-sm text-white/90">
            Interested in Shaftesbury Chamber of Commerce?{' '}
            <a
              href="https://www.shaftesburychamber.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-accent underline hover:text-white"
            >
              Find out about joining the Chamber
            </a>
            .
          </p>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Shaftesbury Food Festival 2027',
            startDate: '2027-05-02T10:00:00+01:00',
            endDate: '2027-05-02T16:00:00+01:00',
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
              'A weekend of fabulous food in Shaftesbury and beyond: the Food Trail on Saturday 1st May, then the Street Market, Gold Hill cheese races and chefs live on Sunday 2nd May.',
            organizer: {
              '@type': 'Organization',
              name: 'Shaftesbury Chamber of Commerce',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaftesbury-food-festival.co.uk',
            },
            image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaftesbury-food-festival.co.uk'}/images/Food%20Demos.jpg`,
          }),
        }}
      />
    </>
  )
}
