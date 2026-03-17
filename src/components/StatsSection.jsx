import FadeIn from "./FadeIn";

export default function StatsSection({ stats }) {
  return (
    <FadeIn>
      <div className="stat-band">
        {stats.map((s, i) => (
          <div className="stat-cell" key={i}>
            <div className="stat-n">{s.n}</div>
            <div className="stat-l">{s.l}</div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}