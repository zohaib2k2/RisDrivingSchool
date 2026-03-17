import FadeIn from "./FadeIn";

export default function FeaturesSection({ features, lang }) {
  return (
    <section style={{ padding: "108px 44px", background: "#03050f" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 70 }}>
            <div className="eyebrow-pill" style={{ display: "inline-flex", marginBottom: 22 }}>
              <div className="eyebrow-dot" />
              {lang === "en" ? "Why students choose us" : "Waarom studenten ons kiezen"}
            </div>
            <h2 style={{
              fontSize: "clamp(28px,4vw,50px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.06,
              maxWidth: 660,
              margin: "0 auto",
            }}>
              {features.title}
            </h2>
          </div>
        </FadeIn>

        <div className="feat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {features.items.map((f, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="feat-card">
                <div className="feat-icon-wrap">{f.icon}</div>
                <h3 style={{ fontSize: 16.5, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, color: "#c0d4f8" }}>
                  {f.t}
                </h3>
                <p style={{ color: "#2c4060", fontSize: 14, lineHeight: 1.8 }}>{f.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}