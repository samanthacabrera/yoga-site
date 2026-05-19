const videos = [
  {
    title: "Morning Reset",
    duration: "20 min",
  },
  {
    title: "Core + Breath",
    duration: "18 min",
  },
  {
    title: "Slow Evening Flow",
    duration: "22 min",
  },
  {
    title: "Spinal Mobility",
    duration: "15 min",
  },
  {
    title: "Grounding Practice",
    duration: "21 min",
  },
];

export default function Library() {
  return (
    <section
      id="library"
      className="flex flex-col min-h-screen w-full max-w-lg mx-auto p-12"
    >
      <div className="flex flex-col space-y-12 text-xs">
        {videos.map((video, i) => (
          <div
            key={i}
            className="flex justify-between items-baseline border-b border-black/10 pb-4"
          >
            <p className="">
              {video.title}
            </p>

            <p className="opacity-30">
              {video.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}