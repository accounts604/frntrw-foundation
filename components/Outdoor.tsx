import Image from 'next/image'

export default function Outdoor() {
  return (
    <section className="outdoor-section" style={{ position: 'relative', height: 520, overflow: 'hidden' }}>
      <Image
        src="/images/outdoor.jpg"
        alt="Outdoor training session"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,rgba(13,13,11,0.9) 35%,rgba(13,13,11,0.2) 100%)' }} />
      <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 'var(--pad-x)', zIndex: 2, maxWidth: 500 }}>
        <span className="section-label">On the Field</span>
        <h2 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 'clamp(44px,5.5vw,68px)', lineHeight: 0.92, marginBottom: 18, fontWeight: 500, color: 'var(--white)' }}>
          This is what<br />access looks like.
        </h2>
        <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,243,238,0.6)', marginBottom: 32 }}>
          Every session is coach-led, structured, and designed to give Auckland youth athletes the same quality of development that professional players receive.
        </p>
        <a href="#pathways" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-block' }}>
          View Programmes
        </a>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .outdoor-section { height: clamp(400px, 65vh, 520px) !important; }
        }
        @media (max-width: 480px) {
          .outdoor-section { height: auto !important; min-height: 380px !important; }
        }
      `}</style>
    </section>
  )
}
