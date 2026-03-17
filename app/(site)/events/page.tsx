import { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/shared/PageHeader'
import CTAButton from '@/components/shared/CTAButton'
import { MapPin, Clock, Users, CalendarDays, Footprints } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Events | Shaftesbury Food Festival 2026',
  description:
    'Events celebrating Shaftesbury Food Festival 2026, including The Great Food Quiz on 1st May and the Food Trail on 3rd May.',
  alternates: { canonical: '/events' },
}

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Festival Events"
        subtitle="Celebrating food, drink and community across the Shaftesbury area."
      />

      <section className="section">
        <div className="container mx-auto px-4 max-w-3xl space-y-10">

          {/* ── Event 1: Great Food Quiz ── */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden">

            <div className="bg-primary px-6 py-4 flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-white shrink-0" />
              <span className="text-white font-semibold text-sm">Fri 1 May 2026 &nbsp;·&nbsp; Pre-festival Event</span>
            </div>

            {/* Event image */}
            <div className="relative h-56 sm:h-72 w-full">
              <Image
                src="/Events/Great food quiz.avif"
                alt="The Great Food Quiz at Sorelle, Motcombe"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-text">The Great Food Quiz</h2>
              <p className="mt-2 text-primary font-medium">Hosted at Sorelle, Motcombe</p>

              <p className="mt-4 text-text-light leading-relaxed">
                Test your knowledge of foodie facts in this fun quiz to celebrate The Shaftesbury Food Festival!
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-text">Time</p>
                    <p className="text-sm text-text-light">18:00 – 22:00</p>
                    <p className="text-sm text-text-light">Gates &amp; bar open 6pm · Quiz starts 6:30pm</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-text">Location</p>
                    <p className="text-sm text-text-light">Bittles Brook Farm</p>
                    <p className="text-sm text-text-light">Motcombe, Shaftesbury SP7 9NX</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-text">Teams</p>
                    <p className="text-sm text-text-light">Maximum 6 people per team</p>
                    <p className="text-sm text-text-light">Book your team's tickets together</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">£</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">Tickets</p>
                    <p className="text-sm text-text-light">£2.50 per person (Standard Entry)</p>
                    <p className="text-sm text-text-light">All profits donated to a local food bank</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-text-light leading-relaxed border-t border-gray-100 pt-6">
                <p>
                  Celebrating all things food and drink, this fun event has been organised in association with{' '}
                  <strong className="text-text">The Truckle Truck</strong> and Shaftesbury Food Festival. Fabulous local chef{' '}
                  <strong className="text-text">Philippa Davis</strong> will be compere for the evening, guiding you through the questions.
                  We are delighted to be hosting this for the third year running!
                </p>
                <p>
                  Get your best team together, swot up on the latest foodie facts and come join the fun. There will be
                  suitably delicious prizes for the winning teams.
                </p>
                <p>
                  <strong className="text-text">Rocky's</strong> will be serving their signature pizzas from 6pm — vegan,
                  veggie and gluten free options available (contact Sorelle in advance for other dietary requirements).
                </p>
                <p className="italic text-xs">
                  Please car share where possible as parking is limited. Anyone seen using a mobile phone during the quiz will be made to eat an entire jar of pickled herring. You have been warned.
                </p>
              </div>

              <div className="mt-8">
                <CTAButton
                  href="https://www.sorelledorset.com/event-details/the-great-food-quiz-3"
                  variant="primary"
                  external
                >
                  Buy Tickets at Sorelle
                </CTAButton>
              </div>
            </div>
          </div>

          {/* Atmosphere image break */}
          <div className="relative h-56 sm:h-72 overflow-hidden rounded-2xl">
            <Image
              src="/images/Food stalls.jpg"
              alt="Food stalls at the Shaftesbury Food Festival"
              fill
              className="object-cover"
            />
          </div>

          {/* ── Event 2: Food Trail ── */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden">

            <div className="bg-secondary px-6 py-4 flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-white shrink-0" />
              <span className="text-white font-semibold text-sm">Sat 3 May 2026 &nbsp;·&nbsp; Festival Day</span>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Footprints className="w-8 h-8 text-secondary shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text">The Shaftesbury Food Trail</h2>
                  <p className="mt-2 text-secondary font-medium">Shaftesbury &amp; surrounding area</p>
                </div>
              </div>

              <p className="mt-4 text-text-light leading-relaxed">
                Explore the Shaftesbury Food Trail and discover the brilliant local food producers that make this area so special. Visit farms, taste award-winning produce and follow the trail at your own pace on festival day.
              </p>

              <div className="mt-6 flex gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-text">All day</p>
                  <p className="text-sm text-text-light">Saturday 3rd May 2026 — explore at your own pace</p>
                </div>
              </div>

              <div className="mt-8">
                <CTAButton href="/food-trail" variant="secondary">
                  Find Out More
                </CTAButton>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-text-muted">
            More events will be announced as the festival approaches. Check back soon!
          </p>

        </div>
      </section>
    </>
  )
}
