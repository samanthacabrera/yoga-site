export default function Spotify() {
  const playlists = [
    {
      title: "Core Power Flow",
      description: "Driving rhythms and steady intensity for strong, dynamic movement.",
      url: "https://open.spotify.com/",
    },
    {
      title: "Bright Morning Flow",
      description: "Light, uplifting tracks that feel open and energizing.",
      url: "https://open.spotify.com/",
      },
    {
      title: "Gentle Evening Flow",
      description: "Soft, slower beats for easing into stillness.",
      url: "https://open.spotify.com/",
      },
  ];

  return (
    <section
      id="spotify"
      className="relative overflow-hidden scroll-mt-12 px-6 py-24 text-[#291503] md:px-16 md:py-28"
    >
      <div className="absolute inset-0 bg-[#f3f3ee]/70" />

      <div className="relative mx-auto max-w-5xl">
        <p className="mb-10 text-[11px] uppercase tracking-[0.4em] text-[#291503]/50">
          Meditation in Sound
        </p>

        <h2 className="text-5xl font-light tracking-tight md:text-6xl">
          Spotify Playlists
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#291503]/65">
          Discover songs I return to time and time again during my personal practice. 
        </p>

        <div className="mt-14 space-y-6">
          {playlists.map((list) => (
            <a
              key={list.title}
              href={list.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-[2.5rem] border border-[#291503]/10 bg-white/50 backdrop-blur-sm px-8 py-8 md:px-10 md:py-10 transition hover:bg-white/70"
            >
              <div className="flex items-start justify-between gap-10">
                <div>
                  <h3 className="text-2xl font-light tracking-tight text-[#291503]">
                    {list.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#291503]/60 max-w-md">
                    {list.description}
                  </p>
                </div>

                <span className="text-sm text-[#291503]/30 group-hover:text-[#291503]/60 transition">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}