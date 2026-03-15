import { useState, useEffect, useRef } from "react";

const T = {
  en: {
    nav: { emergency: "Emergency Course", packages: "Driving Packages", locations: "Locations", about: "About Us", bookTrial: "Book Trial Lesson" },
    banner: ["🏆 45,824 graduates", "⚡ Start tomorrow", "💳 Pay with Klarna", "🎯 98% pass rate", "🎁 Up to €400 off"],
    hero: {
      eyebrow: "★★★★★  Rated Excellent · 1,200+ Reviews",
      h1a: "Drive with",
      h1b: "Confidence.",
      h1c: "Pay Later.",
      sub: "The Netherlands' most trusted driving school. Start tomorrow, pay in installments — your license is closer than you think.",
      cta: "Book Free Trial →",
      ctaSub: "No obligation. No upfront payment.",
    },
    card: {
      tag: "LIMITED OFFER",
      tagSub: "Valid until 31 May 2026",
      h: "Up to €400 off",
      hSub: "your lesson package",
      perks: ["Start immediately, pay afterwards", "Free trial lesson, zero obligation", "Re-exam guarantee worth €350", "€6 discount on every lesson"],
      fTitle: "Schedule Your Trial Lesson",
      zip: "Your postcode",
      date: "Pick a date",
      timePh: "Preferred time",
      times: ["Morning · 8:00–12:00", "Afternoon · 12:00–17:00", "Evening · 17:00–20:00"],
      btn: "Check Availability →",
      note: "Enter postcode + date to see open slots.",
      successTitle: "You're all set! 🎉",
      successSub: "We'll send confirmation details shortly.",
    },
    stats: [
      { n: "45K+", l: "Graduates" }, { n: "98%", l: "Pass Rate" }, { n: "€6", l: "Off Every Lesson" }, { n: "1200+", l: "5-Star Reviews" },
    ],
    features: {
      title: "Everything you need to pass first time",
      items: [
        { icon: "🚘", t: "Brand-New Vehicles", d: "Dual-control, air-conditioned cars that keep you safe and focused." },
        { icon: "🎓", t: "Certified Instructors", d: "Patient, professional instructors who adapt to your learning pace." },
        { icon: "🗓️", t: "7-Day Scheduling", d: "Morning, afternoon or evening — book around your busy life." },
        { icon: "💸", t: "Interest-Free Pay", d: "Klarna installments with zero interest. Start now, pay as you go." },
        { icon: "🛡️", t: "Re-Exam Guarantee", d: "Don't pass first time? We cover your re-exam worth €350." },
        { icon: "📍", t: "Nationwide Coverage", d: "Instructors across the Netherlands ready to come to you." },
      ],
    },
    cta2: { h: "Ready to start your journey?", s: "Join over 45,000 graduates who trusted FIS Driving School.", btn: "Get Started Today →" },
    footer: { tag: "Your journey starts here.", links: ["Privacy", "Terms", "Cookies"], copy: "© 2026 FIS Driving School · All rights reserved" },
  },
  nl: {
    nav: { emergency: "Spoedcursus", packages: "Rijpakketten", locations: "Locaties", about: "Over Ons", bookTrial: "Proefles Boeken" },
    banner: ["🏆 45.824 geslaagden", "⚡ Morgen beginnen", "💳 Betalen met Klarna", "🎯 98% slagingspercentage", "🎁 Tot €400 korting"],
    hero: {
      eyebrow: "★★★★★  Uitstekend beoordeeld · 1.200+ reviews",
      h1a: "Rijd met",
      h1b: "Zelfvertrouwen.",
      h1c: "Betaal Later.",
      sub: "De meest vertrouwde rijschool van Nederland. Begin morgen, betaal in termijnen — uw rijbewijs is dichterbij dan u denkt.",
      cta: "Gratis Proefles →",
      ctaSub: "Vrijblijvend. Geen aanbetaling.",
    },
    card: {
      tag: "BEPERKT AANBOD",
      tagSub: "Geldig tot 31 mei 2026",
      h: "Tot €400 korting",
      hSub: "op uw lespakket",
      perks: ["Direct beginnen, achteraf betalen", "Proefles geheel vrijblijvend", "Herexamengarantie twv. €350", "€6 korting op elke les"],
      fTitle: "Plan uw proefles",
      zip: "Uw postcode",
      date: "Kies een datum",
      timePh: "Voorkeurstijd",
      times: ["Ochtend · 8:00–12:00", "Middag · 12:00–17:00", "Avond · 17:00–20:00"],
      btn: "Beschikbaarheid tonen →",
      note: "Voer postcode + datum in om tijdsloten te zien.",
      successTitle: "Gelukt! 🎉",
      successSub: "We sturen snel een bevestiging.",
    },
    stats: [
      { n: "45K+", l: "Geslaagden" }, { n: "98%", l: "Slagingspercentage" }, { n: "€6", l: "Korting per les" }, { n: "1200+", l: "5-Ster reviews" },
    ],
    features: {
      title: "Alles wat u nodig heeft om de eerste keer te slagen",
      items: [
        { icon: "🚘", t: "Nieuwe Voertuigen", d: "Rijschoolauto's met dubbele bediening voor maximale veiligheid." },
        { icon: "🎓", t: "Gecertificeerde Instructeurs", d: "Geduldig en professioneel, aangepast aan uw leertempo." },
        { icon: "🗓️", t: "7 Dagen Beschikbaar", d: "Ochtend, middag of avond — wij passen ons aan uw schema aan." },
        { icon: "💸", t: "Renteloos Betalen", d: "Klarna termijnen zonder rente. Begin nu, betaal later." },
        { icon: "🛡️", t: "Herexamengarantie", d: "Niet geslaagd? Wij betalen uw herexamen t.w.v. €350." },
        { icon: "📍", t: "Landelijke Dekking", d: "Instructeurs door heel Nederland, ook bij u in de buurt." },
      ],
    },
    cta2: { h: "Klaar om te beginnen?", s: "Sluit u aan bij meer dan 45.000 geslaagden die FIS Rijschool vertrouwden.", btn: "Begin Vandaag →" },
    footer: { tag: "Uw reis begint hier.", links: ["Privacy", "Voorwaarden", "Cookies"], copy: "© 2026 FIS Rijschool · Alle rechten voorbehouden" },
  },
};

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.75s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.75s cubic-bezier(.16,1,.3,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

export default function FisDrivingSchool() {
  const [lang, setLang] = useState("en");
  const [scrolled, setScrolled] = useState(false);
  const [zip, setZip] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [done, setDone] = useState(false);

  const t = T[lang];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif", background: "#03050f", color: "#e8eeff", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        @keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:none; } }
        @keyframes marquee { to { transform: translateX(-50%); } }
        @keyframes pulse-dot { 0%,100% { opacity:1; box-shadow:0 0 6px #4f8ef7; } 50% { opacity:0.4; box-shadow:0 0 2px #4f8ef7; } }
        @keyframes float { 0%,100% { transform:translateY(0px) rotate(0deg); } 50% { transform:translateY(-18px) rotate(3deg); } }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }

        .marquee-inner { display:flex; animation:marquee 25s linear infinite; width:max-content; }

        .nav-link { color:#c8d8f8; font-size:13.5px; font-weight:600; text-decoration:none; transition:color 0.2s; }
        .nav-link:hover { color:#7eb8ff; }

        .lang-wrap { display:flex; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07); border-radius:999px; padding:3px; gap:2px; }
        .lang-pill { border:none; cursor:pointer; font-family:inherit; font-weight:700; font-size:11px; letter-spacing:0.06em; padding:5px 13px; border-radius:999px; transition:all 0.25s; }
        .lang-on { background:linear-gradient(135deg,#1d4ed8,#4f8ef7); color:#fff; box-shadow:0 0 14px rgba(79,142,247,0.5); }
        .lang-off { background:transparent; color:#3a5070; }
        .lang-off:hover { color:#93c5fd; }

        .btn-primary {
          position:relative; overflow:hidden;
          background:linear-gradient(135deg,#1e40af 0%,#3b82f6 55%,#0ea5e9 100%);
          color:#fff; border:none; border-radius:14px;
          font-family:inherit; font-weight:800; font-size:15px; cursor:pointer;
          box-shadow: 0 8px 28px rgba(59,130,246,0.45), inset 0 1px 0 rgba(255,255,255,0.15);
          transition:transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%);
          background-size:200% 100%; animation:shimmer 2.5s infinite; border-radius:14px;
        }
        .btn-primary:hover { transform:translateY(-3px); box-shadow:0 18px 48px rgba(59,130,246,0.6), inset 0 1px 0 rgba(255,255,255,0.2); }
        .btn-primary:disabled { opacity:0.38; transform:none; cursor:not-allowed; box-shadow:none; }
        .btn-primary:disabled::after { display:none; }

        .btn-outline {
          background:transparent; border:1.5px solid rgba(59,130,246,0.35); color:#93c5fd;
          border-radius:14px; font-family:inherit; font-weight:700; font-size:15px; cursor:pointer;
          transition:all 0.25s;
        }
        .btn-outline:hover { background:rgba(59,130,246,0.1); border-color:#60a5fa; box-shadow:0 0 28px rgba(59,130,246,0.2); color:#bfdbfe; }

        .hero-wrap {
          position:relative; min-height:96vh; display:flex; align-items:center; overflow:hidden;
          background: radial-gradient(ellipse 100% 80% at 20% 60%, rgba(30,64,175,0.35) 0%, transparent 60%),
                      radial-gradient(ellipse 60% 60% at 80% 40%, rgba(14,165,233,0.12) 0%, transparent 60%),
                      #03050f;
        }
        .hero-photo { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center 40%; opacity:0.45; z-index:0; }
        .hero-overlay {
          position:absolute; inset:0; z-index:1;
          background:
            linear-gradient(108deg, rgba(3,5,15,0.92) 30%, rgba(3,5,15,0.55) 62%, rgba(3,5,15,0.15) 100%),
            linear-gradient(to bottom, transparent 50%, #03050f 100%);
        }
        .grid-lines {
          position:absolute; inset:0; z-index:1; pointer-events:none;
          background-image: linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
          background-size:72px 72px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%);
        }
        .blob { position:absolute; border-radius:50%; filter:blur(130px); pointer-events:none; z-index:1; }

        .eyebrow-pill {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.2);
          border-radius:999px; padding:7px 18px; font-size:12.5px; font-weight:600;
          color:#93b4f0; letter-spacing:0.02em;
        }
        .eyebrow-dot { width:7px; height:7px; border-radius:50%; background:#3b82f6; animation:pulse-dot 2s infinite; }

        .gradient-text {
          background:linear-gradient(130deg,#60a5fa 0%,#38bdf8 40%,#a78bfa 80%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }

        .bcard {
          background:rgba(7,14,40,0.9);
          border:1px solid rgba(59,130,246,0.18);
          border-radius:28px; padding:34px 28px;
          backdrop-filter:blur(40px);
          box-shadow:
            0 0 0 1px rgba(59,130,246,0.06),
            0 50px 100px rgba(0,0,0,0.65),
            inset 0 1px 0 rgba(255,255,255,0.03),
            0 0 60px rgba(30,64,175,0.1);
          position:relative; overflow:hidden;
        }
        .bcard-shine {
          position:absolute; top:0; left:10%; right:10%; height:1px;
          background:linear-gradient(90deg, transparent, rgba(96,165,250,0.7), transparent);
        }
        .bcard-glow {
          position:absolute; top:-80px; right:-80px; width:220px; height:220px; border-radius:50%;
          background:radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%); pointer-events:none;
        }

        .offer-tag {
          display:inline-flex; align-items:center; gap:6px;
          background:linear-gradient(135deg,#1e40af,#3b82f6,#0ea5e9);
          color:#fff; font-size:10px; font-weight:800; letter-spacing:0.1em;
          padding:5px 13px; border-radius:8px;
          box-shadow:0 4px 18px rgba(59,130,246,0.45);
        }

        .perk-row { display:flex; align-items:flex-start; gap:10px; margin-bottom:10px; }
        .perk-chk {
          width:20px; height:20px; min-width:20px; border-radius:7px;
          background:linear-gradient(135deg,#1e40af,#0ea5e9);
          display:flex; align-items:center; justify-content:center;
          font-size:10px; font-weight:900; color:#fff; margin-top:1px;
          box-shadow:0 0 12px rgba(59,130,246,0.5);
        }

        .inp {
          background:rgba(255,255,255,0.03); border:1px solid rgba(59,130,246,0.16);
          border-radius:12px; color:#d0e0ff; font-family:inherit; font-size:14px;
          padding:13px 16px; width:100%; outline:none;
          transition:border 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .inp::placeholder { color:#253560; }
        .inp:focus { border-color:rgba(59,130,246,0.55); box-shadow:0 0 0 3px rgba(59,130,246,0.1); background:rgba(255,255,255,0.04); }
        .inp option { background:#080f28; color:#c0d8ff; }

        .stat-band {
          display:grid; grid-template-columns:repeat(4,1fr);
          background:rgba(5,10,28,0.95);
          border-top:1px solid rgba(59,130,246,0.1);
          border-bottom:1px solid rgba(59,130,246,0.1);
        }
        .stat-cell {
          padding:44px 16px; text-align:center;
          border-right:1px solid rgba(59,130,246,0.08);
          transition:background 0.3s;
        }
        .stat-cell:last-child { border-right:none; }
        .stat-cell:hover { background:rgba(59,130,246,0.05); }
        .stat-n {
          font-size:46px; font-weight:900; letter-spacing:-0.045em; line-height:1;
          background:linear-gradient(130deg,#60a5fa,#38bdf8);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .stat-l { font-size:12px; color:#2a3d60; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; margin-top:7px; }

        .feat-card {
          background:rgba(7,13,36,0.65); border:1px solid rgba(59,130,246,0.09);
          border-radius:22px; padding:32px 26px;
          transition:all 0.35s cubic-bezier(.16,1,.3,1);
          position:relative; overflow:hidden;
        }
        .feat-card:hover {
          border-color:rgba(59,130,246,0.28); transform:translateY(-8px);
          box-shadow:0 24px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(59,130,246,0.15), 0 0 40px rgba(30,64,175,0.1);
        }
        .feat-card:hover .feat-icon-wrap { transform:scale(1.1); box-shadow:0 0 28px rgba(59,130,246,0.4); }
        .feat-icon-wrap {
          width:56px; height:56px; border-radius:16px;
          background:linear-gradient(135deg,rgba(30,64,175,0.3),rgba(14,165,233,0.15));
          border:1px solid rgba(59,130,246,0.2);
          display:flex; align-items:center; justify-content:center;
          font-size:26px; margin-bottom:18px;
          transition:transform 0.3s, box-shadow 0.3s;
        }

        .cta-band {
          position:relative; overflow:hidden; padding:108px 40px; text-align:center;
          background:
            radial-gradient(ellipse 70% 60% at 50% 50%, rgba(30,58,138,0.35) 0%, transparent 70%),
            linear-gradient(180deg,#040a20 0%,#060d24 100%);
          border-top:1px solid rgba(59,130,246,0.12); border-bottom:1px solid rgba(59,130,246,0.08);
        }
        .ring {
          position:absolute; border-radius:50%; border:1px solid;
          top:50%; left:50%; transform:translate(-50%,-50%); pointer-events:none;
        }

        .divider { height:1px; background:linear-gradient(90deg,transparent,rgba(59,130,246,0.18),transparent); }

        @media(max-width:900px){
          .hero-inner{flex-direction:column !important; padding:60px 20px !important;}
          .stat-band{grid-template-columns:repeat(2,1fr) !important;}
          .feat-grid{grid-template-columns:1fr !important;}
          .nav-links{display:none !important;}
          .nav-wrap{padding:0 20px !important;}
          .stat-cell{border-bottom:1px solid rgba(59,130,246,0.08);}
        }
      `}</style>

      {/* BANNER */}
      <div style={{ background: "linear-gradient(90deg,#0c1f6e,#1d4ed8,#0c1f6e)", padding: "9px 0", overflow: "hidden" }}>
        <div className="marquee-inner">
          {[...Array(3)].flatMap(() => t.banner).map((item, i) => (
            <span key={i} style={{ padding: "0 36px", fontSize: 12.5, fontWeight: 700, color: "#93c5fd", borderRight: "1px solid rgba(147,197,253,0.18)", whiteSpace: "nowrap" }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* NAV */}
      <nav className="nav-wrap" style={{
        position: "sticky", top: 0, zIndex: 200,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 44px", height: 70,
        background: scrolled ? "rgba(3,5,15,0.97)" : "rgba(5,10,28,0.85)",
        backdropFilter: "blur(24px)",
        boxShadow: scrolled ? "0 1px 0 rgba(59,130,246,0.15), 0 8px 32px rgba(0,0,0,0.5)" : "0 1px 0 rgba(59,130,246,0.08)",
        transition: "all 0.35s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#1e40af,#0ea5e9)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 20, color: "#fff", boxShadow: "0 0 22px rgba(59,130,246,0.55)" }}>F</div>
          <div>
            <div style={{ fontWeight: 900, fontSize: 16, letterSpacing: "-0.03em", lineHeight: 1 }}>FIS <span style={{ color: "#60a5fa" }}>Driving</span></div>
            <div style={{ fontSize: 9.5, color: "#1e3050", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>School</div>
          </div>
        </div>

        <div className="nav-links" style={{ display: "flex", gap: 30, alignItems: "center" }}>
          {[t.nav.emergency, t.nav.packages, t.nav.locations, t.nav.about].map((l, i) => <a key={i} className="nav-link" href="#">{l}</a>)}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="lang-wrap">
            <button className={`lang-pill ${lang === "en" ? "lang-on" : "lang-off"}`} onClick={() => setLang("en")}>EN</button>
            <button className={`lang-pill ${lang === "nl" ? "lang-on" : "lang-off"}`} onClick={() => setLang("nl")}>NL</button>
          </div>
          <button className="btn-primary" style={{ padding: "10px 22px", fontSize: 13, borderRadius: 11 }}>{t.nav.bookTrial}</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-wrap">
        <img className="hero-photo" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1800&auto=format&fit=crop&q=80" alt="Happy people driving" />
        <div className="hero-overlay" />
        <div className="grid-lines" />
        <div className="blob" style={{ width: 750, height: 750, background: "#1e3a8a", top: -250, left: -200, opacity: 0.4 }} />
        <div className="blob" style={{ width: 450, height: 450, background: "#0ea5e9", bottom: -60, right: "12%", opacity: 0.14 }} />
        <div className="blob" style={{ width: 280, height: 280, background: "#6366f1", top: "25%", left: "30%", opacity: 0.1 }} />

        <div className="hero-inner" style={{ position: "relative", zIndex: 2, maxWidth: 1240, margin: "0 auto", padding: "80px 44px", width: "100%", display: "flex", alignItems: "center", gap: 60 }}>
          {/* Left copy */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ opacity: 0, animation: "fadeUp 0.75s 0.05s cubic-bezier(.16,1,.3,1) forwards" }}>
              <div className="eyebrow-pill" style={{ marginBottom: 24 }}>
                <div className="eyebrow-dot" />
                {t.hero.eyebrow}
              </div>
            </div>
            <h1 style={{ fontSize: "clamp(42px,5.8vw,78px)", fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.045em", marginBottom: 22, opacity: 0, animation: "fadeUp 0.8s 0.18s cubic-bezier(.16,1,.3,1) forwards" }}>
              {t.hero.h1a}<br />
              <span className="gradient-text">{t.hero.h1b}</span><br />
              {t.hero.h1c}
            </h1>
            <p style={{ color: "#3a5278", fontSize: 16.5, lineHeight: 1.8, maxWidth: 460, marginBottom: 38, opacity: 0, animation: "fadeUp 0.8s 0.3s cubic-bezier(.16,1,.3,1) forwards" }}>
              {t.hero.sub}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", opacity: 0, animation: "fadeUp 0.8s 0.42s cubic-bezier(.16,1,.3,1) forwards" }}>
              <button className="btn-primary" style={{ fontSize: 16, padding: "17px 36px", borderRadius: 15 }}>{t.hero.cta}</button>
              <span style={{ color: "#253555", fontSize: 13, fontWeight: 500 }}>{t.hero.ctaSub}</span>
            </div>
          </div>

          {/* Booking card */}
          <div style={{ width: "min(445px,100%)", flexShrink: 0, opacity: 0, animation: "fadeUp 0.9s 0.28s cubic-bezier(.16,1,.3,1) forwards" }}>
            <div className="bcard">
              <div className="bcard-shine" />
              <div className="bcard-glow" />

              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, position: "relative", zIndex: 1 }}>
                <div className="offer-tag">✦ {t.card.tag}</div>
                <span style={{ color: "#253555", fontSize: 11.5, fontWeight: 500 }}>{t.card.tagSub}</span>
              </div>

              <h2 style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 4, position: "relative", zIndex: 1 }}>{t.card.h}</h2>
              <p className="gradient-text" style={{ fontSize: 15.5, fontWeight: 700, marginBottom: 22, position: "relative", zIndex: 1 }}>{t.card.hSub}</p>

              {t.card.perks.map((p, i) => (
                <div className="perk-row" key={i} style={{ position: "relative", zIndex: 1 }}>
                  <div className="perk-chk">✓</div>
                  <span style={{ fontSize: 13.5, color: "#607090", lineHeight: 1.5 }}>{p}</span>
                </div>
              ))}

              <div className="divider" style={{ margin: "22px 0", position: "relative", zIndex: 1 }} />

              <p style={{ fontWeight: 700, fontSize: 14.5, color: "#8aa0cc", marginBottom: 14, position: "relative", zIndex: 1 }}>{t.card.fTitle}</p>

              {done ? (
                <div style={{ background: "linear-gradient(135deg,rgba(30,64,175,0.18),rgba(14,165,233,0.08))", border: "1px solid rgba(59,130,246,0.25)", borderRadius: 18, padding: "32px 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
                  <div style={{ fontSize: 42, marginBottom: 10 }}>🎉</div>
                  <p className="gradient-text" style={{ fontWeight: 900, fontSize: 19, marginBottom: 6 }}>{t.card.successTitle}</p>
                  <p style={{ color: "#334970", fontSize: 13 }}>{t.card.successSub}</p>
                  <p style={{ color: "#253555", fontSize: 12, marginTop: 10 }}>{zip} · {date} · {time}</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 11, position: "relative", zIndex: 1 }}>
                  <input className="inp" placeholder={t.card.zip} value={zip} onChange={e => setZip(e.target.value)} />
                  <input type="date" className="inp" value={date} onChange={e => setDate(e.target.value)} min={new Date().toISOString().split("T")[0]} style={{ colorScheme: "dark" }} />
                  <select className="inp" value={time} onChange={e => setTime(e.target.value)}>
                    <option value="">{t.card.timePh}</option>
                    {t.card.times.map((o, i) => <option key={i} value={o}>{o}</option>)}
                  </select>
                  <button className="btn-primary" style={{ marginTop: 4, fontSize: 14.5, padding: "14px 20px" }} disabled={!zip || !date || !time} onClick={() => setDone(true)}>
                    {t.card.btn}
                  </button>
                  <p style={{ color: "#1e2e48", fontSize: 11.5, textAlign: "center" }}>{t.card.note}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 140, background: "linear-gradient(to bottom,transparent,#03050f)", zIndex: 2 }} />
      </section>

      {/* STATS */}
      <FadeIn>
        <div className="stat-band">
          {t.stats.map((s, i) => (
            <div className="stat-cell" key={i}>
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* FEATURES */}
      <section style={{ padding: "108px 44px", background: "#03050f" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 70 }}>
              <div className="eyebrow-pill" style={{ display: "inline-flex", marginBottom: 22 }}>
                <div className="eyebrow-dot" />
                {lang === "en" ? "Why students choose us" : "Waarom studenten ons kiezen"}
              </div>
              <h2 style={{ fontSize: "clamp(28px,4vw,50px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.06, maxWidth: 660, margin: "0 auto" }}>
                {t.features.title}
              </h2>
            </div>
          </FadeIn>

          <div className="feat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {t.features.items.map((f, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="feat-card">
                  <div className="feat-icon-wrap">{f.icon}</div>
                  <h3 style={{ fontSize: 16.5, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, color: "#c0d4f8" }}>{f.t}</h3>
                  <p style={{ color: "#2c4060", fontSize: 14, lineHeight: 1.8 }}>{f.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="cta-band">
        <div className="ring" style={{ width: 500, height: 500, borderColor: "rgba(59,130,246,0.07)" }} />
        <div className="ring" style={{ width: 800, height: 800, borderColor: "rgba(59,130,246,0.04)" }} />
        <div className="ring" style={{ width: 1100, height: 1100, borderColor: "rgba(59,130,246,0.025)" }} />
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(59,130,246,0.12),transparent 65%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />

        <FadeIn style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 660, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(28px,4.5vw,54px)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 1.04, marginBottom: 16 }}>
              {t.cta2.h}
            </h2>
            <p style={{ color: "#2c4060", fontSize: 16.5, lineHeight: 1.78, marginBottom: 42, maxWidth: 500, margin: "0 auto 42px" }}>
              {t.cta2.s}
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              <button className="btn-primary" style={{ fontSize: 16, padding: "18px 42px", borderRadius: 16 }}>{t.cta2.btn}</button>
              <button className="btn-outline" style={{ fontSize: 15, padding: "18px 32px", borderRadius: 16 }}>
                {lang === "en" ? "View Packages →" : "Pakketten bekijken →"}
              </button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#020409", borderTop: "1px solid rgba(59,130,246,0.07)", padding: "56px 44px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 28, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#1e40af,#0ea5e9)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 17, color: "#fff", boxShadow: "0 0 18px rgba(59,130,246,0.4)" }}>F</div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: 15.5, letterSpacing: "-0.03em" }}>FIS <span style={{ color: "#60a5fa" }}>Driving</span></div>
                  <div style={{ fontSize: 9, color: "#0f1e38", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>School</div>
                </div>
              </div>
              <p style={{ color: "#162035", fontSize: 13 }}>{t.footer.tag}</p>
            </div>
            <div style={{ display: "flex", gap: 30, flexWrap: "wrap", alignItems: "center" }}>
              {t.footer.links.map((l, i) => (
                <a key={i} href="#" style={{ color: "#162035", fontSize: 13, textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
                  onMouseOver={e => e.target.style.color = "#60a5fa"} onMouseOut={e => e.target.style.color = "#162035"}>
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div className="divider" />
          <p style={{ color: "#0d1628", fontSize: 12, textAlign: "center", marginTop: 24, fontWeight: 500 }}>{t.footer.copy}</p>
        </div>
      </footer>
    </div>
  );
}
