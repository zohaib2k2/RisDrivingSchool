export default function Banner({ items }) {
  return (
    <div 
      className="bg-[linear-gradient(90deg,#0c1f6e,#1d4ed8,#0c1f6e)] py-[9px] overflow-hidden"
      >
      <div className="marquee-inner">
        {[...Array(3)].flatMap(() => items).map((item, i) => (
          <span
            key={i}
            style={{
              padding: "0 36px",
              fontSize: 12.5,
              fontWeight: 700,
              color: "#93c5fd",
              borderRight: "1px solid rgba(147,197,253,0.18)",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}