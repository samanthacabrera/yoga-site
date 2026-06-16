"use client";

import { useState } from "react";

const videos = [
  {
    title: "Morning Flow",
    duration: "18 min",
    category: "Grounding",
    chakra: "Root Chakra",
    color: "#FFBC40",
  },
  {
    title: "Deep Stretch",
    duration: "25 min",
    category: "Creativity",
    chakra: "Sacral Chakra",
    color: "#c35d31",
  },
  {
    title: "Slow Honey Flow",
    duration: "15 min",
    category: "Inner Peace",
    chakra: "Crown Chakra",
    color: "#355070",
  },
  {
    title: "Power Yoga",
    duration: "30 min",
    category: "Confidence",
    chakra: "Solar Plexus",
    color: "#c35d31",
  },
];

const filters = [
  "All",
  "Grounding",
  "Creativity",
  "Confidence",
  "Self Love",
  "Expression",
  "Clarity",
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
      className="relative overflow-hidden scroll-mt-12 space-y-16 px-6 py-24 text-[#291503] md:px-12"
    >
      <div className="absolute inset-0 bg-[#f3f3ee]/70" />

      <div className="relative flex flex-col gap-3 text-center">
        <h2 className="text-5xl font-light tracking-tight md:text-6xl">
          Library
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

      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filteredVideos.map((video) => (
          <article
            key={video.title}
            className="group relative min-h-[320px] overflow-hidden rounded-[2.5rem] border border-[#291503]/15 bg-white/60 backdrop-blur-md shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: video.color }}
            />

            <div
              className="absolute -left-16 bottom-0 h-32 w-32 rounded-full blur-3xl opacity-10"
              style={{ backgroundColor: video.color }}
            />

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
                  <div
                    className="h-px w-10"
                    style={{ backgroundColor: `${video.color}80` }}
                  />

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