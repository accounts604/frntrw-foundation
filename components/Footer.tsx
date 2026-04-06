const linkStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 300,
  color: 'rgba(245,243,238,0.5)',
  textDecoration: 'none',
  transition: 'color 0.2s',
  display: 'block',
}

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a08', borderTop: '0.5px solid rgba(201,168,76,0.2)', padding: '60px var(--pad-x) 40px', width: '100%' }}>
      <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>
        {/* Brand */}
        <div className="footer-brand-col">
          <div style={{ fontFamily: "'Intramur',sans-serif", fontSize: 28, letterSpacing: 3, marginBottom: 16, color: 'var(--white)' }}>
            FRNTRW<span style={{ color: 'var(--gold)' }}>.</span>
          </div>
          <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.75, color: 'rgba(245,243,238,0.45)', maxWidth: 280, marginBottom: 24 }}>
            Structured athletic development for Auckland youth aged 10–17. Elite coaching. Real access. No athlete left behind.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="https://instagram.com/frntrwfoundation" target="_blank" rel="noreferrer" className="footer-social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(245,243,238,0.55)" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="rgba(245,243,238,0.55)" stroke="none" />
              </svg>
            </a>
            <a href="https://facebook.com/frntrwfoundation" target="_blank" rel="noreferrer" className="footer-social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(245,243,238,0.55)">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Programmes */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>Programmes</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[['#pathways', 'Community Programme'], ['#pathways', 'Academy Pathway'], ['#programmes', 'Our Five Pillars'], ['#register', 'Register an Athlete']].map(([href, label]) => (
              <a key={label} href={href} style={linkStyle} className="footer-link">{label}</a>
            ))}
          </div>
        </div>

        {/* Organisation */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>Organisation</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[['#about', 'The Coaching Team'], ['#impact', 'Impact & Results'], ['#governance', 'Board of Trustees'], ['#governance', 'Governance']].map(([href, label]) => (
              <a key={label} href={href} style={linkStyle} className="footer-link">{label}</a>
            ))}
          </div>
        </div>

        {/* Get Involved */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>Get Involved</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="#sponsor" style={linkStyle} className="footer-link">Become a Partner</a>
            <a href="#sponsor" style={linkStyle} className="footer-link">Sponsor a Programme</a>
            <a href="mailto:census@frntrwfoundation.co.nz" style={linkStyle} className="footer-link">Contact Us</a>
          </div>
        </div>
      </div>

      <div style={{ height: '0.5px', background: 'rgba(245,243,238,0.08)', marginBottom: 28 }} />

      <div className="footer-legal-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontSize: 11, color: 'rgba(245,243,238,0.25)', fontWeight: 300 }}>
          © 2025 Frntrw Foundation Limited. Registered Charitable Trust — New Zealand.
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          <span style={{ fontSize: 11, color: 'rgba(245,243,238,0.25)' }}>Frntrw Foundation Limited</span>
          <span style={{ fontSize: 11, color: 'rgba(245,243,238,0.25)' }}>Auckland, New Zealand</span>
          <a href="mailto:info@frntrwfoundation.co.nz" style={{ fontSize: 11, color: 'rgba(201,168,76,0.5)', textDecoration: 'none' }}>
            info@frntrwfoundation.co.nz
          </a>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--white) !important; }
        .footer-social-link { width: 36px; height: 36px; border: 0.5px solid rgba(245,243,238,0.15); border-radius: 2px; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: border-color 0.2s; }
        .footer-social-link:hover { border-color: rgba(201,168,76,0.6); }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-brand-col { grid-column: span 2; }
          .footer-legal-row { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-brand-col { grid-column: span 1; }
        }
      `}</style>
    </footer>
  )
}
