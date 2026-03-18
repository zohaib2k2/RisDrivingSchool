import BookingCard from "./BookingCard";

export default function HeroSection({ hero, card }) {
  return (
    <section className="hero-wrap">
      <img
        className="hero-photo"
        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1800&auto=format&fit=crop&q=80"
        alt="Happy people driving"
      />
      <div className="hero-overlay" />
      <div className="grid-lines" />

      {/* Background blobs */}
      <div className="blob" style={{ width: 750, height: 750, background: "#1e3a8a", top: -250, left: -200, opacity: 0.4 }} />
      <div className="blob" style={{ width: 450, height: 450, background: "#0ea5e9", bottom: -60, right: "12%", opacity: 0.14 }} />
      <div className="blob" style={{ width: 280, height: 280, background: "#6366f1", top: "25%", left: "30%", opacity: 0.1 }} />

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
            color: "#3a5278", fontSize: 16.5, lineHeight: 1.8,
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
            <span style={{ color: "#253555", fontSize: 13, fontWeight: 500 }}>{hero.ctaSub}</span>
          </div>
        </div>

        {/* Booking card */}
        <div style={{ width: "min(445px,100%)", flexShrink: 0, opacity: 0, animation: "fadeUp 0.9s 0.28s cubic-bezier(.16,1,.3,1) forwards" }}>
          <BookingCard card={card} />
        </div>
      </div>
      {/* Navbar button */}
      
      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 140,
        background: "linear-gradient(to bottom,transparent,#03050f)",
        zIndex: 2,
      }} />
    </section>
  );
}