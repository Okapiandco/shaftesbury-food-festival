import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Shaftesbury Food Festival 2026 | 3rd May Bank Holiday',
    template: '%s | Shaftesbury Food Festival 2026',
  },
  description:
    'Join us on 3rd May for the Shaftesbury Food Festival. Watch the famous Gold Hill Cheese Race, enjoy 100+ food stalls, chef talks and Dorset food and drink. Bank holiday celebration on Shaftesbury\'s historic high street.',
  keywords: [
    'Shaftesbury Food Festival',
    'Gold Hill Cheese Race',
    'Dorset food festival',
    'bank holiday events',
    'Shaftesbury',
    'food stalls',
    'chef talks',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Shaftesbury Food Festival 2026',
    title: 'Shaftesbury Food Festival 2026 | 3rd May Bank Holiday',
    description:
      'Join us on 3rd May for the Shaftesbury Food Festival. Watch the famous Gold Hill Cheese Race, enjoy 100+ food stalls, chef talks and Dorset food and drink.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaftesbury Food Festival 2026',
    description:
      'Join us on 3rd May for the Shaftesbury Food Festival. Gold Hill Cheese Race, 100+ food stalls, chef talks and more.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
