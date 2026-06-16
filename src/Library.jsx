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
    title: "Meditation Flow",
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
      id="channel"
      className="relative overflow-hidden scroll-mt-12 space-y-16 text-[#291503]"
    >
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-[#c4dfe9]/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#FFBC40]/10 blur-3xl" />
      </div>

      <div className="relative flex flex-col gap-3">
        <h2 className="text-5xl md:text-6xl tracking-wide">Library</h2>

        <p className="max-w-2xl text-lg md:text-xl text-[#291503]/65">
          Explore flows aligned with different chakras and intentions.
        </p>
      </div>

      <div className="relative flex flex-wrap gap-3">
        {filters.map((filter) => {
          const active = activeFilter === filter;

          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-6 py-2 text-[11px] tracking-[0.45em] transition-all duration-500 ${
                active
                  ? "border-[#291503] bg-[#291503] text-white"
                  : "border-[#291503]/15 text-[#291503]/60 hover:border-[#291503]/35 hover:text-[#291503]"
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
            className="group relative min-h-[320px] overflow-hidden rounded-[2rem] border bg-[#f3f3ee] backdrop-blur-xl transition-all duration-700 hover:-translate-y-1 border-[video.color]"
            style={{
              borderColor: `${video.color}50`,
            }}
          >
            <div
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl opacity-20"
              style={{
                borderColor: video.color,
                backgroundColor: video.color,
              }}
            />

            <div
              className="absolute -left-16 bottom-0 h-32 w-32 rounded-full blur-3xl opacity-10"
              style={{
                backgroundColor: video.color,
              }}
            />

            <div className="relative flex h-full flex-col justify-between p-8">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: video.color,
                    }}
                  />

                  <p className="uppercase text-[11px] tracking-[0.45em] text-[#291503]/45">
                    {video.category}
                  </p>
                </div>

                <h3 className="text-3xl leading-none tracking-[-0.04em] text-[#291503]">
                  {video.title}
                </h3>

                <div className="flex items-center gap-3">
                  <div
                    className="h-px w-10"
                    style={{
                      backgroundColor: video.color,
                    }}
                  />

                  <span className="text-sm text-[#291503]/50">
                    {video.chakra}
                  </span>
                </div>
              </div>

              <div className="mt-12 flex items-center justify-between">
                <p className="text-sm text-[#291503]/55">
                  {video.duration}
                </p>

                <button
                  className="flex h-12 w-12 items-center justify-center rounded-full border bg-white/50 text-[#291503]/60 transition-all duration-500 group-hover:scale-105"
                  style={{
                    borderColor: `${video.color}40`,
                  }}
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