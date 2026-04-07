'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function PartnerSection() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', interest: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/eoi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch { /* non-blocking */ }
    setSubmitted(true)
  }

  return (
    <section id="sponsor" style={{ background: 'var(--black)', color: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
      {/* Hero */}
      <div className="sponsor-hero-img" style={{ position: 'relative', height: 500, overflow: 'hidden' }}>
        <Image src="/images/sponsor-hero.jpg" alt="FRNTRW coaching team" fill style={{ objectFit: 'cover', objectPosition: 'center 30%', filter: 'brightness(0.35)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,transparent 15%,rgba(13,13,11,0.97) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '60px var(--pad-x)' }}>
          <div style={{ fontSize: 10, letterSpacing: '3.5px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Partner With Us</div>
          <h2 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 'clamp(40px,6vw,68px)', lineHeight: 0.92, fontWeight: 500, color: 'var(--white)', letterSpacing: -1 }}>
            Your brand. <em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>Their future.</em>
          </h2>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '0 var(--pad-x) 96px' }}>
        {/* Stats */}
        <div className="sponsor-value-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'var(--border-light)', marginBottom: 72 }}>
          {[['300+', 'Athletes & Families'], ['19K', 'Social Following'], ['60', 'Test Caps']].map(([num, label]) => (
            <div key={label} className="sponsor-value-item" style={{ background: 'var(--charcoal)', padding: '40px 36px' }}>
              <div className="sponsor-value-num" style={{ fontSize: 52, fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: 8, letterSpacing: -1 }}>{num}</div>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(245,243,238,0.4)' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Two col */}
        <div className="sponsor-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 80, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 19, fontWeight: 300, lineHeight: 1.75, color: 'rgba(245,243,238,0.75)', marginBottom: 36 }}>
              This isn&apos;t a logo placement. It&apos;s a seat at the table while the table is still being built — and the brands that come in at the foundation level own the story.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', borderTop: '0.5px solid var(--border-light)' }}>
              {[['Brand', 'Authentic Pasifika community association'], ['Reach', '300+ families. 10 coaches. One platform.'], ['Impact', 'Tax-deductible. Measurable. Accountable.'], ['Growth', 'Ground floor of something that scales']].map(([tag, title]) => (
                <div key={tag} style={{ padding: '22px 0', borderBottom: '0.5px solid var(--border-light)', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 24, alignItems: 'start' }}>
                  <div style={{ fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', background: 'rgba(201,168,76,0.08)', border: '0.5px solid rgba(201,168,76,0.2)', padding: '4px 10px', whiteSpace: 'nowrap', marginTop: 3 }}>{tag}</div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--white)' }}>{title}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', border: '0.5px solid var(--border)', overflow: 'hidden', margin: '44px 0' }} className="fomo-strip">
              {['Founding partner positions — limited', '2025 intake next term', 'School programme launching 2026'].map(item => (
                <div key={item} style={{ fontSize: 12, color: 'rgba(245,243,238,0.45)', display: 'flex', alignItems: 'center', gap: 10, padding: '16px 22px', borderRight: '0.5px solid var(--border)', flex: 1, whiteSpace: 'nowrap' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, display: 'inline-block' }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* EOI form */}
          <div className="eoi-sticky" style={{ position: 'sticky', top: 88 }}>
            <div style={{ background: 'rgba(245,243,238,0.03)', border: '0.5px solid var(--border)', padding: '44px 40px' }}>
              <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>Expression of Interest</div>
              <div style={{ fontSize: 26, fontWeight: 500, color: 'var(--white)', marginBottom: 8, lineHeight: 1.1 }}>Let&apos;s build something together.</div>
              <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(245,243,238,0.4)', marginBottom: 32, lineHeight: 1.65 }}>No fixed packages. No cold pitch decks. Just a real conversation.</div>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--gold)', marginBottom: 8 }}>Expression received.</div>
                  <div style={{ fontSize: 13, color: 'rgba(245,243,238,0.5)' }}>We respond to every EOI within 48 hours.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[['text', 'Your name', 'name'], ['text', 'Company / Organisation', 'company'], ['email', 'Email address', 'email'], ['tel', 'Phone (optional)', 'phone']].map(([type, placeholder, field]) => (
                    <input key={field} type={type} placeholder={placeholder} required={field !== 'phone'}
                      value={form[field as keyof typeof form]}
                      onChange={e => setForm(prev => ({ ...prev, [field]: e.target.value }))}
                      style={{ padding: '14px 16px', fontSize: 14, fontFamily: "'DM Sans',sans-serif", border: '0.5px solid rgba(245,243,238,0.1)', background: 'rgba(245,243,238,0.04)', color: 'var(--white)', outline: 'none' }} />
                  ))}
                  <select required value={form.interest} onChange={e => setForm(prev => ({ ...prev, interest: e.target.value }))}
                    style={{ padding: '14px 16px', fontSize: 14, fontFamily: "'DM Sans',sans-serif", border: '0.5px solid rgba(245,243,238,0.1)', background: 'rgba(245,243,238,0.04)', color: form.interest ? 'var(--white)' : 'rgba(245,243,238,0.45)', outline: 'none', appearance: 'none' }}>
                    <option value="" disabled>What best describes your interest?</option>
                    {['Programme naming rights / major partner', 'Product or service partnership', 'Community / grassroots sponsorship', 'In-kind support or equipment', 'Not sure yet — want to learn more'].map(o => (
                      <option key={o} style={{ background: 'var(--charcoal)', color: 'var(--white)' }}>{o}</option>
                    ))}
                  </select>
                  <button type="submit" style={{ padding: 16, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, background: 'var(--gold)', color: 'var(--black)', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }}>
                    Send Expression of Interest
                  </button>
                  <div style={{ fontSize: 11, color: 'rgba(245,243,238,0.2)', textAlign: 'center', marginTop: 6, lineHeight: 1.5 }}>
                    We respond to every EOI within 48 hours.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sponsor-hero-img { height: 380px !important; }
          .sponsor-value-grid { grid-template-columns: 1fr 1fr !important; }
          .sponsor-two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
          .fomo-strip { flex-direction: column !important; }
          .eoi-sticky { position: static !important; }
        }
        @media (max-width: 480px) {
          .sponsor-hero-img { height: 300px !important; }
          .sponsor-value-grid { grid-template-columns: 1fr !important; }
          .sponsor-value-item { padding: 28px 20px !important; }
          .sponsor-value-num { font-size: 40px !important; }
        }
      `}</style>
    </section>
  )
}
