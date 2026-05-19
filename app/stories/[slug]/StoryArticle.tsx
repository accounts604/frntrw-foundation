'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import type { Story } from '@/lib/stories'

export default function StoryArticle({ story }: { story: Story }) {
  const params = useSearchParams()
  const autoPrint = params.get('print') === '1'

  useEffect(() => {
    if (autoPrint) {
      const t = setTimeout(() => window.print(), 600)
      return () => clearTimeout(t)
    }
  }, [autoPrint])

  // JSON-LD for SEO (Article schema)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: story.title,
    description: story.dek,
    image: [`https://frntrwfoundation.org.nz${story.heroImage}`],
    datePublished: story.date,
    author: { '@type': 'Organization', name: 'Frntrw Foundation' },
    publisher: {
      '@type': 'Organization',
      name: 'Frntrw Foundation',
      logo: { '@type': 'ImageObject', url: 'https://frntrwfoundation.org.nz/images/icon-gold.png' },
    },
  }

  return (
    <article className="story-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      {/* Top nav */}
      <nav className="story-top">
        <Link href="/" className="story-back">← Back to Frntrw Foundation</Link>
        {story.status === 'sample' && <span className="story-sample-badge">Sample story · layout preview</span>}
      </nav>

      {/* Hero */}
      <header className="story-hero">
        <Image
          src={story.heroImage}
          alt={story.title}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          priority
        />
        <div className="story-hero-tint" />
        <div className="story-hero-content">
          <div className="story-hero-meta">
            <span className="story-pillar">{story.pillar}</span>
            <span className="story-dot">·</span>
            <span>{story.programme}</span>
            <span className="story-dot">·</span>
            <span>{story.location}</span>
            <span className="story-dot">·</span>
            <span>{story.date}</span>
          </div>
          <h1 className="story-h1">{story.title}</h1>
          <p className="story-dek">{story.dek}</p>
        </div>
      </header>

      {/* Outcomes bar */}
      <section className="story-outcomes">
        {story.outcomes.map(o => (
          <div key={o.label} className="story-outcome">
            <div className="story-outcome-val">{o.value}</div>
            <div className="story-outcome-label">{o.label}</div>
          </div>
        ))}
      </section>

      {/* Body */}
      <section className="story-body">
        {story.body.map((b, i) => {
          if (b.kind === 'h3') return <h3 key={i} className="story-h3">{b.text}</h3>
          if (b.kind === 'quote') return (
            <blockquote key={i} className="story-quote">
              <div className="story-quote-text">{b.text}</div>
              {b.cite && <cite className="story-quote-cite">{b.cite}</cite>}
            </blockquote>
          )
          if (b.kind === 'image') return (
            <figure key={i} className="story-figure">
              <Image src={b.src!} alt={b.alt || ''} width={1200} height={680} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            </figure>
          )
          return <p key={i} className="story-p">{b.text}</p>
        })}
      </section>

      {/* Download CTA */}
      <section className="story-download">
        <div className="story-download-tag">Take it with you</div>
        <h2 className="story-download-title">Download the full case study</h2>
        <p className="story-download-body">
          A funder- and corporate-ready PDF of this case study — outcomes, programme detail, financial summary,
          and the partnership context. Use it in funding applications, sponsor decks, board reports.
        </p>
        <div className="story-download-actions">
          <a href={`/stories/${story.slug}?print=1`} className="btn-gold">Download case study PDF</a>
          <Link href="/capability" className="btn-ghost">Read the Capability Statement</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="story-footer">
        <Link href="/" className="story-back">← All stories &amp; Foundation home</Link>
        <div className="story-footer-mark">FRNTRW FOUNDATION · frntrwfoundation.org.nz</div>
      </footer>

      <style>{`
        :root {
          --story-ink: #f5f3ee;
          --story-paper: #0d0d0b;
          --story-gold: #c9a84c;
          --story-rule: rgba(245,243,238,0.12);
          --story-muted: rgba(245,243,238,0.55);
        }
        .story-page {
          background: var(--story-paper);
          color: var(--story-ink);
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
        }

        /* Top nav */
        .story-top {
          max-width: 960px;
          margin: 0 auto;
          padding: 24px var(--pad-x);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .story-back {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(245,243,238,0.5);
          text-decoration: none;
        }
        .story-back:hover { color: var(--story-gold); }
        .story-sample-badge {
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--story-gold);
          background: rgba(201,168,76,0.08);
          border: 0.5px solid rgba(201,168,76,0.3);
          padding: 6px 12px;
        }

        /* Hero */
        .story-hero {
          position: relative;
          height: 70vh;
          min-height: 480px;
          max-height: 680px;
          width: 100%;
          overflow: hidden;
        }
        .story-hero-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(13,13,11,0.96) 0%, rgba(13,13,11,0.45) 60%, rgba(13,13,11,0.15) 100%);
        }
        .story-hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 var(--pad-x) 56px;
          max-width: 960px;
          margin: 0 auto;
          left: 0;
          right: 0;
        }
        .story-hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(245,243,238,0.7);
          margin-bottom: 20px;
        }
        .story-pillar {
          color: var(--story-gold);
          background: rgba(201,168,76,0.08);
          border: 0.5px solid rgba(201,168,76,0.4);
          padding: 5px 11px;
        }
        .story-dot { opacity: 0.4; }
        .story-h1 {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 500;
          line-height: 1;
          letter-spacing: -1px;
          color: var(--story-ink);
          margin: 0 0 18px;
          max-width: 800px;
        }
        .story-dek {
          font-size: clamp(16px, 1.8vw, 19px);
          font-weight: 300;
          line-height: 1.55;
          color: rgba(245,243,238,0.75);
          max-width: 640px;
          margin: 0;
        }

        /* Outcomes bar */
        .story-outcomes {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 var(--pad-x);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          background: var(--story-rule);
          margin-top: -32px;
          position: relative;
          z-index: 2;
        }
        .story-outcome {
          background: var(--story-paper);
          border: 0.5px solid var(--story-rule);
          padding: 24px 22px;
        }
        .story-outcome-val {
          font-family: 'DM Sans', sans-serif;
          font-size: 38px;
          font-weight: 300;
          line-height: 1;
          color: var(--story-gold);
          letter-spacing: -0.5px;
        }
        .story-outcome-label {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--story-muted);
          margin-top: 10px;
          line-height: 1.4;
        }

        /* Body */
        .story-body {
          max-width: 720px;
          margin: 0 auto;
          padding: 80px var(--pad-x) 32px;
        }
        .story-p {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(245,243,238,0.78);
          margin: 0 0 24px;
        }
        .story-h3 {
          font-family: 'DM Sans', sans-serif;
          font-size: 24px;
          font-weight: 500;
          color: var(--story-ink);
          letter-spacing: -0.3px;
          margin: 40px 0 18px;
        }
        .story-quote {
          margin: 36px 0;
          padding: 24px 28px;
          border-left: 2px solid var(--story-gold);
          background: rgba(201,168,76,0.04);
        }
        .story-quote-text {
          font-size: 22px;
          font-weight: 300;
          line-height: 1.45;
          font-style: italic;
          color: var(--story-ink);
          margin-bottom: 12px;
        }
        .story-quote-cite {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--story-gold);
          font-style: normal;
        }
        .story-figure {
          margin: 40px calc(-1 * var(--pad-x));
        }

        /* Download CTA */
        .story-download {
          max-width: 960px;
          margin: 48px auto 0;
          padding: 56px var(--pad-x);
          background: linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.03) 100%);
          border-top: 0.5px solid rgba(201,168,76,0.25);
          border-bottom: 0.5px solid rgba(201,168,76,0.25);
        }
        .story-download-tag {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--story-gold);
          margin-bottom: 14px;
        }
        .story-download-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -0.5px;
          color: var(--story-ink);
          margin: 0 0 16px;
          max-width: 680px;
        }
        .story-download-body {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(245,243,238,0.65);
          margin: 0 0 32px;
          max-width: 640px;
        }
        .story-download-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .story-download-actions a { text-decoration: none; }

        /* Footer */
        .story-footer {
          max-width: 960px;
          margin: 48px auto;
          padding: 24px var(--pad-x);
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 0.5px solid var(--story-rule);
        }
        .story-footer-mark {
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(245,243,238,0.4);
        }

        @media (max-width: 720px) {
          .story-hero { height: 55vh; min-height: 360px; }
          .story-outcomes { grid-template-columns: 1fr 1fr; }
          .story-body { padding: 56px var(--pad-x) 24px; }
          .story-figure { margin: 28px 0; }
          .story-footer { flex-direction: column; gap: 16px; align-items: flex-start; }
        }
        @media (max-width: 480px) {
          .story-hero { height: 48vh; }
          .story-outcomes { grid-template-columns: 1fr; }
        }

        /* Print: case study PDF */
        @media print {
          @page {
            size: A4;
            margin: 14mm 12mm;
          }
          body { background: #fff !important; }
          .story-page { background: #fff !important; color: #0d0d0b !important; }
          .story-top, .story-footer { display: none; }
          .story-hero {
            height: 80mm;
            min-height: 0;
            page-break-after: avoid;
          }
          .story-hero-content { padding: 0 0 20mm 0; max-width: 100%; }
          .story-h1 { color: #fff !important; font-size: 28pt; }
          .story-dek { color: rgba(255,255,255,0.85) !important; font-size: 11pt; }
          .story-outcomes {
            background: #d8d4c8;
            margin: 0 0 14mm;
            padding: 0;
          }
          .story-outcome {
            background: #fff;
            color: #0d0d0b;
          }
          .story-outcome-val { color: #b89a3f; font-size: 18pt; }
          .story-outcome-label { color: rgba(13,13,11,0.55); font-size: 8pt; }
          .story-body {
            max-width: 100%;
            padding: 0;
            color: #0d0d0b;
          }
          .story-p {
            color: rgba(13,13,11,0.85) !important;
            font-size: 10pt;
            line-height: 1.55;
          }
          .story-h3 { color: #0d0d0b !important; font-size: 13pt; }
          .story-quote {
            background: #faf6e9;
            border-left-color: #b89a3f;
          }
          .story-quote-text { color: #0d0d0b !important; font-size: 11pt; }
          .story-quote-cite { color: #b89a3f !important; }
          .story-download {
            background: #f7f4ec;
            border: 0.5pt solid #d8d4c8;
            margin-top: 8mm;
            padding: 6mm 8mm;
            page-break-inside: avoid;
          }
          .story-download-title { color: #0d0d0b !important; font-size: 14pt; }
          .story-download-body { color: rgba(13,13,11,0.7) !important; font-size: 9.5pt; }
          .story-download-actions { display: none; }
          .story-figure { page-break-inside: avoid; }
        }
      `}</style>
    </article>
  )
}
