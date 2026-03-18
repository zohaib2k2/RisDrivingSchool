import { useState } from "react";
import { T } from "../constants/translation";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import WhatsAppButton from "../components/WhatsAppButton";

// ── Text tokens ───────────────────────────────────────────────────────────────
const H   = "#f0f4ff";
const B   = "#b8cce8";
const DIM = "#6a8aaa";

// ── Bilingual copy ────────────────────────────────────────────────────────────
const PAGE_T = {
  en: {
    eyebrow: "Transparent pricing, zero surprises",
    heroTitle: "Driving",
    heroAccent: "Packages",
    heroSub: "Choose the package that fits your pace and budget. Every package includes a free trial lesson, re-exam guarantee, and flexible Klarna payment.",
    mostChosen: "⭐ Most chosen",
    discount: "OFF",
    wasLabel: "was",
    lessons: "driving lessons",
    reExam: "Free re-exam guarantee worth €350",
    crashToggle: "Add crash course",
    crashAlways: "Always a crash course",
    planBtn: "Plan your trial lesson →",
    moreInfo: "More info",
    automatic: "Automatic",
    manual: "Manual",
    crashCourseLabel: "Crash course",
    trialTitle: "How does it work?",
    trialSub: "At FIS Driving School, every journey starts with a free trial lesson. Here's what to expect.",
    steps: [
      {
        n: "1",
        title: "Plan your trial lesson",
        body: "Check available dates and times near you using our booking tool. Pick a slot that suits your schedule — morning, afternoon, or evening.",
      },
      {
        n: "2",
        title: "Meet your instructor",
        body: "Your certified instructor will pick you up from your door. They'll assess your current level and tailor the lesson plan to you from day one.",
      },
      {
        n: "3",
        title: "Choose your package",
        body: "After the trial, you and your instructor decide together which package fits best. Pay in easy Klarna instalments — no upfront stress.",
      },
      {
        n: "4",
        title: "Pass your exam",
        body: "With consistent lessons on your local roads and our 98% pass rate behind you, your licence is closer than you think.",
      },
    ],
    packages: [
      {
        id: "basic",
        badge: "€190 OFF!",
        name: "Basic Package",
        price: 795,
        originalPrice: 985,
        crashPrice: 175,
        crashOriginal: 975,
        lessons: 15,
        isMostChosen: false,
        features: ["15 driving lessons" ],
      },
      {
        id: "emergency",
        badge: "€190 OFF!",
        name: "Emergency Package",
        price: 995,
        originalPrice: 1185,
        crashPrice: 1100,
        crashOriginal: 1290,
        lessons: 15,
        isMostChosen: true,
        alwaysCrash: true,
        features: ["15 driving lessons",  "Priority scheduling", "Flexible Klarna payment"],
      },
      {
        id: "advanced",
        badge: "€250 OFF!",
        name: "Advanced",
        price: 1325,
        originalPrice: 1575,
        crashPrice: 1550,
        crashOriginal: 1800,
        lessons: 25,
        isMostChosen: false,
        features: ["25 driving lessons",  "Flexible Klarna payment"],
      },
      {
        id: "premium",
        badge: "€310 OFF!",
        name: "Premium",
        price: 1855,
        originalPrice: 2165,
        crashPrice: 2300,
        crashOriginal: 2610,
        lessons: 35,
        isMostChosen: false,
        features: ["35 driving lessons","Dedicated instructor", "Flexible Klarna payment"],
      },
    ],
  },
  nl: {
    eyebrow: "Transparante prijzen, geen verrassingen",
    heroTitle: "Rij-",
    heroAccent: "pakketten",
    heroSub: "Kies het pakket dat bij uw tempo en budget past. Elk pakket bevat een gratis proefles, herexamengarantie en flexibele Klarna-betaling.",
    mostChosen: "⭐ Meest gekozen",
    discount: "KORTING",
    wasLabel: "was",
    lessons: "rijlessen",
    reExam: "Gratis herexamengarantie t.w.v. €350",
    crashToggle: "Spoedcursus toevoegen",
    crashAlways: "Altijd een spoedcursus",
    planBtn: "Plan uw proefles →",
    moreInfo: "Meer info",
    automatic: "Automaat",
    manual: "Handgeschakeld",
    crashCourseLabel: "Spoedcursus",
    trialTitle: "Hoe werkt het?",
    trialSub: "Bij FIS Rijschool begint elke reis met een gratis proefles. Dit kunt u verwachten.",
    steps: [
      {
        n: "1",
        title: "Plan uw proefles",
        body: "Bekijk beschikbare datums en tijden bij u in de buurt via ons boekingssysteem. Kies een moment dat past bij uw agenda — ochtend, middag of avond.",
      },
      {
        n: "2",
        title: "Maak kennis met uw instructeur",
        body: "Uw gecertificeerde instructeur haalt u op aan de deur. Hij of zij beoordeelt uw huidige niveau en stelt vanaf dag één een lesplan op maat samen.",
      },
      {
        n: "3",
        title: "Kies uw pakket",
        body: "Na de proefles beslist u samen met uw instructeur welk pakket het beste past. Betaal in gemakkelijke Klarna-termijnen — geen stress vooraf.",
      },
      {
        n: "4",
        title: "Slaag voor uw examen",
        body: "Met regelmatige lessen op uw eigen wegen en ons slagingspercentage van 98% is uw rijbewijs dichterbij dan u denkt.",
      },
    ],
    packages: [
      {
        id: "basic",
        badge: "€990 KORTING!",
        name: "Basispakket",
        price: 795,
        originalPrice: 985,
        crashPrice: 975,
        crashOriginal: 975,
        lessons: 15,
        isMostChosen: false,
        features: ["15 rijlessen"]  
      },
      {
        id: "emergency",
        badge: "€1190 KORTING!",
        name: "Spoedpakket",
        price: 1100,
        originalPrice: 1185,
        crashPrice: 1100,
        crashOriginal: 1290,
        lessons: 15,
        isMostChosen: true,
        alwaysCrash: true,
        features: ["15 rijlessen",  "Prioriteitsplanning"],
      },
      {
        id: "advanced",
        badge: "€1320 KORTING!",
        name: "Gevorderd",
        price: 1555,
        originalPrice: 1575,
        crashPrice: 1550,
        crashOriginal: 1800,
        lessons: 25,
        isMostChosen: false,
        features: ["25 rijlessen", "Prioriteitsplanning"],
      },
      {
        id: "premium",
        badge: "€2300 KORTING!",
        name: "Premium",
        price: 2355,
        originalPrice: 2165,
        crashPrice: 2300,
        crashOriginal: 2610,
        lessons: 35,
        isMostChosen: false,
        features: ["35 rijlessen",  "Vaste instructeur"],
      },
    ],
  },
};

