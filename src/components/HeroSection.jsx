import BookingCard from "./BookingCard";

export default function HeroSection({ hero, card }) {
  return (
    <section className="hero-wrap">

      {/* ── 3D Model replaces static background image ─────────────────── */}
      <div style={{
        position: "absolute", inset: 0,
        zIndex: 0, overflow: "hidden",
      }}>
        <iframe
          title="2021 Volkswagen Golf GTI"
          src="https://sketchfab.com/models/cb1187bfbee447b394759315bcbcbb4d/embed?autostart=1&ui_infos=0&ui_controls=1&ui_stop=0&transparent=0&bg_color=03050f"
          frameBorder="0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            pointerEvents: "auto",
          }}
        />
        {/* Gradient vignette so text stays readable over the 3D scene */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(100deg, rgba(3,5,15,0.82) 0%, rgba(3,5,15,0.45) 55%, rgba(3,5,15,0.2) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }} />
      </div>

      <div className="grid-lines" />

      {/* Background blobs */}
      <div className="blob" style={{ width: 750, height: 750, background: "#1e3a8a", top: -250, left: -200, opacity: 0.3 }} />
      <div className="blob" style={{ width: 450, height: 450, background: "#0ea5e9", bottom: -60, right: "12%", opacity: 0.1 }} />
      <div className="blob" style={{ width: 280, height: 280, background: "#6366f1", top: "25%", left: "30%", opacity: 0.07 }} />

      <div className="hero-inner" style={{
        position: "relative", zIndex: 2,
        maxWidth: 1240, margin: "0 auto",
        padding: "80px 44px", width: "100%",
        display: "flex", alignItems: "center", gap: 60,
      }}>
        {/* Left copy */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ opacity: 0, animation: "fadeUp 0.75s 0.05s cubic-bezier(.16,1,.3,1) forwards" }}>
            <div className="eyebrow-pill" style={{ marginBottom: 24 }}>
              <div className="eyebrow-dot" />
              {hero.eyebrow}
            </div>
          </div>

          <h1 style={{
            fontSize: "clamp(42px,5.8vw,78px)",
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: "-0.045em",
            marginBottom: 22,
            opacity: 0,
            animation: "fadeUp 0.8s 0.18s cubic-bezier(.16,1,.3,1) forwards",
          }}>
            {hero.h1a}<br />
            <span className="gradient-text">{hero.h1b}</span><br />
            {hero.h1c}
          </h1>

          <p style={{
            color: "#b8cce8", fontSize: 16.5, lineHeight: 1.8,
            maxWidth: 460, marginBottom: 38,
            opacity: 0,
            animation: "fadeUp 0.8s 0.3s cubic-bezier(.16,1,.3,1) forwards",
          }}>
            {hero.sub}
          </p>

          <div style={{
            display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap",
            opacity: 0,
            animation: "fadeUp 0.8s 0.42s cubic-bezier(.16,1,.3,1) forwards",
          }}>
            <button className="btn-primary" style={{ fontSize: 16, padding: "17px 36px", borderRadius: 15 }}>
              {hero.cta}
            </button>
            <span style={{ color: "#6a8aaa", fontSize: 13, fontWeight: 500 }}>{hero.ctaSub}</span>
          </div>

          {/* Sketchfab credit — small and unobtrusive */}
          <p style={{
            marginTop: 28, fontSize: 11, color: "#253555", fontWeight: 500,
            opacity: 0, animation: "fadeUp 0.8s 0.55s cubic-bezier(.16,1,.3,1) forwards",
          }}>
            3D model:{" "}
            <a
              href="https://sketchfab.com/3d-models/2021-volkswagen-golf-gti-cb1187bfbee447b394759315bcbcbb4d"
              target="_blank" rel="nofollow noreferrer"
              style={{ color: "#1CAAD9", fontWeight: 700 }}
            >
              2021 VW Golf GTI
            </a>{" "}by OUTPISTON on Sketchfab
          </p>
        </div>

        {/* Booking card */}
        <div style={{ width: "min(445px,100%)", flexShrink: 0, opacity: 0, animation: "fadeUp 0.9s 0.28s cubic-bezier(.16,1,.3,1) forwards" }}>
          <BookingCard card={card} />
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 140,
        background: "linear-gradient(to bottom,transparent,#03050f)",
        zIndex: 2,
        pointerEvents: "none",
      }} />
    </section>
  );
}