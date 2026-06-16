export default function Hero() {
  const items = [
    "CHANNEL",
    "LIBRARY",
    "PHILOSOPHY",
    "CHALLENGES",
    "READINGS",
    "SPOTIFY",
    "ABOUT",
    "CONTACT",
  ];

  const SIZE = 700;
  const CENTER = SIZE / 2;

  const spiralPoints = items.map((_, i) => {
    const t = i * 0.9; 
    const a = 8;
    const b = 55;

    const radius = a + b * t;

    return {
      x: CENTER + Math.cos(t) * radius,
      y: CENTER + Math.sin(t) * radius,
    };
  });

  const spiralPath = spiralPoints.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;

    const prev = spiralPoints[i - 1];

    const cx = (prev.x + p.x) / 2;
    const cy = (prev.y + p.y) / 2;

    return `${acc} Q ${prev.x} ${prev.y} ${cx} ${cy}`;
  }, "");

  return (
    <section className="relative -translate-y-1/4 min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-[#dccab6]/20 blur-3xl" />
        <div className="absolute right-1/3 bottom-1/4 h-[30rem] w-[30rem] rounded-full bg-[#efe7de]/40 blur-3xl" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[700px] w-[700px]">

          <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${SIZE} ${SIZE}`}>
            <path
              d={spiralPath}
              fill="none"
              stroke="rgba(41,21,3,.12)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {items.map((label, i) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              style={{
                left: spiralPoints[i].x,
                top: spiralPoints[i].y,
                transform: "translate(-50%, -50%)",
              }}
              className="absolute group"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-[#291503]/25 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#291503]" />

                <span className="text-[11px] md:text-sm tracking-[0.45em] text-[#291503]/70 group-hover:text-[#291503] transition-colors">
                  {label}
                </span>
              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}