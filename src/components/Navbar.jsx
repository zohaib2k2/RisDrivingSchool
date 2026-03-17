import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { key: "emergency", to: "/RisDrivingSchool/emergency" },
  { key: "packages",  to: "/RisDrivingSchool/packages"  },
  { key: "locations", to: "/RisDrivingSchool/locations" },
  { key: "about",     to: "/RisDrivingSchool/about"     },
  { key: "calculator", to: "/RisDrivingSchool/calculator" },
];

export default function Navbar({ nav, lang, onLangChange }) {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="nav-wrap"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 44px",
        height: 70,
        background: scrolled ? "rgba(3,5,15,0.97)" : "rgba(5,10,28,0.85)",
        backdropFilter: "blur(24px)",
        boxShadow: scrolled
          ? "0 1px 0 rgba(59,130,246,0.15), 0 8px 32px rgba(0,0,0,0.5)"
          : "0 1px 0 rgba(59,130,246,0.08)",
        transition: "all 0.35s",
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "inherit" }}>
        <div style={{
          width: 40, height: 40, borderRadius: 12,
          background: "linear-gradient(135deg,#1e40af,#0ea5e9)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 900, fontSize: 20, color: "#fff",
          boxShadow: "0 0 22px rgba(59,130,246,0.55)",
        }}>F</div>
        <div>
          <div style={{ fontWeight: 900, fontSize: 16, letterSpacing: "-0.03em", lineHeight: 1 }}>
            FIS <span style={{ color: "#60a5fa" }}>Driving</span>
          </div>
          <div style={{ fontSize: 9.5, color: "#1e3050", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            School
          </div>
        </div>
      </Link>

      {/* Nav links */}
      <div className="nav-links" style={{ display: "flex", gap: 30, alignItems: "center" }}>
        {NAV_LINKS.map(({ key, to }) => {
          const isActive = pathname === to;
          return (
            <Link
              key={key}
              to={to}
              className="nav-link"
              style={{
                textDecoration: "none",
                color: isActive ? "#60a5fa" : undefined,
                borderBottom: isActive ? "2px solid #60a5fa" : "2px solid transparent",
                paddingBottom: 2,
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              {nav[key]}
            </Link>
          );
        })}
      </div>

      {/* Lang switcher + CTA */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div className="lang-wrap">
          <button
            className={`lang-pill ${lang === "en" ? "lang-on" : "lang-off"}`}
            onClick={() => onLangChange("en")}
          >EN</button>
          <button
            className={`lang-pill ${lang === "nl" ? "lang-on" : "lang-off"}`}
            onClick={() => onLangChange("nl")}
          >NL</button>
        </div>
        <Link to="/locations">
          <button className="btn-primary" style={{ padding: "10px 22px", fontSize: 13, borderRadius: 11 }}>
            {nav.bookTrial}
          </button>
        </Link>
        <Link to="/RisDrivingSchool/calculator">
          <button className="btn-primary" style={{ padding: "10px 22px", fontSize: 13, borderRadius: 11 }}>
            Lesson Cost Calculator
          </button>
        </Link>
      </div>
    </nav>
  );
}