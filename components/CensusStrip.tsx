import Image from 'next/image'

export default function CensusStrip() {
  const pills = ['60 Tests', '3× World Cup', 'Heineken Cup', 'Blues Dev Coach']

  return (
    <div className="census-strip" style={{
      background: 'var(--gold)',
      padding: '16px var(--pad-x)',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap',
    }}>
      <style>{`
        @media (max-width: 640px) {
          .census-strip { padding-top: 20px !important; padding-bottom: 20px !important; gap: 10px !important; row-gap: 8px !important; }
        }
      `}</style>
      <Image src="/images/icon-white.png" width={24} height={20} alt="FRNTRW" style={{ objectFit: 'contain', flexShrink: 0 }} />
      <div style={{ background: 'var(--black)', color: 'var(--gold)', fontSize: 9, letterSpacing: '2.5px', textTransform: 'uppercase', padding: '5px 14px', whiteSpace: 'nowrap' }}>
        Founded by
      </div>
      <div style={{ fontSize: 13, fontWeight: 400, color: 'var(--black)', lineHeight: 1.5 }}>
        <strong style={{ fontWeight: 600 }}>Census Johnston</strong>
        {' · '}
        {pills.map((p, i) => (
          <span key={p}>
            <span style={{ background: 'var(--black)', color: 'var(--gold)', fontSize: 9, letterSpacing: '2.5px', textTransform: 'uppercase', padding: '3px 10px', marginRight: 8, whiteSpace: 'nowrap', display: 'inline-block' }}>
              {p}
            </span>
          </span>
        ))}
        Manu Samoa international
      </div>
    </div>
  )
}
