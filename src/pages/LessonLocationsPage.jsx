import { T } from "../constants/translation";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingCard from "../components/BookingCard";
import FadeIn from "../components/FadeIn";

// ── Bilingual page-level copy ────────────────────────────────────────────────
const PAGE_T = {
  en: {
    eyebrow: "Driving lessons near you",
    heroTitle: "Lesson Locations",
    heroTitleAccent: "Across the Netherlands",
    heroSub: "FIS instructors operate locally, so every lesson is relevant to the roads you'll actually drive on. Find your nearest location below.",
    whyTitle: "Why choose FIS Driving School?",
    whyP1: "Ready to get your Category B driving licence? You've come to the right place. FIS Driving School pairs you with a patient, certified instructor in your own neighbourhood — so you build real confidence on familiar roads, not unfamiliar ones.",
    whyP2: "Thanks to our flexible scheduling and same-day availability, most students can start their very first lesson tomorrow. Pay as you go with Klarna — no large upfront costs, no stress.",
    coverageTitle: "Driving lessons in your area",
    coverageP: "We currently offer lessons in two locations across South Holland. Each area is served by instructors who live and drive there daily — giving you hyper-local expertise from day one.",
    areasCovered: "Areas covered",
    trialTitle: "Start with a no-obligation trial lesson",
    trialP: "Not sure where to begin? Our trial lesson is a completely pressure-free first ride. You'll get a feel for the car, meet your instructor, and decide together how many lessons you'll realistically need for your exam. It's the easiest way to kick things off — and it costs you nothing upfront.",
    trialBtn: "Book a Trial lesson →",
    packagesBtn: "View Packages →",
  },
  nl: {
    eyebrow: "Rijlessen bij u in de buurt",
    heroTitle: "Leslocaties",
    heroTitleAccent: "Door heel Nederland",
    heroSub: "FIS-instructeurs werken lokaal, zodat elke les aansluit op de wegen die u straks écht berijdt. Vind uw dichtstbijzijnde locatie hieronder.",
    whyTitle: "Waarom kiezen voor FIS Rijschool?",
    whyP1: "Klaar om uw rijbewijs B te halen? Dan bent u hier aan het goede adres. FIS Rijschool koppelt u aan een geduldige, gecertificeerde instructeur in uw eigen wijk — zodat u echt zelfvertrouwen opbouwt op vertrouwde wegen.",
    whyP2: "Dankzij onze flexibele planning en beschikbaarheid op dezelfde dag kunnen de meeste studenten al morgen beginnen. Betaal per les via Klarna — geen hoge vooruitbetalingen, geen stress.",
    coverageTitle: "Rijlessen in uw omgeving",
    coverageP: "We geven momenteel les op twee locaties in Zuid-Holland. Elke regio heeft instructeurs die er dagelijks rondrijden — en u zo lokale expertise bieden vanaf dag één.",
    areasCovered: "Gedekte wijken",
    trialTitle: "Begin met een vrijblijvende proefles",
    trialP: "Weet u niet waar u moet beginnen? Onze proefles is een volledig vrijblijvende eerste rit. U maakt kennis met de auto, ontmoet uw instructeur en beslist samen hoeveel lessen u nodig heeft voor uw examen. De makkelijkste start — zonder kosten vooraf.",
    trialBtn: " Proefles boeken →",
    packagesBtn: "Pakketten bekijken →",
  },
};

