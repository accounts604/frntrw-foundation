import Image from 'next/image'

const board = [
  {
    img: '/images/board-census.jpg',
    name: 'Census Johnston',
    title: 'Founder & Director',
    bio: '60-test Manu Samoa international, 3× Rugby World Cup, Heineken Cup winner with Toulouse, and current Blues development coach. Census founded Frntrw Foundation to give Auckland youth the access to elite coaching he never had growing up.',
  },
]

export default function Governance() {
  return (
    <section id="governance" style={{ background: 'var(--charcoal)', padding: 'var(--pad-y) var(--pad-x)', color: 'var(--white)' }}>
      <span className="section-label">Governance</span>
      <h2 className="section-h2" style={{ color: 'var(--white)' }}>Board of Trustees</h2>

      <div className="board-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginTop: 48, maxWidth: 760 }}>
        {board.map(member => (
          <div key={member.name} style={{ background: 'var(--mid)', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: 300, overflow: 'hidden' }}>
              <Image src={member.img} alt={member.name} width={400} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }} />
            </div>
            <div style={{ padding: '28px 28px 32px' }}>
              <div style={{ fontSize: 17, fontWeight: 500, color: 'var(--white)', marginBottom: 5 }}>{member.name}</div>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>{member.title}</div>
              <div style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,243,238,0.55)' }}>{member.bio}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Entity strip */}
      <div className="entity-strip" style={{ background: 'var(--black)', padding: '56px var(--pad-x)', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderTop: '0.5px solid var(--border-light)', margin: '80px calc(-1 * var(--pad-x)) 0' }}>
        {[
          { tag: 'Legal Entity', val: 'Frntrw Foundation Limited', note: 'Companies Office — NZ' },
          { tag: 'Charitable Status', val: 'Trust Registration', note: 'In progress — Charities Services NZ' },
          { tag: 'Founded', val: '2023', note: 'Auckland, New Zealand' },
        ].map((item, i) => (
          <div key={item.tag} className={`entity-item${i === 0 ? ' entity-item-first' : ''}`} style={{ padding: '20px 32px', borderLeft: i === 0 ? 'none' : '0.5px solid var(--border-light)', paddingLeft: i === 0 ? 0 : 32 }}>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>{item.tag}</div>
            <div style={{ fontSize: 15, fontWeight: 400, color: 'var(--white)', lineHeight: 1.5 }}>{item.val}</div>
            <div style={{ fontSize: 11, color: 'rgba(245,243,238,0.35)', marginTop: 5 }}>{item.note}</div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .board-grid { grid-template-columns: 1fr !important; max-width: 100% !important; }
          .entity-strip { grid-template-columns: 1fr !important; padding: 40px var(--pad-x) !important; }
          .entity-item { border-left: none !important; padding-left: 0 !important; border-top: 0.5px solid var(--border-light); padding-top: 24px !important; }
          .entity-item-first { border-top: none !important; padding-top: 0 !important; }
        }
      `}</style>
    </section>
  )
}
