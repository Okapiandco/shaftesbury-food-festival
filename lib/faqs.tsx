import Link from 'next/link'
import type { FAQItem } from '@/components/shared/FAQAccordion'

export type FAQKey =
  | 'when'
  | 'where'
  | 'postcodes'
  | 'free'
  | 'foodTrail'
  | 'highlights'
  | 'cheeseRace'
  | 'masterChefs'
  | 'streetMarket'
  | 'liveMusic'
  | 'byzantineWalk'
  | 'family'
  | 'artExhibition'
  | 'gettingThere'
  | 'parking'
  | 'dogs'
  | 'finish'
  | 'booking'
  | 'accessibility'
  | 'organisers'
  | 'rain'
  | 'traders'
  | 'foodTrailChildren'

export const faqs: Record<FAQKey, FAQItem> = {
  when: {
    question: 'When is the Shaftesbury Food Festival?',
    answer: (
      <>
        <p>The festival takes place over three days on the early May bank holiday weekend:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li><strong>Friday 1st May 2026</strong> — The Great Food Quiz at Sorelle (SOLD OUT)</li>
          <li><strong>Saturday 2nd May 2026</strong> — The Food Trail (new for 2026)</li>
          <li><strong>Sunday 3rd May 2026</strong> — Main town festival day (10am–5pm)</li>
        </ul>
      </>
    ),
  },
  where: {
    question: 'Where does the festival take place?',
    answer: (
      <>
        <p>On Sunday, the main festival is based across:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Gold Hill</li>
          <li>Shaftesbury High Street</li>
          <li>Park Walk</li>
          <li>Town centre (SP7 8LY)</li>
        </ul>
        <p className="mt-3">On Saturday, the Food Trail extends into the surrounding Dorset countryside, connecting farms, producers and makers.</p>
      </>
    ),
  },
  postcodes: {
    question: 'What are the postcodes for the main festival areas?',
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Shaftesbury town centre (High Street &amp; Park Walk): <strong>SP7 8LY</strong></li>
        <li>Park &amp; Ride (Port Regis School): <strong>SP7 9QA</strong></li>
      </ul>
    ),
  },
  free: {
    question: 'Is the festival free to attend?',
    answer: (
      <>
        <p>Yes, the vast majority of the festival is <strong>FREE entry</strong>.</p>
        <p className="mt-3">Some experiences are:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Ticketed via Eventbrite (by donation or booking)</li>
          <li>Or require advance booking for capacity management: Park &amp; Ride</li>
        </ul>
      </>
    ),
  },
  foodTrail: {
    question: 'What is the Food Trail on Saturday?',
    answer: (
      <>
        <p>The <Link href="/food-trail" className="text-primary hover:text-accent-dark font-medium">Food Trail</Link> (Saturday 2nd May) is a new, free, self-guided experience taking visitors beyond the town into the Dorset landscape.</p>
        <p className="mt-3">It offers behind-the-scenes access to producers, including tastings, tours and conversations with makers.</p>
        <p className="mt-3">Participating locations feature: Sorelle Dorset, Compton McRae, Madjeston Milk Station &amp; Animal Park, Primrose Organic Produce, Gold Hill Organic Farm, Cann Mills (Stoate &amp; Sons), Sprigs Co at Pythouse Kitchen Garden, Dorset Blue Vinny, Olives Et Al, and Breezy Ridge Vineyard.</p>
      </>
    ),
  },
  highlights: {
    question: 'What are the main highlights on Sunday?',
    answer: (
      <>
        <p>Sunday features a full programme of headline events, including:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Gold Hill Cheese Race</li>
          <li>MasterChefs LIVE Demos</li>
          <li>100+ trader Street Market</li>
          <li>Live music and entertainment</li>
          <li>Traditional Byzant Walk</li>
          <li>Food-inspired art exhibition: A Feast For The Eyes</li>
          <li>Family activities and trails: Ingredient&rsquo;s Hunt &amp; Children&rsquo;s Art Competition</li>
        </ul>
      </>
    ),
  },
  cheeseRace: {
    question: 'What is the Gold Hill Cheese Race?',
    answer: (
      <>
        <p>One of the festival&rsquo;s most iconic features. Competitors race up the steep cobbles of Gold Hill carrying a 23kg wheel of cheese, cheered on by crowds lining the route. It&rsquo;s fast, funny, and very Dorset!</p>
        <p className="mt-3">Entry is <strong>FREE</strong> but must be booked via Eventbrite.</p>
      </>
    ),
  },
  masterChefs: {
    question: 'Do I need tickets for the MasterChefs LIVE Demo Cookery Stage?',
    answer: (
      <>
        <p>Yes. The cookery demonstrations are:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>By donation</li>
          <li>Ticketed via Eventbrite</li>
        </ul>
        <p className="mt-3">…featuring live demonstrations and tastings from leading MasterChefs:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Ping Coombes (11:30am)</li>
          <li>Anurag Aggarwal (1:00pm)</li>
          <li>Shelina Permalloo (2:30pm)</li>
        </ul>
      </>
    ),
  },
  streetMarket: {
    question: 'What is the Street Market?',
    answer: (
      <>
        <p>A large open-air market featuring 100+ traders across High Street and Park Walk.</p>
        <p className="mt-3">Expect:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Dorset artisan producers</li>
          <li>Independent makers</li>
          <li>Global street food</li>
          <li>Sweet and savoury specialities</li>
        </ul>
        <p className="mt-3">…and a strong focus on provenance, craft and quality.</p>
      </>
    ),
  },
  liveMusic: {
    question: 'Is there live music?',
    answer: (
      <p>Yes. Live music and buskers run throughout the day, creating a relaxed and lively festival atmosphere across the town.</p>
    ),
  },
  byzantineWalk: {
    question: 'What is the Byzant Walk?',
    answer: (
      <>
        <p>A traditional heritage procession departing from the Town Hall at 2:00pm, travelling through the town centre to the natural spring in Enmore Green.</p>
        <p className="mt-3">It adds a distinctive cultural and historical thread to the day.</p>
      </>
    ),
  },
  family: {
    question: 'Are there family-friendly activities?',
    answer: (
      <>
        <p>Yes, the festival is very family-focused. FREE activities include:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Ingredients Hunt across local independent shops</li>
          <li>Children&rsquo;s art competition at The Grosvenor Arms</li>
        </ul>
        <p className="mt-3">Both are designed to be fun, interactive and exploratory.</p>
      </>
    ),
  },
  artExhibition: {
    question: 'Is there an art exhibition?',
    answer: (
      <>
        <p>Yes. <strong>A Feast For The Eyes</strong> is a FREE food-inspired exhibition at Shaftesbury Arts Centre.</p>
        <p className="mt-3">It explores food as culture, craft and connection, featuring multiple contemporary artists and supported by The Kitchen Table Dorset.</p>
      </>
    ),
  },
  gettingThere: {
    question: 'How do I get to the festival?',
    answer: (
      <p>A dedicated <strong>Park &amp; Ride</strong> service operates from Port Regis School (SP7 9QA), running every 30 minutes. Bookable by Eventbrite. It is the easiest way to access the town during the event.</p>
    ),
  },
  parking: {
    question: 'Is parking available?',
    answer: (
      <>
        <p>Yes. Parking is available via the Park &amp; Ride system.</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>£5 per car (advance booking recommended via Eventbrite)</li>
          <li>Capacity for up to 600 vehicles</li>
          <li>Regular shuttle service into town, every half hour</li>
        </ul>
      </>
    ),
  },
  dogs: {
    question: 'Can I bring my dog?',
    answer: (
      <>
        <p>Well-behaved dogs are welcome, particularly in outdoor areas. Please be mindful of crowds and hot surfaces when planning your visit.</p>
        <p className="mt-3">Dogs are also permitted on the Park &amp; Ride minibuses, at the driver&rsquo;s discretion.</p>
      </>
    ),
  },
  finish: {
    question: 'What time does the festival finish?',
    answer: <p>All Sunday activities conclude at approximately 5pm.</p>,
  },
  booking: {
    question: 'Do I need to book in advance?',
    answer: (
      <>
        <p>Some elements are FREE but require booking, including:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Gold Hill Cheese Race entry</li>
          <li>Your place in the audience for the MasterChefs LIVE demos (tickets by donation)</li>
          <li>Park &amp; Ride parking</li>
        </ul>
        <p className="mt-3">Booking in advance is via Eventbrite.</p>
      </>
    ),
  },
  accessibility: {
    question: 'Is the festival accessible?',
    answer: (
      <>
        <p>The festival takes place across historic streets, including some steep and uneven areas such as the cobblestones of Gold Hill.</p>
        <p className="mt-3">Accessibility support is considered across the site, but visitors with specific needs are encouraged to plan ahead or contact the organisers for advice before attending: <a href="mailto:hello@shaftesbury-food-festival.co.uk" className="text-primary hover:text-accent-dark font-medium">hello@shaftesbury-food-festival.co.uk</a>.</p>
      </>
    ),
  },
  organisers: {
    question: 'Who runs the festival?',
    answer: (
      <p>Shaftesbury Food Festival is delivered by a volunteer-led team from the Shaftesbury &amp; District Chamber of Commerce, with support from Shaftesbury Town Council and The Kitchen Table Dorset.</p>
    ),
  },
  rain: {
    question: 'What happens if it rains?',
    answer: (
      <p>The festival runs in all weather conditions. Many activities are outdoors, so we recommend dressing appropriately for the British spring weather and checking the forecast in advance.</p>
    ),
  },
  traders: {
    question: 'Can traders or exhibitors apply?',
    answer: (
      <p>Trade stand applications for the 2026 festival are now closed. The Street Market is fully booked with over 100 traders. Browse the line-up at <Link href="/trade-stands" className="text-primary hover:text-accent-dark font-medium">shaftesbury-food-festival.co.uk/trade-stands</Link>.</p>
    ),
  },
  foodTrailChildren: {
    question: 'Is the Food Trail suitable for children?',
    answer: (
      <p>Yes. The Food Trail is a relaxed, exploratory experience that works beautifully for families, with farm visits, tastings and hands-on encounters with producers. As many locations are working farms, visitors are asked to take sensible care and follow on-site guidance at all times.</p>
    ),
  },
}

export const allFaqOrder: FAQKey[] = [
  'when',
  'where',
  'postcodes',
  'free',
  'foodTrail',
  'highlights',
  'cheeseRace',
  'masterChefs',
  'streetMarket',
  'liveMusic',
  'byzantineWalk',
  'family',
  'artExhibition',
  'gettingThere',
  'parking',
  'dogs',
  'finish',
  'booking',
  'accessibility',
  'organisers',
  'rain',
  'traders',
  'foodTrailChildren',
]

export function getFaqs(keys: FAQKey[]): FAQItem[] {
  return keys.map((k) => faqs[k])
}
