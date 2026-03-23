import { useState } from "react";
import { T } from "../constants/translation";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

// ── Text tokens ───────────────────────────────────────────────────────────────
const H = "#f0f4ff";
const B = "#b8cce8";
const D = "#6a8aaa";

// ── Bilingual copy ────────────────────────────────────────────────────────────
const PAGE_T = {
  en: {
    // Hero
    eyebrow: "★★★★★  Excellent · 1,200+ Reviews",
    heroTitle: "Emergency driver's\nlicense course",
    bullets: [
      "Your driver's licence within 30 days",
      "Multiple driving lessons per week",
    ],
    heroCta: "Book your trial lesson now →",
    // Booking card
    card: {
      tag: "EMERGENCY COURSE!",
      tagSub: "Promotion valid until 31-05-2026",
      h: "€150 discount",
      hSub: "on your crash course!",
      perks: [
        "Plan immediately, start tomorrow!",
        "Trial lesson with zero obligation",
        "Always €6 discount per driving lesson",
      ],
      fTitle: "Plan your trial lesson immediately",
      zip: "Postcode",
      nr: "Nr.",
      btn: "Show availability →",
      note: "We need your postcode to show the calendar.",
      successTitle: "You're booked! 🚀",
      successSub: "We'll confirm your slot shortly.",
    },
    // Stats
    stats: [
      { n: "45,824", l: "Graduates", sub: "Thousands of students pass FIS every year." },
      { n: "98%", l: "High-success rate", sub: "Our students pass with confidence." },
    //   { n: "€6", l: "Discount per lesson", sub: "Always the best prices — save up to €400." },
    ],
    // Why section
    whyTitle: "Why choose the FIS emergency course?",
    whyP: "Need your licence fast? Our crash course is designed for exactly that. Intensive, back-to-back lessons get you exam-ready in weeks, not months. Our instructors know the local roads and exam routes inside out — giving you the best possible preparation in the shortest time.",
    whyCards: [
      { icon: "⚡", title: "Start tomorrow", desc: "No waiting lists. We schedule your first lesson as quickly as possible — often the very next day." },
      { icon: "📅", title: "Multiple lessons per week", desc: "Build skills fast with frequent sessions tailored to your availability and learning pace." },
      { icon: "🎯", title: "Exam-focused training", desc: "Every lesson is structured around the CBR exam criteria so nothing is left to chance." },
      { icon: "🏆", title: "Expert instructors", desc: "Our instructors know the local roads and exam routes inside out — giving you the best possible preparation." },
      // { icon: "💳", title: "Pay with Klarna", desc: "Spread the cost over manageable installments with zero interest. Start now, pay later." },
      { icon: "📍", title: "Local instructors", desc: "Instructors based in Zoetermeer and Rijswijk who know every road on your exam route." },
    ],
    // CTA
    ctaTitle: "Ready to get your licence fast?",
    ctaP: "Book your lesson, no-obligation trial lesson today and get started on the road to your licence.",
    ctaBtn: "Book a Trial →",
    ctaSecondary: "View all packages →",
  },
  nl: {
    eyebrow: "★★★★★  Uitstekend · 1.200+ reviews",
    heroTitle: "Spoedcursus\nrijbewijs halen",
    bullets: [
      "Uw rijbewijs binnen 30 dagen",
      "Meerdere rijlessen per week",
    ],
    heroCta: "Boek nu uw proefles →",
    card: {
      tag: "SPOEDCURSUS!",
      tagSub: "Actie geldig tot 31-05-2026",
      h: "€150 korting",
      hSub: "op uw spoedcursus!",
      perks: [
        "Direct inplannen, morgen beginnen!",
        "Proefles geheel vrijblijvend",
        "Altijd €6 korting per rijles",
      ],
      fTitle: "Plan direct uw proefles",
      zip: "Postcode",
      nr: "Nr.",
      btn: "Beschikbaarheid tonen →",
      note: "We hebben uw postcode nodig om de agenda te tonen.",
      successTitle: "Ingepland! 🚀",
      successSub: "We bevestigen uw slot snel.",
    },
    stats: [
      { n: "45.824", l: "Geslaagden", sub: "Duizenden studenten slagen elk jaar bij FIS." },
      { n: "98%", l: "Hoog slagingspercentage", sub: "Onze studenten slagen met vertrouwen." },
    //   { n: "€6", l: "Korting per les", sub: "Altijd de beste prijzen — bespaar tot €400." },
    ],
    whyTitle: "Waarom kiezen voor de FIS spoedcursus?",
    whyP: "Snel uw rijbewijs nodig? Onze spoedcursus is precies daarvoor ontworpen. Intensieve, opeenvolgende lessen maken u examenklaar in weken, niet maanden. Onze instructeurs kennen de lokale wegen en examenroutes op hun duimpje — zodat u de best mogelijke voorbereiding krijgt in zo kort mogelijk tijd.",
    whyCards: [
      { icon: "⚡", title: "Begin morgen", desc: "Geen wachtlijsten. We plannen uw eerste les zo snel mogelijk in — vaak al de volgende dag." },
      { icon: "📅", title: "Meerdere lessen per week", desc: "Bouw snel vaardigheden op met frequente sessies afgestemd op uw beschikbaarheid." },
      { icon: "🎯", title: "Examengerichte training", desc: "Elke les is opgebouwd rond de CBR-examencriteria zodat niets aan het toeval wordt overgelaten." },
      { icon: "🏆", title: "Expert instructeurs", desc: "Onze instructeurs kennen de lokale wegen en examenroutes op hun duimpje — voor de best mogelijke voorbereiding." },
      // { icon: "💳", title: "Betalen met Klarna", desc: "Spreid de kosten in beheersbare termijnen zonder rente. Begin nu, betaal later." },
      { icon: "📍", title: "Lokale instructeurs", desc: "Instructeurs in Zoetermeer en Rijswijk die elke weg van uw examenroute kennen." },
    ],
    ctaTitle: "Klaar om snel uw rijbewijs te halen?",
    ctaP: "Boek uw vrijblijvende proefles en zet de eerste stap naar uw rijbewijs.",
    ctaBtn: "Proefles Boeken →",
    ctaSecondary: "Alle pakketten bekijken →",
  },
};

