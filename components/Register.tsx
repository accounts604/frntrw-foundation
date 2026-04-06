'use client'

import { useState } from 'react'

export default function Register() {
  const [form, setForm] = useState({ guardian: '', email: '', athlete: '', age: '', pathway: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch { /* non-blocking */ }
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    padding: '14px 16px',
    fontSize: 14,
    fontFamily: "'DM Sans',sans-serif",
    border: 'none',
    borderBottom: '1.5px solid rgba(0,0,0,0.2)',
    background: 'rgba(255,255,255,0.5)',
    color: 'var(--black)',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="register" style={{ background: 'var(--gold)', padding: 'var(--pad-y) var(--pad-x)' }}>
      <div className="register-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <h2 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 'clamp(48px,7vw,80px)', lineHeight: 0.9, color: 'var(--black)', marginBottom: 16, fontWeight: 500, letterSpacing: -1 }}>
            Give your athlete the front row.
          </h2>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: 'rgba(0,0,0,0.55)' }}>
            Limited spots per intake. Register your interest and we&apos;ll confirm your athlete&apos;s place in the next programme cycle.
          </p>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
            <div style={{ fontSize: 20, fontWeight: 500, color: 'var(--black)', marginBottom: 8 }}>Registration received!</div>
            <div style={{ fontSize: 15, color: 'rgba(0,0,0,0.6)' }}>We&apos;ll be in touch soon to confirm your spot.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <input type="text" placeholder="Parent / Guardian name" required value={form.guardian} onChange={e => setForm(p => ({ ...p, guardian: e.target.value }))} style={inputStyle} />
              <input type="email" placeholder="Email address" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} style={inputStyle} />
            </div>
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <input type="text" placeholder="Athlete's name" required value={form.athlete} onChange={e => setForm(p => ({ ...p, athlete: e.target.value }))} style={inputStyle} />
              <input type="number" placeholder="Athlete's age" required min={10} max={17} value={form.age} onChange={e => setForm(p => ({ ...p, age: e.target.value }))} style={inputStyle} />
            </div>
            <select required value={form.pathway} onChange={e => setForm(p => ({ ...p, pathway: e.target.value }))}
              style={{ ...inputStyle, color: form.pathway ? 'var(--black)' : 'rgba(0,0,0,0.35)', appearance: 'none' }}>
              <option value="" disabled>Select programme pathway</option>
              <option>Foundation Programme (Ages 10–14)</option>
              <option>Performance Pathway (Ages 15–17)</option>
              <option>Not sure — advise me</option>
            </select>
            <button type="submit" style={{ padding: 16, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, background: 'var(--black)', color: 'var(--gold)', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", marginTop: 6 }}>
              Register Interest
            </button>
          </form>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .register-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
