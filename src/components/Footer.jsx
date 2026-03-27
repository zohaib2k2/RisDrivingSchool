import logo from "/public/logos/new_favicon_logo.png";

export default function Footer({ footer }) {
  return (
    <footer style={{
      background: "#020409",
      borderTop: "1px solid rgba(59,130,246,0.07)",
      padding: "56px 44px 32px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 28,
          marginBottom: 40,
        }}>
          {/* Logo + tagline */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <img src={logo} alt="FIS logo" style={{ width: 36, height: 36, borderRadius: 10, objectFit: "cover", boxShadow: "0 0 18px rgba(59,130,246,0.4)" }} />
              <div>
                <div style={{ fontWeight: 900, fontSize: 15.5, letterSpacing: "-0.03em" }}>
                  FIS <span style={{ color: "#fffced" }}>Driving</span>
                </div>
                <div style={{ fontSize: 9, color: "#fffced", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  School
                </div>
              </div>
            </div>
            <p style={{ color: "#37deff", fontSize: 13 }}>{footer.tag}</p>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 30, flexWrap: "wrap", alignItems: "center" }}>
            {footer.links.map((l, i) => (
              <a
                key={i}
                href="#"
                style={{ color: "#e8eeff", fontSize: 13, textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
                onMouseOver={e => e.target.style.color = "#60a5fa"}
                onMouseOut={e => e.target.style.color = "#e8eeff"}
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="divider" />
        <p style={{ color: "#0d1628", fontSize: 12, textAlign: "center", marginTop: 24, fontWeight: 500 }}>
          {footer.copy}
        </p>
      </div>
    </footer>
  );
}