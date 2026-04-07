import Image from 'next/image'

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
      <Image
        src="/images/hero-bg.jpg"
        alt="Coach on the dome field"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(13,13,11,0.98) 0%,rgba(13,13,11,0.65) 40%,rgba(13,13,11,0.1) 100%)' }} />

      <div className="hero-content" style={{ position: 'relative', zIndex: 2, padding: '0 var(--pad-x) 80px', maxWidth: 900 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0, marginBottom: 24 }}>
          <Image src="/images/icon-gold.png" width={56} height={48} alt="FRNTRW" style={{ objectFit: 'contain' }} />
          <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginTop: 6, fontWeight: 400 }}>Foundation</div>
        </div>

        <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>
          Auckland · Est. 2023 · Pasifika-led
        </div>

        <h1 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: 'clamp(80px,12vw,140px)',
          lineHeight: 0.86,
          letterSpacing: -2,
          marginBottom: 28,
        }}>
          Built for<em style={{ color: 'var(--gold)', fontStyle: 'normal', display: 'block' }}>Frontrow</em>Athletes.
        </h1>

        <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,243,238,0.7)', maxWidth: 480, marginBottom: 40 }}>
          Frntrw Foundation provides structured development pathways for Auckland athletes aged 10–17. Elite coaching. Real access. No athlete left behind.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#register" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Register Your Athlete
          </a>
          <a href="#sponsor" className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Partner With Us
          </a>
        </div>

        <div className="hero-stats" style={{ display: 'flex', gap: 56, marginTop: 64, paddingTop: 40, borderTop: '0.5px solid var(--border)', flexWrap: 'wrap' }}>
          {[['300+', 'Registrations'], ['3', 'Clinics Delivered'], ['10', 'Elite Coaches'], ['60', 'Test Caps — Founder']].map(([num, label]) => (
            <div key={label}>
              <div className="hero-stat-num" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 56, color: 'var(--gold)', lineHeight: 1, fontWeight: 300 }}>{num}</div>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(245,243,238,0.4)', marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section { min-height: 100svh; }
          .hero-content { padding-bottom: 48px !important; }
          .hero-stats { gap: 28px !important; margin-top: 40px !important; padding-top: 24px !important; }
          .hero-stat-num { font-size: 40px !important; }
        }
        @media (max-width: 480px) {
          .hero-content { padding-bottom: 36px !important; }
          .hero-stats { gap: 20px !important; margin-top: 32px !important; }
          .hero-stat-num { font-size: 32px !important; }
        }
      `}</style>
    </section>
  )
}
