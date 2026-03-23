import { useState } from "react";
import { T } from "../constants/translation";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";

// ── Constants ─────────────────────────────────────────────────────────────────
const PRICE_PER_LESSON = 65;
const EXAM_FEE         = 350;

// ── Text tokens ───────────────────────────────────────────────────────────────
const H = "#f0f4ff";
const B = "#b8cce8";
const D = "#6a8aaa";

// ── Bilingual copy ────────────────────────────────────────────────────────────
const PAGE_T = {
  en: {
    breadcrumbHome: "Home",
    breadcrumbPage: "How much does my lesson package cost?",
    heroTitle: "How much does my lesson package cost?",
    numLessonsLabel: "Number of lessons:",
    totalLabel: "Total:",
    pricePerLesson: "Price per lesson:",
    
    reExamValue: "",
    howManyTitle: "How many driving lessons do you need?",
    howManyP: "Everyone learns to drive at their own pace. At FIS Driving School we take your level and experience into account. On average, students with us need between 20 and 30 driving lessons to succeed — but this varies per person. Here's a rough estimate:",
    learnerTypes: [
      { label: "Quick learner", note: "(picked it up super fast): 10 – 20 lessons" },
      { label: "Smooth student", note: "(comfortable and steady): 20 – 30 lessons" },
      { label: "Average student", note: "(moving forward consistently): 30 – 40 lessons" },
      { label: "Starting from scratch", note: "(no prior experience): 40 – 50 lessons" },
    ],
    howManyFooter: "Not sure where you stand? Our trial lesson is the best way to find out. Your instructor will assess your level and give you a personalised recommendation.",
    trialBtn: "Book a Trial →",
    pricingTitle: "What's included in every package?",
    inclusions: [
      { icon: "🎓", title: "Certified Instructors", desc: "All our instructors are CBR-certified and experienced in preparing students for the Dutch road exam." },
      { icon: "🚗", title: "Modern Dual-Control Cars", desc: "Drive in comfortable, air-conditioned vehicles with dual controls so you always feel safe." },
    //   { icon: "🛡️", title: "Free Re-Exam Guarantee", desc: "Didn't pass first time? No stress — we cover your re-examination fee worth €350." },
      { icon: "💳", title: "Klarna Installments", desc: "Spread the cost with zero-interest Klarna payments. Start learning today, pay as you go." },
    ],
  },
  nl: {
    breadcrumbHome: "Home",
    breadcrumbPage: "Wat kost mijn lespakket?",
    heroTitle: "Wat kost mijn lespakket?",
    numLessonsLabel: "Aantal lessen:",
    totalLabel: "Totaal:",
    pricePerLesson: "Prijs per les:",
    examFee: "Examenkosten:",
    
    howManyTitle: "Hoeveel rijlessen heeft u nodig?",
    howManyP: "Iedereen leert rijden in zijn eigen tempo. Bij FIS Rijschool houden we rekening met uw niveau en ervaring. Gemiddeld hebben studenten bij ons tussen de 20 en 30 rijlessen nodig — maar dit verschilt per persoon. Hier is een globale schatting:",
    learnerTypes: [
      { label: "Snelle leerling", note: "(pakt het supersnel op): 10 – 20 lessen" },
      { label: "Vlotte student", note: "(lekker en gestaag): 20 – 30 lessen" },
      { label: "Gemiddelde student", note: "(gestaag vooruitgang): 30 – 40 lessen" },
      { label: "Helemaal nieuw", note: "(geen ervaring): 40 – 50 lessen" },
    ],
    howManyFooter: "Weet u niet waar u staat? Onze proefles is de beste manier om erachter te komen. Uw instructeur beoordeelt uw niveau en geeft een persoonlijk advies.",
    trialBtn: "Proefles boeken →",
    pricingTitle: "Wat zit er in elk pakket?",
    inclusions: [
      { icon: "🎓", title: "Gecertificeerde instructeurs", desc: "Al onze instructeurs zijn CBR-gecertificeerd en hebben ruime ervaring met het voorbereiden op het rijexamen." },
      { icon: "🚗", title: "Moderne duo-controlauto's", desc: "Rij in comfortabele, airconditioned voertuigen met dubbele bediening zodat u altijd veilig zit." },
      // { icon: "🛡️", title: "Gratis herexamengarantie", desc: "Niet geslaagd de eerste keer? Geen zorgen — wij vergoeden uw herexamen t.w.v. €350." },
      { icon: "💳", title: "Klarna-termijnen", desc: "Spreid de kosten met renteloze Klarna-betalingen. Begin vandaag met leren, betaal per les." },
    ],
  },
};