// ── Bilingual location data ──────────────────────────────────────────────────
const LOCATIONS = {
  en: [
    {
      name: "Zoetermeer",
      slug: "zoetermeer",
      icon: "📍",
      tagline: "South Holland's rising city",
      description: "FIS Driving School is fully active in Zoetermeer, covering every district from Palenstein to Rokkeveen. Our certified instructors know these roads inside out — from residential streets to busy arterials — giving you the most relevant, confidence-building lessons possible.",
      highlights: ["All neighbourhoods covered", "Lessons available 7 days a week", "Instructors fluent in Dutch & English"],
      neighborhoods: ["Palenstein", "Rokkeveen", "Buytenwegh", "Seghwaert", "Meerzicht", "Centrum", "Oud-Zoetermeer", "Dorp"],
    },
    {
      name: "Rijswijk",
      slug: "rijswijk",
      icon: "🏙️",
      tagline: "Connected, calm and close to The Hague",
      description: "Our instructors are active throughout Rijswijk, guiding learners across its mix of quiet residential roads and busier urban routes. With great proximity to The Hague's exam centres, Rijswijk is an ideal base for getting your licence efficiently.",
      highlights: ["Close to CBR exam centre", "Flexible morning & evening slots", "Experienced local instructors"],
      neighborhoods: ["Rijswijk-Noord", "Rijswijk-Zuid", "Hoekpolder", "Sion", "Stationskwartier", "In de Bogaard", "Vredenburch"],
    },
  ],
  nl: [
    {
      name: "Zoetermeer",
      slug: "zoetermeer",
      icon: "📍",
      tagline: "De opkomende stad van Zuid-Holland",
      description: "FIS Rijschool is volledig actief in Zoetermeer en bedient alle wijken van Palenstein tot Rokkeveen. Onze gecertificeerde instructeurs kennen deze wegen door en door — van rustige woonstraten tot drukke doorgangswegen — voor de meest relevante en vertrouwenwekkende lessen.",
      highlights: ["Alle wijken gedekt", "Lessen 7 dagen per week beschikbaar", "Instructeurs in het Nederlands en Engels"],
      neighborhoods: ["Palenstein", "Rokkeveen", "Buytenwegh", "Seghwaert", "Meerzicht", "Centrum", "Oud-Zoetermeer", "Dorp"],
    },
    {
      name: "Rijswijk",
      slug: "rijswijk",
      icon: "🏙️",
      tagline: "Verbonden, rustig en dicht bij Den Haag",
      description: "Onze instructeurs zijn actief door heel Rijswijk en begeleiden leerlingen op zowel rustige woonwegen als drukke stadswegen. Dankzij de nabijheid van het CBR-examencentrum in Den Haag is Rijswijk een ideale uitvalsbasis om efficiënt uw rijbewijs te halen.",
      highlights: ["Dicht bij het CBR-examencentrum", "Flexibele ochtend- en avondslots", "Ervaren lokale instructeurs"],
      neighborhoods: ["Rijswijk-Noord", "Rijswijk-Zuid", "Hoekpolder", "Sion", "Stationskwartier", "In de Bogaard", "Vredenburch"],
    },
  ],
};

