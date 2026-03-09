import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Shaftesbury Food Festival 3rd May 2026',
    template: '%s | Shaftesbury Food Festival 2026',
  },
  description:
    'Join us on 3rd May for the Shaftesbury Food Festival. Watch the famous Gold Hill Cheese Race, enjoy 100+ food stalls, chef talks and Dorset food and drink. Bank holiday celebration on Shaftesbury\'s historic high street.',
  keywords: [
    'Shaftesbury Food Festival',
    'Shaftesbury Food Festival 2026',
    'Gold Hill Cheese Race',
    'Dorset food festival',
    'Dorset food and drink',
    'Dorset events May 2026',
    'bank holiday events Dorset',
    'Shaftesbury high street',
    'Shaftesbury',
    'food stalls',
    'chef talks',
    'food trail',
    'Shaftesbury food trail',
    'Dorset Blue Vinny',
    'Gold Hill Organic Farm',
    'Olives Et Al',
    'Cann Mills',
    'local food producers Dorset',
    'Hovis hill',
    'cheese rolling Dorset',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Shaftesbury Food Festival 2026',
    title: 'Shaftesbury Food Festival 2026 | 3rd May Bank Holiday',
    description:
      'Join us on 3rd May for the Shaftesbury Food Festival. Watch the famous Gold Hill Cheese Race, enjoy 100+ food stalls, chef talks and Dorset food and drink.',
    images: [{ url: '/images/gold-hill.jpg', width: 1200, height: 630, alt: 'Gold Hill, Shaftesbury — home of the famous Cheese Race and Food Festival' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaftesbury Food Festival 2026',
    description:
      'Join us on 3rd May for the Shaftesbury Food Festival. Gold Hill Cheese Race, 100+ food stalls, chef talks and more.',
    images: ['/images/gold-hill.jpg'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NE9V63ZRCC"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NE9V63ZRCC');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
