import { Metadata } from 'next'
import Image from 'next/image'
import { Clock, MapPin, Heart, BookOpen, ChefHat, Utensils } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import CTAButton from '@/components/shared/CTAButton'

export const metadata: Metadata = {
  title: 'Food Demos | Shaftesbury Food Festival 3rd May 2026',
  description:
    'Live cookery demonstrations at the Shaftesbury Food Festival featuring former MasterChef winners and finalists. Hosted by The Kitchen Table at The Guild Hall.',
  alternates: { canonical: '/food-demos' },
}

const chefs = [
  {
    name: 'Ping Coombes',
    time: '11:30 AM',
    bio: 'Ping is a celebrated Malaysian-British chef, restaurateur and author. Her infectious energy and innovative approach to Southeast Asian cooking have made her a beloved figure on British television. At Shaftesbury Food Festival, Ping will demonstrate recipes from her latest book, sharing the bold flavours and cultural heritage of Malaysian cuisine. Her session promises vibrant cooking, storytelling, and insight into a culinary tradition rich in history and family tradition.',
  },
  {
    name: 'Anurag Aggarwal',
    time: '1:00 PM',
    bio: 'Anurag is an acclaimed Indian chef and cookbook author whose passion for authentic Indian cuisine has earned him widespread recognition. His demonstrations showcase the complexity, regional diversity and soul-warming character of Indian cooking. Anurag will bring recipes from his latest book to life, offering audiences a masterclass in spice, technique and the cultural significance of Indian food traditions.',
  },
  {
    name: 'Shelina Permaloo',
    time: '2:30 PM',
    bio: 'Shelina is a Mauritian chef, author and television personality known for her warm, inclusive approach to food. Her cooking celebrates the multicultural heritage of Mauritian cuisine \u2014 a beautiful fusion of African, Indian, Chinese and French influences. Shelina\u2019s session will highlight the stories behind her recipes and the diverse culinary traditions that define her island\u2019s food culture.',
  },
]

const whatToExpect = [
  {
    icon: ChefHat,
    title: 'Live Cookery Demonstrations',
    description: 'Each chef will prepare signature recipes from their latest book, explaining techniques, ingredients, and the stories behind the dishes.',
  },
  {
    icon: Utensils,
    title: 'Samples & Tasting',
    description: 'Audience members will enjoy tastings of the dishes being prepared \u2014 a chance to experience the chefs\u2019 cooking firsthand.',
  },
  {
    icon: Heart,
    title: 'Meet & Greet',
    description: 'Following each demonstration, there will be an opportunity to meet the chefs, ask questions, and have books signed.',
  },
  {
    icon: BookOpen,
    title: 'Book Signings',
    description: 'Signed copies of each chef\u2019s latest book will be available for purchase at the event.',
  },
]

export default function FoodDemosPage() {
  return (
    <>
      <PageHeader
        title="Food Demonstrations"
        subtitle="Live cookery demos from former MasterChef winners and finalists, hosted by The Kitchen Table."
      />

      {/* Hero image */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/Food Demos.jpg"
          alt="Live food demonstration at the Shaftesbury Food Festival"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl font-bold md:text-4xl">Three Exclusive Sessions</h2>
            <p className="mt-3 text-lg text-blue-200">Presented by The Kitchen Table</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text md:text-3xl">About the Demonstrations</h2>
            <p className="mt-4 text-text-light leading-relaxed">
              The Kitchen Table is hosting three exclusive cookery demonstrations featuring former MasterChef winners and finalists at the Shaftesbury Food Festival. Visitors will watch celebrated chefs prepare recipes from their latest books, gain insight into their culinary journeys, and enjoy the rare opportunity to meet television personalities and secure signed copies of their work.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex gap-3 rounded-lg bg-gray-50 p-4">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-text">Date &amp; Time</p>
                <p className="text-sm text-text-light">Sunday 3rd May 2026</p>
                <p className="text-sm text-text-light">Sessions at 11:30 AM, 1:00 PM &amp; 2:30 PM</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-lg bg-gray-50 p-4">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-text">Venue</p>
                <p className="text-sm text-text-light">The Guild Hall</p>
                <p className="text-sm text-text-light">Shaftesbury, Dorset</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Schedule */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">The Chefs</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Three celebrated chefs, each bringing a different cultural heritage and culinary tradition to the festival.
          </p>

          <div className="mt-10 space-y-8">
            {chefs.map((chef) => (
              <div key={chef.name} className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden">
                <div className="bg-primary px-6 py-4 flex items-center justify-between">
                  <span className="text-white font-bold text-lg">{chef.name}</span>
                  <span className="flex items-center gap-2 text-blue-200 text-sm font-semibold">
                    <Clock className="w-4 h-4" />
                    {chef.time}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-text-light leading-relaxed">{chef.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">What to Expect</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {whatToExpect.map((item) => (
              <div key={item.title} className="rounded-xl bg-gray-50 p-6">
                <item.icon size={28} className="text-primary" />
                <h3 className="mt-3 font-bold text-text">{item.title}</h3>
                <p className="mt-2 text-sm text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Why This Matters</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-6">
              <h3 className="font-bold">Culinary Diversity</h3>
              <p className="mt-2 text-sm text-blue-200">Each chef brings a different cultural heritage, celebrating the richness and diversity of global food culture.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-6">
              <h3 className="font-bold">Television Meets Reality</h3>
              <p className="mt-2 text-sm text-blue-200">Experience familiar faces in an intimate, interactive setting &mdash; watching them cook live and connecting beyond the screen.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-6">
              <h3 className="font-bold">Accessible Excellence</h3>
              <p className="mt-2 text-sm text-blue-200">The Kitchen Table brings professional culinary expertise to Shaftesbury, offering world-class food education to the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking & Vale Family Hub */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-text">Booking Information</h2>
              <ul className="mt-4 space-y-3 text-sm text-text-light">
                <li className="flex gap-2"><span className="font-semibold text-text">How to Book:</span> Via Eventbrite</li>
                <li className="flex gap-2"><span className="font-semibold text-text">Format:</span> Ticketed sessions (limited capacity)</li>
                <li className="flex gap-2"><span className="font-semibold text-text">Donation:</span> Attendees are asked to donate to Vale Family Hub</li>
                <li className="flex gap-2"><span className="font-semibold text-text">Includes:</span> Live demo, samples, meet &amp; greet, book signing opportunity</li>
              </ul>
              <div className="mt-6">
                <CTAButton href="/contact" variant="primary">
                  Enquire About Tickets
                </CTAButton>
              </div>
            </div>

            <div className="rounded-xl bg-accent/10 p-6">
              <Heart size={28} className="text-accent-dark" />
              <h3 className="mt-3 text-lg font-bold text-text">Vale Family Hub</h3>
              <p className="mt-2 text-sm text-text-light leading-relaxed">
                All proceeds from donations benefit Vale Family Hub, a vital community resource providing affordable access to quality food and support for local families. By attending, visitors directly support food security and community wellbeing in Shaftesbury.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About The Kitchen Table */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-text">About The Kitchen Table</h2>
          <p className="mt-4 text-text-light leading-relaxed">
            The Kitchen Table is a beloved independent bookshop specialising in food writing, cookbooks, culinary memoir and gastronomic journalism. They celebrate the stories, culture and craft behind food, and champion both established and emerging food writers and authors.
          </p>
        </div>
      </section>
    </>
  )
}
