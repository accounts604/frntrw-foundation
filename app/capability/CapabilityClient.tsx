'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

export default function CapabilityClient() {
  const params = useSearchParams()
  const autoPrint = params.get('print') === '1'

  useEffect(() => {
    if (autoPrint) {
      const t = setTimeout(() => window.print(), 600)
      return () => clearTimeout(t)
    }
  }, [autoPrint])

  return (
    <main className="cap-page">
      {/* Screen-only top bar */}
      <nav className="cap-screen-bar">
        <a href="/" className="cap-back">← Back to site</a>
        <div className="cap-screen-actions">
          <button onClick={() => window.print()} className="btn-gold">
            Download as PDF
          </button>
        </div>
      </nav>

      {/* PAGE 1 */}
      <section className="cap-page-1 cap-sheet">
        {/* Cover hero photo band */}
        <div className="cap-cover">
          <Image
            src="/images/hero-bg.jpg"
            alt="FRNTRW Foundation coach on the field"
            fill
            sizes="(max-width:720px) 100vw, 760px"
            style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
            priority
          />
          <div className="cap-cover-tint" />
          <div className="cap-cover-content">
            <div className="cap-cover-brand">
              <Image src="/images/icon-gold.png" width={56} height={48} alt="FRNTRW" style={{ objectFit: 'contain' }} />
              <div className="cap-cover-wordmark">
                <div className="cap-wordmark">FRNTRW FOUNDATION</div>
                <div className="cap-sub">Auckland · Pasifika-led · Established 2023</div>
              </div>
            </div>
            <div className="cap-cover-title">
              Built for Frontrow Athletes.
            </div>
            <div className="cap-cover-meta">
              <span>Capability Statement &amp; Statement of Intent</span>
              <span>May 2026</span>
            </div>
          </div>
        </div>

        {/* Purpose */}
        <section className="cap-block cap-block-first">
          <h2 className="cap-h2">Our Purpose</h2>
          <p className="cap-lead">
            Frntrw Foundation gives Pasifika and Māori athletes in South and West Auckland — aged 10 to 17 — the
            structured pathway, professional coaching, and real access that the market keeps behind a paywall.
            No athlete pays. No athlete misses out.
          </p>
        </section>

        {/* Why we exist */}
        <section className="cap-block">
          <h2 className="cap-h2">Why We Exist</h2>
          <div className="cap-why">
            <div className="cap-why-text">
              <p>
                Structured youth development in Auckland costs families <strong>$24–$50 a week</strong> — between
                <strong> $2,500 and $5,200 a year</strong> if you have two athletes in the system. For thousands of
                Pasifika and Māori families, that price tag is the difference between participation and watching from
                the sideline.
              </p>
              <p>
                We exist to close that gap. Our programme delivers the same quality of coaching — with a more credible
                pedigree than most paid academies offer — at zero cost to the athlete.
              </p>
            </div>
            <div className="cap-why-compare">
              <div className="cap-why-rate cap-why-market">
                <div className="cap-why-rate-label">The market</div>
                <div className="cap-why-rate-num">$24–$50</div>
                <div className="cap-why-rate-note">per week, per athlete</div>
              </div>
              <div className="cap-why-rate cap-why-us">
                <div className="cap-why-rate-label">Frntrw Foundation</div>
                <div className="cap-why-rate-num">$0</div>
                <div className="cap-why-rate-note">funded by sponsors &amp; grants</div>
              </div>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="cap-block">
          <h2 className="cap-h2">What We Deliver</h2>
          <div className="cap-deliver-grid">
            <div className="cap-deliver-img">
              <Image src="/images/lane-community.jpg" alt="Community programme in session" fill sizes="280px" style={{ objectFit: 'cover' }} />
            </div>
            <div className="cap-deliver-body">
              <div className="cap-deliver-tag">Free Community Programme</div>
              <p>
                Structured coaching for <strong>80+ athletes per term</strong> — open to every Auckland youth aged
                10 to 17. No tryouts. No waitlists. No fees. Equipment and kit provided.
              </p>
              <ul className="cap-deliver-list">
                <li>Group sessions led by ten coaches who have all played professionally</li>
                <li>Technical skills, physical conditioning, mental resilience</li>
                <li>Pasifika and Māori cultural values embedded throughout</li>
                <li>Run across three clinic intakes per year and holiday camp programming</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <div className="cap-stats">
          {[
            ['300+', 'Athletes Registered'],
            ['80+', 'Athletes Per Term'],
            ['10', 'Professional Coaches'],
            ['$0', 'Cost to Families'],
          ].map(([num, label]) => (
            <div key={label} className="cap-stat">
              <div className="cap-stat-num">{num}</div>
              <div className="cap-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PAGE 2 */}
      <section className="cap-page-2 cap-sheet">
        <header className="cap-header cap-header-mini">
          <div className="cap-wordmark-mini">FRNTRW FOUNDATION · Capability Statement</div>
          <div className="cap-page-no">2 / 2</div>
        </header>

        <div className="cap-rule" />

        {/* Founder */}
        <section className="cap-block">
          <h2 className="cap-h2">The Founder</h2>
          <div className="cap-founder">
            <div className="cap-founder-img">
              <Image src="/images/board-census.jpg" alt="Census Johnston, Founder" fill sizes="180px" style={{ objectFit: 'cover', objectPosition: 'center 15%' }} />
            </div>
            <div className="cap-founder-body">
              <div className="cap-founder-name">Census Johnston</div>
              <div className="cap-founder-role">Founder &amp; Chair</div>
              <p>
                60-test Manu Samoa international, three Rugby World Cup campaigns, Heineken Cup winner with Toulouse,
                and current development coach at the Blues. Census founded Frntrw Foundation in 2023 to deliver to
                Auckland youth the access to elite coaching he never had growing up.
              </p>
            </div>
          </div>
        </section>

        {/* Governance + Entity */}
        <section className="cap-block">
          <h2 className="cap-h2">Governance &amp; Structure</h2>
          <div className="cap-gov-grid">
            <div>
              <div className="cap-gov-tag">Board</div>
              <ul className="cap-gov-list">
                <li><strong>Census Johnston</strong> — Founder &amp; Chair</li>
                <li>Trustee — appointment pending</li>
                <li>Independent Trustee — appointment pending</li>
              </ul>
            </div>
            <div>
              <div className="cap-gov-tag">Operating Entity</div>
              <div className="cap-gov-val">Frntrw Foundation Limited</div>
              <div className="cap-gov-note">NZ company, Pasifika-owned</div>
            </div>
            <div>
              <div className="cap-gov-tag">Charitable Status</div>
              <div className="cap-gov-val">Charitable Trust</div>
              <div className="cap-gov-note">Registration in progress with Charities Services NZ</div>
            </div>
          </div>
        </section>

        {/* Direction */}
        <section className="cap-block">
          <h2 className="cap-h2">Where We&apos;re Going</h2>
          <ol className="cap-roadmap">
            <li>
              <strong>Now</strong> — Strengthen the programme foundations. Register the Charitable Trust, secure
              recurring sponsor support, capture stories that show the work in motion.
            </li>
            <li>
              <strong>Next</strong> — Expand reach across South and West Auckland. Deepen the partnership with North
              Harbour Pasifika Hauora Collective. Open a clear pathway from grassroots into provincial and national
              representation.
            </li>
            <li>
              <strong>Beyond</strong> — Establish Frntrw as the Pasifika-led athletic development pipeline that
              funders, sponsors, clubs, and provincial pathways trust to deliver — keeping the programme free as it
              scales.
            </li>
          </ol>
        </section>

        {/* Partner */}
        <section className="cap-block">
          <h2 className="cap-h2">How to Back the Work</h2>
          <div className="cap-partners">
            <div className="cap-partner">
              <div className="cap-partner-tag">For Funders</div>
              <p>
                We deliver structured programmes that the market won&apos;t fund — because they don&apos;t generate revenue.
                Your grant pays for coaching delivery, equipment, kit, and the operational backbone that keeps the
                programme free for every athlete who walks in.
              </p>
            </div>
            <div className="cap-partner">
              <div className="cap-partner-tag">For Corporate Sponsors</div>
              <p>
                Your brand sits alongside a Pasifika-led foundation building real outcomes for South and West Auckland
                youth. Visibility on kit, at events, on our platform, and in the stories we tell. Tiers and packages
                tailored to your scale — let&apos;s have the conversation.
              </p>
            </div>
            <div className="cap-partner">
              <div className="cap-partner-tag">For Whānau &amp; Community</div>
              <p>
                Register an athlete. Volunteer your time. Share the work. The foundation belongs to the community it
                serves — and the community is what keeps it going.
              </p>
            </div>
          </div>
        </section>

        <footer className="cap-footer">
          <div className="cap-contact">
            <div>
              <strong>General enquiries</strong>
              <br />
              hello@frntrwfoundation.org.nz
            </div>
            <div>
              <strong>Partnerships</strong>
              <br />
              partners@frntrwfoundation.org.nz
            </div>
            <div>
              <strong>Online</strong>
              <br />
              frntrwfoundation.org.nz
              <br />
              @frntrw_foundation
            </div>
          </div>
        </footer>
      </section>

      <style>{`
        :root {
          --cap-ink: #0d0d0b;
          --cap-paper: #ffffff;
          --cap-gold: #c9a84c;
          --cap-rule: rgba(13, 13, 11, 0.12);
          --cap-muted: rgba(13, 13, 11, 0.55);
        }

        .cap-page {
          background: #ece9e1;
          min-height: 100vh;
          padding: 32px 16px 80px;
          color: var(--cap-ink);
          font-family: 'DM Sans', sans-serif;
        }

        .cap-screen-bar {
          max-width: 820px;
          margin: 0 auto 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 4px;
        }
        .cap-back {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(13,13,11,0.55);
          text-decoration: none;
        }
        .cap-back:hover { color: var(--cap-ink); }

        .cap-sheet {
          background: var(--cap-paper);
          max-width: 820px;
          margin: 0 auto 24px;
          padding: 0;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          min-height: 1080px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .cap-page-2 { padding: 56px 64px; }

        /* Cover hero */
        .cap-cover {
          position: relative;
          height: 320px;
          width: 100%;
          overflow: hidden;
        }
        .cap-cover-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(13,13,11,0.35) 0%, rgba(13,13,11,0.78) 100%);
        }
        .cap-cover-content {
          position: absolute;
          inset: 0;
          padding: 32px 48px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #fff;
        }
        .cap-cover-brand { display: flex; align-items: center; gap: 14px; }
        .cap-cover-wordmark { line-height: 1.1; }
        .cap-cover-wordmark .cap-wordmark {
          font-family: 'Intramur', 'DM Sans', sans-serif;
          font-size: 22px;
          letter-spacing: 3px;
          color: #fff;
        }
        .cap-cover-wordmark .cap-sub {
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--cap-gold);
          margin-top: 6px;
        }
        .cap-cover-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 44px;
          font-weight: 500;
          letter-spacing: -1px;
          line-height: 1;
          color: #fff;
        }
        .cap-cover-meta {
          display: flex;
          justify-content: space-between;
          font-size: 10.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
        }

        .cap-block { margin: 0 64px 24px; }
        .cap-block-first { margin-top: 36px; }
        .cap-block p {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(13,13,11,0.78);
        }
        .cap-block p + p { margin-top: 10px; }
        .cap-h2 {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--cap-gold);
          font-weight: 600;
          margin-bottom: 12px;
        }
        .cap-lead {
          font-size: 15.5px !important;
          line-height: 1.65 !important;
          color: var(--cap-ink) !important;
        }

        /* Why we exist */
        .cap-why {
          display: grid;
          grid-template-columns: 1fr 220px;
          gap: 28px;
          align-items: stretch;
        }
        .cap-why-compare {
          display: flex;
          flex-direction: column;
          gap: 2px;
          background: var(--cap-rule);
        }
        .cap-why-rate { padding: 16px 18px; }
        .cap-why-market { background: #f4f1ea; }
        .cap-why-us { background: var(--cap-gold); }
        .cap-why-rate-label {
          font-size: 9.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(13,13,11,0.6);
          margin-bottom: 4px;
        }
        .cap-why-us .cap-why-rate-label { color: rgba(13,13,11,0.7); }
        .cap-why-rate-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 28px;
          font-weight: 500;
          line-height: 1;
          color: var(--cap-ink);
          letter-spacing: -0.5px;
        }
        .cap-why-rate-note {
          font-size: 11px;
          color: rgba(13,13,11,0.55);
          margin-top: 4px;
        }

        /* What we deliver */
        .cap-deliver-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 24px;
          align-items: stretch;
        }
        .cap-deliver-img {
          position: relative;
          min-height: 220px;
          overflow: hidden;
        }
        .cap-deliver-tag {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-gold);
          font-weight: 600;
          margin-bottom: 10px;
        }
        .cap-deliver-list {
          list-style: none;
          padding: 0;
          margin: 14px 0 0;
        }
        .cap-deliver-list li {
          font-size: 12.5px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(13,13,11,0.78);
          padding-left: 16px;
          position: relative;
          margin-bottom: 4px;
        }
        .cap-deliver-list li::before {
          content: '';
          width: 5px;
          height: 5px;
          background: var(--cap-gold);
          position: absolute;
          left: 0;
          top: 9px;
          border-radius: 50%;
        }

        /* Stats strip */
        .cap-stats {
          margin: auto 64px 56px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          background: #f7f4ec;
          border: 0.5px solid var(--cap-rule);
        }
        .cap-stat { padding: 22px 18px; border-left: 0.5px solid var(--cap-rule); }
        .cap-stat:first-child { border-left: none; }
        .cap-stat-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 32px;
          font-weight: 300;
          color: var(--cap-gold);
          line-height: 1;
          letter-spacing: -0.5px;
        }
        .cap-stat-label {
          font-size: 9.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-muted);
          margin-top: 8px;
        }

        /* Page 2 header */
        .cap-header-mini { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .cap-wordmark-mini {
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--cap-muted);
        }
        .cap-page-no { font-size: 10px; letter-spacing: 2px; color: var(--cap-muted); }
        .cap-rule { height: 1px; background: var(--cap-rule); margin-bottom: 22px; }

        /* Founder */
        .cap-founder { display: grid; grid-template-columns: 180px 1fr; gap: 22px; align-items: center; }
        .cap-founder-img {
          position: relative;
          width: 180px;
          height: 180px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .cap-founder-name { font-size: 18px; font-weight: 600; color: var(--cap-ink); }
        .cap-founder-role {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-gold);
          margin: 4px 0 12px;
        }

        /* Governance */
        .cap-gov-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 18px;
          padding: 18px 0;
          border-top: 0.5px solid var(--cap-rule);
          border-bottom: 0.5px solid var(--cap-rule);
        }
        .cap-gov-tag {
          font-size: 9.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-gold);
          font-weight: 600;
          margin-bottom: 8px;
        }
        .cap-gov-list { list-style: none; padding: 0; margin: 0; }
        .cap-gov-list li {
          font-size: 12.5px;
          font-weight: 300;
          line-height: 1.65;
          color: rgba(13,13,11,0.78);
          padding: 4px 0;
        }
        .cap-gov-list strong { color: var(--cap-ink); font-weight: 600; }
        .cap-gov-val { font-size: 14px; font-weight: 500; color: var(--cap-ink); line-height: 1.35; }
        .cap-gov-note { font-size: 11px; color: var(--cap-muted); margin-top: 4px; line-height: 1.5; }

        /* Roadmap */
        .cap-roadmap {
          list-style: none;
          padding: 0;
          margin: 0;
          counter-reset: roadmap;
        }
        .cap-roadmap li {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(13,13,11,0.78);
          padding-left: 96px;
          position: relative;
          margin-bottom: 14px;
          min-height: 22px;
        }
        .cap-roadmap li::before {
          content: attr(data-marker);
        }
        .cap-roadmap li strong {
          position: absolute;
          left: 0;
          top: 0;
          width: 80px;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-gold);
          font-weight: 600;
        }

        /* Partners */
        .cap-partners { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .cap-partner { border: 0.5px solid var(--cap-rule); padding: 18px 20px; }
        .cap-partner-tag {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-gold);
          font-weight: 600;
          margin-bottom: 10px;
        }
        .cap-partner p { font-size: 12px !important; line-height: 1.65 !important; }

        /* Footer */
        .cap-footer { margin-top: auto; padding-top: 22px; border-top: 1px solid var(--cap-rule); }
        .cap-contact { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; font-size: 11.5px; line-height: 1.7; color: var(--cap-muted); }
        .cap-contact strong { color: var(--cap-ink); font-weight: 600; }

        /* Mobile */
        @media (max-width: 720px) {
          .cap-sheet { min-height: 0; }
          .cap-page-2 { padding: 32px 24px; }
          .cap-cover { height: 240px; }
          .cap-cover-content { padding: 24px 28px; }
          .cap-cover-title { font-size: 32px; }
          .cap-block { margin: 0 24px 24px; }
          .cap-stats { margin: auto 24px 32px; grid-template-columns: 1fr 1fr; }
          .cap-stat { border-left: none; border-top: 0.5px solid var(--cap-rule); }
          .cap-stat:nth-child(-n+2) { border-top: none; }
          .cap-stat:nth-child(2n) { border-left: 0.5px solid var(--cap-rule); }
          .cap-why { grid-template-columns: 1fr; }
          .cap-why-compare { flex-direction: row; }
          .cap-why-rate { flex: 1; }
          .cap-deliver-grid { grid-template-columns: 1fr; }
          .cap-deliver-img { min-height: 200px; }
          .cap-founder { grid-template-columns: 1fr; text-align: center; }
          .cap-founder-img { margin: 0 auto; width: 160px; height: 160px; }
          .cap-gov-grid, .cap-partners, .cap-contact { grid-template-columns: 1fr !important; }
        }

        /* Print: clean A4 PDF */
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body { background: #fff !important; }
          .cap-page { background: #fff; padding: 0; }
          .cap-screen-bar { display: none; }
          .cap-sheet {
            box-shadow: none;
            margin: 0;
            padding: 0;
            min-height: 297mm;
            max-width: 100%;
            page-break-after: always;
          }
          .cap-page-2 { padding: 14mm 14mm; }
          .cap-sheet:last-of-type { page-break-after: auto; }
          .cap-block { margin: 0 14mm 16px; }
          .cap-stats { margin: auto 14mm 14mm; }
        }
      `}</style>
    </main>
  )
}
