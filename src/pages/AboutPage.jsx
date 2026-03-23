import { T } from "../constants/translation";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";

// ── Bilingual page copy ───────────────────────────────────────────────────────
const PAGE_T = {
  en: {
    eyebrow: "Get to know us",
    heroTitle: "About",
    heroTitleAccent: "FIS Driving School",
    heroSub: "We'd love to introduce ourselves — who we are, what drives us, and what you can expect when you learn with FIS.",

    introP: "You want to get your driving licence, and we want to help you get there. At FIS Driving School, every lesson is built around you — your pace, your schedule, your neighbourhood. Here's a bit more about who we are.",

    whoTitle: "Who are we?",
    whoP: "FIS Driving School was founded on a simple belief: learning to drive should be encouraging, not stressful. Our instructors are rigorously trained, endlessly patient, and genuinely invested in your progress. Every lesson is adapted to your individual learning style — because no two drivers are the same. It's this personal approach that has earned us thousands of five-star reviews and a 98% pass rate.",

    uniqueTitle: "What makes us different?",
    uniqueP1: "Beyond quality instruction, we've built our school around your convenience. Lessons are available seven days a week — mornings, afternoons, and evenings — so you can fit driving around work, study, or family life. Your instructor will pick you up from your door, meaning zero wasted time commuting.",
    uniqueP2: "We offer a trial lesson with no obligation, a range of flexible lesson packages, and an emergency crash course for those who need to pass quickly. And with our Klarna integration, you can spread the cost with zero interest — start learning today, pay as you go.",

    activeTitle: "Active across South Holland",
    activeP: "FIS currently operates in Zoetermeer and Rijswijk, with instructors who know every road, roundabout, and tricky junction in their area. We're expanding, so if you don't see your city yet — keep an eye out.",
    activeLink: "View all locations →",

    closingTitle: "FIS: the driving school built for you",
    closingP: "Now you know exactly who we are. Ready to take the wheel? Book a trial lesson and join the thousands who've already passed with FIS.",
    closingBtn: "Book a Trial Lesson →",

    privacyTitle: "Privacy & Legal",
    privacyP: "You can download our general terms and conditions and privacy statement directly using the links below.",
    termsLink: "Download Terms & Conditions",
    privacyLink: "Download Privacy Statement",

    values: [
      { icon: "🎯", title: "Student-first", desc: "Every decision we make starts with what's best for you as a learner." },
      { icon: "🏆", title: "Proven results", desc: "98% pass rate and 45,000+ graduates speak for themselves." },
      { icon: "🤝", title: "No pressure", desc: "We adapt to your pace. There's no rush — only progress." },
      { icon: "📍", title: "Local expertise", desc: "Instructors who know your roads, your exam routes, your area." },
    ],
  },
  nl: {
    eyebrow: "Leer ons kennen",
    heroTitle: "Over",
    heroTitleAccent: "FIS Rijschool",
    heroSub: "We stellen ons graag voor — wie we zijn, wat ons drijft, en wat u kunt verwachten als u bij FIS leert rijden.",

    introP: "U wilt uw rijbewijs halen, en wij helpen u daar graag bij. Bij FIS Rijschool is elke les op u afgestemd — uw tempo, uw schema, uw wijk. Hier leest u wat meer over wie wij zijn.",

    whoTitle: "Wie zijn wij?",
    whoP: "FIS Rijschool is opgericht vanuit een eenvoudige overtuiging: leren rijden moet bemoedigend zijn, niet stressvol. Onze instructeurs zijn grondig opgeleid, eindeloos geduldig en oprecht betrokken bij uw vooruitgang. Elke les wordt aangepast aan uw persoonlijke leerstijl — want geen twee rijders zijn hetzelfde. Deze persoonlijke aanpak heeft ons duizenden vijfsterrenreviews en een slagingspercentage van 98% opgeleverd.",

    uniqueTitle: "Wat maakt ons anders?",
    uniqueP1: "Naast kwalitatieve instructie hebben we onze rijschool gebouwd rond uw gemak. Lessen zijn zeven dagen per week beschikbaar — 's ochtends, 's middags en 's avonds — zodat u rijden kunt combineren met werk, studie of gezinsleven. Uw instructeur haalt u op aan de deur, zodat u geen tijd verliest aan reizen.",
    uniqueP2: "We bieden een proefles zonder verplichtingen, diverse flexibele lespakketten en een spoedcursus voor wie snel wil slagen. Met onze Klarna-integratie spreidt u de kosten zonder rente — begin vandaag met leren, betaal per les.",

    activeTitle: "Actief in Zuid-Holland",
    activeP: "FIS is momenteel actief in Zoetermeer en Rijswijk, met instructeurs die elke weg, rotonde en lastige kruising in hun gebied kennen. We breiden uit — dus ziet u uw stad er nog niet bij? Houd ons in de gaten.",
    activeLink: "Bekijk alle locaties →",

    closingTitle: "FIS: de rijschool die bij u past",
    closingP: "Nu weet u precies wie wij zijn. Klaar om achter het stuur te kruipen? Boek uw proefles en sluit u aan bij de duizenden die al geslaagd zijn met FIS.",
    closingBtn: "Boek een proefles →",

    privacyTitle: "Privacy & Juridisch",
    privacyP: "U kunt onze algemene voorwaarden en privacyverklaring direct downloaden via de onderstaande links.",
    termsLink: "Algemene voorwaarden downloaden",
    privacyLink: "Privacyverklaring downloaden",

    values: [
      { icon: "🎯", title: "Student centraal", desc: "Elke beslissing die we nemen begint bij wat het beste is voor u als leerling." },
      { icon: "🏆", title: "Bewezen resultaten", desc: "98% slagingspercentage en meer dan 45.000 geslaagden spreken voor zich." },
      { icon: "🤝", title: "Geen druk", desc: "Wij passen ons aan uw tempo aan. Geen haast — alleen vooruitgang." },
      { icon: "📍", title: "Lokale expertise", desc: "Instructeurs die uw wegen, uw examenroutes en uw omgeving kennen." },
    ],
  },
};

