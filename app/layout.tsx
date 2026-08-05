import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaftesbury-food-festival.co.uk'),
  title: {
    default: 'Shaftesbury Food Festival 2nd May 2027',
    template: '%s | Shaftesbury Food Festival 2027',
  },
  description:
    'Join us on 2nd May 2027 for the Shaftesbury Food Festival. Watch the famous Gold Hill Cheese Race, enjoy a variety of local food and drink producers, chef talks and more. Bank holiday celebration on Shaftesbury\'s historic high street.',
  keywords: [
    'Shaftesbury Food Festival',
    'Shaftesbury Food Festival 2027',
    'Gold Hill Cheese Race',
    'Dorset food festival',
    'Dorset food and drink',
    'Dorset events May 2027',
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
    siteName: 'Shaftesbury Food Festival 2027',
    title: 'Shaftesbury Food Festival 2027 | 2nd May Bank Holiday',
    description:
      'Join us on 2nd May 2027 for the Shaftesbury Food Festival. Watch the famous Gold Hill Cheese Race, enjoy a variety of local food and drink producers, chef talks and more.',
    images: [{ url: '/Shaftesbury food festival Logo.png', alt: 'Shaftesbury Food Festival 2027 Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaftesbury Food Festival 2027',
    description:
      'Join us on 2nd May 2027 for the Shaftesbury Food Festival. Gold Hill Cheese Race, local food and drink producers, chef talks and more.',
    images: ['/Shaftesbury food festival Logo.png'],
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
