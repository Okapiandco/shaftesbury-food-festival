import { Metadata } from 'next'
import Image from 'next/image'
import { Train, Bus, Car, MapPin, Clock, PoundSterling, AlertTriangle, Users } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { getFaqs } from '@/lib/faqs'

export const metadata: Metadata = {
  title: 'Getting Here | Shaftesbury Food Festival 3rd May 2026',
  description:
    'Plan your journey to the Shaftesbury Food Festival on 3rd May 2026. Park & Ride from Port Regis School, train, bus, and driving directions from all directions.',
  alternates: { canonical: '/getting-here' },
  openGraph: {
    title: 'Getting Here | Shaftesbury Food Festival 3rd May 2026',
    description:
      'Plan your journey to the Shaftesbury Food Festival. Park & Ride from Port Regis School, train, bus, and driving directions from all directions.',
    images: [{ url: '/Shaftesbury food festival Logo.png', alt: 'Shaftesbury Food Festival 2026 Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Getting Here | Shaftesbury Food Festival 3rd May 2026',
    description:
      'Plan your journey to the Shaftesbury Food Festival. Park & Ride from Port Regis School, train, bus, and driving directions.',
    images: ['/Shaftesbury food festival Logo.png'],
  },
}

export default function GettingHerePage() {
  return (
    <>
      <PageHeader
        title="Getting Here"
        subtitle="Everything you need to plan your journey to the Shaftesbury Food Festival on Sunday 3rd May 2026."
      />

      {/* Parking Warning Banner */}
      <section className="bg-accent/20 border-b border-accent/30">
        <div className="container mx-auto px-4 py-5 max-w-4xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-accent-dark shrink-0 mt-0.5" />
            <p className="text-sm text-text leading-relaxed">
              <span className="font-bold">Parking in Shaftesbury will be very limited on festival day.</span> We&apos;re expecting a large number of visitors — please use the Park &amp; Ride, arrive by public transport, or <span className="font-semibold">car share wherever possible</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Park & Ride — featured section */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Recommended</p>
              <h2 className="mt-2 text-3xl font-bold">Park &amp; Ride</h2>
              <p className="mt-4 text-blue-200 leading-relaxed">
                We strongly encourage visitors to use the official Park &amp; Ride service running from <span className="font-semibold text-white">Port Regis School</span> directly into Shaftesbury town centre.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Port Regis School</p>
                    <p className="text-sm text-blue-200">Motcombe Park, Shaftesbury, SP7 9QA</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">10:00 – 16:30</p>
                    <p className="text-sm text-blue-200">First coach departs Port Regis School roundabout at 10:00. Final return bus leaves Shaftesbury Post Office at 16:30.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Return capacity</p>
                    <p className="text-sm text-blue-200">If the return coach is full, the driver will take you back to Port Regis School so you can collect your passengers by driving back into Shaftesbury.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <PoundSterling className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">£5 per car — cash only</p>
                    <p className="text-sm text-blue-200">All proceeds support the Shaftesbury &amp; District Chamber of Commerce</p>
                  </div>
                </li>
              </ul>
              <a
                href="https://www.eventbrite.com/e/park-and-ride-to-shaftesbury-food-festival-tickets-1987056807401?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-primary hover:bg-accent/90 transition-colors"
              >
                Book on Eventbrite
              </a>
              <p className="mt-2 text-xs text-blue-300">No refunds.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-4">In partnership with</p>
              <div className="flex items-center gap-4 flex-wrap">
                <a href="https://www.themitredorset.co.uk" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
                  <img
                    src="/Sponsors/The Mitre Inn Dorset.jpeg"
                    alt="The Mitre Inn Dorset — Park & Ride Sponsor"
                    className="h-20 w-auto object-contain rounded-lg bg-white p-1"
                  />
                </a>
                <a href="https://www.portregis.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
                  <img
                    src="/Sponsors/Port regis.png"
                    alt="Port Regis School — Park & Ride Partner"
                    className="h-20 w-auto object-contain rounded-lg bg-white p-1"
                  />
                </a>
              </div>
              <p className="mt-4 text-sm text-blue-200 leading-relaxed">
                The Park &amp; Ride service is kindly sponsored by <span className="text-white font-semibold">The Mitre</span>, a beloved local pub in Shaftesbury. Huge thanks to <span className="text-white font-semibold">Port Regis School</span> for generously offering their car park — together they make this excellent service between the school and the festival possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transport options */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Getting to Shaftesbury</h2>
          <p className="mt-3 text-center text-text-light max-w-xl mx-auto">
            Shaftesbury is well connected by road, rail and bus. Here&apos;s how to get here from a variety of directions.
          </p>

          <div className="mt-10 space-y-6">

            {/* By Train */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 flex items-center gap-3 border-b border-gray-200">
                <Train className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-text text-lg">By Train</h3>
              </div>
              <div className="p-6 space-y-4 text-sm text-text-light leading-relaxed">
                <p>
                  The two nearest train stations to Shaftesbury are <span className="font-semibold text-text">Gillingham (Dorset)</span> — approximately 8 miles away — and <span className="font-semibold text-text">Tisbury</span> — approximately 10 miles away. Both are served by South Western Railway on the London Waterloo to Exeter line.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="font-semibold text-text">Gillingham Station (SP8 4QP)</p>
                    <p className="mt-1">~8 miles from Shaftesbury. Taxis available from the station.</p>
                    <p className="mt-1">Approx. 15–20 minutes by taxi.</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="font-semibold text-text">Tisbury Station (SP3 6LQ)</p>
                    <p className="mt-1">~10 miles from Shaftesbury. Taxis available from the station.</p>
                    <p className="mt-1">Approx. 20 minutes by taxi.</p>
                  </div>
                </div>
                <p>
                  We recommend pre-booking a taxi from the station in advance on festival day as demand will be high. <span className="font-semibold text-text">Country Cars Shaftesbury</span> — our headline sponsor — offers reliable taxi services from both stations.
                </p>
              </div>
            </div>

            {/* By Bus */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 flex items-center gap-3 border-b border-gray-200">
                <Bus className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-text text-lg">By Bus</h3>
              </div>
              <div className="p-6 space-y-4 text-sm text-text-light leading-relaxed">
                <p>
                  Local bus services run into Shaftesbury from the surrounding area. The main bus stop is on <span className="font-semibold text-text">High Street</span>, right in the heart of the festival.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="font-semibold text-text">Route 58 — Salisbury to Shaftesbury</p>
                    <p className="mt-1">Via Tisbury and Semley. Check First Bus or Damory Coaches for timetables on the day.</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="font-semibold text-text">Route 309 — Blandford to Shaftesbury</p>
                    <p className="mt-1">Via Iwerne Minster and Fontmell Magna. Check Damory Coaches for Sunday timetables.</p>
                  </div>
                </div>
                <p>
                  Please check the latest timetables before travelling as Sunday services may be limited. Visit <span className="font-semibold text-text">traveldorset.info</span> for up-to-date journey planning.
                </p>
              </div>
            </div>

            {/* By Car */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 flex items-center gap-3 border-b border-gray-200">
                <Car className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-text text-lg">By Car</h3>
              </div>
              <div className="p-6 space-y-4 text-sm text-text-light leading-relaxed">
                <p>
                  Shaftesbury is easily reached by road from most directions. Use postcode <span className="font-semibold text-text">SP7 8JY</span> for the High Street in your sat nav, or head for the Park &amp; Ride at <span className="font-semibold text-text">SP7 9QA</span> (Port Regis School, Motcombe).
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="font-semibold text-text">From the East (Salisbury / London)</p>
                    <p className="mt-1">Take the A30 westbound through Wilton and Barford St Martin, continuing to Shaftesbury. Or join the A350 northbound from Blandford Forum.</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="font-semibold text-text">From the West (Sherborne / Yeovil)</p>
                    <p className="mt-1">Take the A30 eastbound through Milborne Port and Sherborne, then follow signs into Shaftesbury.</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="font-semibold text-text">From the North (Bath / Warminster / Frome)</p>
                    <p className="mt-1">Take the A350 southbound through Westbury and Warminster, then follow signs to Shaftesbury via the B3081.</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="font-semibold text-text">From the South (Blandford / Dorchester)</p>
                    <p className="mt-1">Take the A350 northbound from Blandford Forum through Fontmell Magna and Compton Abbas directly into Shaftesbury.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Car Share CTA */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary/10 p-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-text">Please Car Share</h2>
          <p className="mt-4 text-text-light leading-relaxed max-w-xl mx-auto">
            We&apos;re expecting thousands of visitors this year and parking in Shaftesbury will be very limited. If you&apos;re driving, please car share with friends, family or neighbours wherever possible. It&apos;s better for the environment, easier on the roads, and means more people can enjoy the festival!
          </p>
          <p className="mt-4 text-sm text-text-light">
            If you must drive and park in town, please allow extra time and follow the instructions of our marshals.
          </p>
        </div>
      </section>

      {/* Map embed placeholder */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Find Us</h2>
          <p className="mt-3 text-center text-text-light">
            Shaftesbury High Street &amp; Park Walk, Shaftesbury, Dorset, SP7 8JY
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.8!2d-2.1954!3d51.0044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48729b3c2e9e3e3d%3A0x0!2sShaftesbury%2C+Dorset%2C+SP7+8JY!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shaftesbury Food Festival location map"
            />
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Getting Here FAQs"
        subtitle="Postcodes, Park & Ride, parking and dogs."
        items={getFaqs(['postcodes', 'gettingThere', 'parking', 'dogs'])}
        className="bg-gray-50"
      />
    </>
  )
}
