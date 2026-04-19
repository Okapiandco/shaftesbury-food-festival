import Image from 'next/image'

interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  backgroundAlt?: string
}

export default function PageHeader({ title, subtitle, backgroundImage, backgroundAlt }: PageHeaderProps) {
  if (backgroundImage) {
    return (
      <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
        <Image
          src={backgroundImage}
          alt={backgroundAlt || ''}
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" aria-hidden="true" />
        <div className="relative container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-3xl font-bold drop-shadow-md md:text-5xl">{title}</h1>
          {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100 drop-shadow">{subtitle}</p>}
        </div>
      </section>
    )
  }

  return (
    <section className="bg-primary py-16 text-white">
      <div className="container mx-auto px-4 text-center animate-fade-in-up">
        <h1 className="text-3xl font-bold md:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-200">{subtitle}</p>}
      </div>
    </section>
  )
}
