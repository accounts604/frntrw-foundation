const pillars = [
  { num: '01', title: 'Technical Coaching', desc: 'Elite-level skill development from coaches who\'ve played at the top.' },
  { num: '02', title: 'Physical Development', desc: 'Age-appropriate conditioning for long-term athletic performance.' },
  { num: '03', title: 'Mental Resilience', desc: 'Mindset coaching, pressure management, and identity development.' },
  { num: '04', title: 'Pathway Access', desc: 'Direct connections to academies, representative programmes, and selection.' },
  { num: '05', title: 'Community Belonging', desc: 'Rooted in Pasifika values — collective strength and cultural pride.' },
]

export default function Pillars() {
  return (
    <section id="programmes" style={{ background: 'var(--section-bg)', padding: 'var(--pad-y) var(--pad-x)', color: 'var(--black)' }}>
      <span style={{ fontSize: 10, letterSpacing: '3.5px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginBottom: 14, display: 'block' }}>
        The Foundation
      </span>
      <h2 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: 'clamp(48px,6vw,80px)', lineHeight: 0.9, letterSpacing: -1, marginBottom: 20, color: 'var(--black)' }}>
        Five pillars.<br />One mission.
      </h2>
      <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.75, color: 'rgba(0,0,0,0.55)', maxWidth: 520, marginBottom: 56 }}>
        Every programme we run is built around five principles that close the gap between talent and opportunity.
      </p>

      <div className="pillars-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5,1fr)',
        gap: 0,
        borderTop: '1.5px solid rgba(0,0,0,0.12)',
        borderLeft: '1.5px solid rgba(0,0,0,0.12)',
      }}>
        {pillars.map(p => (
          <div key={p.num} className="pillar-item pillar-hover" style={{
            padding: '36px 28px 40px',
            borderRight: '1.5px solid rgba(0,0,0,0.12)',
            borderBottom: '1.5px solid rgba(0,0,0,0.12)',
            background: 'var(--section-bg)',
            transition: 'background 0.3s',
          }}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 52, fontWeight: 300, color: 'rgba(0,0,0,0.08)', lineHeight: 1, marginBottom: 16 }}>{p.num}</div>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.2px', marginBottom: 10, color: 'var(--black)' }}>{p.title}</div>
            <div style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.65, color: 'rgba(0,0,0,0.5)' }}>{p.desc}</div>
          </div>
        ))}
      </div>

      <style>{`
        .pillar-hover:hover { background: #edecea !important; }
        @media (max-width: 768px) {
          .pillars-grid { grid-template-columns: 1fr 1fr !important; }
          .pillar-item { padding: 28px 20px 32px !important; }
        }
        @media (max-width: 480px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
          .pillar-item { padding: 24px 16px 28px !important; }
        }
      `}</style>
    </section>
  )
}
