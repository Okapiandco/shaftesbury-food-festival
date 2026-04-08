import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CountdownTicker from '@/components/shared/CountdownTicker'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <div className="sticky top-0 z-50">
        <CountdownTicker />
        <Header />
      </div>
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}
