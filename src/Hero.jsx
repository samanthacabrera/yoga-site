export default function Hero() {
  const items = [
    "CHANNEL",
    "LIBRARY",
    "PHILOSOPHY",
    "CHALLENGES",
    "READINGS",
    "SPOTIFY",
    "ABOUT",
    "CONNECT",
  ];

  const SIZE = 700;
  const CENTER = SIZE / 2;

  const RADIUS = 240;

  const circlePoints = items.map((_, i) => {
    const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;

    return {
      x: CENTER + Math.cos(angle) * RADIUS,
      y: CENTER + Math.sin(angle) * RADIUS,
    };
  });

  return (
    <section
      id="hero"
      className="min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-[#dccab6]/20 blur-3xl" />
        <div className="absolute right-1/3 bottom-1/4 h-[30rem] w-[30rem] rounded-full bg-[#efe7de]/40 blur-3xl" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[700px] w-[700px]">
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <span className="mt-3 text-md tracking-[0.3em] text-[#291503]/60">
              Sam Flows 
            </span>
            <span className="block mt-1 text-[12px] tracking-widest text-[#291503]/60">
              ✩⋆｡° a yoga journal ⋆｡°✩
            </span>
          </div>

          {items.map((label, i) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              style={{
                left: circlePoints[i].x,
                top: circlePoints[i].y,
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