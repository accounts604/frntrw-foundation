import Image from 'next/image'

export default function GroupPhoto() {
  return (
    <section className="group-photo-section" style={{ position: 'relative', height: 640, overflow: 'hidden' }}>
      <Image
        src="/images/group-photo.jpg"
        alt="FRNTRW Foundation community"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,transparent 20%,rgba(13,13,11,0.92) 100%)' }} />
      <div className="group-photo-content" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '60px var(--pad-x)', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
        <div>
          <p className="group-photo-quote" style={{ fontSize: 22, fontWeight: 300, lineHeight: 1.55, color: 'var(--white)', maxWidth: 600 }}>
            &ldquo;This is what <em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>300 registrations</em> looks like. Kids who showed up before we had funding, before we had a website, before we had anything — because the programme was real.&rdquo;
          </p>
          <div style={{ fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(245,243,238,0.4)', marginTop: 10 }}>
            Frntrw Foundation — Auckland, 2024
          </div>
        </div>
        <a href="#register" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-block' }}>
          Register Your Athlete
        </a>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .group-photo-section { height: clamp(420px, 70vh, 640px) !important; }
          .group-photo-content { padding: 36px var(--pad-x) !important; align-items: flex-start !important; flex-direction: column !important; }
          .group-photo-quote { font-size: 18px !important; }
        }
        @media (max-width: 480px) {
          .group-photo-section { height: auto !important; min-height: 400px !important; }
          .group-photo-quote { font-size: 16px !important; }
        }
      `}</style>
    </section>
  )
}
