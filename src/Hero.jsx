"use client";

import { useState } from "react";

const challenges = [
  {
    title: "Deep Hips Reset",
    duration: "7 days",
    focus: "Foundations of Splits",
    level: "Beginner",
    tint: "bg-[#c4dfe9]/25",
  },
  {
    title: "Middle Split Flow",
    duration: "14 days",
    focus: "Open Range Mobility",
    level: "Intermediate",
    tint: "bg-[#FFBC40]/25",
  },
  {
    title: "Over Split Path",
    duration: "21 days",
    focus: "Advanced Extension",
    level: "Advanced",
    tint: "bg-[#c35d31]/20",
  },
  {
    title: "Backbend Arc",
    duration: "30 days",
    focus: "Spine + Heart Opening",
    level: "All Levels",
    tint: "bg-[#355070]/10",
  },
];

const filters = ["All", "Beginner", "Intermediate", "Advanced", "All Levels"];

export default function Challenges() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? challenges
      : challenges.filter((c) => c.level === active);

  return (
    <section className="relative overflow-hidden bg-[#f3f3ee] text-[#291503] px-6 md:px-16 py-20">

      {/* soft ambient fields */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/3 h-[420px] w-[420px] bg-[#FFBC40]/10 blur-3xl rounded-full" />
        <div className="absolute right-1/4 bottom-1/3 h-[380px] w-[380px] bg-[#c4dfe9]/15 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* HEADER (asymmetric layout) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">

          <div className="space-y-2 max-w-xl">
            <p className="text-[10px] tracking-[0.45em] uppercase text-[#291503]/50">
              movement challenges
            </p>

            <h2 className="text-4xl md:text-6xl leading-tight tracking-tight">
              7 → 30 day
              <br />
              flexibility arcs
            </h2>
          </div>

          <p className="text-sm text-[#291503]/60 max-w-sm leading-relaxed">
            structured progression paths for splits, mobility, and deep range work —
            designed to be revisited, not completed.
          </p>

        </div>

        {/* FILTERS (slightly offset / playful grid feel) */}
        <div className="flex flex-wrap gap-3 mb-14 md:ml-10">

          {filters.map((f) => {
            const isActive = f === active;

            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-[11px] tracking-[0.35em] uppercase border border-[#291503]/20 transition-all ${
                  isActive
                    ? "bg-[#291503] text-[#f3f3ee]"
                    : "bg-transparent hover:bg-[#291503] hover:text-[#f3f3ee]"
                }`}
              >
                {f}
              </button>
            );
          })}

        </div>

        {/* GRID (asymmetric layout feel) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {filtered.map((c, i) => {
            const offset =
              i % 3 === 0
                ? "md:col-span-5"
                : i % 3 === 1
                ? "md:col-span-4 md:translate-y-6"
                : "md:col-span-3 md:-translate-y-4";

            return (
              <div
                key={c.title}
                className={`${offset} ${c.tint} border border-[#291503]/10 rounded-2xl p-6 md:p-7 flex flex-col justify-between min-h-[260px] transition hover:scale-[1.01]`}
              >

                {/* top */}
                <div className="space-y-2">
                  <p className="text-[10px] tracking-[0.45em] uppercase text-[#291503]/50">
                    {c.duration}
                  </p>

                  <h3 className="text-2xl leading-tight tracking-tight">
                    {c.title}
                  </h3>

                  <p className="text-sm text-[#291503]/70">
                    {c.focus}
                  </p>
                </div>

                {/* bottom */}
                <div className="flex items-center justify-between mt-10">

                  <p className="text-[10px] tracking-[0.35em] uppercase text-[#291503]/50">
                    {c.level}
                  </p>

                  <button className="w-10 h-10 rounded-full border border-[#291503]/20 flex items-center justify-center hover:bg-[#291503] hover:text-[#f3f3ee] transition">
                    ▶
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}