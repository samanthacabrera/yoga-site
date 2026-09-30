import { useState } from "react";

function Hero({ channel, philosophy, connect, spotify }) {
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
    CONNECT: connect,
    SPOTIFY: spotify,
  };

  const heroTransforms = {
    CHANNEL:
      "translateX(30vw) translateY(0) scale(0.62)",

    PHILOSOPHY:
      "translateX(0) translateY(25vh) scale(0.62)",

    CONNECT:
      "translateX(0) translateY(-25vh) scale(0.62)",

    SPOTIFY:
      "translateX(-30vw) translateY(0) scale(0.62)",
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
        className="absolute inset-0 z-20 origin-center transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          transform: active
            ? heroTransforms[active]
            : "translateX(0) translateY(0) scale(1)",
        }}
      >

        <div className="absolute inset-0 bg-[#f5f0e8]" />

        <Nav
          items={items}
          circlePoints={circlePoints}
          onClick={setActive}
        />

      <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
        <button
          type="button"
          onClick={() => setActive(null)}
          className="pointer-events-auto flex flex-col items-center"
        >
          <span className="text-md tracking-[0.3em] transition-opacity duration-300 hover:opacity-60">
            Sam Flows
          </span>

          <span className="mt-1 text-[12px] tracking-widest transition-opacity duration-300 hover:opacity-60">
            ✩⋆｡° a yoga journal ⋆｡°✩
          </span>
        </button>
      </div>

      </div>
    </main>
  );
}

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