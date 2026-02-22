import { Metadata } from 'next'
import Image from 'next/image'
import { AlertTriangle, Calendar, MapPin, Trophy, Users, Droplets } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import CTAButton from '@/components/shared/CTAButton'
import CheeseRaceForm from '@/components/forms/CheeseRaceForm'

export const metadata: Metadata = {
  title: 'Gold Hill Cheese Race | Shaftesbury Food Festival 3rd May 2026',
  description:
    'Enter the world-famous Gold Hill Cheese Race on 3rd May at Shaftesbury Food Festival. All age groups welcome. Carry a 23kg cheese up the iconic Gold Hill. Register now!',
}

export default function CheeseRacePage() {
  return (
    <>
      <PageHeader
        title="The Gold Hill Cheese Race"
        subtitle="The world-famous race up iconic Gold Hill — made famous by the Hovis advert."
      />

      {/* Race Overview */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-text md:text-3xl">The World Famous Gold Hill Cheese Race</h2>
              <p className="mt-4 text-text-light leading-relaxed">
                One of the most iconic events at the Shaftesbury Food Festival — the Gold Hill Cheese Race challenges contestants to carry a 23kg round of cheese up the famous cobbled Gold Hill, made world-famous by the Hovis bread advert.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                This beloved tradition draws crowds from across the region and beyond. Participants of all ages are catered for, with races for different age groups throughout the morning. It&apos;s a true test of strength, stamina and determination on one of England&apos;s most picturesque and steepest streets.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                Generous prizes are available from our sponsors, and every entrant receives a race number on entry. Whether you&apos;re here to race or cheer — it&apos;s an unforgettable experience.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/gold-hill.jpg"
                alt="Gold Hill, Shaftesbury — the iconic cobbled street"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Race Details */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Race Details</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <Calendar size={28} className="mx-auto text-primary" />
              <h3 className="mt-3 font-bold text-text">Date &amp; Time</h3>
              <p className="mt-1 text-sm text-text-light">3rd May 2026<br />11:00 AM onwards</p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <MapPin size={28} className="mx-auto text-primary" />
              <h3 className="mt-3 font-bold text-text">Location</h3>
              <p className="mt-1 text-sm text-text-light">Gold Hill<br />Shaftesbury, Dorset</p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <Users size={28} className="mx-auto text-primary" />
              <h3 className="mt-3 font-bold text-text">Age Groups</h3>
              <p className="mt-1 text-sm text-text-light">All ages catered for<br />Multiple race categories</p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <Trophy size={28} className="mx-auto text-primary" />
              <h3 className="mt-3 font-bold text-text">Prizes</h3>
              <p className="mt-1 text-sm text-text-light">Generous prizes<br />from our sponsors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Health Warning */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle size={32} className="mt-1 shrink-0 text-red-600" />
              <div>
                <h2 className="text-xl font-bold text-red-800">Important Information</h2>
                <ul className="mt-3 space-y-2 text-sm text-red-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                    <strong>This is a strenuous race and not for the faint-hearted.</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                    Not suitable for anyone with existing medical conditions.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                    <span>On hot days, bring your own water <Droplets size={14} className="inline" /> — we will supply water stations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                    Please check with a medical professional if in doubt.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Form */}
      <section className="section bg-gray-50" id="enter">
        <div className="container mx-auto max-w-2xl px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Enter the Cheese Race</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Fill in the form below to register your entry. You&apos;ll receive race details and your race number via email.
          </p>
          <div className="mt-8 rounded-xl bg-white p-6 shadow-sm md:p-8">
            <CheeseRaceForm />
          </div>
        </div>
      </section>

      {/* Sponsorship */}
      <section className="section bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-text md:text-3xl">Sponsor the Cheese Race</h2>
          <p className="mx-auto mt-3 max-w-xl text-text-light">
            Help us celebrate this iconic event. Sponsorship opportunities available for businesses who want to be part of something truly special.
          </p>
          <div className="mt-6">
            <CTAButton href="/sponsors" variant="primary">Learn About Sponsorship</CTAButton>
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
            name: 'Gold Hill Cheese Race',
            startDate: '2026-05-03T11:00:00+01:00',
            endDate: '2026-05-03T13:00:00+01:00',
            location: { '@type': 'Place', name: 'Gold Hill, Shaftesbury', address: { '@type': 'PostalAddress', addressLocality: 'Shaftesbury', addressRegion: 'Dorset', addressCountry: 'GB' } },
            description: 'The world-famous Gold Hill Cheese Race. Contestants carry a 23kg cheese up iconic Gold Hill.',
            superEvent: { '@type': 'Event', name: 'Shaftesbury Food Festival 2026' },
          }),
        }}
      />
    </>
  )
}
