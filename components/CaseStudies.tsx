'use client'

import Image from 'next/image'
import { useReveal } from './useReveal'

const stories = [
  {
    img: '/images/outdoor.jpg',
    pillar: 'Grassroots to High Performance',
    title: 'Three days. One field. A generation of access.',
    teaser: 'Holiday camp story — captured live with athletes, coaches, and whānau.',
    meta: 'Story coming soon',
  },
  {
    img: '/images/group-photo.jpg',
    pillar: 'Community Focused',
    title: 'Standing with North Harbour Pasifika Hauora.',
    teaser: 'How a community partnership unlocked reach, cultural infrastructure, and shared purpose.',
    meta: 'Story coming soon',
  },
  {
    img: '/images/lane-community.jpg',
    pillar: 'Mentorship & Leadership',
    title: 'The coaches who showed up before the funding did.',
    teaser: 'Ten professional coaches. Zero salaries. Every athlete coached at international standard.',
    meta: 'Story coming soon',
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
        <span className="section-label">Stories from the Field</span>
        <h2 className="section-h2" style={{ color: 'var(--white)' }}>
          The work,<br />in their words.
        </h2>
        <p className="section-intro">
          Every clinic, camp, and partnership generates moments worth capturing. These are being collected directly from
          the athletes, coaches, and whānau who lived them — and published as full stories with photos as they come in.
        </p>
      </div>

      {/* Photo tile grid */}
      <div
        className="cs-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
          background: 'var(--border-light)',
          marginTop: 16,
        }}
      >
        {stories.map(s => (
          <article
            key={s.title}
            className="cs-tile"
            style={{
              position: 'relative',
              minHeight: 420,
              overflow: 'hidden',
              background: 'var(--charcoal)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <Image
              src={s.img}
              alt={s.title}
              fill
              sizes="(max-width:640px) 100vw, (max-width:968px) 50vw, 33vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center 30%',
                transition: 'transform 0.8s ease',
              }}
              className="cs-tile-img"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(13,13,11,0.95) 0%, rgba(13,13,11,0.55) 55%, rgba(13,13,11,0.15) 100%)',
              }}
            />

            {/* Pillar tag — top left */}
            <div
              style={{
                position: 'absolute',
                top: 24,
                left: 24,
                fontSize: 9,
                letterSpacing: 2.5,
                textTransform: 'uppercase',
                color: 'var(--gold)',
                background: 'rgba(13,13,11,0.7)',
                border: '0.5px solid rgba(201,168,76,0.4)',
                padding: '5px 11px',
                backdropFilter: 'blur(6px)',
              }}
            >
              {s.pillar}
            </div>

            {/* "Coming soon" pill — top right */}
            <div
              style={{
                position: 'absolute',
                top: 24,
                right: 24,
                fontSize: 9,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: 'rgba(245,243,238,0.65)',
                background: 'rgba(13,13,11,0.6)',
                padding: '5px 11px',
                backdropFilter: 'blur(6px)',
                display: 'flex',
                alignItems: 'center',
                gap: 7,
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
              In capture
            </div>

            {/* Body copy bottom-left */}
            <div style={{ position: 'relative', padding: '32px 28px 30px', zIndex: 2 }}>
              <div
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: 22,
                  fontWeight: 500,
                  lineHeight: 1.22,
                  color: 'var(--white)',
                  marginBottom: 12,
                  letterSpacing: -0.3,
                }}
              >
                {s.title}
              </div>
              <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.65, color: 'rgba(245,243,238,0.7)', marginBottom: 18 }}>
                {s.teaser}
              </p>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(245,243,238,0.45)', paddingTop: 14, borderTop: '0.5px solid rgba(245,243,238,0.18)' }}>
                {s.meta}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Capability statement CTA strip */}
      <div
        className="cs-capability"
        style={{
          marginTop: 56,
          padding: '52px 60px',
          background: 'linear-gradient(135deg, rgba(201,168,76,0.10) 0%, rgba(201,168,76,0.02) 100%)',
          border: '0.5px solid var(--border)',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 48,
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>
            Capability Statement · Statement of Intent
          </div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 30, fontWeight: 500, lineHeight: 1.2, color: 'var(--white)', marginBottom: 14, letterSpacing: -0.5 }}>
            Who we are. What we do. Where we&apos;re going.
          </div>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,243,238,0.6)', maxWidth: 580 }}>
            A two-page brief for funders, corporate partners, and whānau — purpose, governance, the programme,
            and how to back the work.
          </p>
        </div>

        <div className="cs-cta-stack" style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 240 }}>
          <a href="/capability" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
            Read the Statement
          </a>
          <a href="/capability?print=1" className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
            Download as PDF
          </a>
        </div>
      </div>

      <style>{`
        .cs-tile:hover .cs-tile-img { transform: scale(1.04); }
        @media (max-width: 968px) {
          .cs-grid { grid-template-columns: 1fr 1fr !important; }
          .cs-capability { grid-template-columns: 1fr !important; padding: 40px 36px !important; gap: 28px !important; }
        }
        @media (max-width: 640px) {
          .cs-grid { grid-template-columns: 1fr !important; }
          .cs-tile { min-height: 380px !important; }
          .cs-cta-stack { min-width: 0 !important; width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
