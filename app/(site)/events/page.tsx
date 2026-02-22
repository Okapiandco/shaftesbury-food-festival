import { Metadata } from 'next'
import PageHeader from '@/components/shared/PageHeader'
import CTAButton from '@/components/shared/CTAButton'
import EventCard from '@/components/cards/EventCard'

export const metadata: Metadata = {
  title: 'Festival Schedule & Events | Shaftesbury Food Festival 3rd May 2026',
  description:
    'Full event timetable for Shaftesbury Food Festival on 3rd May. Chef talks, races, food demonstrations and entertainment throughout the day.',
}

const timetable = [
  { title: 'Gates Open', time: '9:00 AM', location: 'High Street', eventType: 'Main Event', description: 'The festival gates open. Explore trade stands and enjoy the morning atmosphere.' },
  { title: 'Opening Ceremony', time: '9:30 AM', location: 'High Street Stage', eventType: 'Main Event', description: 'Official opening of the Shaftesbury Food Festival 2026 by the Mayor.' },
  { title: 'Junior Cheese Race', time: '10:00 AM - 10:30 AM', location: 'Gold Hill', eventType: 'Race', description: 'The junior cheese race for younger contestants. Fun for all the family.' },
  { title: 'Chef Talk: Farm to Table', time: '10:30 AM - 11:15 AM', location: 'Park Walk Stage', eventType: 'Chef Talk', speaker: 'TBC', description: 'Exploring the journey from Dorset farms to your table. Organised by The Kitchen Table.' },
  { title: 'Gold Hill Cheese Race', time: '11:00 AM - 12:00 PM', location: 'Gold Hill', eventType: 'Race', description: 'The main event! Contestants carry a 23kg cheese up iconic Gold Hill.' },
  { title: 'Live Music: Local Acts', time: '12:00 PM - 1:00 PM', location: 'High Street Stage', eventType: 'Entertainment', description: 'Enjoy live music from talented local performers while you eat and drink.' },
  { title: 'Chef Talk: Dorset Seafood', time: '1:00 PM - 1:45 PM', location: 'Park Walk Stage', eventType: 'Chef Talk', speaker: 'TBC', description: 'Discover the finest Dorset seafood and how to prepare it at home.' },
  { title: 'Baking Competition Judging', time: '2:00 PM - 2:30 PM', location: 'High Street Stage', eventType: 'Main Event', description: 'Watch the judges sample entries in our community baking competition.' },
  { title: 'Chef Talk: The Art of Cheese', time: '2:30 PM - 3:15 PM', location: 'Park Walk Stage', eventType: 'Chef Talk', speaker: 'TBC', description: 'A deep dive into artisan cheese-making in the Dorset region.' },
  { title: 'Live Entertainment', time: '3:00 PM - 4:30 PM', location: 'High Street Stage', eventType: 'Entertainment', description: 'An afternoon of live entertainment, music and fun for all ages.' },
  { title: 'Prize Giving Ceremony', time: '4:30 PM - 5:00 PM', location: 'High Street Stage', eventType: 'Main Event', description: 'Awards for cheese race winners, baking competition and more.' },
  { title: 'Festival Close', time: '5:00 PM', location: 'High Street', eventType: 'Main Event', description: 'Thank you for joining us! See you next year.' },
]

const eventTypes = ['All', 'Main Event', 'Chef Talk', 'Race', 'Entertainment']

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events & Timetable"
        subtitle="A packed schedule of chef talks, races, food demos and entertainment."
      />

      {/* Filter */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {eventTypes.map((type) => (
              <button
                key={type}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-text hover:bg-primary hover:text-white hover:border-primary transition-colors first:bg-primary first:text-white first:border-primary"
              >
                {type}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="mt-10 space-y-4">
            {timetable.map((event, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-36 shrink-0">
                  <p className="text-sm font-bold text-primary">{event.time}</p>
                  <p className="mt-1 text-xs text-text-muted">{event.location}</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-text">{event.title}</h3>
                    <span className="rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-semibold text-secondary">
                      {event.eventType}
                    </span>
                  </div>
                  {event.speaker && <p className="mt-1 text-sm font-medium text-primary">Speaker: {event.speaker}</p>}
                  <p className="mt-1 text-sm text-text-light">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Talks Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-text md:text-3xl">Chef Talks &amp; Demonstrations</h2>
          <p className="mx-auto mt-3 max-w-xl text-text-light">
            Organised by The Kitchen Table, our chef talks feature renowned chefs sharing their knowledge of local ingredients, cooking techniques and the best of Dorset cuisine.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {timetable
              .filter((e) => e.eventType === 'Chef Talk')
              .map((event, i) => (
                <EventCard
                  key={i}
                  title={event.title}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                  speaker={event.speaker}
                  eventType={event.eventType}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Download Timetable */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-text-light">Want a copy for the day?</p>
          <div className="mt-4">
            <CTAButton href="#" variant="primary">Download Printable Timetable (PDF)</CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
