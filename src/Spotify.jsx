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
    <section className="h-full overflow-hidden px-6 py-16 text-[#291503] md:px-16">
      <div className="mx-auto flex h-full max-w-5xl flex-col justify-center">
        <h2 className="text-5xl font-light tracking-tight md:text-6xl">
          Spotify Playlists
        </h2>

        <div className="mt-12 border-t border-[#291503]/10">
          {playlists.map((list, index) => (
            <a
              key={list.title}
              href={list.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-8 border-b border-[#291503]/10 py-6"
            >
              <div className="flex gap-6">
                <span className="mt-1 w-8 text-sm text-[#291503]/35">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-2xl font-light transition-transform duration-300 group-hover:translate-x-1">
                    {list.title}
                  </h3>

                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#291503]/60">
                    {list.description}
                  </p>
                </div>
              </div>

              <span className="text-xl text-[#291503]/30 transition-all group-hover:translate-x-1 group-hover:text-[#291503]/70">
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