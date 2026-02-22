import { Metadata } from 'next'
import { Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Shaftesbury Food Festival 2026',
  description:
    'Get in touch with the Shaftesbury Food Festival team. Questions about the festival, trade stands, cheese race or volunteering? We\'d love to hear from you.',
}

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with the festival team."
      />

      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-text">Get in Touch</h2>
              <p className="mt-4 text-text-light leading-relaxed">
                Whether you have questions about the festival, want to register a trade stand, enter the cheese race, or get involved as a volunteer — we&apos;re here to help.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text">Email</h3>
                    <a href="mailto:hello@shaftesburyfoodfestival.co.uk" className="text-primary hover:underline">
                      hello@shaftesburyfoodfestival.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text">Festival Location</h3>
                    <p className="text-text-light">High Street &amp; Park Walk<br />Shaftesbury, Dorset</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <h3 className="font-bold text-text">Follow Us</h3>
                <div className="mt-3 flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Supported by */}
              <div className="mt-8 rounded-lg bg-gray-50 p-6">
                <p className="text-sm font-semibold text-text">Supported by Shaftesbury Town Council</p>
                <p className="mt-1 text-sm text-text-light">
                  Run by volunteers from Shaftesbury Chamber of Commerce.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-text">Send Us a Message</h2>
              <p className="mt-2 text-text-light">
                We&apos;ll get back to you as soon as possible.
              </p>
              <div className="mt-6 rounded-xl bg-white p-6 shadow-sm md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
