'use client'

import { useReveal } from './useReveal'

const stories = [
  {
    tag: 'Holiday Camp',
    title: 'Three days. One field. A generation of access.',
    note: 'Case study in production — full breakdown of athlete numbers, coaching team, and outcomes coming once content is finalised.',
    meta: 'Auckland · 2025',
  },
  {
    tag: 'Strategic Partnership',
    title: 'North Harbour Pasifika Hauora Collective.',
    note: 'The umbrella, the community reach, the cultural infrastructure. Partnership story being written.',
    meta: 'Auckland · 2026',
  },
  {
    tag: 'Corporate Partner',
    title: 'Foundation supporter in confirmation.',
    note: 'Case study to follow — brand alignment, contribution, and reach across the Foundation Programme.',
    meta: 'TBC',
  },
]

export default function CaseStudies() {
  const { ref, visible } = useReveal()

  return (
    <section
      ref={ref}
      id="stories"
      style={{
        background: 'var(--black)',
        color: 'var(--white)',
        padding: 'var(--pad-y) var(--pad-x)',
        borderTop: '0.5px solid var(--border-light)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
      }}
    >
      <div style={{ maxWidth: 1100 }}>
        <span className="section-label">Stories in Progress</span>
        <h2 className="section-h2" style={{ color: 'var(--white)' }}>
          The work.<br />The intent.
        </h2>
        <p className="section-intro">
          Case studies are being built directly with the athletes, coaches, and partners they document. The Statement of Intent sets the direction in writing — for funders, corporates, and trustees.
        </p>
      </div>

      {/* Case study placeholder cards */}
      <div
        className="cs-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 2,
          background: 'var(--border-light)',
          marginTop: 16,
        }}
      >
        {stories.map(s => (
          <article
            key={s.tag}
            className="cs-card"
            style={{
              background: 'var(--charcoal)',
              padding: '40px 36px',
              minHeight: 320,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <div
              style={{
                fontSize: 9,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: 'var(--gold)',
                background: 'rgba(201,168,76,0.08)',
                border: '0.5px solid rgba(201,168,76,0.2)',
                padding: '4px 10px',
                alignSelf: 'flex-start',
                marginBottom: 24,
              }}
            >
              {s.tag}
            </div>

            <div
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 22,
                fontWeight: 500,
                lineHeight: 1.25,
                color: 'var(--white)',
                marginBottom: 18,
              }}
            >
              {s.title}
            </div>

            <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,243,238,0.45)', marginBottom: 24 }}>
              {s.note}
            </p>

            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10, paddingTop: 20, borderTop: '0.5px solid var(--border-light)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
              <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(245,243,238,0.4)' }}>
                In production · {s.meta}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Capability statement strip */}
      <div
        className="cs-capability"
        style={{
          marginTop: 56,
          padding: '48px 56px',
          background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.02) 100%)',
          border: '0.5px solid var(--border)',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 48,
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
            Capability Statement · Statement of Intent
          </div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 28, fontWeight: 500, lineHeight: 1.2, color: 'var(--white)', marginBottom: 12 }}>
            Who we are. What we do. Where we&apos;re going.
          </div>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,243,238,0.55)', maxWidth: 560 }}>
            A two-page brief for funders, corporates, and trustees — purpose, governance, dual programme model, three-year direction, and how to partner.
          </p>
        </div>

        <div className="cs-cta-stack" style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 220 }}>
          <a href="/capability" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
            Read the Statement
          </a>
          <a href="/capability?print=1" className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
            Download as PDF
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .cs-grid { grid-template-columns: 1fr 1fr !important; }
          .cs-capability { grid-template-columns: 1fr !important; padding: 36px 32px !important; gap: 28px !important; }
        }
        @media (max-width: 640px) {
          .cs-grid { grid-template-columns: 1fr !important; }
          .cs-card { min-height: 0 !important; padding: 32px 24px !important; }
          .cs-cta-stack { min-width: 0 !important; width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
