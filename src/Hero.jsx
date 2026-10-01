import { useState } from "react";

function Hero({ channel, philosophy, connect, spotify }) {
  const [active, setActive] = useState(null);

  const content = {
    CHANNEL: channel,
    PHILOSOPHY: philosophy,
    SPOTIFY: spotify,
    CONNECT: connect,
  };

  const items = [
    "CHANNEL",
    "PHILOSOPHY",
    "SPOTIFY",
    "CONNECT",
  ];

  return (
    <main className="min-h-screen w-full bg-[#f5f0e8] text-[#291503] md:flex md:h-screen md:overflow-hidden">

      {/* DESKTOP */}
      <div className="hidden md:flex md:h-full md:w-full">

        <section className="flex h-full w-1/2 flex-col justify-center px-12 md:px-20 lg:px-28">

          <button
            type="button"
            onClick={() => setActive(null)}
            className="mb-16 flex w-fit flex-col items-start"
          >
            <span className="text-md tracking-[0.3em] transition-opacity hover:opacity-60">
              Sam Flows
            </span>

            <span className="mt-1 tracking-widest">
              ✩⋆｡° a yoga journal ⋆｡°✩
            </span>
          </button>

          <nav className="flex flex-col items-start">
            {items.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setActive(item)}
                className="group flex items-center gap-4 py-2"
              >
                <span
                  className={`
                    h-2
                    w-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      active === item
                        ? "bg-[#291503]"
                        : "bg-[#291503]/25 group-hover:bg-[#291503]"
                    }
                  `}
                />

                <span
                  className={`
                    text-sm
                    tracking-[0.35em]
                    transition-all
                    duration-300
                    ${
                      active === item
                        ? "text-[#291503]"
                        : "text-[#291503]/60 group-hover:text-[#291503]"
                    }
                  `}
                >
                  {item}
                </span>
              </button>
            ))}
          </nav>

        </section>

        <section className="h-full w-1/2 overflow-hidden border-l border-[#291503]/10">
          {active ? (
            <div className="h-full w-full">
              {content[active]}
            </div>
          ) : (
            <div className="flex h-full items-center justify-center px-12">
              {/* video goes here later */}
            </div>
          )}
        </section>

      </div>


      {/*  MOBILE  */}
      <div className="flex min-h-screen flex-col px-6 py-8 md:hidden">

        <button
          type="button"
          onClick={() => setActive(null)}
          className="mb-12 flex w-fit flex-col items-start"
        >
          <span className="text-sm tracking-[0.3em]">
            Sam Flows
          </span>

          <span className="mt-1 text-xs tracking-widest">
            ✩⋆｡° a yoga journal ⋆｡°✩
          </span>
        </button>


        <nav className="flex flex-col items-start">
          {items.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setActive(active === item ? null : item)}
              className="group flex w-full items-center gap-4 border-b border-[#291503]/10 py-4 text-left"
            >
              <span
                className={`
                  h-2
                  w-2
                  shrink-0
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    active === item
                      ? "bg-[#291503]"
                      : "bg-[#291503]/25"
                  }
                `}
              />

              <span
                className={`
                  text-xs
                  tracking-[0.3em]
                  transition-all
                  duration-300
                  ${
                    active === item
                      ? "text-[#291503]"
                      : "text-[#291503]/60"
                  }
                `}
              >
                {item}
              </span>
            </button>
          ))}
        </nav>


        {active && (
          <section className="w-full">
            {content[active]}
          </section>
        )}

      </div>

    </main>
  );
}

export default Hero;