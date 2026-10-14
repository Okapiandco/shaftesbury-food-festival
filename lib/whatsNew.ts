/**
 * "What's new" items shown on the home page.
 * Add the newest item at the top. Keep to 4 or 5 items; delete old ones.
 * `href` can be an internal path or a full URL.
 */
export interface WhatsNewItem {
  date: string
  title: string
  text: string
  href: string
  cta: string
}

export const whatsNew: WhatsNewItem[] = [
  {
    date: 'October 2026',
    title: 'Dates confirmed for 2027',
    text: 'Food Trail on Saturday 1st May, then the Festival on Sunday 2nd May.',
    href: '/events',
    cta: 'See the weekend',
  },
  {
    date: 'October 2026',
    title: 'Traders: expressions of interest open',
    text: 'Want a stall at the Sunday Street Market? Tell us about your business.',
    href: '/trade-stands#apply',
    cta: 'Register interest',
  },
  {
    date: 'October 2026',
    title: 'Live Action Kitchen: chefs announced early 2027',
    text: 'Register to hear first when the line-up and booking details are released.',
    href: '#updates',
    cta: 'Register for updates',
  },
  {
    date: 'October 2026',
    title: 'Volunteers wanted',
    text: 'From a few hours on the weekend to skills in the months of planning ahead.',
    href: '/volunteers',
    cta: 'Volunteer with us',
  },
]