// ── Toggle switch ─────────────────────────────────────────────────────────────
function Toggle({ on, onChange }) {
  return (
    <div
      onClick={() => onChange(!on)}
      style={{
        width: 44, height: 24, borderRadius: 12, cursor: "pointer",
        background: on
          ? "linear-gradient(90deg,#1e40af,#0ea5e9)"
          : "rgba(59,130,246,0.15)",
        border: on ? "none" : "1px solid rgba(59,130,246,0.3)",
        position: "relative",
        transition: "background 0.3s",
        flexShrink: 0,
      }}
    >
      <div style={{
        position: "absolute",
        top: on ? 3 : 2,
        left: on ? 22 : 2,
        width: 18, height: 18, borderRadius: "50%",
        background: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.35)",
        transition: "left 0.25s cubic-bezier(.4,0,.2,1)",
      }} />
    </div>
  );
}

// ── Package card ──────────────────────────────────────────────────────────────
function PackageCard({ pkg, p, delay }) {
  const [crash, setCrash] = useState(pkg.alwaysCrash || false);
  const price    = crash ? pkg.crashPrice    : pkg.price;
  const original = crash ? pkg.crashOriginal : pkg.originalPrice;
  const featured = pkg.isMostChosen;

  return (
    <FadeIn delay={delay}>
      <div style={{
        position: "relative",
        background: featured
          ? "linear-gradient(160deg, rgba(20,35,80,0.98), rgba(10,18,50,1))"
          : "linear-gradient(160deg, rgba(12,18,42,0.97), rgba(8,12,32,0.99))",
        border: featured
          ? "1px solid rgba(96,165,250,0.45)"
          : "1px solid rgba(59,130,246,0.15)",
        borderRadius: 22,
        padding: "32px 28px 28px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxShadow: featured
          ? "0 0 60px rgba(59,130,246,0.18), 0 20px 60px rgba(0,0,0,0.6)"
          : "0 8px 40px rgba(0,0,0,0.4)",
        transition: "transform 0.3s, box-shadow 0.3s",
        transform: featured ? "scale(1.035)" : "scale(1)",
        overflow: "hidden",
      }}
        onMouseEnter={e => { if (!featured) { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 50px rgba(59,130,246,0.15), 0 20px 60px rgba(0,0,0,0.5)"; }}}
        onMouseLeave={e => { if (!featured) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.4)"; }}}
      >
        {/* BG glow */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: `radial-gradient(circle, ${featured ? "rgba(59,130,246,0.14)" : "rgba(59,130,246,0.06)"}, transparent 65%)`, pointerEvents: "none" }} />

        {/* Most chosen badge */}
        {featured && (
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            background: "linear-gradient(90deg,#1e40af,#0ea5e9)",
            color: "#fff", fontSize: 11, fontWeight: 800,
            padding: "5px 18px", borderRadius: "0 0 12px 12px",
            letterSpacing: "0.08em", textTransform: "uppercase",
            boxShadow: "0 4px 14px rgba(14,165,233,0.4)",
            whiteSpace: "nowrap",
          }}>{p.mostChosen}</div>
        )}

        <WhatsAppButton />

        {/* Discount badge */}
        <div style={{ marginBottom: 16, marginTop: featured ? 14 : 0 }}>
          <span style={{
            background: "linear-gradient(90deg,#1e3a8a,#1e40af)",
            border: "1px solid rgba(96,165,250,0.35)",
            color: "#93c5fd", fontSize: 11, fontWeight: 800,
            padding: "4px 10px", borderRadius: 8,
            letterSpacing: "0.06em",
          }}>{pkg.badge}</span>
        </div>

        {/* Package name */}
        <h3 style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.03em", color: H, marginBottom: 14, lineHeight: 1.1 }}>
          {pkg.name}
        </h3>

        {/* Price */}
        <div style={{ marginBottom: 6 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span style={{ fontSize: 38, fontWeight: 900, letterSpacing: "-0.04em", color: H, lineHeight: 1 }}>
              €{price.toLocaleString()}
            </span>
            <span style={{ fontSize: 16, color: DIM, fontWeight: 500, textDecoration: "line-through" }}>
              €{original.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Lesson count */}
        <p style={{ color: B, fontSize: 13.5, fontWeight: 500, marginBottom: 20 }}>
          + {pkg.lessons} {p.lessons}
        </p>

        {/* Features */}
        <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 24, flex: 1 }}>
          {pkg.features.map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{
                width: 18, height: 18, borderRadius: "50%", flexShrink: 0, marginTop: 1,
                background: "linear-gradient(135deg,#1e40af,#0ea5e9)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 9, color: "#fff", fontWeight: 900,
              }}>✓</div>
              <span style={{ fontSize: 13, color: B, lineHeight: 1.55 }}>{f}</span>
            </div>
          ))}
        </div>

        {/* Crash course toggle */}
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "12px 14px",
          background: "rgba(59,130,246,0.06)",
          border: "1px solid rgba(59,130,246,0.12)",
          borderRadius: 12,
          marginBottom: 20,
          opacity: pkg.alwaysCrash ? 1 : 1,
        }}>
          {pkg.alwaysCrash ? (
            <div style={{
              width: 44, height: 24, borderRadius: 12,
              background: "linear-gradient(90deg,#1e40af,#0ea5e9)",
              display: "flex", alignItems: "center", justifyContent: "flex-end",
              padding: "0 3px", flexShrink: 0,
            }}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.3)" }} />
            </div>
          ) : (
            <Toggle on={crash} onChange={setCrash} />
          )}
          <span style={{ fontSize: 12.5, color: pkg.alwaysCrash ? H : B, fontWeight: pkg.alwaysCrash ? 700 : 500, lineHeight: 1.4 }}>
            {pkg.alwaysCrash ? p.crashAlways : p.crashToggle}
          </span>
        </div>

        {/* CTA buttons */}
        <button
          className="btn-primary"
          style={{ width: "100%", fontSize: 14, padding: "14px 20px", borderRadius: 13, marginBottom: 10 }}
        >
          {p.planBtn}
        </button>
        <button style={{
          width: "100%", fontSize: 13.5, padding: "12px 20px", borderRadius: 13,
          background: "transparent",
          border: `1px solid ${featured ? "rgba(96,165,250,0.35)" : "rgba(59,130,246,0.2)"}`,
          color: B, cursor: "pointer", fontWeight: 600,
          transition: "border-color 0.2s, color 0.2s",
          fontFamily: "inherit",
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(96,165,250,0.6)"; e.currentTarget.style.color = H; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = featured ? "rgba(96,165,250,0.35)" : "rgba(59,130,246,0.2)"; e.currentTarget.style.color = B; }}
        >
          {p.moreInfo}
        </button>
      </div>
    </FadeIn>
  );
}