// ── Inline booking card ───────────────────────────────────────────────────────
function EmergencyBookingCard({ card }) {
  const [zip, setZip]   = useState("");
  const [nr, setNr]     = useState("");
  const [done, setDone] = useState(false);

  return (
    <div style={{
      background: "linear-gradient(160deg, rgba(10,18,50,0.98), rgba(6,12,36,1))",
      border: "1px solid rgba(96,165,250,0.3)",
      borderRadius: 22,
      padding: "28px 26px",
      width: "min(400px,100%)",
      flexShrink: 0,
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 0 60px rgba(59,130,246,0.18), 0 24px 60px rgba(0,0,0,0.7)",
    }}>
      {/* Corner glow */}
      <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.14), transparent 65%)", pointerEvents: "none" }} />
      {/* Rocket emoji */}
      <div style={{ position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)", fontSize: 36 }}>🚀</div>

      {/* Tag row */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, marginTop: 16, position: "relative", zIndex: 1 }}>
        <span style={{
          background: "linear-gradient(90deg,#1e3a8a,#1e40af)",
          border: "1px solid rgba(96,165,250,0.4)",
          color: "#93c5fd", fontSize: 10.5, fontWeight: 800,
          padding: "4px 10px", borderRadius: 7, letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}>{card.tag}</span>
        <span style={{ color: D, fontSize: 11, fontWeight: 500 }}>{card.tagSub}</span>
      </div>

      <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 2, color: H, position: "relative", zIndex: 1 }}>
        {card.h}
      </h2>
      <p style={{
        fontSize: 15, fontWeight: 800, marginBottom: 20,
        background: "linear-gradient(90deg,#60a5fa,#38bdf8)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        position: "relative", zIndex: 1,
      }}>{card.hSub}</p>

      {/* Perks */}
      {card.perks.map((perk, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10, position: "relative", zIndex: 1 }}>
          <div style={{
            width: 20, height: 20, borderRadius: "50%", flexShrink: 0, marginTop: 1,
            background: "linear-gradient(135deg,#1e40af,#0ea5e9)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 9, color: "#fff", fontWeight: 900,
          }}>✓</div>
          <span style={{ fontSize: 13, color: B, lineHeight: 1.55 }}
            dangerouslySetInnerHTML={{ __html: perk.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#f0f4ff">$1</strong>') }}
          />
        </div>
      ))}

      {/* Divider */}
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(59,130,246,0.22),transparent)", margin: "20px 0" }} />

      <p style={{ fontWeight: 700, fontSize: 13.5, color: B, marginBottom: 14, position: "relative", zIndex: 1 }}>
        {card.fTitle}
      </p>

      {done ? (
        <div style={{ textAlign: "center", padding: "28px 10px", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>🎉</div>
          <p style={{ fontWeight: 900, fontSize: 18, marginBottom: 6, color: H }}>{card.successTitle}</p>
          <p style={{ color: B, fontSize: 13 }}>{card.successSub}</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10, position: "relative", zIndex: 1 }}>
          {/* Postcode + Nr row */}
          <div style={{ display: "flex", gap: 8 }}>
            <input
              className="inp"
              placeholder={card.zip}
              value={zip}
              onChange={e => setZip(e.target.value)}
              style={{ flex: 2 }}
            />
            <input
              className="inp"
              placeholder={card.nr}
              value={nr}
              onChange={e => setNr(e.target.value)}
              style={{ flex: 1 }}
            />
          </div>
          <button
            className="btn-primary"
            style={{ fontSize: 14.5, padding: "14px 20px", marginTop: 2 }}
            disabled={!zip || !nr}
            onClick={() => setDone(true)}
          >
            {card.btn}
          </button>
          <p style={{ color: D, fontSize: 11.5, textAlign: "center", marginTop: 2 }}>{card.note}</p>
        </div>
      )}
    </div>
  );
}

