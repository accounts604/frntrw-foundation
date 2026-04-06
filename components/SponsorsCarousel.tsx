import Image from 'next/image'

const logos = [
  { src: '/images/sponsor-sanitarium.png', alt: 'Sanitarium' },
  { src: '/images/sponsor-barkers.png', alt: "Barker's" },
  { src: '/images/sponsor-sanitarium.png', alt: 'Sanitarium' },
  { src: '/images/sponsor-barkers.png', alt: "Barker's" },
  { src: '/images/sponsor-sanitarium.png', alt: 'Sanitarium' },
  { src: '/images/sponsor-barkers.png', alt: "Barker's" },
  { src: '/images/sponsor-sanitarium.png', alt: 'Sanitarium' },
  { src: '/images/sponsor-barkers.png', alt: "Barker's" },
]

export default function SponsorsCarousel() {
  return (
    <section style={{
      background: '#ffffff',
      padding: '40px var(--pad-x)',
      borderTop: '1px solid rgba(0,0,0,0.06)',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', textAlign: 'center', marginBottom: 32 }}>
        Our Partners &amp; Sponsors
      </div>
      <div style={{
        overflow: 'hidden',
        position: 'relative',
        maskImage: 'linear-gradient(to right,transparent,black 10%,black 90%,transparent)',
        WebkitMaskImage: 'linear-gradient(to right,transparent,black 10%,black 90%,transparent)',
      }}>
        <div className="sponsors-track" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 72,
          animation: 'scroll-logos 22s linear infinite',
          width: 'max-content',
        }}>
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={44}
              className="sponsor-logo"
              style={{ objectFit: 'contain' }}
            />
          ))}
        </div>
      </div>

      <style>{`
        .sponsors-track:hover { animation-play-state: paused; }
        .sponsor-logo { filter: grayscale(100%); opacity: 0.45; transition: opacity 0.3s, filter 0.3s; }
        .sponsor-logo:hover { filter: grayscale(0%) brightness(1) !important; opacity: 1 !important; }
      `}</style>
    </section>
  )
}