// ── Step card ─────────────────────────────────────────────────────────────────
function StepCard({ step, delay }) {
  return (
    <FadeIn delay={delay}>
      <div style={{
        display: "flex", gap: 20, alignItems: "flex-start",
        background: "linear-gradient(135deg, rgba(12,18,42,0.95), rgba(8,12,32,0.98))",
        border: "1px solid rgba(59,130,246,0.14)",
        borderRadius: 18, padding: "28px 26px",
        transition: "border-color 0.3s, transform 0.3s",
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.38)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.14)"; e.currentTarget.style.transform = "translateY(0)"; }}
      >
        <div style={{
          width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
          background: "linear-gradient(135deg,#1e40af,#0ea5e9)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 17, fontWeight: 900, color: "#fff",
          boxShadow: "0 0 18px rgba(14,165,233,0.4)",
        }}>{step.n}</div>
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 800, color: H, marginBottom: 8, letterSpacing: "-0.02em" }}>{step.title}</h3>
          <p style={{ color: B, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{step.body}</p>
        </div>
      </div>
    </FadeIn>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function DrivingPackagesPage({ lang, onLangChange }) {
  const t = T[lang];
  const p = PAGE_T[lang];

  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
      background: "#03050f",
      color: H,
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <Banner items={t.banner} />
      <Navbar nav={t.nav} lang={lang} onLangChange={onLangChange} />

      {/* ── PAGE HERO ──────────────────────────────────────────────────────── */}
      <div style={{
        position: "relative",
        padding: "72px 44px 56px",
        borderBottom: "1px solid rgba(59,130,246,0.08)",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -200, left: -160, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,64,175,0.2), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -100, right: -80, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.08), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="eyebrow-pill" style={{ display: "inline-flex", marginBottom: 18 }}>
            <div className="eyebrow-dot" />
            <span style={{ color: H }}>{p.eyebrow}</span>
          </div>
          <h1 style={{ fontSize: "clamp(34px,5vw,64px)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 1.02, marginBottom: 16, color: H }}>
            {p.heroTitle}<br />
            <span className="gradient-text">{p.heroAccent}</span>
          </h1>
          <p style={{ color: B, fontSize: 17, lineHeight: 1.75, maxWidth: 560, margin: 0 }}>{p.heroSub}</p>
        </div>
      </div>

      {/* ── PACKAGES GRID ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "72px 44px 0" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          alignItems: "end",
        }}>
          {p.packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} p={p} delay={i * 0.08} />
          ))}
        </div>

        {/* Klarna note */}
        <FadeIn delay={0.35}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 12, marginTop: 32,
            color: DIM, fontSize: 13.5, fontWeight: 500,
          }}>
            <span style={{ fontSize: 18 }}>💳</span>
            {lang === "en"
              ? "All packages available with interest-free Klarna installments"
              : "Alle pakketten beschikbaar met renteloze Klarna-termijnen"}
          </div>
        </FadeIn>
      </div>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "88px 44px 96px" }}>
        {/* Section header */}
        <FadeIn>
          <div style={{ marginBottom: 52 }}>
            <div className="eyebrow-pill" style={{ display: "inline-flex", marginBottom: 18 }}>
              <div className="eyebrow-dot" />
              <span style={{ color: H }}>
                {lang === "en" ? "Step by step" : "Stap voor stap"}
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(26px,4vw,50px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.06, marginBottom: 14, color: H }}>
              {p.trialTitle}
            </h2>
            <p style={{ color: B, fontSize: 16, lineHeight: 1.75, maxWidth: 520, margin: 0 }}>{p.trialSub}</p>
          </div>
        </FadeIn>

        {/* Steps grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {p.steps.map((step, i) => (
            <StepCard key={i} step={step} delay={i * 0.08} />
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.3}>
          <div style={{
            marginTop: 52,
            background: "linear-gradient(135deg, rgba(30,64,175,0.18), rgba(14,165,233,0.08))",
            border: "1px solid rgba(59,130,246,0.22)",
            borderRadius: 22,
            padding: "44px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.1), transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ fontSize: "clamp(18px,2.5vw,28px)", fontWeight: 900, letterSpacing: "-0.03em", color: H, marginBottom: 8 }}>
                {lang === "en" ? "Ready to get started?" : "Klaar om te beginnen?"}
              </h3>
              <p style={{ color: B, fontSize: 15, lineHeight: 1.75, maxWidth: 460, margin: 0 }}>
                {lang === "en"
                  ? "Book your free trial lesson today — no obligation, no upfront payment. Pick a time that works for you."
                  : "Boek vandaag uw gratis proefles — vrijblijvend, geen aanbetaling. Kies een tijd die u schikt."}
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <button className="btn-primary" style={{ fontSize: 15, padding: "15px 32px", borderRadius: 13 }}>
                {p.planBtn}
              </button>
              <button className="btn-outline" style={{ fontSize: 14, padding: "15px 26px", borderRadius: 13 }}>
                {lang === "en" ? "View locations →" : "Locaties bekijken →"}
              </button>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="divider" />
      <Footer footer={t.footer} />
    </div>
  );
}