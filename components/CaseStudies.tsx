'use client'

import Image from 'next/image'
import { useReveal } from './useReveal'

const stories = [
  {
    img: '/images/outdoor.jpg',
    pillar: 'Grassroots to High Performance',
    title: 'Three days.\nOne field.\nA generation of access.',
  },
  {
    img: '/images/group-photo.jpg',
    pillar: 'Community Focused',
    title: 'Standing with\nNth Harbour Pasifika\nHauora.',
  },
  {
    img: '/images/lane-community.jpg',
    pillar: 'Mentorship & Leadership',
    title: 'The coaches who showed up before the funding did.',
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

      {/* Image-poster tile grid */}
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
              minHeight: 460,
              overflow: 'hidden',
              background: 'var(--charcoal)',
            }}
          >
            <Image
              src={s.img}
              alt={s.title.replace(/\n/g, ' ')}
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
                background:
                  'linear-gradient(to top, rgba(13,13,11,0.92) 0%, rgba(13,13,11,0.4) 50%, rgba(13,13,11,0.15) 100%)',
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
                zIndex: 2,
              }}
            >
              {s.pillar}
            </div>

            {/* Title — overlaid bottom-left, large */}
            <h3
              className="cs-tile-title"
              style={{
                position: 'absolute',
                left: 28,
                right: 28,
                bottom: 28,
                margin: 0,
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 'clamp(26px, 2.4vw, 34px)',
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: -0.6,
                color: 'var(--white)',
                whiteSpace: 'pre-line',
                zIndex: 2,
              }}
            >
              {s.title}
            </h3>
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
