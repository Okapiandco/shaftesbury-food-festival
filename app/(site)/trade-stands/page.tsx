import { Metadata } from 'next'
import Image from 'next/image'
import { TrendingUp, Users, Megaphone, MapPin } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import VendorCard from '@/components/cards/VendorCard'
import VendorCarousel from '@/components/shared/VendorCarousel'
import TradeStandForm from '@/components/forms/TradeStandForm'

export const metadata: Metadata = {
  title: 'Street Market | Sell at Shaftesbury Food Festival 3rd May 2026',
  description:
    'Over 100 food vendors and street market stalls at Shaftesbury Food Festival on 3rd May. Express your interest to become a food vendor, local producer or craft stall.',
  alternates: { canonical: '/trade-stands' },
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
        title="Street Market"
        subtitle="Over 100 food stalls, beverage vendors and craft stands celebrating Dorset produce."
      />

      {/* Food stalls image banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/Food festvial crowds.jpg"
          alt="Crowds enjoying the food stalls at Shaftesbury Food Festival"
          fill
          className="object-cover"
        />
      </section>

      {/* Confirmed Vendors Carousel */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">A Sample of Our Vendors at the Street Market</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Here is a sample of the traders joining us this year. More vendors are being confirmed regularly — check back soon for updates.
          </p>

          <div className="mt-8">
            <VendorCarousel>
              <VendorCard name="Truckle Truck" category="food-vendor" description="Award-winning cheeses and accompaniments." image="/images/truckle-truck.jpg" />
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
              <VendorCard name="Compton McRae" category="food-vendor" description="Artisan deli and fine food specialists." website="https://www.comptonmcrae.com/" image="/images/Food Trail/COmpton Macrae/Shelves.jpg" />
            </VendorCarousel>
          </div>
        </div>
      </section>

      {/* Trade Stand Gallery */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Our Traders</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Here are some of the fantastic traders joining us this year — and more are signing up every day!
          </p>
          <div className="mt-8 columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
            {[
              { src: '001_barbers.png', alt: 'Barbers' },
              { src: '002_Brushes.png', alt: 'Brushes' },
              { src: '003_Bougee.png', alt: 'Bougee' },
              { src: '004_Bramble.png', alt: 'Bramble' },
              { src: '005_Carslake.png', alt: 'Carslake' },
              { src: '006_Cream.png', alt: 'Cream' },
              { src: '007_Cygnet.jpeg', alt: 'Cygnet' },
              { src: '009_DoughF.png', alt: 'DoughF' },
              { src: '010_Fergus.png', alt: 'Fergus' },
              { src: '011_Ferrario.png', alt: 'Ferrario' },
              { src: '012_Flo.png', alt: 'Flo' },
              { src: '013_Flower.png', alt: 'Flower' },
              { src: '014_Grace.png', alt: 'Grace' },
              { src: '015_Hidden.png', alt: 'Hidden' },
              { src: '016_Indy.jpg', alt: 'Indy' },
              { src: '017_Isobel.jpg', alt: 'Isobel' },
              { src: '018_Lustful.png', alt: 'Lustful' },
              { src: '019_Orchard.jpg', alt: 'Orchard' },
              { src: '020_Ping.jpg', alt: 'Ping' },
              { src: '021_Shanty.png', alt: 'Shanty' },
              { src: '022_Shelley.png', alt: 'Shelley' },
              { src: '025_Falafel.jpg', alt: 'Falafel' },
              { src: '026_Still.png', alt: 'Still' },
              { src: '027_srilicious.jpg', alt: 'Srilicious' },
              { src: '028_fudge.png', alt: 'Fudge' },
              { src: '029_maccaroom.png', alt: 'Maccaroom' },
              { src: '030_wax melt.png', alt: 'Wax Melt' },
              { src: '031_veil.jpg', alt: 'Veil' },
              { src: '032_wessex.png', alt: 'Wessex' },
              { src: '033_weymouth.png', alt: 'Weymouth' },
              { src: '034_whimsical.png', alt: 'Whimsical' },
              { src: '035_waffles.jpg', alt: 'Waffles' },
              { src: 'Book and Bucket Cheese.jpg', alt: 'Book and Bucket Cheese' },
              { src: 'Catherine Potter crafts.jpg', alt: 'Catherine Potter Crafts' },
              { src: 'Compton Candle Co.jpg', alt: 'Compton Candle Co' },
              { src: 'Crepe Salut.png', alt: 'Crepe Salut' },
              { src: 'Farmgirl Sausages.jpg', alt: 'Farmgirl Sausages' },
              { src: 'Hettie Hen Scotch Eggs.jpg', alt: 'Hettie Hen Scotch Eggs' },
              { src: 'Oxfords bakery.png', alt: 'Oxfords Bakery' },
              { src: 'Pretty Little Unicorn.png', alt: 'Pretty Little Unicorn' },
              { src: 'South Paddocks.png', alt: 'South Paddocks' },
              { src: 'The Olive Pit.png', alt: 'The Olive Pit' },
            ].map((img) => (
              <div key={img.src} className="break-inside-avoid">
                <img
                  src={`/images/TRade Stands/${img.src}`}
                  alt={img.alt}
                  className="w-full rounded-lg shadow-sm"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade stands atmosphere */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/Trade stands at the festival.jpg"
          alt="Trade stands and vendors at the Shaftesbury Food Festival"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl font-bold md:text-4xl">Join Over 100 Stalls</h2>
            <p className="mt-3 text-lg text-blue-200">Showcase your produce to thousands of visitors</p>
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
