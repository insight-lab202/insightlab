const reasons = [
  {
    emoji: '🎯',
    title: 'Solusi Sesuai Kebutuhan',
    desc: 'Setiap bisnis memiliki proses yang berbeda. Kami membangun solusi yang disesuaikan dengan kebutuhanmu, bukan memaksa bisnis mengikuti software yang sudah ada.',
  },
  {
    emoji: '📊',
    title: 'Berbasis Data',
    desc: 'Keputusan yang baik dimulai dari data yang tepat. Kami membantu mengubah data menjadi informasi yang mudah dipahami dan dapat langsung digunakan.',
  },
  {
    emoji: '⚡',
    title: 'Fokus pada Efisiensi',
    desc: 'Kami mencari cara untuk mengurangi pekerjaan manual, mempercepat proses bisnis, dan meningkatkan produktivitas melalui otomatisasi.',
  },
  {
    emoji: '🤝',
    title: 'Kolaborasi yang Transparan',
    desc: 'Komunikasi yang jelas, progres yang terbuka, dan proses pengembangan yang melibatkan klien di setiap tahap.',
  },
  {
    emoji: '🚀',
    title: 'Siap Berkembang Bersama Bisnismu',
    desc: 'Solusi yang kami bangun dirancang agar mudah dikembangkan seiring pertumbuhan bisnis dan kebutuhan di masa depan.',
  },
]

export default function About() {
  return (
    <section
      id="tentang"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(160deg, #0d1b2e 0%, #1a2d4a 50%, #0d1b2e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '60%',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(81,163,214,0.1) 0%, transparent 65%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '-5%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,172,221,0.08) 0%, transparent 65%)',
          }}
        />
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 64px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(79,172,221,0.12)',
              border: '1px solid rgba(79,172,221,0.25)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 24,
            }}
          >
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: '#57bfe5', letterSpacing: '0.06em' }}>
              MENGAPA INSIGHT LAB
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(30px, 3.5vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#fff',
              margin: '0 0 20px',
              lineHeight: 1.12,
            }}
          >
            Kami Bukan Hanya Vendor —{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #57bfe5, #4facdd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Kami Mitra Pertumbuhanmu
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              lineHeight: 1.75,
              color: 'rgba(209,221,227,0.8)',
              margin: 0,
            }}
          >
            Kami membantu bisnis merancang dan membangun software, dashboard, serta solusi data yang benar-benar digunakan oleh tim setiap hari. Fokus kami bukan hanya menyelesaikan proyek, tetapi menciptakan sistem yang membuat operasional lebih efisien, data lebih mudah dipahami, dan keputusan bisnis lebih cepat diambil.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 20,
          }}
        >
          {reasons.map((r, i) => (
            <ReasonCard key={i} reason={r} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ reason }) {
  return (
    <div
      style={{
        flex: '0 1 320px',
        padding: '28px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 18,
        transition: 'background 0.2s, border-color 0.2s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(79,172,221,0.08)'
        e.currentTarget.style.borderColor = 'rgba(79,172,221,0.25)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        <div
          style={{
            flexShrink: 0,
            width: 44,
            height: 44,
            borderRadius: 13,
            background: 'rgba(79,172,221,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 20,
            lineHeight: 1,
          }}
        >
          {reason.emoji}
        </div>
        <h4
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: 17,
            fontWeight: 700,
            color: '#fff',
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          {reason.title}
        </h4>
      </div>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14,
          lineHeight: 1.65,
          color: 'rgba(209,221,227,0.7)',
          margin: 0,
        }}
      >
        {reason.desc}
      </p>
    </div>
  )
}
