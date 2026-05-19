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
      <nav className="cap-screen-bar">
        <a href="/" className="cap-back">← Back to site</a>
        <button onClick={() => window.print()} className="btn-gold">Download as PDF</button>
      </nav>

      {/* ─────────── PAGE 1 ─────────── */}
      <section className="cap-sheet">
        {/* Cover band */}
        <div className="cap-cover">
          <Image
            src="/images/hero-bg.jpg"
            alt="FRNTRW Foundation"
            fill
            sizes="(max-width:720px) 100vw, 760px"
            style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
            priority
          />
          <div className="cap-cover-tint" />
          <div className="cap-cover-content">
            <div className="cap-cover-brand">
              <Image src="/images/icon-gold.png" width={42} height={36} alt="FRNTRW" style={{ objectFit: 'contain' }} />
              <div>
                <div className="cap-wordmark">FRNTRW FOUNDATION</div>
                <div className="cap-sub">Auckland · Pasifika-led · Established 2023</div>
              </div>
            </div>
            <div className="cap-cover-title">
              Wellbeing through sport.<br />Access without barriers.
            </div>
            <div className="cap-cover-meta">
              <span>Capability Statement &amp; Statement of Intent</span>
              <span>May 2026</span>
            </div>
          </div>
        </div>

        <div className="cap-body">
          {/* Outcome */}
          <section className="cap-block">
            <h2 className="cap-h2">The Outcome We Deliver</h2>
            <p className="cap-lead">
              Frntrw Foundation lifts <strong>physical activity, pastoral wellbeing, and cultural identity</strong>{' '}
              for Pasifika and Māori young people aged 10–17 — communities historically underserved by Auckland&apos;s
              paid youth-sport market. We close the equity gap that keeps minority whānau on the sideline.
            </p>
          </section>

          {/* Need */}
          <section className="cap-block">
            <h2 className="cap-h2">The Need We Address</h2>
            <div className="cap-why">
              <div className="cap-why-text">
                <p>
                  Structured youth athletic development in Auckland costs whānau <strong>$24–$50/week</strong> —
                  $2,500 to $5,200/year for a household with two young people. For Pasifika and Māori families in
                  South and West Auckland, that&apos;s the line between participation and exclusion from a primary
                  protective factor in youth wellbeing.
                </p>
                <p>
                  A participation gap that compounds across physical health, mental wellbeing, identity, and pathway
                  access — concentrated in communities already facing the steepest outcome inequities.
                </p>
              </div>
              <div className="cap-why-compare">
                <div className="cap-why-rate cap-why-market">
                  <div className="cap-why-rate-label">Market access</div>
                  <div className="cap-why-rate-num">$24–$50</div>
                  <div className="cap-why-rate-note">per week, per athlete</div>
                </div>
                <div className="cap-why-rate cap-why-us">
                  <div className="cap-why-rate-label">Frntrw access</div>
                  <div className="cap-why-rate-num">$0</div>
                  <div className="cap-why-rate-note">equitable access for all</div>
                </div>
              </div>
            </div>
          </section>

          {/* Outcomes funded */}
          <section className="cap-block">
            <h2 className="cap-h2">Outcomes Your Funding Supports</h2>
            <div className="cap-outcomes">
              <div className="cap-outcome">
                <div className="cap-outcome-tag">Physical Wellbeing</div>
                <p>Sustained, structured physical activity for 80+ young Pasifika and Māori people per term — addressing the activity-inequity gap that drives long-term health outcomes for minority communities.</p>
              </div>
              <div className="cap-outcome">
                <div className="cap-outcome-tag">Pastoral Care &amp; Mentorship</div>
                <p>Wraparound mentorship from Pasifika coaches who have lived the pathway — a culturally-anchored model of pastoral support that builds resilience, confidence, and protective factors.</p>
              </div>
              <div className="cap-outcome">
                <div className="cap-outcome-tag">Cultural Identity</div>
                <p>Pasifika and Māori values embedded in every session — collective strength, cultural pride, service. Identity reinforcement supporting mental wellbeing and whānau cohesion.</p>
              </div>
              <div className="cap-outcome">
                <div className="cap-outcome-tag">Pathway Equity</div>
                <p>Affordable, accessible entry to a development pipeline the market has gated by household income. Every young person gets the same standard of coaching as paid academies offer.</p>
              </div>
            </div>
          </section>

          {/* Stats strip */}
          <div className="cap-stats">
            {[
              ['300+', 'Young People Reached'],
              ['80+', 'Active Per Term'],
              ['100%', 'Pasifika &amp; Māori-led'],
              ['$0', 'Cost to Whānau'],
            ].map(([num, label]) => (
              <div key={label} className="cap-stat">
                <div className="cap-stat-num">{num}</div>
                <div className="cap-stat-label" dangerouslySetInnerHTML={{ __html: label }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PAGE 2 ─────────── */}
      <section className="cap-sheet">
        <header className="cap-header-mini">
          <div className="cap-wordmark-mini">FRNTRW FOUNDATION · Capability Statement</div>
          <div className="cap-page-no">2 / 2</div>
        </header>

        <div className="cap-body">
          {/* Delivery + Leadership */}
          <section className="cap-block">
            <h2 className="cap-h2">How Outcomes Are Delivered</h2>
            <div className="cap-deliver-grid">
              <div className="cap-deliver-img">
                <Image src="/images/lane-community.jpg" alt="Community programme in session" fill sizes="220px" style={{ objectFit: 'cover' }} />
              </div>
              <div className="cap-deliver-body">
                <p>
                  Three clinic intakes per year plus holiday camp programming. Each cycle: 80+ Pasifika and Māori
                  young people in regular, structured physical activity, supported by ten current and recent
                  professional players operating on a volunteer basis.
                </p>
                <ul className="cap-deliver-list">
                  <li>Regular physical activity at a professional coaching standard</li>
                  <li>Cultural identity and values woven through every session</li>
                  <li>Pastoral mentorship from coaches who reflect the community</li>
                  <li>Equipment, kit, and venue provided — no household contribution</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cultural Leadership */}
          <section className="cap-block">
            <h2 className="cap-h2">Cultural Leadership</h2>
            <div className="cap-founder">
              <div className="cap-founder-img">
                <Image src="/images/board-census.jpg" alt="Census Johnston, Founder" fill sizes="100px" style={{ objectFit: 'cover', objectPosition: 'center 15%' }} />
              </div>
              <div className="cap-founder-body">
                <div className="cap-founder-name">Census Johnston · Founder &amp; Chair</div>
                <p>
                  60-test Manu Samoa international. Three Rugby World Cup campaigns. Heineken Cup winner with
                  Toulouse. Currently development coach at the Blues. A Pasifika sport leader who lived the access
                  gap he&apos;s now closing.
                </p>
              </div>
            </div>
          </section>

          {/* Operating Discipline */}
          <section className="cap-block">
            <h2 className="cap-h2">Operating Discipline</h2>
            <div className="cap-operate">
              <div className="cap-operate-item">
                <strong>Safeguarding</strong> — All coaches police-vetted. NZ youth-sport safeguarding standards. Athlete welfare reviewed every cycle.
              </div>
              <div className="cap-operate-item">
                <strong>Outcome Reporting</strong> — Quarterly reporting on every funded programme: participation, outcomes, financial accounting.
              </div>
              <div className="cap-operate-item">
                <strong>Impact Capture</strong> — Photo and story documentation built in. Featured only with whānau consent.
              </div>
              <div className="cap-operate-item">
                <strong>Financial Governance</strong> — Funds flow through the Charitable Trust, ringfenced for programme delivery. Charities Services &amp; Companies Office filings.
              </div>
            </div>
          </section>

          {/* Governance */}
          <section className="cap-block">
            <h2 className="cap-h2">Governance &amp; Financial Structure</h2>
            <div className="cap-gov-entities">
              <div className="cap-gov-entity">
                <div className="cap-gov-tag">Operating Entity</div>
                <div className="cap-gov-val">Frntrw Foundation Limited</div>
                <div className="cap-gov-note">Registered NZ company, Pasifika-owned. Manages day-to-day delivery.</div>
              </div>
              <div className="cap-gov-entity">
                <div className="cap-gov-tag">Charitable Status</div>
                <div className="cap-gov-val">Frntrw Foundation Charitable Trust</div>
                <div className="cap-gov-note">Registration in progress with Charities Services NZ. Holds the community-benefit mission, receives tax-deductible giving.</div>
              </div>
            </div>
            <p className="cap-gov-flow">
              <strong>Funding flow:</strong> Grants and donations are received by the Charitable Trust and ringfenced
              for programme delivery. Surplus from commercial activity returns to the Trust. Standard NZ two-entity
              structure for foundations balancing community benefit with operational sustainability.
            </p>
            <div className="cap-gov-board">
              <strong>Board:</strong> Census Johnston (Founder &amp; Chair) · Trustee — appointment pending · Independent Trustee — appointment pending. Independent appointment confirmed prior to Charitable Trust registration to satisfy IRD independence requirements.
            </div>
          </section>

          {/* Why Partner */}
          <section className="cap-block">
            <h2 className="cap-h2">Why Partner With Us</h2>
            <div className="cap-partners">
              <div className="cap-partner">
                <div className="cap-partner-tag">For Funders</div>
                <p>Your investment funds measurable outcomes for underserved Pasifika and Māori youth: physical activity, pastoral wellbeing, cultural identity, pathway equity. Quarterly reporting per funded programme.</p>
              </div>
              <div className="cap-partner">
                <div className="cap-partner-tag">For Corporate Sponsors</div>
                <p>Brand alignment with a Pasifika-led foundation delivering tangible wellbeing and equity outcomes. Authentic community association, measurable impact, visibility tailored to your CSR objectives.</p>
              </div>
              <div className="cap-partner">
                <div className="cap-partner-tag">For Whānau &amp; Community</div>
                <p>Register a young person. Volunteer your time. Share the work. The foundation belongs to the community it serves.</p>
              </div>
            </div>
          </section>

          <footer className="cap-footer">
            <div className="cap-contact">
              <div><strong>General</strong><br />hello@frntrwfoundation.org.nz</div>
              <div><strong>Partnerships</strong><br />partners@frntrwfoundation.org.nz</div>
              <div><strong>Online</strong><br />frntrwfoundation.org.nz · @frntrw_foundation</div>
            </div>
          </footer>
        </div>
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
          max-width: 760px;
          margin: 0 auto 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .cap-back {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(13,13,11,0.55);
          text-decoration: none;
        }
        .cap-back:hover { color: var(--cap-ink); }

        /* A4 sheets: 210mm x 297mm */
        .cap-sheet {
          background: var(--cap-paper);
          width: 100%;
          max-width: 210mm;
          min-height: 297mm;
          margin: 0 auto 24px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .cap-body {
          padding: 10mm 14mm 12mm;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 5mm;
        }

        /* Cover band */
        .cap-cover {
          position: relative;
          height: 75mm;
          width: 100%;
          overflow: hidden;
        }
        .cap-cover-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(13,13,11,0.35) 0%, rgba(13,13,11,0.82) 100%);
        }
        .cap-cover-content {
          position: absolute;
          inset: 0;
          padding: 8mm 14mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #fff;
        }
        .cap-cover-brand { display: flex; align-items: center; gap: 10px; }
        .cap-wordmark {
          font-family: 'Intramur', 'DM Sans', sans-serif;
          font-size: 18px;
          letter-spacing: 2.5px;
          color: #fff;
          line-height: 1;
        }
        .cap-sub {
          font-size: 8.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-gold);
          margin-top: 4px;
        }
        .cap-cover-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 30px;
          font-weight: 500;
          letter-spacing: -0.8px;
          line-height: 1.05;
          color: #fff;
        }
        .cap-cover-meta {
          display: flex;
          justify-content: space-between;
          font-size: 8.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
        }

        /* Body blocks */
        .cap-block { margin: 0; }
        .cap-block p {
          font-size: 9.5pt;
          font-weight: 300;
          line-height: 1.45;
          color: rgba(13,13,11,0.82);
        }
        .cap-block p + p { margin-top: 4pt; }
        .cap-h2 {
          font-family: 'DM Sans', sans-serif;
          font-size: 8pt;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--cap-gold);
          font-weight: 600;
          margin-bottom: 4pt;
        }
        .cap-lead {
          font-size: 11pt !important;
          line-height: 1.45 !important;
          color: var(--cap-ink) !important;
        }

        /* Need / why */
        .cap-why {
          display: grid;
          grid-template-columns: 1fr 50mm;
          gap: 5mm;
          align-items: stretch;
        }
        .cap-why-compare {
          display: flex;
          flex-direction: column;
          gap: 1.5mm;
          background: var(--cap-rule);
        }
        .cap-why-rate { padding: 3mm 4mm; }
        .cap-why-market { background: #f4f1ea; }
        .cap-why-us { background: var(--cap-gold); }
        .cap-why-rate-label {
          font-size: 7pt;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(13,13,11,0.65);
        }
        .cap-why-us .cap-why-rate-label { color: rgba(13,13,11,0.75); }
        .cap-why-rate-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 17pt;
          font-weight: 500;
          line-height: 1;
          color: var(--cap-ink);
          letter-spacing: -0.5px;
          margin-top: 1mm;
        }
        .cap-why-rate-note {
          font-size: 7.5pt;
          color: rgba(13,13,11,0.55);
          margin-top: 1mm;
        }

        /* Outcomes funded */
        .cap-outcomes {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5mm;
        }
        .cap-outcome {
          padding: 3mm 4mm;
          background: #fafaf6;
          border-left: 1.5pt solid var(--cap-gold);
        }
        .cap-outcome-tag {
          font-size: 8pt;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--cap-ink);
          font-weight: 600;
          margin-bottom: 1.5mm;
        }
        .cap-outcome p { font-size: 8.5pt !important; line-height: 1.4 !important; }

        /* Stats */
        .cap-stats {
          margin-top: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #f7f4ec;
          border: 0.5pt solid var(--cap-rule);
        }
        .cap-stat { padding: 4mm 3mm; border-left: 0.5pt solid var(--cap-rule); }
        .cap-stat:first-child { border-left: none; }
        .cap-stat-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 18pt;
          font-weight: 300;
          color: var(--cap-gold);
          line-height: 1;
          letter-spacing: -0.5px;
        }
        .cap-stat-label {
          font-size: 7pt;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--cap-muted);
          margin-top: 2mm;
          line-height: 1.3;
        }

        /* Page 2 header */
        .cap-header-mini {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8mm 14mm 3mm;
          border-bottom: 0.5pt solid var(--cap-rule);
        }
        .cap-wordmark-mini {
          font-size: 7.5pt;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-muted);
        }
        .cap-page-no { font-size: 7.5pt; letter-spacing: 2px; color: var(--cap-muted); }

        /* Deliver */
        .cap-deliver-grid {
          display: grid;
          grid-template-columns: 50mm 1fr;
          gap: 4mm;
          align-items: stretch;
        }
        .cap-deliver-img {
          position: relative;
          min-height: 38mm;
          overflow: hidden;
        }
        .cap-deliver-list {
          list-style: none;
          padding: 0;
          margin: 2mm 0 0;
        }
        .cap-deliver-list li {
          font-size: 8.5pt;
          font-weight: 300;
          line-height: 1.45;
          color: rgba(13,13,11,0.8);
          padding-left: 4mm;
          position: relative;
          margin-bottom: 0.8mm;
        }
        .cap-deliver-list li::before {
          content: '';
          width: 1.2mm;
          height: 1.2mm;
          background: var(--cap-gold);
          position: absolute;
          left: 0;
          top: 2.5mm;
          border-radius: 50%;
        }

        /* Founder compact */
        .cap-founder {
          display: grid;
          grid-template-columns: 22mm 1fr;
          gap: 4mm;
          align-items: center;
        }
        .cap-founder-img {
          position: relative;
          width: 22mm;
          height: 22mm;
          overflow: hidden;
        }
        .cap-founder-name {
          font-size: 10pt;
          font-weight: 600;
          color: var(--cap-ink);
          margin-bottom: 1mm;
        }
        .cap-founder-body p { font-size: 8.5pt !important; line-height: 1.45 !important; }

        /* Operate */
        .cap-operate {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5mm;
        }
        .cap-operate-item {
          padding: 2.5mm 3.5mm;
          border: 0.5pt solid var(--cap-rule);
          font-size: 8.5pt;
          line-height: 1.45;
          color: rgba(13,13,11,0.78);
          background: #fafaf6;
        }
        .cap-operate-item strong {
          color: var(--cap-ink);
          font-weight: 600;
          font-size: 8.5pt;
        }

        /* Governance */
        .cap-gov-entities {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5mm;
          margin-bottom: 2.5mm;
        }
        .cap-gov-entity {
          padding: 3mm 4mm;
          border: 0.5pt solid var(--cap-rule);
        }
        .cap-gov-tag {
          font-size: 7.5pt;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--cap-gold);
          font-weight: 600;
          margin-bottom: 1mm;
        }
        .cap-gov-val { font-size: 9.5pt; font-weight: 500; color: var(--cap-ink); line-height: 1.3; }
        .cap-gov-note { font-size: 7.5pt; color: var(--cap-muted); margin-top: 1mm; line-height: 1.4; }
        .cap-gov-flow {
          padding: 2.5mm 3.5mm;
          background: #fafaf6;
          border-left: 1.5pt solid var(--cap-gold);
          font-size: 8.5pt !important;
          line-height: 1.45 !important;
          margin-bottom: 2.5mm;
        }
        .cap-gov-flow strong { color: var(--cap-ink); font-weight: 600; }
        .cap-gov-board {
          padding: 2.5mm 3.5mm;
          border: 0.5pt solid var(--cap-rule);
          font-size: 8.5pt;
          line-height: 1.5;
          color: rgba(13,13,11,0.78);
        }
        .cap-gov-board strong { color: var(--cap-ink); font-weight: 600; }

        /* Partners */
        .cap-partners {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5mm;
        }
        .cap-partner {
          padding: 3mm 3.5mm;
          border: 0.5pt solid var(--cap-rule);
        }
        .cap-partner-tag {
          font-size: 7.5pt;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--cap-gold);
          font-weight: 600;
          margin-bottom: 1.5mm;
        }
        .cap-partner p { font-size: 8pt !important; line-height: 1.4 !important; }

        /* Footer */
        .cap-footer {
          margin-top: auto;
          padding-top: 3mm;
          border-top: 0.5pt solid var(--cap-rule);
        }
        .cap-contact {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4mm;
          font-size: 8.5pt;
          line-height: 1.5;
          color: var(--cap-muted);
        }
        .cap-contact strong { color: var(--cap-ink); font-weight: 600; }

        /* Mobile screen view */
        @media (max-width: 720px) {
          .cap-sheet { min-height: 0; max-width: 100%; }
          .cap-body { padding: 6mm 5mm; gap: 4mm; }
          .cap-cover { height: 60mm; }
          .cap-cover-content { padding: 6mm 6mm; }
          .cap-cover-title { font-size: 22px; }
          .cap-why { grid-template-columns: 1fr; }
          .cap-why-compare { flex-direction: row; }
          .cap-why-rate { flex: 1; }
          .cap-outcomes,
          .cap-operate,
          .cap-gov-entities,
          .cap-partners,
          .cap-contact { grid-template-columns: 1fr !important; }
          .cap-deliver-grid { grid-template-columns: 1fr; }
          .cap-deliver-img { min-height: 40mm; }
          .cap-founder { grid-template-columns: 22mm 1fr; }
          .cap-stats { grid-template-columns: 1fr 1fr; }
          .cap-stat:nth-child(-n+2) { border-top: none; }
          .cap-stat:nth-child(odd) { border-left: none; }
        }

        /* Print: exact A4, 2 pages */
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
            width: 210mm;
            min-height: 297mm;
            max-width: 210mm;
            page-break-after: always;
          }
          .cap-sheet:last-of-type { page-break-after: auto; }
        }
      `}</style>
    </main>
  )
}