// ── Why card ──────────────────────────────────────────────────────────────────
function WhyCard({ item, delay }) {
  return (
    <FadeIn delay={delay}>
      <div
        style={{
          background: "linear-gradient(135deg,rgba(12,18,42,0.97),rgba(8,12,32,0.99))",
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

// ── Page ─────────────────────────────────────────────────────���────────────────
export default function EmergencyCoursePage({ lang, onLangChange }) {
  const t = T[lang];
  const p = PAGE_T[lang];

  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans','Segoe UI',sans-serif",
      background: "#03050f",
      color: H,
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <Banner items={t.banner} />
      <Navbar nav={t.nav} lang={lang} onLangChange={onLangChange} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{
        position: "relative",
        minHeight: 560,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "72px 44px",
      }} className="flex flex-col md:flex-row">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1800&auto=format&fit=crop&q=80"
          alt=""
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
            zIndex: 0,
          }}
        />
        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(3,5,15,0.92) 42%, rgba(3,5,15,0.55) 100%)", zIndex: 1 }} />
        {/* Orange tint overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, transparent 50%, rgba(180,60,0,0.18) 100%)", zIndex: 1 }} />
        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to bottom,transparent,#03050f)", zIndex: 2 }} />

        <div style={{
          position: "relative", zIndex: 3,
          maxWidth: 1200, margin: "0 auto", width: "100%",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 52,
        }} className="flex flex-col md:flex-row">
          {/* Left copy */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Stars */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 30, padding: "7px 16px", marginBottom: 28,
              fontSize: 13, color: H, fontWeight: 600,
              opacity: 0, animation: "fadeUp 0.7s 0.05s cubic-bezier(.16,1,.3,1) forwards",
            }}>
              <span style={{ color: "#fbbf24", letterSpacing: 2 }}>★★★★★</span>
              {p.eyebrow.replace("★★★★★  ", "")}
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: "clamp(36px,5.5vw,70px)",
              fontWeight: 900, lineHeight: 1.02,
              letterSpacing: "-0.045em",
              color: H, marginBottom: 28,
              opacity: 0, animation: "fadeUp 0.8s 0.15s cubic-bezier(.16,1,.3,1) forwards",
              whiteSpace: "pre-line",
            }}>
              {p.heroTitle}
            </h1>

            {/* Bullets */}
            <div style={{
              display: "flex", flexDirection: "column", gap: 12, marginBottom: 36,
              opacity: 0, animation: "fadeUp 0.8s 0.25s cubic-bezier(.16,1,.3,1) forwards",
            }}>
              {p.bullets.map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 17, color: B, fontWeight: 500 }}>
                  <span style={{ color: "#60a5fa", fontSize: 18, fontWeight: 900 }}>→</span>
                  {b}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ opacity: 0, animation: "fadeUp 0.8s 0.35s cubic-bezier(.16,1,.3,1) forwards" }}>
              <button className="btn-primary" style={{ fontSize: 16, padding: "16px 36px", borderRadius: 14 }}>
                {p.heroCta}
              </button>
            </div>
          </div>

          {/* Right: booking card */}
          {/* Make bookingcard flex  */}
          <div style={{ opacity: 0, animation: "fadeUp 0.9s 0.2s cubic-bezier(.16,1,.3,1) forwards" }}>
            <EmergencyBookingCard card={p.card} />
          </div>
        </div>
      </section>

      {/* ── STATS BAND ────────────────────────────────────────────────────── */}
      <FadeIn>
        <div style={{
          background: "rgba(10,16,38,0.9)",
          border: "1px solid rgba(59,130,246,0.1)",
          borderLeft: "none", borderRight: "none",
        }}>
          <div style={{
            maxWidth: 1200, margin: "0 auto",
            display: "grid", gridTemplateColumns: "repeat(3,1fr)",
            padding: "0 44px",
          }}>
            {p.stats.map((s, i) => (
              <div key={i} style={{
                padding: "36px 24px",
                borderRight: i < 2 ? "1px solid rgba(59,130,246,0.1)" : "none",
                display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
              }}>
                <div style={{
                  width: 46, height: 46, borderRadius: "50%", marginBottom: 14,
                  background: "linear-gradient(135deg,rgba(30,64,175,0.3),rgba(14,165,233,0.2))",
                  border: "1px solid rgba(59,130,246,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20,
                }}>
                  {i === 0 ? "🎓" : i === 1 ? "📈" : "💰"}
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: "-0.04em", color: H, lineHeight: 1, marginBottom: 6 }}>{s.n}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: B, marginBottom: 6 }}>{s.l}</div>
                <div style={{ fontSize: 12.5, color: D, lineHeight: 1.6, maxWidth: 180 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* ── WHY SECTION ───────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 44px" }}>
        <FadeIn>
          <div style={{ marginBottom: 52 }}>
            <div className="eyebrow-pill" style={{ display: "inline-flex", marginBottom: 18 }}>
              <div className="eyebrow-dot" />
              <span style={{ color: H }}>{lang === "en" ? "Built for speed" : "Gebouwd voor snelheid"}</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px,4vw,48px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.06, color: H, marginBottom: 16, maxWidth: 680 }}>
              {p.whyTitle}
            </h2>
            <p style={{ color: B, fontSize: 16, lineHeight: 1.8, maxWidth: 620 }}>{p.whyP}</p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {p.whyCards.map((item, i) => (
            <WhyCard key={i} item={item} delay={i * 0.07} />
          ))}
        </div>
      </div>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 44px 90px" }}>
        <FadeIn>
          <div style={{
            background: "linear-gradient(135deg,rgba(30,64,175,0.2),rgba(14,165,233,0.08))",
            border: "1px solid rgba(59,130,246,0.22)",
            borderRadius: 22, padding: "52px 48px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 28, position: "relative", overflow: "hidden",
            textAlign: "left",
          }}>
            <div style={{ position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,rgba(59,130,246,0.1),transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1, maxWidth: 500 }}>
              <h2 style={{ fontSize: "clamp(20px,3vw,34px)", fontWeight: 900, letterSpacing: "-0.04em", color: H, marginBottom: 10, lineHeight: 1.1 }}>
                {p.ctaTitle}
              </h2>
              <p style={{ color: B, fontSize: 15.5, lineHeight: 1.75, margin: 0 }}>{p.ctaP}</p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <button className="btn-primary" style={{ fontSize: 15, padding: "15px 32px", borderRadius: 13 }}>{p.ctaBtn}</button>
              <button className="btn-outline" style={{ fontSize: 14, padding: "15px 26px", borderRadius: 13 }}>{p.ctaSecondary}</button>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="divider" />
      <Footer footer={t.footer} />
    </div>
  );
}