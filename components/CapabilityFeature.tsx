'use client'

import Image from 'next/image'
import { useReveal } from './useReveal'

const INSIDE = [
  ['01', 'The Outcome We Deliver', 'Physical wellbeing, cultural identity, and pathway equity for the cohort the market overlooks.'],
  ['02', 'The Need We Address', 'Why structured youth sport at $24–50/week locks out Pasifika and Māori whānau by age fifteen.'],
  ['03', 'Outcomes Your Funding Supports', 'Wellbeing · Pastoral care · Identity · Pathway equity — measured per programme.'],
  ['04', 'How Outcomes Are Delivered', 'Programme model, coaching standard, and the impact-capture pipeline behind every story.'],
  ['05', 'Governance & Financial Structure', 'Two-entity NZ structure — operating company + charitable trust — built for funder accountability.'],
  ['06', 'Why Partner With Us', 'What a sponsor, grantmaker, or corporate partner gets when they back the work.'],
]

export default function CapabilityFeature() {
  const { ref, visible } = useReveal()

  return (
    <section
      ref={ref}
      id="capability"
      style={{
        background: 'var(--black)',
        color: 'var(--white)',
        padding: 'var(--pad-y) var(--pad-x)',
        borderTop: '0.5px solid var(--border-light)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="cap-feat-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 80, alignItems: 'center' }}>

        <div>
          <span className="section-label">Capability Statement · Statement of Intent</span>
          <h2 className="section-h2" style={{ color: 'var(--white)' }}>
            The brief for funders<br />and corporate partners.
          </h2>
          <p className="section-intro" style={{ maxWidth: 540 }}>
            Two pages. Foundation purpose, programme model, governance structure, and the outcomes your
            funding underwrites — written for the people who decide where capital goes.
          </p>

          <div
            className="cap-feat-audience"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              marginTop: 28,
              marginBottom: 40,
            }}
          >
            {['For funders', 'For corporate partners', 'For grant assessors', 'For whānau'].map(a => (
              <span
                key={a}
                style={{
                  fontSize: 10,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  background: 'rgba(201,168,76,0.08)',
                  border: '0.5px solid rgba(201,168,76,0.25)',
                  padding: '6px 12px',
                }}
              >
                {a}
              </span>
            ))}
          </div>

          <div
            className="cap-feat-inside"
            style={{
              borderTop: '0.5px solid var(--border-light)',
              marginBottom: 36,
            }}
          >
            {INSIDE.map(([num, title, blurb]) => (
              <div
                key={num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '44px 1fr',
                  gap: 20,
                  padding: '18px 0',
                  borderBottom: '0.5px solid var(--border-light)',
                  alignItems: 'baseline',
                }}
              >
                <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--gold)', fontWeight: 500 }}>{num}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--white)', marginBottom: 4 }}>{title}</div>
                  <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(245,243,238,0.55)', lineHeight: 1.6 }}>{blurb}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="cap-feat-ctas" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="/capability" className="btn-gold" style={{ textDecoration: 'none' }}>
              Read the Statement
            </a>
            <a href="/capability?print=1" className="btn-ghost" style={{ textDecoration: 'none' }}>
              Download 2-page PDF
            </a>
          </div>
        </div>

        {/* Document preview */}
        <div className="cap-feat-doc-wrap" style={{ position: 'relative' }}>
          <div
            className="cap-feat-doc"
            style={{
              position: 'relative',
              aspectRatio: '210 / 297',
              maxWidth: 440,
              marginLeft: 'auto',
              background: '#0d0d0b',
              border: '0.5px solid rgba(201,168,76,0.4)',
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.08)',
              overflow: 'hidden',
              transform: 'rotate(-1.2deg)',
            }}
          >
            <div style={{ position: 'absolute', inset: 0 }}>
              <Image
                src="/images/outdoor.jpg"
                alt="Frntrw Foundation"
                fill
                sizes="(max-width:968px) 90vw, 440px"
                style={{ objectFit: 'cover', objectPosition: 'center 35%', filter: 'brightness(0.55)' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(13,13,11,0.25) 0%, rgba(13,13,11,0.92) 100%)' }} />
            </div>

            <div style={{ position: 'absolute', inset: 0, padding: '36px 32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 'auto' }}>
                Frntrw Foundation · 2026
              </div>

              <div>
                <div style={{ fontSize: 9, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(245,243,238,0.55)', marginBottom: 12 }}>
                  Statement of Intent
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: 'clamp(22px, 2.4vw, 28px)',
                    fontWeight: 500,
                    lineHeight: 1.08,
                    letterSpacing: -0.5,
                    color: 'var(--white)',
                    marginBottom: 18,
                  }}
                >
                  Wellbeing through sport.<br />Access without barriers.
                </div>
                <div style={{ height: 1, background: 'rgba(201,168,76,0.4)', width: 60, marginBottom: 18 }} />
                <div style={{ fontSize: 11, fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,243,238,0.65)', maxWidth: 320 }}>
                  A two-page brief on the purpose, programme, governance, and outcomes of Frntrw Foundation —
                  a Pasifika-led youth athletic foundation in Tāmaki Makaurau.
                </div>
              </div>
            </div>
          </div>

          {/* Page label below */}
          <div
            className="cap-feat-doc-meta"
            style={{
              marginTop: 28,
              textAlign: 'center',
              fontSize: 10,
              letterSpacing: 2.5,
              textTransform: 'uppercase',
              color: 'rgba(245,243,238,0.35)',
            }}
          >
            Page 1 of 2 · A4 · Web-rendered
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .cap-feat-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .cap-feat-doc { transform: rotate(0deg) !important; margin: 0 auto !important; max-width: 380px !important; }
        }
        @media (max-width: 480px) {
          .cap-feat-doc { max-width: 100% !important; }
          .cap-feat-ctas a { flex: 1; text-align: center; }
        }
      `}</style>
    </section>
  )
}
