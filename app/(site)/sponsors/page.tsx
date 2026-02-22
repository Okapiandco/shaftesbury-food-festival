import { Metadata } from 'next'
import { Heart, Eye, Megaphone, Award } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import CTAButton from '@/components/shared/CTAButton'

export const metadata: Metadata = {
  title: 'Sponsors | Shaftesbury Food Festival 3rd May 2026',
  description:
    'Sponsor the Shaftesbury Food Festival on 3rd May 2026. Gold, Silver, Bronze and In-Kind sponsorship opportunities available. Support Dorset food, the Gold Hill Cheese Race and local community.',
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

      {/* Coming Soon */}
      <section className="section">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-2xl font-bold text-text md:text-3xl">Sponsors Coming Soon</h2>
          <p className="mt-4 text-text-light leading-relaxed">
            We are currently welcoming sponsors for the Shaftesbury Food Festival 2026. Sponsorship opportunities are available at Gold, Silver, Bronze and In-Kind levels. Check back soon for our confirmed sponsors.
          </p>
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