// ── Bilingual booking card data ──────────────────────────────────────────────
const CARD_DATA = {
  en: {
    tag: "LIMITED OFFER",
    tagSub: "Valid until 31 May 2026",
    h: "Up to €400 off",
    hSub: "your lesson package",
    perks: ["Start immediately, pay afterwards", "Trial lesson, zero obligation", "€6 discount on every lesson"],
    fTitle: "Book Your Trial Lesson",
    zip: "Your postcode",
    date: "Pick a date",
    timePh: "Preferred time",
    times: ["Morning · 8:00–12:00", "Afternoon · 12:00–17:00", "Evening · 17:00–20:00"],
    btn: "Check Availability →",
    note: "Enter postcode + date to see open slots.",
    successTitle: "You're all set! 🎉",
    successSub: "We'll send confirmation details shortly.",
  },
  nl: {
    tag: "BEPERKT AANBOD",
    tagSub: "Geldig tot 31 mei 2026",
    h: "Tot €400 korting",
    hSub: "op uw lespakket",
    perks: ["Direct beginnen, achteraf betalen", "Proefles geheel vrijblijvend", "€6 korting op elke les"],
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
};

// ── LocationCard sub-component ───────────────────────────────────────────────
function LocationCard({ loc, index, areasCoveredLabel }) {
  return (
    <FadeIn delay={index * 0.1}>
      <div
        style={{
          background: "linear-gradient(135deg, rgba(14,20,45,0.9), rgba(10,16,38,0.95))",
          border: "1px solid rgba(59,130,246,0.13)",
          borderRadius: 20,
          padding: "32px 36px",
          position: "relative",
          overflow: "hidden",
          transition: "border-color 0.3s, transform 0.3s",
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.35)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.13)"; e.currentTarget.style.transform = "translateY(0)"; }}
      >
        <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.07), transparent 65%)", pointerEvents: "none" }} />

        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 18 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, flexShrink: 0, background: "linear-gradient(135deg,#1e40af,#0ea5e9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, boxShadow: "0 0 18px rgba(59,130,246,0.4)" }}>
            {loc.icon}
          </div>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 3, color: "#e8eeff" }}>{loc.name}</h3>
            <span style={{ fontSize: 12.5, color: "#3b5280", fontWeight: 600, letterSpacing: "0.04em" }}>{loc.tagline}</span>
          </div>
        </div>

        <p style={{ color: "#2c4060", fontSize: 14, lineHeight: 1.85, marginBottom: 22 }}>{loc.description}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
          {loc.highlights.map((h, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", flexShrink: 0, background: "linear-gradient(135deg,#1e40af,#0ea5e9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#fff", fontWeight: 900 }}>✓</div>
              <span style={{ fontSize: 13.5, color: "#607090", fontWeight: 500 }}>{h}</span>
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(59,130,246,0.04)", border: "1px solid rgba(59,130,246,0.09)", borderRadius: 14, padding: "18px 20px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#3b5280", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
            {areasCoveredLabel}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px" }}>
            {loc.neighborhoods.map((n, i) => (
              <span key={i} style={{ fontSize: 12.5, color: "#60a5fa", fontWeight: 600, background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)", borderRadius: 8, padding: "4px 12px", cursor: "default" }}>
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LessonLocationsPage({ lang, onLangChange }) {
  const t = T[lang];
  const p = PAGE_T[lang];
  const locations = LOCATIONS[lang];
  const cardData = CARD_DATA[lang];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif", background: "#03050f", color: "#e8eeff", minHeight: "100vh", overflowX: "hidden" }}>
      <Banner items={t.banner} />
      <Navbar nav={t.nav} lang={lang} onLangChange={onLangChange} />

      {/* PAGE HERO */}
      <div style={{ position: "relative", padding: "72px 44px 56px", borderBottom: "1px solid rgba(59,130,246,0.07)", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -180, left: -140, width: 550, height: 550, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,64,175,0.18), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="eyebrow-pill" style={{ display: "inline-flex", marginBottom: 18 }}>
            <div className="eyebrow-dot" />
            {p.eyebrow}
          </div>
          <h1 style={{ fontSize: "clamp(32px,4.5vw,58px)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 1.04, marginBottom: 14 }}>
            {p.heroTitle}<br />
            <span className="gradient-text">{p.heroTitleAccent}</span>
          </h1>
          <p style={{ color: "#2c4060", fontSize: 16, lineHeight: 1.75, maxWidth: 520 }}>{p.heroSub}</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 44px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr min(420px, 38%)", gap: 48, alignItems: "start" }}>

          {/* LEFT COLUMN */}
          <div>
            <FadeIn>
              <div style={{ marginBottom: 48 }}>
                <h2 style={{ fontSize: "clamp(22px,2.8vw,34px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 14, lineHeight: 1.1 }}>{p.whyTitle}</h2>
                <p style={{ color: "#2c4060", fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}>{p.whyP1}</p>
                <p style={{ color: "#2c4060", fontSize: 15, lineHeight: 1.85 }}>{p.whyP2}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: "clamp(20px,2.5vw,30px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 10, lineHeight: 1.1 }}>{p.coverageTitle}</h2>
                <p style={{ color: "#2c4060", fontSize: 15, lineHeight: 1.85 }}>{p.coverageP}</p>
              </div>
            </FadeIn>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 52 }}>
              {locations.map((loc, i) => (
                <LocationCard key={loc.slug} loc={loc} index={i} areasCoveredLabel={p.areasCovered} />
              ))}
            </div>

            <FadeIn>
              <div>
                <h2 style={{ fontSize: "clamp(20px,2.5vw,30px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 12, lineHeight: 1.1 }}>{p.trialTitle}</h2>
                <p style={{ color: "#2c4060", fontSize: 15, lineHeight: 1.85, marginBottom: 18 }}>{p.trialP}</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button className="btn-primary" style={{ fontSize: 14, padding: "13px 28px", borderRadius: 12 }}>{p.trialBtn}</button>
                  <button className="btn-outline" style={{ fontSize: 14, padding: "13px 24px", borderRadius: 12 }}>{p.packagesBtn}</button>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN — sticky booking card */}
          <div style={{ position: "sticky", top: 90 }}>
            <FadeIn delay={0.15}>
              <BookingCard card={cardData} />
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="divider" />
      <Footer footer={t.footer} />
    </div>
  );
}