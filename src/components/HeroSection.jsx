import { Suspense, useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber'

import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import BookingCard from "./BookingCard";

// ── 3D Car model ──────────────────────────────────────────────────────────────
function CarModel() {
  const { scene } = useGLTF("/RisDrivingSchool/public/models/2021_Volkswagen_Golf_GTI.glb");
  const ref = useRef();

  // Slow auto-rotate; stops when user grabs the canvas (OrbitControls takes over)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.18;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.4}
      position={[0, -0.8, 0]}
      rotation={[0, Math.PI / 5, 0]}
    />
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function HeroSection({ hero, card }) {
  return (
    <section className="hero-wrap" style={{ position: "relative", overflow: "hidden", minHeight: 680 }}>

      {/* ── Full-bleed 3D Canvas as background ─────────────────────────── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Canvas
          camera={{ position: [4, 1.5, 6], fov: 42 }}
          style={{ background: "#03050f" }}
          shadows
          gl={{ antialias: true, alpha: false }}
        >
          <ambientLight intensity={0.35} />
          <directionalLight
            position={[8, 12, 6]}
            intensity={1.4}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          <directionalLight position={[-6, 4, -4]} intensity={0.5} color="#60a5fa" />
          <pointLight position={[0, 6, 0]} intensity={0.4} color="#0ea5e9" />

          <Environment preset="city" />

          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.45}
            scale={12}
            blur={2.5}
            far={4}
            color="#000814"
          />

          <Suspense fallback={null}>
            <CarModel />
          </Suspense>

          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={3}
            maxDistance={12}
            maxPolarAngle={Math.PI / 2.1}
            minPolarAngle={Math.PI / 6}
            makeDefault
          />
        </Canvas>

        {/* Left gradient so text stays readable */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
          background: "linear-gradient(100deg, rgba(3,5,15,0.88) 0%, rgba(3,5,15,0.55) 45%, rgba(3,5,15,0.08) 100%)",
        }} />
      </div>

      {/* Decorative blobs */}
      <div className="blob" style={{ width: 700, height: 700, background: "#1e3a8a", top: -220, left: -180, opacity: 0.28, zIndex: 1 }} />
      <div className="blob" style={{ width: 280, height: 280, background: "#6366f1", top: "30%", left: "28%", opacity: 0.07, zIndex: 1 }} />
      <div className="grid-lines" />

      {/* ── Hero content ───────────────────────────────────────────────── */}
      <div
        className="hero-inner"
        style={{
          position: "relative", zIndex: 2,
          maxWidth: 1240, margin: "0 auto",
          padding: "80px 44px", width: "100%",
          display: "flex", alignItems: "center", gap: 60,
          pointerEvents: "none",  // canvas stays interactive underneath
        }}
      >
        {/* Left copy */}
        <div style={{ flex: 1, minWidth: 0, pointerEvents: "auto" }}>
          <div style={{ opacity: 0, animation: "fadeUp 0.75s 0.05s cubic-bezier(.16,1,.3,1) forwards" }}>
            <div className="eyebrow-pill" style={{ marginBottom: 24 }}>
              <div className="eyebrow-dot" />
              {hero.eyebrow}
            </div>
          </div>

          <h1 style={{
            fontSize: "clamp(42px,5.8vw,78px)",
            fontWeight: 900, lineHeight: 1.02,
            letterSpacing: "-0.045em", marginBottom: 22,
            opacity: 0,
            animation: "fadeUp 0.8s 0.18s cubic-bezier(.16,1,.3,1) forwards",
          }}>
            {hero.h1a}<br />
            <span className="gradient-text">{hero.h1b}</span><br />
            {hero.h1c}
          </h1>

          <p style={{
            color: "#b8cce8", fontSize: 16.5, lineHeight: 1.8,
            maxWidth: 460, marginBottom: 38,
            opacity: 0,
            animation: "fadeUp 0.8s 0.3s cubic-bezier(.16,1,.3,1) forwards",
          }}>
            {hero.sub}
          </p>

          <div style={{
            display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap",
            opacity: 0,
            animation: "fadeUp 0.8s 0.42s cubic-bezier(.16,1,.3,1) forwards",
          }}>
            <button className="btn-primary" style={{ fontSize: 16, padding: "17px 36px", borderRadius: 15 }}>
              {hero.cta}
            </button>
            <span style={{ color: "#6a8aaa", fontSize: 13, fontWeight: 500 }}>{hero.ctaSub}</span>
          </div>

          {/* Interaction hint */}
          <p style={{
            marginTop: 26, fontSize: 11.5, color: "#253555", fontWeight: 600,
            display: "flex", alignItems: "center", gap: 6,
            opacity: 0, animation: "fadeUp 0.8s 0.56s cubic-bezier(.16,1,.3,1) forwards",
          }}>
            <span style={{ fontSize: 14 }}>🖱️</span>
            Drag to rotate · Scroll to zoom
          </p>
        </div>

        {/* Booking card */}
        <div style={{
          width: "min(445px,100%)", flexShrink: 0, pointerEvents: "auto",
          opacity: 0, animation: "fadeUp 0.9s 0.28s cubic-bezier(.16,1,.3,1) forwards",
        }}>
          <BookingCard card={card} />
        </div>
      </div>

      {/* Bottom page fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 140,
        background: "linear-gradient(to bottom,transparent,#03050f)",
        zIndex: 3, pointerEvents: "none",
      }} />
    </section>
  );
}

// Pre-load so the model is ready before the hero mounts
useGLTF.preload("/RisDrivingSchool/public/models/2021_Volkswagen_Golf_GTI.glb");