import { Metadata } from 'next'
import { Search, Download, UtensilsCrossed, Award, MapPin, ClipboardList } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import CTAButton from '@/components/shared/CTAButton'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { getFaqs } from '@/lib/faqs'

export const metadata: Metadata = {
  title: 'Ingredients Hunt | Shaftesbury Food Festival 2nd May 2027',
  description:
    'Join the Shaftesbury Ingredients Hunt — a treasure hunt through the town\'s shops. Find hidden ingredients, work out the mystery recipe and win prizes at the Food Festival on 2nd May 2027. 10am–4pm.',
  alternates: { canonical: '/ingredients-hunt' },
}

const howItWorks = [
  {
    icon: ClipboardList,
    step: '1',
    title: 'Pick Up Your Card',
    description: 'Collect your Ingredients Hunt card from the festival information point on the High Street.',
  },
  {
    icon: Search,
    step: '2',
    title: 'Hunt the Ingredients',
    description: 'Visit participating shops around Shaftesbury. Each shop has a mystery ingredient on display — find it and write it on your card.',
  },
  {
    icon: UtensilsCrossed,
    step: '3',
    title: 'Work Out the Recipe',
    description: 'Once you\'ve collected all the ingredients, work out what recipe they make. Write your answer on the card.',
  },
  {
    icon: Award,
    step: '4',
    title: 'Claim Your Prize',
    description: 'Hand in your completed card at the festival. Correct answers go into the draw for prizes!',
  },
]

export default function IngredientsHuntPage() {
  return (
    <>
      <PageHeader
        title="The Ingredients Hunt"
        subtitle="A treasure hunt through Shaftesbury's shops — find the ingredients, work out the recipe, win a prize!"
      />

      {/* Introduction */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent-dark">
              <Search size={28} />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-text md:text-3xl">
              Can You Crack the Mystery Recipe?
            </h2>
            <p className="mt-4 text-text-light leading-relaxed">
              The Ingredients Hunt is a treasure hunt with a Dorset twist. 10 shops across Shaftesbury will
              have an ingredient on display. Your challenge is to hunt down the shops, identify the
              ingredient in each and, once you have the 10, work out what iconic local food you&apos;d make
              from them. Hand your entrance form in at the Festival HQ or the Arts Centre to enter the
              prize draw.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">How It Works</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div key={item.step} className="rounded-xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                  <item.icon size={24} />
                </div>
                <div className="mx-auto mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-primary text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="mt-3 font-bold text-text">{item.title}</h3>
                <p className="mt-2 text-sm text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Printable Entrance Form */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Download Your Entrance Form</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Prefer to get a head start? Print your entrance form at home, fill it in as you hunt, then hand it
            in at the Festival HQ or the Arts Centre to enter the prize draw.
          </p>
          <div className="mt-10 mx-auto max-w-2xl">
            <div className="rounded-xl bg-white p-8 shadow-sm text-center">
              <Download size={40} className="mx-auto text-primary" />
              <p className="mt-4 text-lg font-semibold text-text">Ingredients Hunt Entrance Form</p>
              <p className="mt-2 text-sm text-text-light">
                A4, ready to print. Forms will also be available to pick up on festival day.
              </p>
              <div className="mt-6">
                <a
                  href="/downloads/ingredients-hunt-entrance-form.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
                >
                  <Download size={16} />
                  Download Entrance Form (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Info */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Rules &amp; Information</h2>
            <div className="mt-8 space-y-4">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-bold text-text">Who can take part?</h3>
                <p className="mt-1 text-sm text-text-light">
                  Everyone! The Ingredients Hunt is open to all ages. Children under 12 should be accompanied by an adult.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-bold text-text">Is it free?</h3>
                <p className="mt-1 text-sm text-text-light">
                  Yes — the hunt is completely free to enter. Just pick up your card from the information point.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-bold text-text">When does it run?</h3>
                <p className="mt-1 text-sm text-text-light">
                  The hunt runs throughout festival day on 2nd May 2027. Collect your card from 10 AM and hand it in by 4 PM.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-bold text-text">What do I win?</h3>
                <p className="mt-1 text-sm text-text-light">
                  All correct entries go into a prize draw. Prizes will be announced closer to the festival — expect delicious food-related rewards!
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-bold text-text">Where do I start?</h3>
                <p className="mt-1 text-sm text-text-light flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                  Pick up your card from the Festival Information Point on the High Street, then follow the list of shops on your card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-text md:text-3xl">Want Your Shop to Take Part?</h2>
          <p className="mx-auto mt-3 max-w-xl text-text-light">
            If you run a shop in Shaftesbury and would like to host an ingredient, we&apos;d love to hear from you.
          </p>
          <div className="mt-6">
            <CTAButton href="/contact" variant="primary">Get in Touch</CTAButton>
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Family FAQs"
        subtitle="Bringing the kids? Here’s what’s on and how to get involved."
        items={getFaqs(['family', 'free', 'finish'])}
        className="bg-gray-50"
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Shaftesbury Ingredients Hunt',
            description: 'A treasure hunt through Shaftesbury shops. Find hidden ingredients, work out the mystery recipe and win prizes.',
            startDate: '2027-05-02T10:00:00+01:00',
            endDate: '2027-05-02T16:00:00+01:00',
            location: {
              '@type': 'Place',
              name: 'Shaftesbury Town Centre',
              address: { '@type': 'PostalAddress', addressLocality: 'Shaftesbury', addressRegion: 'Dorset', addressCountry: 'GB' },
            },
            isAccessibleForFree: true,
            superEvent: { '@type': 'Event', name: 'Shaftesbury Food Festival 2027' },
          }),
        }}
      />
    </>
  )
}
