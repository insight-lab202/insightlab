const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: 'ERP System',
    desc: 'Kami hadir sebagai tim yang mendampingi proses bisnismu — bukan sekadar menjual lisensi sistem.',
    items: [
      'Layanan dari tim kami, lengkap dengan dukungan purna jual dan pemeliharaan sistem',
      'Kustomisasi sistem sesuai proses bisnismu',
      'Implementasi & migrasi data',
      'Pendampingan dan dukungan pasca-implementasi',
    ],
    accent: '#51a3d6',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 20h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Analisis dan Visualisasi Data',
    desc: 'Mengubah data mentah menjadi informasi yang jelas dan mudah digunakan untuk pengambilan keputusan.',
    items: [
      'Analisa data bisnis',
      'Dashboard & visualisasi data',
      'Monitoring KPI & performa bisnis',
      'Integrasi data dari berbagai sumber',
    ],
    accent: '#47597f',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Pengembangan Software',
    desc: 'Membangun aplikasi dan sistem yang dirancang sesuai kebutuhan operasional bisnismu.',
    items: [
      'Aplikasi Web Kustom',
      'Sistem Internal (ERP, CRM, HRIS, dll.)',
      'Otomatisasi Proses Bisnis',
      'Pengembangan API',
      'Integrasi Antar Sistem',
    ],
    accent: '#4facdd',
  },
]

export default function Services() {
  return (
    <section id="layanan" style={{ padding: '100px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(79,172,221,0.08)',
              border: '1px solid rgba(79,172,221,0.2)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 20,
            }}
          >
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: '#4facdd', letterSpacing: '0.06em' }}>
              APA YANG KAMI LAKUKAN
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#1a2332',
              margin: '0 0 16px',
              lineHeight: 1.1,
            }}
          >
            Layanan yang Menggerakkan<br />
            <span style={{ color: '#51a3d6' }}>Bisnismu</span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              lineHeight: 1.7,
              color: '#5a6e8a',
              maxWidth: 560,
              margin: '0 auto',
            }}
          >
            Dari sistem ERP hingga pengembangan software kustom — kami hadir sebagai mitra teknologi untuk pertumbuhan bisnismu.
          </p>
        </div>

        <div className="grid-auto-3" style={{ gap: 24 }}>
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  return (
    <div
      style={{
        padding: '32px',
        borderRadius: 20,
        border: '1px solid rgba(71,89,127,0.1)',
        background: '#fff',
        boxShadow: '0 2px 8px rgba(71,89,127,0.06)',
        transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = `0 16px 40px rgba(71,89,127,0.14), 0 1px 0 ${service.accent}22 inset`
        e.currentTarget.style.borderColor = service.accent + '40'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(71,89,127,0.06)'
        e.currentTarget.style.borderColor = 'rgba(71,89,127,0.1)'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${service.accent}, transparent)`,
          borderRadius: '20px 20px 0 0',
        }}
      />

      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          background: service.accent + '14',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: service.accent,
          marginBottom: 20,
        }}
      >
        {service.icon}
      </div>

      <h3
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: 19,
          fontWeight: 700,
          color: '#1a2332',
          margin: '0 0 10px',
          letterSpacing: '-0.01em',
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14,
          lineHeight: 1.6,
          color: '#5a6e8a',
          margin: '0 0 20px',
        }}
      >
        {service.desc}
      </p>

      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {service.items.map((item) => (
          <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              style={{ flexShrink: 0, marginTop: 3, color: service.accent }}
            >
              <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.5, color: '#3d4f6b' }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
