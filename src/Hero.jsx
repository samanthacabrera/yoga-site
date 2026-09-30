import { useState } from "react";

function Hero({ channel, philosophy, spotify, connect }) {
  const items = [
    "CHANNEL", 
    "PHILOSOPHY",
    "CONNECT",
    "SPOTIFY",
  ];

  const SIZE = 700;
  const CENTER = SIZE / 2;
  const RADIUS = 240;

  const [active, setActive] = useState(null);

  const positions = [
    {
      x: CENTER,
      y: CENTER - RADIUS,
    },
    {
      x: CENTER + RADIUS,
      y: CENTER,
    },
    {
      x: CENTER,
      y: CENTER + RADIUS,
    },
    {
      x: CENTER - RADIUS,
      y: CENTER,
    },
  ];

  const circlePoints = {
    PHILOSOPHY: positions[0],
    SPOTIFY: positions[1],
    CONNECT: positions[2],
    CHANNEL: positions[3],
  };

  const content = {
    CHANNEL: channel,
    PHILOSOPHY: philosophy,
    SPOTIFY: spotify,
    CONNECT: connect,
  };

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#f5f0e8] text-[#291503]">

      <div className="absolute inset-0 z-0 overflow-hidden">
        {active && (
          <div className="h-full w-full">
            {content[active]}
          </div>
        )}
      </div>

      <div
        className={`absolute inset-0 z-20 transition-opacity duration-300 ${
          active ? "pointer-events-none" : ""
        }`}
      >
        
        <Nav
          items={items}
          circlePoints={circlePoints}
          onClick={setActive}
        />

        {/* Top */}
        <div
          className={`absolute inset-x-0 top-0 h-1/2 bg-[#f5f0e8] transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            active ? "-translate-y-full" : "translate-y-0"
          }`}
        />

        {/* Bottom */}
        <div
          className={`absolute inset-x-0 bottom-0 h-1/2 bg-[#f5f0e8] transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            active ? "translate-y-full" : "translate-y-0"
          }`}
        />

        {/* Center text  */}
        <div
          className={`pointer-events-none absolute inset-0 z-30 flex items-center justify-center transition-opacity duration-500 ${
            active ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center">
            <span className="text-md tracking-[0.3em]">
              Sam Flows
            </span>

            <span className="mt-1 text-[12px] tracking-widest">
              ✩⋆｡° a yoga journal ⋆｡°✩
            </span>
          </div>
        </div>
      </div>

      {/* Close */}
      {active && (
        <button
          type="button"
          onClick={() => setActive(null)}
          className="absolute right-6 top-6 z-50 text-xs tracking-[0.3em] text-[#291503]/50 transition-colors hover:text-[#291503]"
        >
          CLOSE ×
        </button>
      )}
    </main>
  );
}

// NAV 

function Nav({
  items,
  circlePoints,
  onClick,
}) {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2">

      {items.map((label) => {
        const point = circlePoints[label];

        return (
          <button
            key={label}
            type="button"
            onClick={() => onClick(label)}
            style={{
              left: point.x,
              top: point.y,
              transform: "translate(-50%, -50%)",
            }}
            className="group absolute"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-[#291503]/25 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#291503]" />

              <span className="whitespace-nowrap text-[11px] tracking-[0.45em] text-[#291503]/70 transition-colors duration-300 group-hover:text-[#291503] md:text-sm">
                {label}
              </span>

            </div>
          </button>
        );
      })}
    </div>
  );
}

export default Hero;