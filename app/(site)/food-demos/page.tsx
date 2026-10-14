import { Metadata } from 'next'
import Image from 'next/image'
import { Clock, MapPin, Heart, BookOpen, ChefHat, Utensils } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import UpdatesSignup from '@/components/shared/UpdatesSignup'

export const metadata: Metadata = {
  title: 'Live Action Kitchen | Shaftesbury Food Festival Sunday 2nd May 2027',
  description:
    'Watch top chefs cook live from their latest books at free demonstration sessions in Shaftesbury\'s historic town hall on Sunday 2nd May 2027. Hosted by The Kitchen Table. Register for updates.',
  alternates: { canonical: '/food-demos' },
}

// 2026 line-up, shown as a taster only. No booking links: 2027 chefs are not yet announced.
const lastYearsChefs = [
  {
    name: 'Ping Coombes',
    title: 'MasterChef UK 2014 Winner & Champion of Champions 2018',
    bio: 'Ping is a celebrated Malaysian-British chef, restaurateur and author. Her infectious energy and innovative approach to Southeast Asian cooking have made her a beloved figure on British television. At Shaftesbury Food Festival, Ping demonstrated recipes from her latest book, sharing the bold flavours and cultural heritage of Malaysian cuisine.',
    images: ['/images/Food Demos/Ping Coombes Credit Sam Folan.jpg'],
    imageAlts: ['Ping Coombes – credit Sam Folan'],
  },
  {
    name: 'Anurag Aggarwal',
    title: 'MasterChef UK 2023 Finalist',
    bio: 'Anurag is an acclaimed Indian chef and cookbook author whose passion for authentic Indian cuisine has earned him widespread recognition. His demonstrations showcase the complexity, regional diversity and soul-warming character of Indian cooking, bringing recipes from his latest book to life.',
    images: ['/images/Food Demos/AA MChef.JPG', '/images/Food Demos/IMG_6058.jpg'],
    imageAlts: ['Anurag Aggarwal', 'Anurag Aggarwal cooking'],
  },
  {
    name: 'Shelina Permaloo',
    title: 'MasterChef UK 2012 Winner',
    bio: 'Shelina is a Mauritian chef, author and television personality known for her warm, inclusive approach to food. Her cooking celebrates the multicultural heritage of Mauritian cuisine, a beautiful fusion of African, Indian, Chinese and French influences.',
    images: ['/images/Food Demos/Shelina Headshots_240_DW.jpg', '/images/Food Demos/Shelina Headshots_303_DW.jpg'],
    imageAlts: ['Shelina Permaloo', 'Shelina Permaloo portrait'],
  },
]

const whatToExpect = [
  {
    icon: ChefHat,
    title: 'Live Cookery',
    description: 'Chefs prepare signature recipes from their latest book, explaining techniques, ingredients and the stories behind the dishes.',
  },
  {
    icon: Utensils,
    title: 'Up Close',
    description: 'Get up close and personal with celebrated chefs and gain insight into their culinary journeys.',
  },
  {
    icon: Heart,
    title: 'Meet & Greet',
    description: 'An opportunity to meet the chefs and ask questions after each session.',
  },
  {
    icon: BookOpen,
    title: 'Signed Books',
    description: 'Secure signed copies of the chefs\' latest books.',
  },
]

export default function LiveActionKitchenPage() {
  return (
    <>
      <PageHeader
        title="Live Action Kitchen"
        eyebrow="Sunday 2nd May"
        color="plum"
        subtitle="Watch top chefs cook live from their latest books at free demonstration sessions in Shaftesbury's historic town hall. Hosted by destination bookshop The Kitchen Table, guests can get up close and personal with celebrated chefs, gain insight into their culinary journeys and secure signed copies of their latest books."
        image="/images/Food Demos.jpg"
        imageAlt="A chef demonstration at the Shaftesbury Food Festival"
      />

      {/* Announcement and registration */}
      <section className="section bg-plum-light">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            Participating chefs will be announced early in 2027
          </h2>
          <p className="mt-3 text-text">Register here for updates and we will email you as soon as the line-up is confirmed.</p>
          <div className="mt-6 text-left">
            <UpdatesSignup
              defaultTopics={['chef-demos']}
              heading="Register for chef demo updates"
              intro="Be first to hear which chefs are coming and how to get your place."
            />
          </div>
          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            <div className="flex gap-3 rounded-lg bg-white p-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-plum" />
              <div>
                <p className="text-sm font-semibold text-text">When</p>
                <p className="text-sm text-text-light">Sunday 2nd May 2027</p>
                <p className="text-sm text-text-light">Session times to be announced</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-lg bg-white p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-plum" />
              <div>
                <p className="text-sm font-semibold text-text">Where</p>
                <p className="text-sm text-text-light">The Town Hall</p>
                <p className="text-sm text-text-light">Shaftesbury, Dorset</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">What to Expect</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {whatToExpect.map((item) => (
              <div key={item.title} className="rounded-xl bg-plum-light p-6">
                <item.icon size={28} className="text-plum" />
                <h3 className="mt-3 font-bold text-text">{item.title}</h3>
                <p className="mt-2 text-sm text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Last year */}
      <section className="section bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Last Year&apos;s Chefs</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            A taste of what to expect. In 2026 we welcomed three former MasterChef winners and finalists.
          </p>

          <div className="mt-10 space-y-8">
            {lastYearsChefs.map((chef) => (
              <div key={chef.name} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
                <div className="bg-plum px-6 py-4">
                  <span className="block text-lg font-bold text-white">{chef.name}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-light">{chef.title}</span>
                </div>
                <div className="md:flex">
                  <div className={`flex shrink-0 ${chef.images.length > 1 ? 'md:w-80' : 'md:w-56'}`}>
                    {chef.images.map((src, i) => (
                      <div key={src} className={`relative ${chef.images.length > 1 ? 'w-1/2' : 'w-full'} aspect-square md:aspect-auto md:h-full min-h-48`}>
                        <Image
                          src={src}
                          alt={chef.imageAlts[i]}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="p-6">
                    <p className="leading-relaxed text-text-light">{chef.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About The Kitchen Table */}
      <section className="section">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-text">About The Kitchen Table</h2>
          <p className="mt-4 leading-relaxed text-text-light">
            The Kitchen Table is a beloved independent bookshop specialising in food writing, cookbooks, culinary memoir and gastronomic journalism. They celebrate the stories, culture and craft behind food, and champion both established and emerging food writers and authors.
          </p>
        </div>
      </section>
    </>
  )
}
