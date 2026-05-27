import { useState } from "react";

export default function Booking() {
  const [focus, setFocus] = useState("Strength");
  const [duration, setDuration] = useState("45 min");

  return (
    <section className="space-y-16 pt-24 text-[#2c1e11]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-wide">
              Private Sessions
            </h2>

            <p className="font-medium text-[#2c1e11]/50 max-w-2xl">
              1 on 1 virtual yoga tailored to your body, breath, and current state of practice.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <h3 className="text-lg font-black uppercase tracking-wide">
              FAQs
            </h3>

            <div className="space-y-6">
              <div>
                <p className="uppercase text-xs tracking-widest font-medium text-[#2c1e11]/70">
                  Do I need experience?
                </p>
                <p className="font-medium text-[#2c1e11]/60 leading-relaxed mt-1">
                  No. Sessions are fully adaptive for all levels.
                </p>
              </div>

              <div>
                <p className="uppercase text-xs tracking-widest font-medium text-[#2c1e11]/70">
                  What should I expect?
                </p>
                <p className="font-medium text-[#2c1e11]/60 leading-relaxed mt-1">
                  Breath-led movement tailored in real time to your energy and capacity.
                </p>
              </div>

              <div>
                <p className="uppercase text-xs tracking-widest font-medium text-[#2c1e11]/70">
                  How often should I book?
                </p>
                <p className="font-medium text-[#2c1e11]/60 leading-relaxed mt-1">
                  Weekly or bi-weekly sessions support consistency and progression.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 translate-x-2 translate-y-2 bg-[#355070]/20 rounded-lg" />

          <div className="relative bg-[#FFBC40] border border-[#2c1e11] rounded-lg p-8 md:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="uppercase text-lg tracking-[0.35em] font-black text-[#2c1e11]">
                Book Session
              </p>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-[#2c1e11]/70">
                  Focus
                </label>

                <div className="flex flex-wrap gap-2">
                  {["Strength", "Mobility", "Breathwork"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setFocus(item)}
                      className={`px-3 py-1 border text-xs uppercase tracking-[0.25em] font-medium transition-all ${
                        focus === item
                          ? "bg-[#2c1e11] text-white border-[#2c1e11]"
                          : "bg-transparent border-[#2c1e11]/40 text-[#2c1e11]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-[#2c1e11]/70">
                  Duration
                </label>

                <div className="flex gap-2">
                  {["45 min", "60 min"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setDuration(item)}
                      className={`px-3 py-1 border text-xs uppercase tracking-[0.25em] font-medium transition-all ${
                        duration === item
                          ? "bg-[#2c1e11] text-white border-[#2c1e11]"
                          : "bg-transparent border-[#2c1e11]/40 text-[#2c1e11]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* FORM */}
              <div className="space-y-6 pt-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.3em] text-[#2c1e11]/70">
                    Name
                  </label>
                  <input
                    type="text"
                    className="
                      w-full
                      bg-transparent
                      border-b border-[#2c1e11]/40
                      py-3
                      outline-none
                      focus:border-[#2c1e11]
                      transition-colors
                    "
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.3em] text-[#2c1e11]/70">
                    Email
                  </label>
                  <input
                    type="email"
                    className="
                      w-full
                      bg-transparent
                      border-b border-[#2c1e11]/40
                      py-3
                      outline-none
                      focus:border-[#2c1e11]
                      transition-colors
                    "
                  />
                </div>

                <button
                  className="
                    w-full
                    mt-2
                    px-6 py-4
                    border border-[#2c1e11]
                    bg-[#2c1e11]
                    text-white
                    uppercase
                    tracking-[0.3em]
                    text-sm
                    font-black
                    hover:bg-transparent
                    hover:text-[#2c1e11]
                    transition-all
                    duration-300
                  "
                >
                  Request Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}