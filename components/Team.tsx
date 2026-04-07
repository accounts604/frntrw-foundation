import Image from 'next/image'

export default function Team() {
  return (
    <section id="about" style={{ padding: 0 }}>
      <div className="team-banner" style={{ position: 'relative', height: 600, overflow: 'hidden' }}>
        <Image
          src="/images/team-bg.jpg"
          alt="FRNTRW coaching team"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(13,13,11,0.94) 38%,rgba(13,13,11,0.3) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px var(--pad-x)', zIndex: 2, maxWidth: 680 }}>
          <Image src="/images/icon-sm.png" width={28} height={23} alt="" style={{ objectFit: 'contain', marginBottom: 12, opacity: 0.8 }} />
          <span className="section-label">The Coaching Team</span>
          <h2 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 'clamp(48px,7vw,80px)', lineHeight: 0.9, letterSpacing: -1, marginBottom: 18, fontWeight: 500, color: 'var(--white)' }}>
            Eight coaches.<br />One standard.
          </h2>
          <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,243,238,0.6)', maxWidth: 420 }}>
            Every coach on this team has played professionally. All eight are here voluntarily — because they believe the next generation of Auckland athletes deserves access to the real thing.
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .team-banner { height: clamp(400px, 60vh, 600px) !important; }
        }
        @media (max-width: 480px) {
          .team-banner { height: auto !important; min-height: 360px !important; }
        }
      `}</style>
    </section>
  )
}
