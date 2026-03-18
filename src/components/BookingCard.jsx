import { useState } from "react";

// ── Shared input style ────────────────────────────────────────────────────────
const INP = {
  width: "100%",
  boxSizing: "border-box",
  padding: "11px 14px",
  fontSize: 13.5,
  fontWeight: 500,
  color: "#c8d8f0",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(59,130,246,0.22)",
  borderRadius: 10,
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
};

function Field({ placeholder, value, onChange, type = "text", children, style = {} }) {
  const [focused, setFocused] = useState(false);
  return children ? (
    <select
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{ ...INP, borderColor: focused ? "rgba(96,165,250,0.6)" : "rgba(59,130,246,0.22)", colorScheme: "dark", ...style }}
    >
      {children}
    </select>
  ) : (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{ ...INP, borderColor: focused ? "rgba(96,165,250,0.6)" : "rgba(59,130,246,0.22)", colorScheme: "dark", ...style }}
    />
  );
}

export default function BookingCard({ card }) {
  const [zip,       setZip]       = useState("");
  const [address,   setAddress]   = useState("");
  const [apartment, setApartment] = useState("");
  const [mobile,    setMobile]    = useState("");
  const [date,      setDate]      = useState("");
  const [time,      setTime]      = useState("");
  const [done,      setDone]      = useState(false);

  const canSubmit = zip && address && mobile && date && time;

  return (
    <div className="bcard">
      <div className="bcard-shine" />
      <div className="bcard-glow" />

      {/* Tag row */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, position: "relative", zIndex: 1 }}>
        <div className="offer-tag">✦ {card.tag}</div>
        <span style={{ color: "#253555", fontSize: 11.5, fontWeight: 500 }}>{card.tagSub}</span>
      </div>

      <h2 style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 4, position: "relative", zIndex: 1 }}>
        {card.h}
      </h2>
      <p className="gradient-text" style={{ fontSize: 15.5, fontWeight: 700, marginBottom: 22, position: "relative", zIndex: 1 }}>
        {card.hSub}
      </p>

      {/* Perks */}
      {card.perks.map((p, i) => (
        <div className="perk-row" key={i} style={{ position: "relative", zIndex: 1 }}>
          <div className="perk-chk">✓</div>
          <span style={{ fontSize: 13.5, color: "#607090", lineHeight: 1.5 }}>{p}</span>
        </div>
      ))}

      <div className="divider" style={{ margin: "22px 0", position: "relative", zIndex: 1 }} />

      <p style={{ fontWeight: 700, fontSize: 14.5, color: "#8aa0cc", marginBottom: 14, position: "relative", zIndex: 1 }}>
        {card.fTitle}
      </p>

      {/* ── Form / Success ─────────────────────────────────────────────── */}
      {done ? (
        <div style={{
          background: "linear-gradient(135deg,rgba(30,64,175,0.18),rgba(14,165,233,0.08))",
          border: "1px solid rgba(59,130,246,0.25)",
          borderRadius: 18, padding: "32px 20px",
          textAlign: "center", position: "relative", zIndex: 1,
        }}>
          <div style={{ fontSize: 42, marginBottom: 10 }}>🎉</div>
          <p className="gradient-text" style={{ fontWeight: 900, fontSize: 19, marginBottom: 6 }}>{card.successTitle}</p>
          <p style={{ color: "#334970", fontSize: 13, marginBottom: 10 }}>{card.successSub}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 3, color: "#253555", fontSize: 12 }}>
            <span>{zip}{apartment ? `, ${apartment}` : ""} · {address}</span>
            <span>📱 {mobile}</span>
            <span>📅 {date} · {time}</span>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10, position: "relative", zIndex: 1 }}>

          {/* Postcode + Apartment row */}
          <div style={{ display: "flex", gap: 8 }}>
            <Field
              placeholder={card.zip}
              value={zip}
              onChange={e => setZip(e.target.value)}
              style={{ flex: 1 }}
            />
            <Field
              placeholder={card.apartment}
              value={apartment}
              onChange={e => setApartment(e.target.value)}
              style={{ flex: 1 }}
            />
          </div>

          {/* Street address */}
          <Field
            placeholder={card.address}
            value={address}
            onChange={e => setAddress(e.target.value)}
          />

          {/* Mobile number */}
          <Field
            type="tel"
            placeholder={card.mobile}
            value={mobile}
            onChange={e => setMobile(e.target.value)}
          />

          {/* Date */}
          <Field
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            style={{ colorScheme: "dark" }}
          />

          {/* Time select */}
          <Field value={time} onChange={e => setTime(e.target.value)}>
            <option value="">{card.timePh}</option>
            {card.times.map((o, i) => <option key={i} value={o}>{o}</option>)}
          </Field>

          <button
            className="btn-primary"
            style={{ marginTop: 4, fontSize: 14.5, padding: "14px 20px" }}
            disabled={!canSubmit}
            onClick={() => setDone(true)}
          >
            {card.btn}
          </button>
          <p style={{ color: "#1e2e48", fontSize: 11.5, textAlign: "center" }}>{card.note}</p>
        </div>
      )}
    </div>
  );
}