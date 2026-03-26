import { useNavigate } from "react-router-dom";
import FadeIn from "./FadeIn";

export default function CtaSection({ cta2, lang }) {
  const navigate = useNavigate();
  return (
    <section className="cta-band">
      {/* Decorative rings */}
      <div className="ring" style={{ width: 500, height: 500, borderColor: "rgba(59,130,246,0.07)" }} />
      <div className="ring" style={{ width: 800, height: 800, borderColor: "rgba(59,130,246,0.04)" }} />
      <div className="ring" style={{ width: 1100, height: 1100, borderColor: "rgba(59,130,246,0.025)" }} />
      <div style={{
        position: "absolute",
        width: 500, height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle,rgba(59,130,246,0.12),transparent 65%)",
        top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        pointerEvents: "none",
      }} />

      <FadeIn style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 660, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(28px,4.5vw,54px)",
            fontWeight: 900,
            letterSpacing: "-0.045em",
            lineHeight: 1.04,
            marginBottom: 16,
          }}>
            {cta2.h}
          </h2>
          <p style={{
            color: "#2c4060", fontSize: 16.5, lineHeight: 1.78,
            marginBottom: 42, maxWidth: 500, margin: "0 auto 42px",
          }}>
            {cta2.s}
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <button className="btn-primary" style={{ fontSize: 16, padding: "18px 42px", borderRadius: 16 }}>
              {cta2.btn}
            </button>
            <button className="btn-outline" style={{ fontSize: 15, padding: "18px 32px", borderRadius: 16 }} onClick={() => navigate("/RisDrivingSchool/packages")}>
              {lang === "en" ? "View Packages →" : "Pakketten bekijken →"}
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}