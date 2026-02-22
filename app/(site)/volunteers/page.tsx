import { Metadata } from 'next'
import Image from 'next/image'
import { Heart, Users, Star, Coffee, Shield, Clock } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import CTAButton from '@/components/shared/CTAButton'
import VolunteerForm from '@/components/forms/VolunteerForm'

export const metadata: Metadata = {
  title: 'Volunteer | Shaftesbury Food Festival 3rd May 2026',
  description:
    'Volunteer at the Shaftesbury Food Festival on 3rd May 2026. Roles include marshalling, event support, setup and hospitality. Join the team and help bring Dorset\'s biggest food celebration to life.',
}

const roles = [
  { icon: Shield, title: 'Marshal', description: 'Help manage crowd flow and ensure safety across the festival grounds.' },
  { icon: Users, title: 'Registration', description: 'Welcome visitors, handle cheese race sign-ups and distribute race numbers.' },
  { icon: Coffee, title: 'Hospitality', description: 'Look after vendors, sponsors and VIPs throughout the day.' },
  { icon: Clock, title: 'Setup & Cleanup', description: 'Help set up stalls in the morning and pack down at the end of the day.' },
  { icon: Star, title: 'Pre-event Planning', description: 'Get involved in the weeks before — logistics, marketing, coordination.' },
]

const whyVolunteer = [
  { icon: Heart, title: 'Support Your Community', description: 'Give back to Shaftesbury and help create an amazing day for everyone.' },
  { icon: Users, title: 'Meet Local Producers', description: 'Connect with the food producers, chefs and artisans who make Dorset special.' },
  { icon: Star, title: 'Be Part of an Icon', description: 'The Gold Hill Cheese Race and Food Festival are iconic Shaftesbury events.' },
]

export default function VolunteersPage() {
  return (
    <>
      <PageHeader
        title="Become a Volunteer"
        subtitle="Help us create an unforgettable day of food and festivities."
      />

      {/* Volunteer Roles */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Volunteer Opportunities</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            We need enthusiastic volunteers for a variety of roles — both on the day and in the lead-up to the festival.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <div key={role.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <role.icon size={28} className="text-secondary" />
                <h3 className="mt-3 text-lg font-bold text-text">{role.title}</h3>
                <p className="mt-2 text-sm text-text-light">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Why Volunteer?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {whyVolunteer.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent-dark">
                  <item.icon size={28} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-text">{item.title}</h3>
                <p className="mt-2 text-sm text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival image */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/gifts.jpg"
          alt="Gifts and crafts at the Shaftesbury Food Festival"
          fill
          className="object-cover"
        />
      </section>

      {/* Volunteer Form */}
      <section className="section" id="apply">
        <div className="container mx-auto max-w-2xl px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Expression of Interest</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Fill in the form below and we&apos;ll contact you with more details about volunteering.
          </p>
          <div className="mt-8 rounded-xl bg-white p-6 shadow-sm md:p-8">
            <VolunteerForm />
          </div>
        </div>
      </section>

      {/* Chamber of Commerce */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Shaftesbury Chamber of Commerce</h2>
          <p className="mt-4 text-blue-200 leading-relaxed">
            The Shaftesbury Food Festival is proudly run by volunteers from the Shaftesbury Chamber of Commerce. The Chamber supports local businesses and brings the community together through events like this. Interested in joining the Chamber? Get in touch.
          </p>
          <div className="mt-6">
            <CTAButton href="/contact" variant="accent">Contact the Chamber</CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
