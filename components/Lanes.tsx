import Image from 'next/image'

export default function Lanes() {
  return (
    <section id="pathways" style={{ background: 'var(--black)', padding: 0 }}>
      {/* Intro */}
      <div style={{ padding: 'var(--pad-y) var(--pad-x) 64px' }}>
        <span className="section-label">Our Programmes</span>
        <h2 className="section-h2" style={{ color: 'var(--white)' }}>Two lanes.<br />One mission.</h2>
        <p className="section-intro">
          Every young Auckland athlete has a path in — regardless of background or budget. Choose the lane that fits where you&apos;re at right now.
        </p>
        <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(245,243,238,0.45)', maxWidth: 600, lineHeight: 1.7 }}>
          We run the paid Academy so we can fund the free Community programme.{' '}
          <strong style={{ color: 'var(--gold)', fontWeight: 500 }}>Every Academy enrolment directly subsidises a Community athlete who can&apos;t afford to pay.</strong>
        </p>
      </div>

      {/* Model callout */}
      <div style={{ background: 'var(--gold)', padding: '28px var(--pad-x)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <div style={{ fontSize: 14, fontWeight: 400, color: 'var(--black)', textAlign: 'center', maxWidth: 680, lineHeight: 1.65 }}>
          <strong style={{ fontWeight: 600 }}>The FRNTRW Model:</strong> 30 Academy athletes per term funds 80+ free Community spots. Paying for premium isn&apos;t just investing in your athlete — it&apos;s investing in the kid next to them who couldn&apos;t otherwise be there.
        </div>
      </div>

      {/* Lanes grid */}
      <div className="lanes-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '0.5px', background: 'rgba(201,168,76,0.15)', zIndex: 3, pointerEvents: 'none' }} className="lane-divider" />

        {/* Community */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 700, display: 'flex', flexDirection: 'column' }} className="lane-item">
          <Image src="/images/lane-community.jpg" alt="FRNTRW Community Programme" fill style={{ objectFit: 'cover', transition: 'transform 0.8s ease' }} className="lane-bg-img" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(13,13,11,0.97) 0%,rgba(13,13,11,0.7) 45%,rgba(13,13,11,0.3) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 2, padding: '56px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
            <div style={{ display: 'inline-block', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', padding: '5px 14px', marginBottom: 24, width: 'fit-content', background: 'rgba(245,243,238,0.08)', color: 'rgba(245,243,238,0.6)', border: '0.5px solid rgba(245,243,238,0.15)' }}>
              Free · Open Access
            </div>
            <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 'clamp(40px,4.5vw,58px)', fontWeight: 500, color: 'var(--white)', lineHeight: 0.96, marginBottom: 14, letterSpacing: -0.5 }}>
              FRNTRW<br />Community
            </h3>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,243,238,0.6)', marginBottom: 32, maxWidth: 340 }}>
              Structured coaching for every Auckland athlete aged 10–17. No fees. No barriers. Just real access to quality development.
            </p>
            <ul style={{ listStyle: 'none', marginBottom: 36, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Open to all Auckland youth — no tryouts, no waitlists', 'Group coaching sessions led by professional coaches', 'Technical skills, physical conditioning, mental resilience', 'Pasifika and Māori cultural values embedded throughout', 'Equipment and kit provided — nothing to bring', 'Pathway into FRNTRW Academy for athletes who progress'].map(item => (
                <li key={item} style={{ fontSize: 13, fontWeight: 300, color: 'rgba(245,243,238,0.65)', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: 7, display: 'inline-block' }} />
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ fontSize: 13, color: 'var(--gold)', marginBottom: 24, paddingTop: 20, borderTop: '0.5px solid rgba(201,168,76,0.2)' }}>
              Cost to athletes: <strong style={{ fontSize: 32, fontWeight: 500, display: 'block', lineHeight: 1, marginBottom: 4 }}>Free</strong>
              Funded by Academy fees & community grants
            </div>
            <a href="#register" style={{ background: 'transparent', color: 'var(--white)', border: '0.5px solid rgba(245,243,238,0.3)', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', padding: '14px 30px', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", transition: 'all 0.2s', textDecoration: 'none', display: 'inline-block' }}>
              Register Free
            </a>
          </div>
        </div>

        {/* Academy */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 700, display: 'flex', flexDirection: 'column' }} className="lane-item">
          <Image src="/images/lane-academy.jpg" alt="FRNTRW Academy" fill style={{ objectFit: 'cover', transition: 'transform 0.8s ease' }} className="lane-bg-img" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(13,13,11,0.97) 0%,rgba(13,13,11,0.72) 45%,rgba(13,13,11,0.35) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 2, padding: '56px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
            <div style={{ display: 'inline-block', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', padding: '5px 14px', marginBottom: 24, width: 'fit-content', background: 'var(--gold)', color: 'var(--black)' }}>
              Paid · Performance-Focused
            </div>
            <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 'clamp(40px,4.5vw,58px)', fontWeight: 500, color: 'var(--white)', lineHeight: 0.96, marginBottom: 14, letterSpacing: -0.5 }}>
              FRNTRW<br />Academy
            </h3>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,243,238,0.6)', marginBottom: 32, maxWidth: 340 }}>
              For athletes serious about performance. Smaller cohorts, individual feedback, and direct pathways to representative selection and academy entry.
            </p>
            <ul style={{ listStyle: 'none', marginBottom: 36, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Capped at 20 athletes per cohort — serious coaching to individual', 'Individual performance tracking across every session block', 'Direct connections to representative programmes and academies', 'Conditioning and physical preparation at a professional standard', 'One-on-one feedback from coaches with professional playing careers', 'Priority access to clinics, trials, and external exposure events'].map(item => (
                <li key={item} style={{ fontSize: 13, fontWeight: 300, color: 'rgba(245,243,238,0.65)', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: 7, display: 'inline-block' }} />
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ fontSize: 13, color: 'var(--gold)', marginBottom: 24, paddingTop: 20, borderTop: '0.5px solid rgba(201,168,76,0.2)' }}>
              Investment: <strong style={{ fontSize: 32, fontWeight: 500, display: 'block', lineHeight: 1, marginBottom: 4 }}>$175</strong>
              per 6-week term · $33/session · Subsidies available
            </div>
            <a href="#register" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Apply for Academy
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .lanes-grid { grid-template-columns: 1fr !important; }
          .lane-divider { display: none !important; }
          .lane-item { min-height: 520px !important; }
        }
      `}</style>
    </section>
  )
}
