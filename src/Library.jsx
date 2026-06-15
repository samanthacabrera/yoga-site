"use client";

import { useState } from "react";

const videos = [
  {
    title: "Morning Flow",
    duration: "18 min",
    category: "Grounding",
    chakra: "Root Chakra",
    color: "bg-[#FFBC40]",
  },
  {
    title: "Deep Stretch",
    duration: "25 min",
    category: "Creativity",
    chakra: "Sacral Chakra",
    color: "bg-[#c4dfe9]",
  },
  {
    title: "Meditation Flow",
    duration: "15 min",
    category: "Inner Peace",
    chakra: "Crown Chakra",
    color: "bg-[#355070]",
  },
  {
    title: "Power Yoga",
    duration: "30 min",
    category: "Confidence",
    chakra: "Solar Plexus",
    color: "bg-[#FFBC40]",
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
    <section id="channel" className="scroll-mt-12 space-y-16 text-[#2c1e11]">
      <div className="flex flex-col gap-3">
        <h2 className="text-5xl md:text-6xl tracking-wide">
          Library
        </h2>
        <p className="text-lg md:text-xl  text-[#2c1e11]/70 max-w-2xl">
          Explore flows aligned with different chakras and intentions. 
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => {
          const active = activeFilter === filter;

          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 uppercase text-[11px] tracking-[0.35em]  border border-[#2c1e11] rounded-full transition-all ${
                active
                  ? "bg-[#2c1e11] text-white"
                  : "bg-transparent hover:bg-[#2c1e11] hover:text-white"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.title}
            className={`${video.color} border shadow rounded-lg p-6 flex flex-col justify-between min-h-[260px]`}
          >
            <div className="space-y-1">
              <p className="uppercase text-[11px] tracking-[0.35em] ">
                {video.category}
              </p>

              <h3 className="text-2xl md:text-3xl  leading-tight uppercase tracking-[-0.03em]">
                {video.title}
              </h3>

              <p className="text-sm  opacity-80">
                {video.chakra}
              </p>
            </div>

            <div className="flex items-center justify-between mt-10">
              <p className="text-sm ">
                {video.duration}
              </p>

              <button className="w-11 h-11 rounded-full border border-[#2c1e11] bg-white text-[#2c1e11]  flex items-center justify-center hover:bg-[#2c1e11] hover:text-white transition-colors">
                ▶
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}