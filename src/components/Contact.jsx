import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const WHATSAPP_NUMBER = "6285335377706";
const WHATSAPP_MESSAGE =
  "Halo Team Insight Lab, saya ingin konsultasi mengenai kebutuhan data/software untuk bisnis saya.";

const inputStyle = {
  width: "100%",
  fontFamily: "'Inter', sans-serif",
  fontSize: 15,
  color: "#fff",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 12,
  padding: "14px 18px",
  outline: "none",
  transition: "border-color 0.2s, background 0.2s",
};

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section
      id="kontak"
      style={{
        padding: "100px 24px",
        background:
          "linear-gradient(150deg, #0d1b2e 0%, #1a2d4a 50%, #0d1b2e 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(79,172,221,0.15) 0%, transparent 60%)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(79,172,221,0.15)",
            border: "1px solid rgba(79,172,221,0.3)",
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#57bfe5",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: "#57bfe5",
              letterSpacing: "0.06em",
            }}
          >
            KONSULTASI GRATIS
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(32px, 5vw, 58px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#fff",
            margin: "0 0 20px",
            lineHeight: 1.08,
          }}
        >
          Siap Mengubah Datamu
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #57bfe5 0%, #4facdd 50%, #51a3d6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Menjadi Keunggulan Kompetitif?
          </span>
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 17,
            lineHeight: 1.7,
            color: "rgba(209,221,227,0.8)",
            margin: "0 0 40px",
            maxWidth: 560,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Mulai perjalanan transformasi datamu hari ini. Konsultasikan kebutuhan
          bisnismu dengan tim kami, dan mari kita cari tahu bersama solusi yang
          paling tepat untukmu.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            textAlign: "left",
          }}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Nama"
            required
            style={inputStyle}
          />
          <input
            type="tel"
            name="phone_number"
            placeholder="Nomor Telepon"
            required
            pattern="\+?[0-9\s-]{8,16}"
            title="Masukkan nomor telepon yang valid (8-16 digit, boleh diawali +)"
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Ceritakan kebutuhan proyekmu"
            required
            rows={5}
            style={{
              ...inputStyle,
              resize: "vertical",
              fontFamily: "'Inter', sans-serif",
            }}
          />

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              fontWeight: 600,
              color: "#fff",
              border: "none",
              cursor: status === "sending" ? "not-allowed" : "pointer",
              padding: "16px 40px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #4facdd 0%, #51a3d6 100%)",
              boxShadow: "0 4px 24px rgba(79,172,221,0.4)",
              opacity: status === "sending" ? 0.7 : 1,
              transition:
                "transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s, opacity 0.2s",
              marginTop: 8,
            }}
            onMouseEnter={(e) => {
              if (status === "sending") return;
              e.target.style.transform = "translateY(-3px) scale(1.02)";
              e.target.style.boxShadow = "0 10px 32px rgba(79,172,221,0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "0 4px 24px rgba(79,172,221,0.4)";
            }}
          >
            {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
          </button>

          {status === "success" && (
            <p
              style={{
                color: "#57bfe5",
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                textAlign: "center",
                margin: 0,
              }}
            >
              Pesan berhasil terkirim. Tim kami akan segera menghubungi kamu.
            </p>
          )}
          {status === "error" && (
            <p
              style={{
                color: "#e57171",
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                textAlign: "center",
                margin: 0,
              }}
            >
              Gagal mengirim pesan. Silakan coba lagi.
            </p>
          )}
        </form>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginTop: 32,
            background: "rgba(37,211,102,0.12)",
            border: "1px solid rgba(37,211,102,0.35)",
            borderRadius: 100,
            padding: "8px 18px",
            textDecoration: "none",
            transition: "transform 0.2s, background 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.background = "rgba(37,211,102,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "rgba(37,211,102,0.12)";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.85L2.05 22l5.36-1.4a9.9 9.9 0 0 0 4.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.18.83.85-3.1-.2-.32a8.22 8.22 0 0 1-1.26-4.4c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.31-8.2 8.31zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43a1.65 1.65 0 0 0 .25-.42c.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.92.92 0 0 0-.67.31c-.23.25-.87.85-.87 2.08s.9 2.42 1.02 2.58c.13.17 1.77 2.7 4.28 3.79.6.26 1.06.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z" />
          </svg>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "#57e08a",
            }}
          >
            Chat via WhatsApp
          </span>
        </a>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        #kontak input::placeholder,
        #kontak textarea::placeholder {
          color: rgba(209,221,227,0.5);
        }
        #kontak input:focus,
        #kontak textarea:focus {
          border-color: rgba(79,172,221,0.6) !important;
          background: rgba(255,255,255,0.09) !important;
        }
      `}</style>
    </section>
  );
}
