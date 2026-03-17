import { useState } from "react";
import { T } from "../constants/translation.js";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export default function HomePage() {
  const [lang, setLang] = useState("en");
  const t = T[lang];

  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
      background: "#03050f",
      color: "#e8eeff",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <Banner items={t.banner} />
      <Navbar nav={t.nav} lang={lang} onLangChange={setLang} />
      <HeroSection hero={t.hero} card={t.card} />
      <StatsSection stats={t.stats} />
      <FeaturesSection features={t.features} lang={lang} />
      <div className="divider" />
      <CtaSection cta2={t.cta2} lang={lang} />
      <Footer footer={t.footer} />
    </div>
  );
}