export default function SponsorsCarousel() {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-text-muted">Thanks to Our Sponsors</p>
      </div>
      <div className="relative">
        <div className="flex animate-scroll gap-16 w-max">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              <a href="https://www.countrycarsshaftesbury.co.uk/" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-opacity hover:opacity-70">
                <img src="/Sponsors/COuntry Cars.avif" alt="Country Cars" className="h-16 w-auto object-contain" />
              </a>
              <a href="https://www.themitredorset.co.uk" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-opacity hover:opacity-70">
                <img src="/Sponsors/The Mitre Inn Dorset.jpeg" alt="The Mitre" className="h-16 w-auto object-contain" />
              </a>
              <a href="https://www.worldcheeseawards.com" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-opacity hover:opacity-70">
                <img src="/Sponsors/world-cheese-awards-logo.svg" alt="World Cheese Awards" className="h-16 w-auto object-contain" />
              </a>
              <a href="https://www.truckletruck.co.uk" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-opacity hover:opacity-70">
                <img src="/Sponsors/TT_Brandmark_FULL_Col_B.avif" alt="The Truckle Truck" className="h-16 w-auto object-contain" />
              </a>
              <a href="https://www.gff.co.uk" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-opacity hover:opacity-70">
                <img src="/Sponsors/gff-logo.svg" alt="Guild of Fine Food" className="h-16 w-auto object-contain" />
              </a>
              <a href="https://www.portregis.com" target="_blank" rel="noopener noreferrer" className="shrink-0 transition-opacity hover:opacity-70">
                <img src="/Sponsors/Port regis.png" alt="Port Regis School" className="h-16 w-auto object-contain" />
              </a>
              <div className="shrink-0">
                <img src="/Sponsors/Grassby Funeral Services.svg" alt="Grassby Funeral Services" className="h-16 w-auto object-contain" />
              </div>
              <div className="shrink-0">
                <img src="/images/SHaftesbury Chamber logo.png" alt="Shaftesbury &amp; District Chamber of Commerce" className="h-16 w-auto object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
