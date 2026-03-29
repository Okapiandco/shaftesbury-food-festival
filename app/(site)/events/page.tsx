import { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/shared/PageHeader'
import CTAButton from '@/components/shared/CTAButton'
import { MapPin, Clock, Users, CalendarDays, Footprints, HelpCircle, UtensilsCrossed, Palette, Search, Trophy, ChefHat, Store, Brush } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Events | Shaftesbury Food Festival 2026',
  description:
    'Full schedule for Shaftesbury Food Festival 2026. Art exhibition from 29th April, Food Quiz on 1st May, Food Trail on 2nd May, and the main festival day on 3rd May with Cheese Race, MasterChef Demos, Street Market and more.',
  alternates: { canonical: '/events' },
}

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Festival Events"
        subtitle="Celebrating food, drink and community across the Shaftesbury area."
      />

      {/* ── What's On When ── */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-text md:text-4xl">What&apos;s On When</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-text-light">
            From an art exhibition and Friday night quiz to a countryside food trail and the main festival — here&apos;s the full schedule.
          </p>

          <div className="mt-10 space-y-8">

            {/* 29th April – 5th May */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden">
              <div className="bg-secondary px-5 py-3 flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-white shrink-0" />
                <span className="text-white font-semibold text-sm">29th April – 5th May (ongoing)</span>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <Palette className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-text">A Feast For The Eyes</h3>
                    <p className="text-sm text-text-light">Art exhibition — 10am–4pm daily</p>
                    <p className="mt-1 text-sm text-text-light">Shaftesbury Arts Centre</p>
                    <div className="mt-3">
                      <CTAButton href="/feast-for-the-eyes" variant="secondary" className="text-sm">
                        Find Out More
                      </CTAButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Friday 1st May */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden">
              <div className="bg-primary px-5 py-3 flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-white shrink-0" />
                <span className="text-white font-semibold text-sm">Friday 1st May</span>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-text">The Great Food Quiz</h3>
                    <p className="text-sm text-text-light">6pm–10pm at Sorelle, Motcombe</p>
                    <p className="mt-1 text-sm text-text-light">Fun food &amp; drink quiz — teams of up to 6. Prizes for the winners!</p>
                    <div className="mt-3">
                      <CTAButton href="#quiz" variant="primary" className="text-sm">
                        View Details
                      </CTAButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Saturday 2nd May */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden">
              <div className="bg-secondary px-5 py-3 flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-white shrink-0" />
                <span className="text-white font-semibold text-sm">Saturday 2nd May</span>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <Footprints className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-text">Food Trail</h3>
                    <p className="text-sm text-text-light">10am–4pm — Explore local producers around Shaftesbury</p>
                    <p className="mt-1 text-sm text-text-light">Farm walks, tastings and behind-the-scenes tours.</p>
                    <div className="mt-3">
                      <CTAButton href="/food-trail" variant="secondary" className="text-sm">
                        View Details
                      </CTAButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sunday 3rd May */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden">
              <div className="bg-accent px-5 py-3 flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-white shrink-0" />
                <span className="text-white font-semibold text-sm">Sunday 3rd May — Main Festival Day</span>
              </div>
              <div className="p-6 space-y-6">
                {/* Headline Events */}
                <div>
                  <h3 className="text-lg font-bold text-text mb-4">Headline Events</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Trophy className="w-6 h-6 text-accent-dark shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-text">Cheese Race</h4>
                        <p className="text-sm text-text-light">10am–3pm — The famous Gold Hill race</p>
                        <div className="mt-2">
                          <CTAButton href="/cheese-race" variant="accent" className="text-sm">
                            Enter Now
                          </CTAButton>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ChefHat className="w-6 h-6 text-accent-dark shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-text">MasterChef Demos</h4>
                        <p className="text-sm text-text-light">11:30am, 1pm &amp; 2:30pm — Live cookery at The Town Hall</p>
                        <div className="mt-2">
                          <CTAButton href="/food-demos" variant="accent" className="text-sm">
                            Book Tickets
                          </CTAButton>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Footprints className="w-6 h-6 text-accent-dark shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-text">Byzantine Walk</h4>
                        <p className="text-sm text-text-light">2pm</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* All-day activities */}
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-lg font-bold text-text mb-4">All-Day Activities</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <Store className="w-5 h-5 text-text-muted shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-text text-sm">Street Market</h4>
                        <p className="text-xs text-text-light">10am–4pm</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Search className="w-5 h-5 text-text-muted shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-text text-sm">Ingredients Hunt</h4>
                        <p className="text-xs text-text-light">10am–4pm</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Palette className="w-5 h-5 text-text-muted shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-text text-sm">A Feast For The Eyes</h4>
                        <p className="text-xs text-text-light">Art exhibition — 10am–4pm</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Brush className="w-5 h-5 text-text-muted shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-text text-sm">Children&apos;s Art Competition</h4>
                        <p className="text-xs text-text-light">10am–3pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Detailed Event Cards ── */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-3xl space-y-10">

          {/* ── Event 1: Great Food Quiz ── */}
          <div id="quiz" className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden scroll-mt-24">

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
              <span className="text-white font-semibold text-sm">Sat 2 May 2026 &nbsp;·&nbsp; Pre-festival Event</span>
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
                  <p className="text-sm font-semibold text-text">10am–4pm</p>
                  <p className="text-sm text-text-light">Saturday 2nd May 2026 — explore at your own pace</p>
                </div>
              </div>

              <div className="mt-8">
                <CTAButton href="/food-trail" variant="secondary">
                  Find Out More
                </CTAButton>
              </div>
            </div>
          </div>

          {/* ── Event 3: A Feast for the Eyes ── */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden">
            <div className="bg-secondary px-6 py-4 flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-white shrink-0" />
              <span className="text-white font-semibold text-sm">29 Apr – 5 May 2026 &nbsp;·&nbsp; Art Exhibition</span>
            </div>

            <div className="relative h-56 sm:h-72 w-full">
              <Image
                src="/Events/WhatsApp Image 2026-03-20 at 15.01.08.jpeg"
                alt="A Feast for the Eyes — art exhibition poster"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Palette className="w-8 h-8 text-secondary shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text">A Feast for the Eyes</h2>
                  <p className="mt-2 text-secondary font-medium">Shaftesbury Arts Centre</p>
                </div>
              </div>

              <p className="mt-4 text-text-light leading-relaxed">
                An exhibition of art with food at its heart. Featuring works by Maja Barker, Alison Turner, Joanne Rutter, Kate Toms, Becca Perl, Lucy Bentley and Charlotte Lorimer. Sponsored by The Kitchen Table.
              </p>

              <div className="mt-6 flex gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-text">29th April – 5th May 2026</p>
                  <p className="text-sm text-text-light">10am–4pm daily</p>
                </div>
              </div>

              <div className="mt-8">
                <CTAButton href="/feast-for-the-eyes" variant="secondary">
                  Find Out More
                </CTAButton>
              </div>
            </div>
          </div>

          {/* ── Event 4: Ingredients Hunt ── */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden">
            <div className="bg-accent px-6 py-4 flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-white shrink-0" />
              <span className="text-white font-semibold text-sm">Sun 3 May 2026 &nbsp;·&nbsp; Family Activity</span>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Search className="w-8 h-8 text-accent-dark shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text">Ingredients Hunt</h2>
                  <p className="mt-2 text-accent-dark font-medium">Around the festival site</p>
                </div>
              </div>

              <p className="mt-4 text-text-light leading-relaxed">
                A fun family scavenger hunt around the festival. Collect your card from 10 AM, find all the hidden ingredients around the stalls and high street, and hand it in by 4 PM for a chance to win prizes!
              </p>

              <div className="mt-6 flex gap-3">
                <Clock className="w-5 h-5 text-accent-dark shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-text">Sunday 3rd May 2026</p>
                  <p className="text-sm text-text-light">10:00 AM – 4:00 PM</p>
                </div>
              </div>

              <div className="mt-8">
                <CTAButton href="/ingredients-hunt" variant="accent">
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
