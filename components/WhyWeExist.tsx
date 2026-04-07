export default function WhyWeExist() {
  return (
    <section id="why" style={{ background: 'var(--charcoal)', padding: 'var(--pad-y) var(--pad-x)' }}>
      <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <span className="section-label">Why We Exist</span>
          <h2 style={{
            fontFamily: "'DM Sans',sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(40px,5vw,60px)',
            lineHeight: 0.95,
            letterSpacing: -1,
            marginBottom: 24,
            color: 'var(--white)',
          }}>
            The market charges<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>$24–$50 a week.</em><br />
            We charge nothing.
          </h2>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.75, color: 'rgba(245,243,238,0.65)', marginBottom: 24 }}>
            For a family with two athletes, structured youth development in Auckland costs $2,500–$5,200 per year. Frntrw Foundation exists to eliminate that barrier entirely — delivering the same quality, with a more credible coaching pedigree, at zero cost to the athlete.
          </p>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,243,238,0.45)' }}>
            Funders don&apos;t fund programmes that already make money. They fund the gap between what the market charges and what families in South and West Auckland can actually afford. That gap is what we exist to close.
          </p>
        </div>

        <div className="why-stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          <div style={{ background: 'var(--mid)', padding: '32px 24px' }}>
            <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>Market Rate</div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 48, color: 'var(--white)', lineHeight: 1 }}>$24–$50</div>
            <div style={{ fontSize: 13, color: 'rgba(245,243,238,0.4)', marginTop: 8, lineHeight: 1.5 }}>
              per week, per athlete<br />Iron Up · JP Athletic
            </div>
          </div>
          <div style={{ background: 'var(--gold)', padding: '32px 24px' }}>
            <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginBottom: 8 }}>Frntrw Foundation</div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 48, color: 'var(--black)', lineHeight: 1 }}>$0</div>
            <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.55)', marginTop: 8, lineHeight: 1.5 }}>
              Community Programme<br />Subsidised by sponsors
            </div>
          </div>
          <div className="why-stats-full" style={{ background: 'var(--mid)', padding: 24, gridColumn: 'span 2', borderTop: '1px solid rgba(245,243,238,0.08)' }}>
            <div style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.75, color: 'rgba(245,243,238,0.5)' }}>
              For a family with two athletes that&apos;s <strong style={{ color: 'var(--white)', fontWeight: 500 }}>$2,500–$5,200 saved every year</strong> — reinvested directly into the athletes we serve.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 480px) {
          .why-stats-grid { grid-template-columns: 1fr !important; }
          .why-stats-full { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}
