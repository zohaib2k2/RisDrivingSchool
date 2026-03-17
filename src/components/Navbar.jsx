import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/public/logos/logo_v1.png";

const NAV_LINKS = [
  { key: "emergency",   to: "/RisDrivingSchool/emergency"   },
  { key: "packages",    to: "/RisDrivingSchool/packages"    },
  { key: "locations",   to: "/RisDrivingSchool/locations"   },
  { key: "about",       to: "/RisDrivingSchool/about"       },
  { key: "calculator",  to: "/RisDrivingSchool/calculator"  },
];

function HamburgerIcon({ open }) {
  const bar = (top, rotate, opacity = 1) => (
    <span style={{
      display: "block", position: "absolute",
      height: 2, width: 22, background: "#e8eeff", borderRadius: 2,
      top, left: 0, opacity, transform: rotate,
      transition: "all 0.28s cubic-bezier(.4,0,.2,1)",
    }} />
  );
  return (
    <div style={{ position: "relative", width: 22, height: 16 }}>
      {bar(open ? 7 : 0,  open ? "rotate(45deg)"  : "none")}
      {bar(7,              "none",                   open ? 0 : 1)}
      {bar(open ? 7 : 14, open ? "rotate(-45deg)" : "none")}
    </div>
  );
}

export default function Navbar({ nav, lang, onLangChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile  { display: none; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
        }
        .mobile-dropdown {
          flex-direction: column;
          overflow: hidden;
          background: rgba(3,6,20,0.98);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }
        .nav-link:hover { color: #93c5fd !important; }
        .mobile-link:hover { background: rgba(59,130,246,0.08) !important; color: #93c5fd !important; }
      `}</style>

      <nav
        ref={menuRef}
        style={{
          position: "sticky", top: 0, zIndex: 300,
          background: scrolled ? "rgba(3,5,15,0.97)" : "rgba(5,10,28,0.88)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: scrolled
            ? "0 1px 0 rgba(59,130,246,0.15), 0 8px 32px rgba(0,0,0,0.5)"
            : "0 1px 0 rgba(59,130,246,0.08)",
          transition: "background 0.35s, box-shadow 0.35s",
        }}
      >
        {/* ── TOP BAR ───────────────────────────────────────────────────── */}
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px", height: 68,
        }}>

          {/* Logo */}
          <Link to="/RisDrivingSchool/" style={{
            display: "flex", alignItems: "center", gap: 10,
            textDecoration: "none", color: "inherit", flexShrink: 0,
          }}>
            <img
              src={logo}
              alt="FIS Driving School"
              style={{ width: 40, height: 40, borderRadius: 11, objectFit: "contain" }}
              onError={e => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
            <div style={{
              display: "none", width: 40, height: 40, borderRadius: 12,
              background: "linear-gradient(135deg,#1e40af,#0ea5e9)",
              alignItems: "center", justifyContent: "center",
              fontWeight: 900, fontSize: 20, color: "#fff",
              boxShadow: "0 0 20px rgba(59,130,246,0.5)",
            }}>F</div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 15.5, letterSpacing: "-0.03em", lineHeight: 1.15, color: "#e8eeff" }}>
                FIS <span style={{ color: "#60a5fa" }}>Driving</span>
              </div>
              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "#253555" }}>
                School
              </div>
            </div>
          </Link>

          {/* ── DESKTOP NAV LINKS ─────────────────────────────────────────── */}
          <div className="nav-desktop" style={{ alignItems: "center", gap: 26 }}>
            {NAV_LINKS.map(({ key, to }) => {
              const active = pathname === to;
              return (
                <Link key={key} to={to} className="nav-link" style={{
                  textDecoration: "none", fontSize: 13.5, fontWeight: 600,
                  color: active ? "#60a5fa" : "#8aa8cc",
                  borderBottom: active ? "2px solid #60a5fa" : "2px solid transparent",
                  paddingBottom: 2, transition: "color 0.2s, border-color 0.2s",
                  whiteSpace: "nowrap",
                }}>
                  {nav[key] ?? key}
                </Link>
              );
            })}
          </div>

          {/* ── DESKTOP RIGHT ─────────────────────────────────────────────── */}
          <div className="nav-desktop" style={{ alignItems: "center", gap: 10, flexShrink: 0 }}>
            <div className="lang-wrap">
              <button className={`lang-pill ${lang === "en" ? "lang-on" : "lang-off"}`} onClick={() => onLangChange("en")}>EN</button>
              <button className={`lang-pill ${lang === "nl" ? "lang-on" : "lang-off"}`} onClick={() => onLangChange("nl")}>NL</button>
            </div>
            <Link to="/RisDrivingSchool/locations">
              <button className="btn-primary" style={{ padding: "10px 18px", fontSize: 12.5, borderRadius: 10, whiteSpace: "nowrap" }}>
                {nav.bookTrial}
              </button>
            </Link>
            <Link to="/RisDrivingSchool/calculator">
              <button className="btn-outline" style={{ padding: "10px 16px", fontSize: 12.5, borderRadius: 10, whiteSpace: "nowrap" }}>
                💰 Calculator
              </button>
            </Link>
          </div>

          {/* ── MOBILE RIGHT (lang + hamburger) ─────────────────────────── */}
          <div className="nav-mobile" style={{ alignItems: "center", gap: 10 }}>
            <div className="lang-wrap">
              <button className={`lang-pill ${lang === "en" ? "lang-on" : "lang-off"}`} onClick={() => onLangChange("en")}>EN</button>
              <button className={`lang-pill ${lang === "nl" ? "lang-on" : "lang-off"}`} onClick={() => onLangChange("nl")}>NL</button>
            </div>
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              style={{
                width: 42, height: 42, borderRadius: 11,
                background: menuOpen ? "rgba(59,130,246,0.18)" : "rgba(255,255,255,0.05)",
                border: "1px solid rgba(59,130,246,0.28)",
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s", flexShrink: 0,
              }}
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
        </div>

        {/* ── MOBILE DROPDOWN ───────────────────────────────────────────── */}
        <div
          className="mobile-dropdown nav-mobile"
          style={{
            maxHeight: menuOpen ? "540px" : "0px",
            opacity: menuOpen ? 1 : 0,
            transition: "max-height 0.38s cubic-bezier(.4,0,.2,1), opacity 0.25s ease",
            borderTop: menuOpen ? "1px solid rgba(59,130,246,0.1)" : "1px solid transparent",
          }}
        >
          <div style={{ padding: "10px 16px 22px", display: "flex", flexDirection: "column", gap: 3, width: "100%" }}>

            {/* Nav links */}
            {NAV_LINKS.map(({ key, to }, i) => {
              const active = pathname === to;
              return (
                <Link
                  key={key}
                  to={to}
                  className="mobile-link"
                  style={{
                    textDecoration: "none",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "13px 14px", borderRadius: 12,
                    background: active ? "rgba(59,130,246,0.12)" : "transparent",
                    border: `1px solid ${active ? "rgba(59,130,246,0.25)" : "transparent"}`,
                    color: active ? "#60a5fa" : "#b8cce8",
                    fontSize: 15, fontWeight: active ? 700 : 500,
                    transition: "background 0.2s, color 0.2s",
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateX(0)" : "translateX(-10px)",
                    transitionDelay: menuOpen ? `${0.06 + i * 0.04}s` : "0s",
                  }}
                >
                  <span>{nav[key] ?? key}</span>
                  {active && (
                    <span style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: "#60a5fa",
                      boxShadow: "0 0 6px rgba(96,165,250,0.8)",
                    }} />
                  )}
                </Link>
              );
            })}

            {/* Divider */}
            <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(59,130,246,0.15),transparent)", margin: "10px 0" }} />

            {/* CTA: Book Trial */}
            <Link to="/RisDrivingSchool/locations" style={{ textDecoration: "none" }}>
              <button className="btn-primary" style={{
                width: "100%", fontSize: 14, padding: "13px 20px", borderRadius: 12,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(10px)",
                transition: `opacity 0.3s ${0.06 + NAV_LINKS.length * 0.04 + 0.04}s, transform 0.3s ${0.06 + NAV_LINKS.length * 0.04 + 0.04}s`,
              }}>
                {nav.bookTrial}
              </button>
            </Link>

            {/* CTA: Calculator */}
            <Link to="/RisDrivingSchool/calculator" style={{ textDecoration: "none", marginTop: 8 }}>
              <button className="btn-outline" style={{
                width: "100%", fontSize: 13.5, padding: "11px 20px", borderRadius: 12,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(10px)",
                transition: `opacity 0.3s ${0.06 + NAV_LINKS.length * 0.04 + 0.08}s, transform 0.3s ${0.06 + NAV_LINKS.length * 0.04 + 0.08}s`,
              }}>
                💰 {lang === "en" ? "Lesson Cost Calculator" : "Leskosten berekenen"}
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}