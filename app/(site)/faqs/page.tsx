import { Metadata } from 'next'
import PageHeader from '@/components/shared/PageHeader'
import FAQAccordion from '@/components/shared/FAQAccordion'
import CTAButton from '@/components/shared/CTAButton'
import { faqs, allFaqOrder } from '@/lib/faqs'

export const metadata: Metadata = {
  title: 'FAQs | Shaftesbury Food Festival 2026',
  description:
    'Frequently asked questions about the Shaftesbury Food Festival 2026 — dates, location, tickets, Park & Ride, the Cheese Race, Food Trail, MasterChefs Live, accessibility and more.',
  alternates: { canonical: '/faqs' },
}

const allFaqs = allFaqOrder.map((k) => faqs[k])

export default function FAQsPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about visiting the Shaftesbury Food Festival 2026."
      />

      <FAQAccordion items={allFaqs} />

      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-text md:text-3xl">Still have questions?</h2>
          <p className="mx-auto mt-3 max-w-xl text-text-light">
            Can&apos;t find what you&apos;re looking for? Get in touch and we&apos;ll be happy to help.
          </p>
          <div className="mt-6">
            <CTAButton href="/contact" variant="primary">Contact Us</CTAButton>
          </div>
        </div>
      </section>

      {/* JSON-LD FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: allFaqOrder.map((key) => ({
              '@type': 'Question',
              name: faqs[key].question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faqPlainText(key),
              },
            })),
          }),
        }}
      />
    </>
  )
}

function faqPlainText(key: typeof allFaqOrder[number]): string {
  const map: Record<string, string> = {
    when: 'The festival takes place over three days on the early May bank holiday weekend: Friday 1st May 2026 — The Great Food Quiz at Sorelle (SOLD OUT); Saturday 2nd May 2026 — The Food Trail; Sunday 3rd May 2026 — Main town festival day (10am–5pm).',
    where: 'On Sunday, the main festival is based across Gold Hill, Shaftesbury High Street, Park Walk and the town centre (SP7 8LY). On Saturday, the Food Trail extends into the surrounding Dorset countryside.',
    postcodes: 'Shaftesbury town centre (High Street & Park Walk): SP7 8LY. Park & Ride (Port Regis School): SP7 9QA.',
    free: 'Yes, the vast majority of the festival is FREE entry. Some experiences are ticketed via Eventbrite (by donation or booking) or require advance booking for capacity management such as Park & Ride.',
    foodTrail: 'The Food Trail (Saturday 2nd May) is a new, free, self-guided experience taking visitors beyond the town into the Dorset landscape with behind-the-scenes access to producers. Participating locations include Sorelle Dorset, Compton McRae, Madjeston Milk Station & Animal Park, Primrose Organic Produce, Gold Hill Organic Farm, Cann Mills (Stoate & Sons), Sprigs Co at Pythouse Kitchen Garden, Dorset Blue Vinny, Olives Et Al and Breezy Ridge Vineyard.',
    highlights: 'Sunday features Gold Hill Cheese Race, MasterChefs LIVE Demos, 100+ trader Street Market, live music, the traditional Byzant Walk, A Feast For The Eyes art exhibition, and family activities including the Ingredients Hunt and Children’s Art Competition.',
    cheeseRace: 'Competitors race up the steep cobbles of Gold Hill carrying a 23kg wheel of cheese, cheered on by crowds. Entry is FREE but must be booked via Eventbrite.',
    masterChefs: 'Yes. The cookery demonstrations are ticketed via Eventbrite by donation, featuring Ping Coombes (11:30am), Anurag Aggarwal (1:00pm) and Shelina Permalloo (2:30pm).',
    streetMarket: 'A large open-air market featuring 100+ traders across High Street and Park Walk with Dorset artisan producers, independent makers, global street food, sweet and savoury specialities, and a strong focus on provenance, craft and quality.',
    liveMusic: 'Yes. Live music and buskers run throughout the day, creating a relaxed and lively festival atmosphere across the town.',
    byzantineWalk: 'A traditional heritage procession departing from the Town Hall at 2:00pm, travelling through the town centre to the natural spring in Enmore Green.',
    family: 'Yes, the festival is very family-focused. FREE activities include the Ingredients Hunt across local independent shops and the Children’s art competition at The Grosvenor Arms.',
    artExhibition: 'Yes. A Feast For The Eyes is a FREE food-inspired exhibition at Shaftesbury Arts Centre, exploring food as culture, craft and connection, supported by The Kitchen Table Dorset.',
    gettingThere: 'A dedicated Park & Ride service operates from Port Regis School (SP7 9QA), running every 30 minutes. Bookable via Eventbrite.',
    parking: 'Yes. Parking is available via the Park & Ride system at £5 per car (advance booking recommended via Eventbrite), with capacity for up to 600 vehicles and a regular shuttle service into town every half hour.',
    dogs: 'Well-behaved dogs are welcome, particularly in outdoor areas. Please be mindful of crowds and hot surfaces. Dogs are also permitted on the Park & Ride minibuses, at the driver’s discretion.',
    finish: 'All Sunday activities conclude at approximately 5pm.',
    booking: 'Some elements are FREE but require booking, including Gold Hill Cheese Race entry, your place in the audience for the MasterChefs LIVE demos, and Park & Ride parking. Booking in advance is via Eventbrite.',
    accessibility: 'The festival takes place across historic streets, including some steep and uneven areas such as the cobblestones of Gold Hill. Visitors with specific needs are encouraged to contact hello@shaftesbury-food-festival.co.uk.',
    organisers: 'Shaftesbury Food Festival is delivered by a volunteer-led team from the Shaftesbury & District Chamber of Commerce, with support from Shaftesbury Town Council and The Kitchen Table Dorset.',
    rain: 'The festival runs in all weather conditions. Many activities are outdoors, so we recommend dressing appropriately for the British spring weather and checking the forecast in advance.',
    traders: 'Yes. The Street Market features over 100 traders, and applications are typically managed in advance through the festival team via shaftesbury-food-festival.co.uk/trade-stands.',
    foodTrailChildren: 'Yes. The Food Trail is a relaxed, exploratory experience that works beautifully for families, with farm visits, tastings and hands-on encounters with producers. As many locations are working farms, visitors are asked to take sensible care and follow on-site guidance.',
  }
  return map[key] || ''
}
