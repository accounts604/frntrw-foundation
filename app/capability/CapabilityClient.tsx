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

      {/* ─────────────── PAGE 1 ─────────────── */}
      <section className="cap-sheet">
        {/* Cover hero */}
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
              Wellbeing through sport.<br />Access without barriers.
            </div>
            <div className="cap-cover-meta">
              <span>Capability Statement &amp; Statement of Intent</span>
              <span>May 2026</span>
            </div>
          </div>
        </div>

        {/* Outcome we deliver */}
        <section className="cap-block cap-block-first">
          <h2 className="cap-h2">The Outcome We Deliver</h2>
          <p className="cap-lead">
            Frntrw Foundation lifts <strong>physical activity, pastoral wellbeing, and cultural identity</strong>{' '}
            for Pasifika and Māori young people aged 10 to 17 — communities historically underserved by Auckland&apos;s
            paid youth-sport market. We close the equity gap that keeps minority whānau on the sideline.
          </p>
        </section>

        {/* The need */}
        <section className="cap-block">
          <h2 className="cap-h2">The Need We Address</h2>
          <div className="cap-why">
            <div className="cap-why-text">
              <p>
                Structured youth athletic development in Auckland costs whānau <strong>$24–$50 a week</strong> —
                between <strong>$2,500 and $5,200 a year</strong> for a household with two young people. For
                Pasifika and Māori families in South and West Auckland, that price tag is the difference between
                participation and exclusion from a primary protective factor in youth wellbeing.
              </p>
              <p>
                The result is a participation gap that compounds across physical health, mental wellbeing,
                identity, and pathway access — concentrated in the communities that already face the steepest
                outcome inequities. Frntrw exists to remove that financial barrier entirely.
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
              <p>
                Sustained, structured physical activity for 80+ young Pasifika and Māori people per term —
                addressing the activity-inequity gap that drives long-term health outcomes for minority communities.
              </p>
            </div>
            <div className="cap-outcome">
              <div className="cap-outcome-tag">Pastoral Care &amp; Mentorship</div>
              <p>
                Wraparound mentorship from Pasifika coaches who have lived the pathway — a culturally-anchored
                model of pastoral support shown to build resilience, confidence, and protective factors in youth.
              </p>
            </div>
            <div className="cap-outcome">
              <div className="cap-outcome-tag">Cultural Identity</div>
              <p>
                Pasifika and Māori values embedded in every session — collective strength, cultural pride, service.
                Identity reinforcement that supports mental wellbeing and whānau cohesion.
              </p>
            </div>
            <div className="cap-outcome">
              <div className="cap-outcome-tag">Pathway Equity</div>
              <p>
                Affordable, accessible entry to a development pipeline that the market has gated by household
                income. Every athlete who walks in gets the same standard of coaching as those in paid academies.
              </p>
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
      </section>

      {/* ─────────────── PAGE 2 ─────────────── */}
      <section className="cap-sheet cap-sheet-padded">
        <header className="cap-header-mini">
          <div className="cap-wordmark-mini">FRNTRW FOUNDATION · Capability Statement</div>
          <div className="cap-page-no">2 / 3</div>
        </header>
        <div className="cap-rule" />

        {/* The Cohort We Serve */}
        <section className="cap-block-padded">
          <h2 className="cap-h2">The Cohort We Serve</h2>
          <p>
            Pasifika and Māori young people aged 10 to 17 living in South and West Auckland — wards that consistently
            rank among Aotearoa&apos;s highest deprivation deciles and lowest youth-sport participation rates.
            Households in these communities carry above-average barriers to structured physical activity: cost,
            transport, equipment access, and limited culturally-relevant programmes.
          </p>
          <p>
            Our entry criteria is intentionally none: no tryouts, no waitlists, no fees, no kit to bring. The
            programme meets young people where they already are, on the terms that whānau can actually accept.
          </p>
        </section>

        {/* How outcomes are delivered */}
        <section className="cap-block-padded">
          <h2 className="cap-h2">How Outcomes Are Delivered</h2>
          <div className="cap-deliver-grid">
            <div className="cap-deliver-img">
              <Image src="/images/lane-community.jpg" alt="Community programme in session" fill sizes="280px" style={{ objectFit: 'cover' }} />
            </div>
            <div className="cap-deliver-body">
              <div className="cap-deliver-tag">Free Community Programme</div>
              <p>
                Three clinic intakes per year plus holiday camp programming. Each cycle: 80+ young people in regular,
                structured physical activity, supported by ten current and recent professional players operating on a
                volunteer basis.
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

        {/* Founder */}
        <section className="cap-block-padded">
          <h2 className="cap-h2">Cultural Leadership</h2>
          <div className="cap-founder">
            <div className="cap-founder-img">
              <Image src="/images/board-census.jpg" alt="Census Johnston, Founder" fill sizes="180px" style={{ objectFit: 'cover', objectPosition: 'center 15%' }} />
            </div>
            <div className="cap-founder-body">
              <div className="cap-founder-name">Census Johnston</div>
              <div className="cap-founder-role">Founder &amp; Chair</div>
              <p>
                60-test Manu Samoa international. Three Rugby World Cup campaigns. Heineken Cup winner with Toulouse.
                Currently development coach at the Blues.
              </p>
              <p>
                A Pasifika sport leader who lived the access gap he&apos;s now closing. Census founded Frntrw to
                deliver to Auckland Pasifika and Māori youth the structured access and pastoral care that the market
                kept out of reach for his generation.
              </p>
            </div>
          </div>
        </section>

        {/* Operating discipline */}
        <section className="cap-block-padded">
          <h2 className="cap-h2">Operating Discipline</h2>
          <div className="cap-operate">
            <div className="cap-operate-item">
              <div className="cap-operate-tag">Safeguarding</div>
              <p>
                All coaches police-vetted before programme delivery. Operations align with NZ youth-sport
                safeguarding standards. Athlete welfare and consent reviewed every cycle.
              </p>
            </div>
            <div className="cap-operate-item">
              <div className="cap-operate-tag">Outcome Reporting</div>
              <p>
                Every funded programme receives quarterly reporting — participation numbers, sessions delivered,
                wellbeing outcomes, and transparent financial accounting of funds applied.
              </p>
            </div>
            <div className="cap-operate-item">
              <div className="cap-operate-tag">Impact Capture</div>
              <p>
                Photo and story documentation built into the programme — every clinic, camp, and partnership
                generates evidence of impact. Featured only with whānau consent.
              </p>
            </div>
            <div className="cap-operate-item">
              <div className="cap-operate-tag">Financial Governance</div>
              <p>
                Funds flow through the Charitable Trust, ringfenced for programme delivery. Companies Office and
                Charities Services filings ensure full transparency and accountability.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* ─────────────── PAGE 3 ─────────────── */}
      <section className="cap-sheet cap-sheet-padded">
        <header className="cap-header-mini">
          <div className="cap-wordmark-mini">FRNTRW FOUNDATION · Capability Statement</div>
          <div className="cap-page-no">3 / 3</div>
        </header>
        <div className="cap-rule" />

        {/* Governance & Structure */}
        <section className="cap-block-padded">
          <h2 className="cap-h2">Governance &amp; Financial Structure</h2>

          <div className="cap-gov-entities">
            <div className="cap-gov-entity">
              <div className="cap-gov-tag">Operating Entity</div>
              <div className="cap-gov-val">Frntrw Foundation Limited</div>
              <div className="cap-gov-note">
                Registered NZ company, Pasifika-owned. Holds operational contracts and manages day-to-day delivery.
              </div>
            </div>
            <div className="cap-gov-entity">
              <div className="cap-gov-tag">Charitable Status</div>
              <div className="cap-gov-val">Frntrw Foundation Charitable Trust</div>
              <div className="cap-gov-note">
                Registration in progress with Charities Services NZ. Holds the community-benefit mission, receives
                grants and donations, applies tax-deductible status to giving.
              </div>
            </div>
          </div>

          <p className="cap-gov-flow">
            <strong>How funding flows:</strong> Grants and donations are received by the Charitable Trust and
            ringfenced for programme delivery. The Trust directs funds to Frntrw Foundation Limited as delivery
            entity. Any surplus from commercial activity returns to the Trust. This is the standard two-entity
            structure used by NZ foundations balancing community benefit with operational sustainability.
          </p>

          <div className="cap-gov-board">
            <div className="cap-gov-tag">Board of Trustees</div>
            <ul className="cap-gov-list">
              <li><strong>Census Johnston</strong> — Founder &amp; Chair. 60-test Manu Samoa international. Pasifika sport leader.</li>
              <li>Trustee — appointment pending</li>
              <li>Independent Trustee — appointment pending</li>
            </ul>
            <div className="cap-gov-note cap-gov-note-pad">
              Independent trustee appointment confirmed prior to Charitable Trust registration, satisfying IRD
              independence requirements and ensuring impartial oversight of community-benefit decisions.
            </div>
          </div>
        </section>

        {/* Why partner */}
        <section className="cap-block-padded">
          <h2 className="cap-h2">Why Partner With Us</h2>
          <div className="cap-partners">
            <div className="cap-partner">
              <div className="cap-partner-tag">For Funders</div>
              <p>
                Your investment directly funds measurable outcomes for underserved Pasifika and Māori youth:
                physical activity participation, pastoral wellbeing, cultural identity, and equitable pathway
                access. Quarterly reporting on every funded programme — participation, outcomes, and
                ringfenced financial accounting.
              </p>
            </div>
            <div className="cap-partner">
              <div className="cap-partner-tag">For Corporate Sponsors</div>
              <p>
                Brand alignment with a Pasifika-led foundation delivering tangible wellbeing and equity outcomes
                for South and West Auckland youth. Authentic community association, measurable impact reporting,
                and visibility tailored to your CSR objectives.
              </p>
            </div>
            <div className="cap-partner">
              <div className="cap-partner-tag">For Whānau &amp; Community</div>
              <p>
                Register a young person. Volunteer your time. Share the work. The foundation belongs to the
                community it serves — and the community is what keeps it going.
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
        .cap-sheet-padded { padding: 48px 56px; }

        /* Cover hero */
        .cap-cover {
          position: relative;
          height: 300px;
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
          padding: 30px 48px;
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
          font-size: 38px;
          font-weight: 500;
          letter-spacing: -1px;
          line-height: 1.05;
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

        .cap-block { margin: 0 56px 22px; }
        .cap-block-first { margin-top: 32px; }
        .cap-block-padded { margin-bottom: 22px; }
        .cap-block p,
        .cap-block-padded p {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(13,13,11,0.78);
        }
        .cap-block p + p,
        .cap-block-padded p + p { margin-top: 8px; }
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
          font-size: 15px !important;
          line-height: 1.6 !important;
          color: var(--cap-ink) !important;
        }

        /* Why */
        .cap-why {
          display: grid;
          grid-template-columns: 1fr 200px;
          gap: 24px;
          align-items: stretch;
        }
        .cap-why-compare {
          display: flex;
          flex-direction: column;
          gap: 2px;
          background: var(--cap-rule);
        }
        .cap-why-rate { padding: 14px 16px; }
        .cap-why-market { background: #f4f1ea; }
        .cap-why-us { background: var(--cap-gold); }
        .cap-why-rate-label {
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(13,13,11,0.6);
          margin-bottom: 4px;
        }
        .cap-why-us .cap-why-rate-label { color: rgba(13,13,11,0.7); }
        .cap-why-rate-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 24px;
          font-weight: 500;
          line-height: 1;
          color: var(--cap-ink);
          letter-spacing: -0.5px;
        }
        .cap-why-rate-note {
          font-size: 10.5px;
          color: rgba(13,13,11,0.55);
          margin-top: 4px;
        }

        /* Outcomes grid */
        .cap-outcomes {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .cap-outcome {
          padding: 14px 16px;
          background: #fafaf6;
          border-left: 2px solid var(--cap-gold);
        }
        .cap-outcome-tag {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-ink);
          font-weight: 600;
          margin-bottom: 6px;
        }
        .cap-outcome p { font-size: 11.5px !important; line-height: 1.6 !important; }

        /* What we deliver */
        .cap-deliver-grid {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 22px;
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
          margin-bottom: 8px;
        }
        .cap-deliver-list {
          list-style: none;
          padding: 0;
          margin: 12px 0 0;
        }
        .cap-deliver-list li {
          font-size: 12px;
          font-weight: 300;
          line-height: 1.65;
          color: rgba(13,13,11,0.78);
          padding-left: 14px;
          position: relative;
          margin-bottom: 4px;
        }
        .cap-deliver-list li::before {
          content: '';
          width: 4px;
          height: 4px;
          background: var(--cap-gold);
          position: absolute;
          left: 0;
          top: 9px;
          border-radius: 50%;
        }

        /* Stats strip */
        .cap-stats {
          margin: auto 56px 32px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          background: #f7f4ec;
          border: 0.5px solid var(--cap-rule);
        }
        .cap-stat { padding: 18px 14px; border-left: 0.5px solid var(--cap-rule); }
        .cap-stat:first-child { border-left: none; }
        .cap-stat-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 26px;
          font-weight: 300;
          color: var(--cap-gold);
          line-height: 1;
          letter-spacing: -0.5px;
        }
        .cap-stat-label {
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-muted);
          margin-top: 7px;
          line-height: 1.4;
        }

        /* Page header */
        .cap-header-mini { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
        .cap-wordmark-mini {
          font-size: 9.5px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--cap-muted);
        }
        .cap-page-no { font-size: 9.5px; letter-spacing: 2px; color: var(--cap-muted); }
        .cap-rule { height: 1px; background: var(--cap-rule); margin-bottom: 22px; }

        /* Founder */
        .cap-founder { display: grid; grid-template-columns: 160px 1fr; gap: 20px; align-items: start; }
        .cap-founder-img {
          position: relative;
          width: 160px;
          height: 160px;
          overflow: hidden;
        }
        .cap-founder-name { font-size: 17px; font-weight: 600; color: var(--cap-ink); }
        .cap-founder-role {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-gold);
          margin: 4px 0 10px;
        }

        /* Operate grid */
        .cap-operate {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .cap-operate-item {
          border: 0.5px solid var(--cap-rule);
          padding: 14px 16px;
          background: #fafaf6;
        }
        .cap-operate-tag {
          font-size: 9.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-gold);
          font-weight: 600;
          margin-bottom: 7px;
        }
        .cap-operate-item p { font-size: 11.5px !important; line-height: 1.6 !important; }

        /* Governance */
        .cap-gov-entities {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }
        .cap-gov-entity {
          border: 0.5px solid var(--cap-rule);
          padding: 14px 16px;
        }
        .cap-gov-tag {
          font-size: 9.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-gold);
          font-weight: 600;
          margin-bottom: 6px;
        }
        .cap-gov-val { font-size: 13px; font-weight: 500; color: var(--cap-ink); line-height: 1.35; }
        .cap-gov-note { font-size: 10.5px; color: var(--cap-muted); margin-top: 4px; line-height: 1.55; }
        .cap-gov-note-pad { margin-top: 10px; padding-left: 14px; border-left: 2px solid var(--cap-gold); }
        .cap-gov-flow {
          margin-bottom: 14px;
          padding: 12px 14px;
          background: #fafaf6;
          border-left: 2px solid var(--cap-gold);
          font-size: 12px !important;
        }
        .cap-gov-flow strong { color: var(--cap-ink); font-weight: 600; }
        .cap-gov-board { border: 0.5px solid var(--cap-rule); padding: 14px 16px; }
        .cap-gov-list { list-style: none; padding: 0; margin: 0; }
        .cap-gov-list li {
          font-size: 12px;
          font-weight: 300;
          line-height: 1.6;
          color: rgba(13,13,11,0.78);
          padding: 4px 0;
        }
        .cap-gov-list strong { color: var(--cap-ink); font-weight: 600; }

        /* Partners */
        .cap-partners { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 4px; }
        .cap-partner { border: 0.5px solid var(--cap-rule); padding: 14px 16px; }
        .cap-partner-tag {
          font-size: 9.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--cap-gold);
          font-weight: 600;
          margin-bottom: 8px;
        }
        .cap-partner p { font-size: 11px !important; line-height: 1.6 !important; }

        /* Footer */
        .cap-footer { margin-top: auto; padding-top: 18px; border-top: 1px solid var(--cap-rule); }
        .cap-contact { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; font-size: 11px; line-height: 1.65; color: var(--cap-muted); }
        .cap-contact strong { color: var(--cap-ink); font-weight: 600; }

        /* Mobile */
        @media (max-width: 720px) {
          .cap-sheet { min-height: 0; }
          .cap-sheet-padded { padding: 28px 22px; }
          .cap-cover { height: 240px; }
          .cap-cover-content { padding: 22px 24px; }
          .cap-cover-title { font-size: 26px; }
          .cap-block { margin: 0 22px 20px; }
          .cap-stats { margin: auto 22px 24px; grid-template-columns: 1fr 1fr; }
          .cap-stat { border-left: none; border-top: 0.5px solid var(--cap-rule); }
          .cap-stat:nth-child(-n+2) { border-top: none; }
          .cap-stat:nth-child(2n) { border-left: 0.5px solid var(--cap-rule); }
          .cap-why { grid-template-columns: 1fr; }
          .cap-why-compare { flex-direction: row; }
          .cap-why-rate { flex: 1; }
          .cap-deliver-grid { grid-template-columns: 1fr; }
          .cap-deliver-img { min-height: 200px; }
          .cap-founder { grid-template-columns: 1fr; text-align: center; }
          .cap-founder-img { margin: 0 auto; width: 150px; height: 150px; }
          .cap-outcomes, .cap-operate, .cap-gov-entities, .cap-partners, .cap-contact { grid-template-columns: 1fr !important; }
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
          .cap-sheet-padded { padding: 14mm 14mm; }
          .cap-sheet:last-of-type { page-break-after: auto; }
          .cap-block { margin: 0 14mm 14px; }
          .cap-stats { margin: auto 14mm 14mm; }
        }
      `}</style>
    </main>
  )
}
