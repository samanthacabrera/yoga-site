function Spotify() {
  const playlists = [
    {
      title: "Gentle Flow",
      description: "Calm beats for easing into stillness.",
      url: "https://open.spotify.com/playlist/5rNqSI6tczOZZRLguVydSQ",
    },
    {
      title: "Hypno Flow",
      description: "Funky and rhythmic sound meditation.",
      url: "https://open.spotify.com/playlist/5rNqSI6tczOZZRLguVydSQ",
    },
    {
      title: "Energy Flow",
      description: "Happy songs to lift your mood.",
      url: "https://open.spotify.com/playlist/5rNqSI6tczOZZRLguVydSQ",
    },
    {
      title: "Power Flow",
      description: "Hard bass to cultivate inner fire.",
      url: "https://open.spotify.com/playlist/5rNqSI6tczOZZRLguVydSQ",
    },
  ];

  return (
    <section className="flex h-full w-full items-center overflow-hidden px-8 py-10 text-[#291503] md:px-12 lg:px-16">
      <div className="flex w-full max-w-xl flex-col justify-center">

        <h2 className="font-light tracking-tight md:text-xl">
          Spotify Playlists
        </h2>

        <div className="mt-8 border-t border-[#291503]/10">
          {playlists.map((list, index) => (
            <a
              key={list.title}
              href={list.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-5 border-b border-[#291503]/10 py-4"
            >
              <div className="flex min-w-0 gap-4">

                <span className="mt-1 w-5 shrink-0 text-xs text-[#291503]/35">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h3 className="text-lg font-light transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
                    {list.title}
                  </h3>

                  <p className="mt-1.5 max-w-md text-xs leading-relaxed text-[#291503]/60 md:text-sm">
                    {list.description}
                  </p>
                </div>
              </div>

              <span className="mt-1 shrink-0 text-base text-[#291503]/30 transition-all group-hover:translate-x-1 group-hover:text-[#291503]/70">
                ↗
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Spotify;