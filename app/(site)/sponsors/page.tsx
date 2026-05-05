import { Metadata } from 'next'
import { Heart, Eye, Megaphone, Award } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import CTAButton from '@/components/shared/CTAButton'

export const metadata: Metadata = {
  title: 'Sponsors | Shaftesbury Food Festival 3rd May 2026',
  description:
    'Sponsor the Shaftesbury Food Festival on 3rd May 2026. Gold, Silver, Bronze and In-Kind sponsorship opportunities available. Support Dorset food, the Gold Hill Cheese Race and local community.',
  alternates: { canonical: '/sponsors' },
}

const sponsorBenefits = [
  { icon: Eye, title: 'Brand Visibility', description: 'Your logo on festival materials, website, and social media channels.' },
  { icon: Megaphone, title: 'Marketing Reach', description: 'Exposure to thousands of festival-goers and extensive media coverage.' },
  { icon: Heart, title: 'Community Impact', description: 'Show your support for the local community and Dorset food producers.' },
  { icon: Award, title: 'VIP Access', description: 'Exclusive sponsor benefits including VIP area access and recognition.' },
]

export default function SponsorsPage() {
  return (
    <>
      <PageHeader
        title="Festival Sponsors"
        subtitle="Thank you to our generous sponsors who make this festival possible."
      />

      {/* Confirmed Sponsors */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Our Confirmed Sponsors</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Thank you to the following organisations for their generous support.
          </p>

          {/* Headline Sponsor */}
          <div className="mt-12">
            <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-text-muted mb-6">Headline Sponsor</h3>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <a href="https://www.countrycarsshaftesbury.co.uk/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80 text-center">
                <img src="/Sponsors/COuntry Cars.avif" alt="Country Cars" className="h-28 w-auto object-contain" />
                <p className="mt-2 text-sm text-text-light max-w-md mx-auto">For comfortable, reliable and trusted taxi services covering Shaftesbury, Dorset and beyond...plus airport taxi services too!</p>
              </a>
            </div>
          </div>

          {/* Cornerstone Sponsor */}
          <div className="mt-14">
            <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-text-muted mb-6">Cornerstone Partners</h3>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <a href="https://www.themitredorset.co.uk" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                <img src="/Sponsors/The Mitre Inn Dorset.jpeg" alt="The Mitre" className="h-24 w-auto object-contain" />
              </a>
              <a href="https://www.portregis.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                <img src="/Sponsors/Port regis.png" alt="Port Regis School" className="h-24 w-auto object-contain" />
              </a>
            </div>
          </div>

          {/* Cheese Race Category */}
          <div className="mt-14">
            <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-text-muted mb-6">Gold Hill Cheese Race — Category Sponsors</h3>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <a href="https://www.worldcheeseawards.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                <img src="/Sponsors/world-cheese-awards-logo.svg" alt="World Cheese Awards" className="h-24 w-auto object-contain" />
              </a>
              <a href="https://www.truckletruck.co.uk" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                <img src="/Sponsors/TT_Brandmark_FULL_Col_B.avif" alt="The Truckle Truck" className="h-24 w-auto object-contain" />
              </a>
              <div className="transition-opacity hover:opacity-80">
                <img src="/images/SHaftesbury Chamber logo.png" alt="Shaftesbury &amp; District Chamber of Commerce" className="h-24 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* MasterChefs Live */}
          <div className="mt-14">
            <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-text-muted mb-6">MasterChefs Live — Sponsor</h3>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <a href="https://www.gff.co.uk" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                <img src="/Sponsors/gff-logo.svg" alt="Guild of Fine Food" className="h-24 w-auto object-contain" />
              </a>
            </div>
          </div>

          {/* Community Supporters */}
          <div className="mt-14">
            <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-text-muted mb-6">Community Supporters</h3>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <div className="transition-opacity hover:opacity-80">
                <img src="/Sponsors/Grassby Funeral Services.svg" alt="Grassby Funeral Services" className="h-24 w-auto object-contain" />
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-sm text-text-muted">More sponsors to be announced soon.</p>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Become a Sponsor</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-blue-200">
            Help us celebrate Shaftesbury&apos;s food and hospitality. Sponsorship opportunities are available at all levels.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sponsorBenefits.map((item) => (
              <div key={item.title} className="rounded-xl bg-white/10 p-6 text-center">
                <item.icon size={28} className="mx-auto text-accent" />
                <h3 className="mt-3 font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-blue-200">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton href="/contact" variant="accent">Enquire About Sponsorship</CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
