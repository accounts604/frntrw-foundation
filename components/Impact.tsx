export default function Impact() {
  return (
    <section id="impact" style={{ background: 'var(--gold)', padding: '80px var(--pad-x)' }}>
      <div className="impact-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(0,0,0,0.45)', marginBottom: 10 }}>Impact to Date</div>
          <h2 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 'clamp(48px,7vw,72px)', lineHeight: 0.9, color: 'var(--black)', fontWeight: 500 }}>
            Real work.<br />Real numbers.
          </h2>
        </div>
        <div className="impact-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
          {[
            { num: '300+', label: 'Athletes Registered', note: 'Across three clinic intakes — demand-led, community-driven' },
            { num: '3', label: 'Clinics Delivered', note: 'All delivered before a single dollar of formal funding' },
            { num: '10', label: 'Volunteer Coaches', note: 'Premium coaching team — all self-funded, all committed' },
          ].map((s, i) => (
            <div key={s.label} className={`impact-stat-item${i === 0 ? ' impact-stat-first' : ''}`} style={{ padding: '0 32px', borderLeft: i === 0 ? 'none' : '2px solid rgba(0,0,0,0.12)', paddingLeft: i === 0 ? 0 : 32 }}>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 64, color: 'var(--black)', lineHeight: 1, fontWeight: 300 }}>{s.num}</div>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginTop: 6 }}>{s.label}</div>
              <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(0,0,0,0.45)', marginTop: 8, lineHeight: 1.6 }}>{s.note}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .impact-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
          .impact-stats { grid-template-columns: 1fr !important; }
          .impact-stat-item { border-left: none !important; padding-left: 0 !important; border-top: 1.5px solid rgba(0,0,0,0.12); padding-top: 24px !important; }
          .impact-stat-first { border-top: none !important; padding-top: 0 !important; }
        }
      `}</style>
    </section>
  )
}
