"use client";

import { useState } from "react";

const videos = [
  {
    title: "Tutorial #1",
    duration: "23 min",
    category: "Grounding",
    chakra: "Root Chakra",
  },
  {
    title: "Tutorial #2",
    duration: "20 min",
    category: "Creativity",
    chakra: "Sacral Chakra",
  },
  {
    title: "Tutorial #3",
    duration: "22 min",
    category: "Confidence",
    chakra: "Solar Plexus",
  },
  {
    title: "Tutorial #4",
    duration: "21 min",
    category: "Self Love",
    chakra: "Heart Chakra",
  },
  {
    title: "Tutorial #5",
    duration: "22 min",
    category: "Expression",
    chakra: "Throat Chakra",
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
      className="flex flex-col min-h-screen w-full space-y-12"
    >
      <div className="mb-6 space-y-3">
        <h2 className="text-2xl font-light leading-tight">
          Library
        </h2>
        <p className="text-black/30">Explore flows aligned with different chakras,
          emotions, and intentions.</p>
      </div>

      <div className="flex flex-wrap gap-4 pb-20">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
              group relative overflow-hidden rounded-[2rem]
              px-8 py-10 min-w-[160px]
              flex items-end justify-start text-left
              transition-all duration-500 border
              ${
                activeFilter === filter
                  ? "bg-black text-white border-black"
                  : "border-black/10 hover:border-black/30 hover:bg-black/[0.02]"
              }
            `}
          >
            <h3 className="text-lg font-light leading-none">
              {filter}
            </h3>

            <div
              className={`
                absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500
                group-hover:opacity-100
                ${
                  activeFilter === filter
                    ? "bg-white/10"
                    : "bg-black/5"
                }
              `}
            />
          </button>
        ))}
      </div>

      <div className="flex flex-col space-y-2">
  {filteredVideos.map((video, i) => (
          <div
            key={i}
            className="
              group relative border-b border-black/10 pb-6 pt-6 cursor-pointer
            "
          >
            {/* Row */}
            <div className="flex items-center justify-between">
              {/* Title */}
              <h3 className="text-lg font-light transition-all duration-500 group-hover:tracking-wide">
                {video.title}
              </h3>

              {/* subtle hint */}
              <span className="text-xs text-black/20 group-hover:opacity-0 transition-opacity duration-300">
                view
              </span>
            </div>

            {/* Hidden details (reveal on hover) */}
            <div
              className="
                mt-3 flex items-center justify-between
                opacity-0 translate-y-2 blur-sm
                transition-all duration-500
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:blur-0
              "
            >
              <div className="flex gap-3 text-xs text-black/40">
                <p>{video.category}</p>
                <span>•</span>
                <p>{video.chakra}</p>
              </div>

              <p className="text-xs text-black/30">
                {video.duration}
              </p>
            </div>

            {/* soft glow hover effect */}
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                bg-black/[0.02] transition-opacity duration-500
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}