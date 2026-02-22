import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import NewsletterForm from '@/components/shared/NewsletterForm'

const footerLinks = [
  { href: '/about', label: 'About the Festival' },
  { href: '/cheese-race', label: 'Gold Hill Cheese Race' },
  { href: '/trade-stands', label: 'Trade Stands' },
  { href: '/events', label: 'Events & Timetable' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/volunteers', label: 'Volunteers' },
  { href: '/contact', label: 'Contact Us' },
]

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold">Shaftesbury Food Festival</h3>
            <p className="mt-2 text-sm text-blue-200">
              3rd May 2026 — A day packed full of fun food and festivities on Shaftesbury&apos;s historic high street.
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">Contact</h3>
            <div className="mt-3 space-y-2 text-sm text-blue-200">
              <p>
                <a href="mailto:hello@shaftesburyfoodfestival.co.uk" className="hover:text-white">
                  hello@shaftesburyfoodfestival.co.uk
                </a>
              </p>
              <p>High Street &amp; Park Walk</p>
              <p>Shaftesbury, Dorset</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">Get Festival Updates</h3>
            <p className="mt-3 text-sm text-blue-200">
              Sign up for the latest news and announcements.
            </p>
            <div className="mt-3">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-blue-200">
          <p>Supported by Shaftesbury Town Council &bull; Run by Shaftesbury Chamber of Commerce</p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} Shaftesbury Food Festival. Built by{' '}
            <a href="https://okapiandco.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              Okapi &amp; Co
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