// ── Inclusion card ────────────────────────────────────────────────────────────
function InclusionCard({ item, delay }) {
  return (
    <FadeIn delay={delay}>
      <div
        style={{
          background: "linear-gradient(135deg, rgba(12,18,42,0.97), rgba(8,12,32,0.99))",
          border: "1px solid rgba(59,130,246,0.15)",
          borderRadius: 18,
          padding: "26px 24px",
          transition: "border-color 0.3s, transform 0.3s",
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.42)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)"; e.currentTarget.style.transform = "translateY(0)"; }}
      >
        <div style={{
          width: 44, height: 44, borderRadius: 12, marginBottom: 14,
          background: "linear-gradient(135deg,#1e40af,#0ea5e9)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20, boxShadow: "0 0 14px rgba(59,130,246,0.4)",
        }}>{item.icon}</div>
        <h3 style={{ fontSize: 15, fontWeight: 800, color: H, marginBottom: 7, letterSpacing: "-0.02em" }}>{item.title}</h3>
        <p style={{ fontSize: 13.5, color: B, lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
      </div>
    </FadeIn>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function LessonCalculatorPage({ lang, onLangChange }) {
  const [lessons, setLessons] = useState(20);
  const t = T[lang];
  const p = PAGE_T[lang];

  const rawLessons = parseInt(lessons) || 0;
  const total = rawLessons * PRICE_PER_LESSON + EXAM_FEE;

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

      <WhatsAppButton/>

      {/* ── HERO + CALCULATOR ─────────────────────────────────────────────── */}
      <div style={{
        position: "relative",
        padding: "56px 44px 72px",
        borderBottom: "1px solid rgba(59,130,246,0.08)",
        overflow: "hidden",
        background: "linear-gradient(160deg, rgba(6,14,40,1) 0%, rgba(8,22,55,0.95) 50%, rgba(4,10,28,1) 100%)",
      }}>
        {/* Background blobs */}
        <div style={{ position: "absolute", top: -160, left: -120, width: 580, height: 580, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,64,175,0.22), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, right: -60, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.1), transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            <Link to="/" style={{ color: D, textDecoration: "none", transition: "color 0.2s" }}
              onMouseOver={e => e.currentTarget.style.color = B}
              onMouseOut={e => e.currentTarget.style.color = D}
            >{p.breadcrumbHome}</Link>
            <span style={{ color: D }}>›</span>
            <span style={{ color: B }}>{p.breadcrumbPage}</span>
          </div>

          {/* Page title */}
          <h1 style={{
            fontSize: "clamp(28px,4vw,54px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.06,
            color: H,
            marginBottom: 40,
            maxWidth: 760,
          }}>
            {p.heroTitle}
          </h1>

          {/* Calculator row */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 28, flexWrap: "wrap", marginBottom: 28 }}>

            {/* Number of lessons input */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <label style={{ fontSize: 13, fontWeight: 700, color: B, letterSpacing: "0.02em" }}>
                {p.numLessonsLabel}
              </label>
              <input
                type="number"
                min={1}
                max={100}
                value={lessons}
                onChange={e => setLessons(e.target.value)}
                style={{
                  width: 200,
                  padding: "14px 18px",
                  fontSize: 22,
                  fontWeight: 700,
                  color: H,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(96,165,250,0.35)",
                  borderRadius: 12,
                  outline: "none",
                  fontFamily: "inherit",
                  colorScheme: "dark",
                  transition: "border-color 0.2s",
                }}
                onFocus={e => e.target.style.borderColor = "rgba(96,165,250,0.75)"}
                onBlur={e => e.target.style.borderColor = "rgba(96,165,250,0.35)"}
              />
            </div>

            {/* Total output */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <label style={{ fontSize: 13, fontWeight: 700, color: B, letterSpacing: "0.02em" }}>
                {p.totalLabel}
              </label>
              <div style={{
                display: "flex", alignItems: "center", gap: 0,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(96,165,250,0.35)",
                borderRadius: 12,
                overflow: "hidden",
              }}>
                <span style={{
                  padding: "14px 16px",
                  fontSize: 22, fontWeight: 700, color: D,
                  background: "rgba(59,130,246,0.08)",
                  borderRight: "1px solid rgba(96,165,250,0.2)",
                }}>€</span>
                <span style={{
                  padding: "14px 20px",
                  fontSize: 22, fontWeight: 900, color: H,
                  minWidth: 120,
                  letterSpacing: "-0.02em",
                }}>
                  {total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {[
              { label: p.pricePerLesson, value: `€${PRICE_PER_LESSON}` },
              { label: p.examFee,        value: `€${EXAM_FEE}` },
              { label: p.reExam,         value: p.reExamValue, accent: true },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5 }}>
                <span style={{ color: D, fontWeight: 500 }}>{row.label}</span>
                <span style={{ color: row.accent ? "#4ade80" : B, fontWeight: 700 }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY CONTENT ──────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 44px 90px" }}>

        {/* How many lessons */}
        <FadeIn>
          <div style={{ maxWidth: 700, marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(22px,3vw,38px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.08, color: H, marginBottom: 18 }}>
              {p.howManyTitle}
            </h2>
            <p style={{ color: B, fontSize: 15.5, lineHeight: 1.85, marginBottom: 26 }}>
              {p.howManyP}
            </p>

            {/* Learner type list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {p.learnerTypes.map((lt, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    width: 9, height: 9, borderRadius: "50%", flexShrink: 0, marginTop: 6,
                    background: "linear-gradient(135deg,#1e40af,#0ea5e9)",
                    boxShadow: "0 0 6px rgba(14,165,233,0.6)",
                  }} />
                  <p style={{ fontSize: 14.5, color: B, lineHeight: 1.65, margin: 0 }}>
                    <strong style={{ color: H, fontWeight: 800 }}>{lt.label}</strong>{" "}
                    <span style={{ color: D }}>{lt.note}</span>
                  </p>
                </div>
              ))}
            </div>

            <p style={{ color: B, fontSize: 15, lineHeight: 1.85, marginBottom: 24 }}>{p.howManyFooter}</p>

            <button className="btn-primary" style={{ fontSize: 14.5, padding: "13px 30px", borderRadius: 12 }}>
              {p.trialBtn}
            </button>
          </div>
        </FadeIn>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(59,130,246,0.2),transparent)", marginBottom: 56 }} />

        {/* What's included */}
        <FadeIn>
          <div style={{ marginBottom: 36 }}>
            <div className="eyebrow-pill" style={{ display: "inline-flex", marginBottom: 16 }}>
              <div className="eyebrow-dot" />
              <span style={{ color: H }}>{lang === "en" ? "Always included" : "Altijd inbegrepen"}</span>
            </div>
            <h2 style={{ fontSize: "clamp(22px,3vw,38px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.08, color: H, marginBottom: 0 }}>
              {p.pricingTitle}
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
          {p.inclusions.map((item, i) => (
            <InclusionCard key={i} item={item} delay={i * 0.07} />
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.3}>
          <div style={{
            marginTop: 56,
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
            <div style={{ position: "absolute", right: -40, top: "50%", transform: "translateY(-50%)", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.1), transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ fontSize: "clamp(18px,2.5vw,28px)", fontWeight: 900, letterSpacing: "-0.03em", color: H, marginBottom: 8 }}>
                {lang === "en" ? "Ready to pick a package?" : "Klaar om een pakket te kiezen?"}
              </h3>
              <p style={{ color: B, fontSize: 15, lineHeight: 1.75, maxWidth: 440, margin: 0 }}>
                {lang === "en"
                  ? "Now that you know the cost, pick the package that's right for you — or start with a completely new trial lesson."
                  : "Nu u de kosten kent, kiest u het pakket dat bij u past — of begin met een proefles."}
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <button className="btn-primary" style={{ fontSize: 15, padding: "14px 30px", borderRadius: 13 }}>
                {p.trialBtn}
              </button>
              <Link to="/packages">
                <button className="btn-outline" style={{ fontSize: 14, padding: "14px 26px", borderRadius: 13 }}>
                  {lang === "en" ? "View packages →" : "Pakketten bekijken →"}
                </button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="divider" />
      <Footer footer={t.footer} />
    </div>
  );
}