import logo from '/brand_assets/insight-lab.png'

const footerLinks = {
  Layanan: ['ERP System', 'Analisis dan Visualisasi Data', 'Pengembangan Software'],
  Perusahaan: [{ label: 'Tentang Kami', href: '#tentang' }, { label: 'Hubungi Kami', href: '#kontak' }],
}

export default function Footer() {
  return (
    <footer
      style={{
        background: '#080f1a',
        padding: '72px 0 0',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className="grid-auto-2-1" style={{ gap: 48, marginBottom: 64 }}>
          <div>
            <img src={logo} alt="Insight Lab" style={{ height: 44, width: 'auto', marginBottom: 20 }} />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                lineHeight: 1.72,
                color: 'rgba(209,221,227,0.6)',
                margin: 0,
                maxWidth: 320,
              }}
            >
              Mengubah data menjadi keputusan bisnis. Data & software agency untuk pertumbuhan bisnismu.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <h4
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#fff',
                  margin: '0 0 20px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {heading}
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map((item) => {
                  const label = typeof item === 'string' ? item : item.label
                  const href = typeof item === 'string' ? '#layanan' : item.href
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 14,
                          color: 'rgba(209,221,227,0.55)',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#4facdd'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = 'rgba(209,221,227,0.55)'
                        }}
                      >
                        {label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            padding: '24px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(209,221,227,0.4)', margin: 0 }}>
            © 2026 Insight Lab. Hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  )
}
