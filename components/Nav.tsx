'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px var(--pad-x)',
        borderBottom: '0.5px solid var(--border)',
        position: 'sticky',
        top: 0,
        background: 'rgba(13,13,11,0.96)',
        backdropFilter: 'blur(12px)',
        zIndex: 100,
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <Image src="/images/icon-white.png" width={36} height={30} alt="FRNTRW" style={{ objectFit: 'contain' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: "'Intramur', sans-serif", fontSize: 24, letterSpacing: 3, color: 'var(--white)' }}>FRNTRW</span>
            <span style={{ fontSize: 7, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 400 }}>Foundation</span>
          </div>
        </a>

        <div style={{ display: 'flex', gap: 36 }} className="nav-links-desktop">
          {[['#about', 'The Team'], ['#programmes', 'Programmes'], ['#impact', 'Impact'], ['#stories', 'Stories'], ['#sponsor', 'Partners'], ['#register', 'Register'], ['#governance', 'Governance'], ['#contact', 'Contact']].map(([href, label]) => (
            <a key={href} href={href} style={{ fontSize: 11, letterSpacing: '1.8px', textTransform: 'uppercase', color: 'rgba(245,243,238,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(245,243,238,0.5)')}>
              {label}
            </a>
          ))}
        </div>

        <a href="#register" className="btn-gold nav-cta-desktop" style={{ fontSize: 11, padding: '10px 22px', textDecoration: 'none', display: 'inline-block' }}>
          Register Now
        </a>

        <button className="nav-hamburger-btn" onClick={() => setMenuOpen(true)}
          style={{ display: 'none', flexDirection: 'column', gap: 5, cursor: 'pointer', padding: 4, background: 'none', border: 'none' }}
          aria-label="Open menu">
          <span style={{ width: 22, height: 1.5, background: 'var(--white)', display: 'block' }} />
          <span style={{ width: 22, height: 1.5, background: 'var(--white)', display: 'block' }} />
          <span style={{ width: 22, height: 1.5, background: 'var(--white)', display: 'block' }} />
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(13,13,11,0.98)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 40,
        }}>
          <button onClick={() => setMenuOpen(false)} style={{
            position: 'absolute', top: 24, right: 24,
            fontSize: 28, color: 'var(--white)', cursor: 'pointer',
            background: 'none', border: 'none', lineHeight: 1,
          }}>✕</button>
          {[['#about', 'The Team'], ['#programmes', 'Programmes'], ['#impact', 'Impact'], ['#stories', 'Stories'], ['#sponsor', 'Partners'], ['#register', 'Register'], ['#governance', 'Governance'], ['#contact', 'Contact']].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{
              fontSize: 28, fontWeight: 300, color: 'rgba(245,243,238,0.7)',
              textDecoration: 'none', letterSpacing: 2, textTransform: 'uppercase',
            }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(245,243,238,0.7)')}>
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
