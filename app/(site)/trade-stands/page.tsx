import { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/shared/PageHeader'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { getFaqs } from '@/lib/faqs'

export const metadata: Metadata = {
  title: 'Street Market | Sell at Shaftesbury Food Festival 3rd May 2026',
  description:
    'Over 100 food vendors and street market stalls at Shaftesbury Food Festival on 3rd May. Express your interest to become a food vendor, local producer or craft stall.',
  alternates: { canonical: '/trade-stands' },
}

export default function TradeStandsPage() {
  return (
    <>
      <PageHeader
        title="Street Market"
        subtitle="Come and taste, try, eat and buy at over 100 stalls celebrating food, ingredients, drinks and local artisans."
      />

      {/* Food stalls image banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/high-street-festival.jpg"
          alt="Shaftesbury High Street alive with festival-goers and stalls"
          fill
          className="object-cover"
        />
      </section>

      {/* Trade Stand Gallery */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Explore the Market</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Here&apos;s a taster of what&apos;s on offer at the Shaftesbury Food Festival.
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
            <h2 className="text-3xl font-bold md:text-4xl">Over 100 Stalls</h2>
            <p className="mt-3 text-lg text-blue-200">Filling Shaftesbury&apos;s historic high street and Park Walk</p>
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Street Market FAQs"
        subtitle="Everything you need to know about visiting the Street Market."
        items={getFaqs(['streetMarket'])}
        className="bg-gray-50"
      />
    </>
  )
}
