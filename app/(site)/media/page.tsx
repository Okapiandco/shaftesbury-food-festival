import { Metadata } from 'next'
import Image from 'next/image'
import { Download, FileText } from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'

export const metadata: Metadata = {
  title: 'Media | Shaftesbury Food Festival 2026',
  description:
    'Press resources and downloadable images for the Shaftesbury Food Festival 2026. High-resolution photos available for media use.',
  alternates: { canonical: '/media' },
}

const pressImages = [
  {
    src: '/Shaftesbury food festival Logo.svg',
    alt: 'Shaftesbury Food Festival Logo',
    description: 'Official Shaftesbury Food Festival logo',
  },
  {
    src: '/images/Media/Food Fectival logo Shaftesbury.jpeg',
    alt: 'Shaftesbury Food Festival Logo (JPEG)',
    description: 'Shaftesbury Food Festival logo — JPEG version for print and press use',
  },
  {
    src: '/images/Media/DSC_0232 (1).jpg',
    alt: 'Shaftesbury Food Festival — festival scene',
    description: 'Festival atmosphere on the streets of Shaftesbury (high-resolution)',
  },
  {
    src: '/images/Media/DSC_0276 (1).jpg',
    alt: 'Shaftesbury Food Festival — festival scene',
    description: 'Crowds enjoying the Shaftesbury Food Festival (high-resolution)',
  },
  {
    src: '/images/Media/DSC_3204.jpg',
    alt: 'Shaftesbury Food Festival — festival scene',
    description: 'Shaftesbury Food Festival in full swing (high-resolution)',
  },
  {
    src: '/images/Media/DSC_3865 (1).jpg',
    alt: 'Shaftesbury Food Festival — festival scene',
    description: 'Producers and visitors at the Shaftesbury Food Festival (high-resolution)',
  },
  {
    src: '/images/Food Demos/Ping Coombes Credit Sam Folan.jpg',
    alt: 'Ping Coombes — MasterChefs Live',
    description: 'Ping Coombes — MasterChefs Live chef portrait (credit: Sam Folan)',
  },
  {
    src: '/images/Food Demos/AA MChef.JPG',
    alt: 'Anurag Aggarwal — MasterChefs Live',
    description: 'Anurag Aggarwal — MasterChefs Live chef portrait',
  },
  {
    src: '/images/Food Demos/Shelina Headshots_240_DW.jpg',
    alt: 'Shelina Permaloo — MasterChefs Live',
    description: 'Shelina Permaloo — MasterChefs Live chef portrait',
  },
  {
    src: '/images/Cheese Race Image.jpg',
    alt: 'Gold Hill Cheese Race',
    description: 'The famous Gold Hill Cheese Race',
  },
]

export default function MediaPage() {
  return (
    <>
      <PageHeader
        title="Media"
        subtitle="Press resources and downloadable images for the Shaftesbury Food Festival."
      />

      {/* Introduction */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-text-light leading-relaxed">
            From the steep cobbles of Gold Hill to bustling market streets filled with Dorset&rsquo;s finest producers, the Shaftesbury Food Festival offers a rich visual and editorial story. From the iconic Gold Hill Cheese Race to vibrant street scenes and chef demonstrations, this media hub provides access to photography, press information and resources that bring the festival&rsquo;s flavour, energy and community spirit to life.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Press Releases</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Download the latest press materials about the Shaftesbury Food Festival.
          </p>
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FileText size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text">A Feast for the Eyes</h3>
                    <p className="mt-1 text-sm text-text-light">Press release announcing the &lsquo;A Feast for the Eyes&rsquo; art exhibition at Shaftesbury Arts Centre (29 Apr – 5 May), part of the 2026 Shaftesbury Food Festival.</p>
                  </div>
                </div>
                <a
                  href="/Feast for  the eyes press release.pdf"
                  download
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
                >
                  <Download size={14} />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Downloads */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Press Downloads</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            High-resolution images available for press use. Click to download.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pressImages.map((image) => (
              <div key={image.src} className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                <div className="relative aspect-[4/3] bg-gray-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-text">{image.alt}</p>
                  <p className="mt-1 text-xs text-text-light">{image.description}</p>
                  <a
                    href={image.src}
                    download
                    className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary/90 transition-colors"
                  >
                    <Download size={14} />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
