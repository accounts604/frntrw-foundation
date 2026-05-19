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
        <header className="cap-header">
          <div className="cap-brand">
            <Image src="/images/icon-gold.png" width={42} height={36} alt="FRNTRW" style={{ objectFit: 'contain' }} />
            <div className="cap-brand-text">
              <div className="cap-wordmark">FRNTRW FOUNDATION</div>
              <div className="cap-sub">Auckland · Established 2023 · Pasifika-led</div>
            </div>
          </div>
          <div className="cap-meta">
            <div className="cap-meta-label">Statement of Intent</div>
            <div className="cap-meta-date">May 2026</div>
          </div>
        </header>

        <div className="cap-rule" />

        <section className="cap-block">
          <h2 className="cap-h2">Purpose</h2>
          <p>
            Frntrw Foundation gives Pasifika and Māori athletes in Auckland, aged 10–17, the structured pathway, elite
            coaching, and real access that too often sits behind a paywall — without leaving any athlete behind because
            of cost.
          </p>
        </section>

        <section className="cap-block">
          <h2 className="cap-h2">The Dual Mandate</h2>
          <p>
            A free community programme funded by grants and sponsorship, alongside a paid performance pathway that funds
            the Foundation&apos;s growth.
          </p>
          <blockquote className="cap-pull">
            The free community programme stays free. The paid pathway funds the Foundation&apos;s growth.
          </blockquote>
        </section>

        <section className="cap-block">
          <h2 className="cap-h2">Who We Are</h2>
          <table className="cap-table">
            <thead>
              <tr>
                <th>Role</th>
                <th>Name</th>
                <th>Background</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Founder &amp; Chair</td>
                <td>Census Johnston</td>
                <td>60-test Manu Samoa international, current Blues development coach</td>
              </tr>
              <tr>
                <td>Trustee</td>
                <td>Alex Matapo</td>
                <td><em>To be confirmed</em></td>
              </tr>
              <tr>
                <td>Independent Trustee</td>
                <td><em>TBC</em></td>
                <td>Independent voice — finance, legal, or community</td>
              </tr>
            </tbody>
          </table>
          <p className="cap-note">
            Delivered by a volunteer team of 10 elite coaches, all current or recent provincial / national level.
          </p>
        </section>

        <section className="cap-block">
          <h2 className="cap-h2">What We Do</h2>
          <div className="cap-pathways">
            <div className="cap-pathway">
              <div className="cap-pathway-tag">Foundation Programme · Free</div>
              <ul>
                <li>Ages 10–14</li>
                <li>Open clinics, school programmes, holiday camps</li>
                <li>Grant- and sponsor-funded</li>
                <li>No athlete turned away</li>
              </ul>
            </div>
            <div className="cap-pathway">
              <div className="cap-pathway-tag">Performance Pathway · Paid</div>
              <ul>
                <li>Ages 15–17</li>
                <li>Selected athletes, structured terms</li>
                <li>$150–$250 per term — funds the Foundation</li>
                <li>Elite coaching, exposure to scouts and clubs</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="cap-stats">
          {[
            ['300+', 'Registrations'],
            ['3', 'Clinics Delivered'],
            ['10', 'Elite Coaches'],
            ['60', 'Test Caps · Founder'],
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
          <div className="cap-wordmark-mini">FRNTRW FOUNDATION · Statement of Intent</div>
          <div className="cap-page-no">2 / 2</div>
        </header>

        <div className="cap-rule" />

        <section className="cap-block">
          <h2 className="cap-h2">Strategic Direction · 2026 – 2028</h2>
          <ol className="cap-roadmap">
            <li>
              <strong>Year 1 (2026)</strong> — Charitable Trust registered. First $50K secured. Dual-entity structure
              operational. Performance Pathway revenue: $12K.
            </li>
            <li>
              <strong>Year 2 (2027)</strong> — 600+ registrations. Second Auckland region launched. $150K secured.
              Performance Pathway revenue: $32K.
            </li>
            <li>
              <strong>Year 3 (2028)</strong> — 1,000+ registrations. First Frntrw alumni in national age-group
              representation. $300K+ secured. Performance Pathway revenue: $60K+.
            </li>
          </ol>
        </section>

        <section className="cap-block">
          <h2 className="cap-h2">Entity Structure</h2>
          <div className="cap-entities">
            <div className="cap-entity">
              <div className="cap-entity-tag">Now</div>
              <div className="cap-entity-val">Frntrw Foundation Limited</div>
              <div className="cap-entity-note">NZ company, Pasifika-owned, operating</div>
            </div>
            <div className="cap-entity">
              <div className="cap-entity-tag">Next</div>
              <div className="cap-entity-val">Frntrw Foundation Charitable Trust</div>
              <div className="cap-entity-note">Charities Services NZ — registration in progress</div>
            </div>
            <div className="cap-entity">
              <div className="cap-entity-tag">Model</div>
              <div className="cap-entity-val">Two-entity structure</div>
              <div className="cap-entity-note">Trust holds community-benefit mission · Ltd runs paid pathway · surplus flows to Trust</div>
            </div>
          </div>
        </section>

        <section className="cap-block">
          <h2 className="cap-h2">How to Partner</h2>
          <div className="cap-partners">
            <div className="cap-partner">
              <div className="cap-partner-tag">Funders</div>
              <p>
                Grants for programme delivery, coaching stipends, equipment, and regional expansion. Quarterly reporting
                and case study output for every funded programme.
              </p>
            </div>
            <div className="cap-partner">
              <div className="cap-partner-tag">Corporate Sponsors</div>
              <p>
                Foundation Partner ($25K+), Programme Partner ($10K+), Activity Partner ($2.5K+). Brand visibility on
                kit, at events, and on the platform.
              </p>
            </div>
            <div className="cap-partner">
              <div className="cap-partner-tag">Individual Donors</div>
              <p>Tax-deductible giving opens on Charitable Trust registration.</p>
            </div>
          </div>
        </section>

        <footer className="cap-footer">
          <div className="cap-contact">
            <div>
              <strong>Census Johnston</strong> · Chair
              <br />
              censusj@hotmail.com · 022 085 3545
            </div>
            <div>
              <strong>Romero Tagi</strong> · Strategy Partner (RTS)
              <br />
              info@remedyintelligentsolutions.co.nz
            </div>
            <div>
              <strong>Website</strong>
              <br />
              frntrwfoundation.org.nz
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
          padding: 56px 64px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          min-height: 1080px;
          display: flex;
          flex-direction: column;
        }

        .cap-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 22px;
        }
        .cap-brand { display: flex; align-items: center; gap: 14px; }
        .cap-wordmark {
          font-family: 'Intramur', 'DM Sans', sans-serif;
          font-size: 22px;
          letter-spacing: 3px;
          color: var(--cap-ink);
          line-height: 1;
        }
        .cap-sub {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-muted);
          margin-top: 6px;
        }
        .cap-meta { text-align: right; }
        .cap-meta-label {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--cap-gold);
        }
        .cap-meta-date {
          font-size: 12px;
          color: var(--cap-muted);
          margin-top: 4px;
        }

        .cap-header-mini { align-items: center; margin-bottom: 16px; }
        .cap-wordmark-mini {
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--cap-muted);
        }
        .cap-page-no {
          font-size: 10px;
          letter-spacing: 2px;
          color: var(--cap-muted);
        }

        .cap-rule {
          height: 1px;
          background: var(--cap-rule);
          margin-bottom: 28px;
        }

        .cap-block { margin-bottom: 24px; }
        .cap-block p {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(13,13,11,0.78);
        }
        .cap-h2 {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--cap-gold);
          font-weight: 600;
          margin-bottom: 10px;
        }

        .cap-pull {
          font-size: 16px;
          font-weight: 400;
          font-style: italic;
          line-height: 1.5;
          color: var(--cap-ink);
          padding: 14px 18px;
          border-left: 2px solid var(--cap-gold);
          margin: 14px 0 0;
          background: rgba(201,168,76,0.06);
        }

        .cap-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 8px;
        }
        .cap-table th, .cap-table td {
          text-align: left;
          padding: 8px 10px 8px 0;
          font-size: 12.5px;
          line-height: 1.5;
          vertical-align: top;
          border-bottom: 0.5px solid var(--cap-rule);
        }
        .cap-table th {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-muted);
          font-weight: 600;
          padding-bottom: 6px;
        }
        .cap-note {
          font-size: 11.5px !important;
          font-style: italic;
          color: var(--cap-muted) !important;
          margin-top: 10px;
        }

        .cap-pathways {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 4px;
        }
        .cap-pathway {
          border: 0.5px solid var(--cap-rule);
          padding: 16px 18px;
        }
        .cap-pathway-tag {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-gold);
          font-weight: 600;
          margin-bottom: 10px;
        }
        .cap-pathway ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .cap-pathway li {
          font-size: 12.5px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(13,13,11,0.75);
          padding-left: 14px;
          position: relative;
        }
        .cap-pathway li::before {
          content: '';
          width: 4px;
          height: 4px;
          background: var(--cap-gold);
          position: absolute;
          left: 0;
          top: 9px;
          border-radius: 50%;
        }

        .cap-stats {
          margin-top: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 1px solid var(--cap-rule);
          padding-top: 22px;
        }
        .cap-stat { padding: 0 14px; border-left: 0.5px solid var(--cap-rule); }
        .cap-stat:first-child { border-left: none; padding-left: 0; }
        .cap-stat-num {
          font-size: 36px;
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
          margin-top: 6px;
        }

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
          padding-left: 36px;
          position: relative;
          margin-bottom: 12px;
          counter-increment: roadmap;
        }
        .cap-roadmap li::before {
          content: counter(roadmap);
          position: absolute;
          left: 0;
          top: -2px;
          width: 24px;
          height: 24px;
          background: var(--cap-gold);
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cap-roadmap strong { color: var(--cap-ink); font-weight: 600; }

        .cap-entities {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border: 0.5px solid var(--cap-rule);
        }
        .cap-entity { padding: 14px 16px; border-left: 0.5px solid var(--cap-rule); }
        .cap-entity:first-child { border-left: none; }
        .cap-entity-tag {
          font-size: 9.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-gold);
          font-weight: 600;
          margin-bottom: 6px;
        }
        .cap-entity-val {
          font-size: 13px;
          font-weight: 500;
          color: var(--cap-ink);
          line-height: 1.35;
        }
        .cap-entity-note {
          font-size: 11px;
          color: var(--cap-muted);
          margin-top: 4px;
          line-height: 1.5;
        }

        .cap-partners {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .cap-partner {
          border: 0.5px solid var(--cap-rule);
          padding: 16px 18px;
        }
        .cap-partner-tag {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-gold);
          font-weight: 600;
          margin-bottom: 10px;
        }
        .cap-partner p {
          font-size: 12px !important;
          line-height: 1.65 !important;
        }

        .cap-footer {
          margin-top: auto;
          padding-top: 22px;
          border-top: 1px solid var(--cap-rule);
        }
        .cap-contact {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          font-size: 11.5px;
          line-height: 1.7;
          color: var(--cap-muted);
        }
        .cap-contact strong { color: var(--cap-ink); font-weight: 600; }

        /* Mobile screen view */
        @media (max-width: 720px) {
          .cap-sheet { padding: 32px 24px; min-height: 0; }
          .cap-header { flex-direction: column; align-items: flex-start; gap: 12px; }
          .cap-meta { text-align: left; }
          .cap-pathways, .cap-entities, .cap-partners, .cap-contact { grid-template-columns: 1fr !important; }
          .cap-entity { border-left: none !important; border-top: 0.5px solid var(--cap-rule); }
          .cap-entity:first-child { border-top: none; }
          .cap-stats { grid-template-columns: 1fr 1fr; gap: 16px 0; }
        }

        /* Print: clean A4 PDF */
        @media print {
          @page {
            size: A4;
            margin: 14mm 12mm;
          }
          body { background: #fff !important; }
          .cap-page { background: #fff; padding: 0; }
          .cap-screen-bar { display: none; }
          .cap-sheet {
            box-shadow: none;
            margin: 0;
            padding: 0;
            min-height: 0;
            max-width: 100%;
            page-break-after: always;
          }
          .cap-sheet:last-of-type { page-break-after: auto; }
        }
      `}</style>
    </main>
  )
}