// ── Decorative section divider ────────────────────────────────────────────────
function SectionDivider() {
  return (
    <div style={{
      height: 1,
      background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.18), transparent)",
      margin: "52px 0",
    }} />
  );
}

// ── Inline link styled to match the theme ─────────────────────────────────────
function InlineLink({ to, children }) {
  return (
    <Link
      to={to}
      style={{
        color: "#60a5fa",
        textDecoration: "none",
        fontWeight: 600,
        borderBottom: "1px solid rgba(96,165,250,0.35)",
        paddingBottom: 1,
        transition: "color 0.2s, border-color 0.2s",
      }}
      onMouseOver={e => { e.currentTarget.style.color = "#93c5fd"; e.currentTarget.style.borderColor = "rgba(147,197,253,0.6)"; }}
      onMouseOut={e => { e.currentTarget.style.color = "#60a5fa"; e.currentTarget.style.borderColor = "rgba(96,165,250,0.35)"; }}
    >
      {children}
    </Link>
  );
}

// ── Value card ─────────────────────────────────────────────────────────────────
function ValueCard({ icon, title, desc, delay }) {
  return (
    <FadeIn delay={delay}>
      <div
        style={{
          background: "linear-gradient(135deg, rgba(14,20,45,0.9), rgba(10,16,38,0.95))",
          border: "1px solid rgba(59,130,246,0.13)",
          borderRadius: 18,
          padding: "28px 26px",
          position: "relative",
          overflow: "hidden",
          transition: "border-color 0.3s, transform 0.3s",
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.35)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.13)"; e.currentTarget.style.transform = "translateY(0)"; }}
      >
        <div style={{ position: "absolute", top: -40, right: -40, width: 130, height: 130, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.06), transparent 65%)", pointerEvents: "none" }} />
        <div style={{
          width: 46, height: 46, borderRadius: 13, marginBottom: 16,
          background: "linear-gradient(135deg,#1e40af,#0ea5e9)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20, boxShadow: "0 0 16px rgba(59,130,246,0.35)",
        }}>{icon}</div>
        <h3 style={{ fontSize: 15.5, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8, color: "#c0d4f8" }}>{title}</h3>
        <p style={{ color: "#8aaacf", fontSize: 13.5, lineHeight: 1.8 }}>{desc}</p>
      </div>
    </FadeIn>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AboutPage({ lang, onLangChange }) {
  const t = T[lang];
  const p = PAGE_T[lang];

  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
      background: "#03050f",
      color: "#e8eeff",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <WhatsAppButton />
      <Banner items={t.banner} />
      <Navbar nav={t.nav} lang={lang} onLangChange={onLangChange} />

      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <div style={{
        position: "relative",
        padding: "72px 44px 56px",
        borderBottom: "1px solid rgba(59,130,246,0.07)",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -180, left: -140, width: 550, height: 550, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,64,175,0.18), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.06), transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="eyebrow-pill" style={{ display: "inline-flex", marginBottom: 18 }}>
            <div className="eyebrow-dot" />
            {p.eyebrow}
          </div>
          <h1 style={{ fontSize: "clamp(32px,4.5vw,58px)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 1.04, marginBottom: 14 }}>
            {p.heroTitle}<br />
            <span className="gradient-text">{p.heroTitleAccent}</span>
          </h1>
        <p style={{ color: "#94afd4", fontSize: 16, lineHeight: 1.75, maxWidth: 520 }}>{p.heroSub}</p>
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "64px 44px 80px" }}>

        {/* Intro */}
        <FadeIn>
          <p style={{ color: "#a0b8d8", fontSize: 16, lineHeight: 1.9, marginBottom: 0 }}>
            {p.introP}
          </p>
        </FadeIn>

        <SectionDivider />

        {/* Who are we */}
        <FadeIn>
          <div style={{ marginBottom: 0 }}>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 18 }}>
              {p.whoTitle}
            </h2>
            <p style={{ color: "#a0b8d8", fontSize: 15.5, lineHeight: 1.9 }}>{p.whoP}</p>
          </div>
        </FadeIn>

        {/* Values grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, margin: "36px 0" }}>
          {p.values.map((v, i) => (
            <ValueCard key={i} icon={v.icon} title={v.title} desc={v.desc} delay={i * 0.07} />
          ))}
        </div>

        <SectionDivider />

        {/* What makes us unique */}
        <FadeIn>
          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 18 }}>
              {p.uniqueTitle}
            </h2>
            <p style={{ color: "#a0b8d8", fontSize: 15.5, lineHeight: 1.9, marginBottom: 18 }}>{p.uniqueP1}</p>
            <p style={{ color: "#a0b8d8", fontSize: 15.5, lineHeight: 1.9 }}>{p.uniqueP2}</p>
          </div>
        </FadeIn>

        <SectionDivider />

        {/* Active locations */}
        <FadeIn>
          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 18 }}>
              {p.activeTitle}
            </h2>
            <p style={{ color: "#a0b8d8", fontSize: 15.5, lineHeight: 1.9, marginBottom: 18 }}>
              {p.activeP}
            </p>

            {/* Location pills */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 22 }}>
              {["Zoetermeer", "Rijswijk"].map(city => (
                <div key={city} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "linear-gradient(135deg, rgba(14,20,45,0.9), rgba(10,16,38,0.95))",
                  border: "1px solid rgba(59,130,246,0.18)",
                  borderRadius: 12, padding: "10px 18px",
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(135deg,#1e40af,#0ea5e9)", boxShadow: "0 0 8px rgba(59,130,246,0.6)" }} />
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#c0d4f8" }}>{city}</span>
                </div>
              ))}
            </div>

            <InlineLink to="/locations">{p.activeLink}</InlineLink>
          </div>
        </FadeIn>

        <SectionDivider />

        {/* Closing CTA */}
        <FadeIn>
          <div style={{
            background: "linear-gradient(135deg, rgba(30,64,175,0.12), rgba(14,165,233,0.06))",
            border: "1px solid rgba(59,130,246,0.15)",
            borderRadius: 22,
            padding: "44px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.07), transparent 65%)", pointerEvents: "none" }} />
            <h2 style={{ fontSize: "clamp(20px,2.8vw,32px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 14, position: "relative", zIndex: 1 }}>
              {p.closingTitle}
            </h2>
            <p style={{ color: "#a0b8d8", fontSize: 15, lineHeight: 1.85, maxWidth: 480, margin: "0 auto 28px", position: "relative", zIndex: 1 }}>
              {p.closingP}
            </p>
            <button className="btn-primary" style={{ fontSize: 15, padding: "14px 34px", borderRadius: 13, position: "relative", zIndex: 1 }}>
              {p.closingBtn}
            </button>
          </div>
        </FadeIn>

        <SectionDivider />

        {/* Privacy & Policy */}
        {/* <FadeIn>
          <div>
            <h2 style={{ fontSize: "clamp(20px,2.8vw,32px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 14 }}>
              {p.privacyTitle}
            </h2>
            <p style={{ color: "#a0b8d8", fontSize: 15.5, lineHeight: 1.9, marginBottom: 20 }}>{p.privacyP}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[p.termsLink, p.privacyLink].map((label, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    color: "#60a5fa", fontSize: 14, fontWeight: 600,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={e => e.currentTarget.style.color = "#93c5fd"}
                  onMouseOut={e => e.currentTarget.style.color = "#60a5fa"}
                >
                  <span style={{
                    width: 26, height: 26, borderRadius: 8, flexShrink: 0,
                    background: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12,
                  }}>↓</span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn> */}

      </div>

      <div className="divider" />
      <Footer footer={t.footer} />
    </div>
  );
}