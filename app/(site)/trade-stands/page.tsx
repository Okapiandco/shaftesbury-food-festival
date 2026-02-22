import { Metadata } from 'next'
import Image from 'next/image'
import { TrendingUp, Users, Megaphone, MapPin } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import VendorCard from '@/components/cards/VendorCard'
import TradeStandForm from '@/components/forms/TradeStandForm'

export const metadata: Metadata = {
  title: 'Trade Stands | Sell at Shaftesbury Food Festival 3rd May 2026',
  description:
    'Over 100 food vendors and trade stands at Shaftesbury Food Festival on 3rd May. Express your interest to become a food vendor, local producer or craft stall.',
}

const benefits = [
  { icon: TrendingUp, title: 'High Footfall', description: 'Over 100 stalls and thousands of visitors throughout the day.' },
  { icon: MapPin, title: 'Prime Location', description: 'Access to high street and Park Walk locations in historic Shaftesbury.' },
  { icon: Megaphone, title: 'Marketing & Promotion', description: 'Social media promotion and media coverage of the festival.' },
  { icon: Users, title: 'Community', description: 'Join a vibrant community of local food producers and artisans.' },
]

export default function TradeStandsPage() {
  return (
    <>
      <PageHeader
        title="Trade Stands & Vendors"
        subtitle="Over 100 food stalls, beverage vendors and craft stands celebrating Dorset produce."
      />

      {/* Food stalls image banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/food-stalls.jpg"
          alt="Food stalls at the Shaftesbury Food Festival"
          fill
          className="object-cover"
        />
      </section>

      {/* Confirmed Vendor */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Confirmed Vendors</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            More vendors are being confirmed regularly. Check back soon for updates.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-sm">
              <VendorCard name="Truckle Truck" category="food-vendor" description="Delicious grilled cheese sandwiches and artisan truckles — a festival favourite." image="/images/truckle-truck.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Why Have a Stall?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 text-center shadow-sm">
                <item.icon size={28} className="mx-auto text-secondary" />
                <h3 className="mt-3 font-bold text-text">{item.title}</h3>
                <p className="mt-2 text-sm text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expression of Interest */}
      <section className="section" id="apply">
        <div className="container mx-auto max-w-2xl px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Expression of Interest</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Interested in having a stall? Fill in the form below and we&apos;ll be in touch.
          </p>
          <div className="mt-8 rounded-xl bg-white p-6 shadow-sm md:p-8">
            <TradeStandForm />
          </div>
        </div>
      </section>
    </>
  )
}
