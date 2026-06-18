"use client";

import { useState } from "react";

const videos = [
  {
    title: "Morning Flow",
    duration: "21 min",
    category: "Creativity",
    chakra: "Solar Plexus Chakra",
  },
  {
    title: "Midday Flow",
    duration: "20 min",
    category: "Authenticity",
    chakra: "Throat Chakra",
  },
  {
    title: "Evening Flow",
    duration: "20 min",
    category: "Stability",
    chakra: "Root Chakra",
  },
];

const filters = [
  "All",
  // Root Chakra
  "Stability",
  // Sacral Chakra
  "Creativity",
  // Solar Plexus Chakra
  "Confidence",
  // Heart Chakra 
  "Connection",
  // Throat Charka 
  "Authenticity",
  // Third Eye Chakra
  "Clarity",
  // Crown Chakra
  "Inner Peace",
];

export default function Library() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredVideos =
    activeFilter === "All"
      ? videos
      : videos.filter((video) => video.category === activeFilter);

  return (
    <section
      id="library"
      className="relative overflow-hidden px-6 py-12 space-y-16 text-[#291503] md:px-12"
    >
      <div className="relative flex flex-col gap-3 text-center">
        <h2 className="text-5xl font-light tracking-tight md:text-6xl">
          Flow Library
        </h2>

        <p className="mx-auto max-w-2xl text-lg text-[#291503]/65">
          Explore flows aligned with different chakras and intentions.
        </p>
      </div>

      <div className="relative flex flex-wrap justify-center gap-3">
        {filters.map((filter) => {
          const active = activeFilter === filter;

          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-6 py-2 text-[11px] tracking-[0.35em] transition-all duration-500 ${
                active
                  ? "border-[#291503] bg-[#291503] text-white"
                  : "border-[#291503]/10 text-[#291503]/60 hover:border-[#291503]/25 hover:text-[#291503]"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="relative grid grid-cols-1 gap-6 grid-cols-1 md:grid-cols-2">
        {filteredVideos.map((video) => (
          <article
            key={video.title}
            className="group relative min-h-[320px] overflow-hidden rounded-[2.5rem] border border-[#291503]/15 bg-white/60 backdrop-blur-md shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative flex h-full flex-col justify-between p-8">
              
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-[#291503]/50">
                    {video.category}
                  </p>
                </div>

                <h3 className="text-3xl font-light tracking-tight text-[#291503]">
                  {video.title}
                </h3>

                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-[#291503]/20" />

                  <span className="text-sm text-[#291503]/60">
                    {video.chakra}
                  </span>
                </div>
              </div>

              <div className="mt-12 flex items-center justify-between">
                <p className="text-sm text-[#291503]/50">
                  {video.duration}
                </p>

                <button
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#291503]/15 bg-white/50 text-[#291503]/60 transition-all duration-500 group-hover:scale-105 group-hover:text-[#291503]"
                >
                  ▶
                </button>
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}