import { useState, useEffect } from 'react'
import logo from '/brand_assets/insight-lab.png'

const links = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Tentang', href: '#tentang' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="nav-outer"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '16px 20px 0',
      }}
    >
      <div
        className="nav-header"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          borderRadius: open ? 24 : 100,
          overflow: 'hidden',
          border: '1px solid rgba(71,89,127,0.08)',
          transition: 'background 0.3s, box-shadow 0.3s, border-color 0.3s, border-radius 0.3s',
          background: scrolled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.72)',
          backdropFilter: 'blur(16px)',
          boxShadow: scrolled
            ? '0 10px 32px rgba(71,89,127,0.14)'
            : '0 4px 20px rgba(71,89,127,0.08)',
        }}
      >
        <div className="nav-content" style={{ padding: '0 24px' }}>
        <div
          className="nav-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 72,
          }}
        >
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src={logo} alt="Insight Lab" className="nav-logo" style={{ height: 40, width: 'auto' }} />
          </a>

          <nav className="nav-desktop" style={{ alignItems: 'center', gap: 8 }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#47597f',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: 100,
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(79,172,221,0.1)'
                  e.target.style.color = '#4facdd'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.color = '#47597f'
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontak"
              style={{
                marginLeft: 8,
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: '#fff',
                textDecoration: 'none',
                padding: '10px 24px',
                borderRadius: 100,
                background: 'linear-gradient(135deg, #51a3d6 0%, #47597f 100%)',
                boxShadow: '0 4px 14px rgba(81,163,214,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-1px)'
                e.target.style.boxShadow = '0 6px 20px rgba(81,163,214,0.45)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 14px rgba(81,163,214,0.35)'
              }}
            >
              Hubungi Kami
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="nav-mobile-btn"
            style={{ flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: 24,
                  height: 2,
                  background: '#47597f',
                  borderRadius: 2,
                  transition: 'transform 0.2s, opacity 0.2s',
                  transform: open
                    ? i === 0
                      ? 'translateY(7px) rotate(45deg)'
                      : i === 2
                        ? 'translateY(-7px) rotate(-45deg)'
                        : 'scaleX(0)'
                    : 'none',
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {open && (
          <div style={{ padding: '16px 0 24px', borderTop: '1px solid rgba(71,89,127,0.1)', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: '#47597f',
                  textDecoration: 'none',
                  padding: '12px 16px',
                  borderRadius: 100,
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setOpen(false)}
              style={{
                marginTop: 8,
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: '#fff',
                textDecoration: 'none',
                padding: '12px 24px',
                borderRadius: 100,
                background: 'linear-gradient(135deg, #51a3d6 0%, #47597f 100%)',
                textAlign: 'center',
              }}
            >
              Hubungi Kami
            </a>
          </div>
        )}
        </div>
      </div>
    </header>
  )
}
