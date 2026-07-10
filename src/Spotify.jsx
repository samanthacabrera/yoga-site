export default function Spotify() {
  const playlists = [
    {
      title: "Gentle Evening Flow",
      description: "Calm, slow beats for easing into stillness",
      url: "https://open.spotify.com/playlist/5rNqSI6tczOZZRLguVydSQ?si=y8TSsQtCS_mNKpEGY4AEPw&utm_source=copy-link",
    },
  ];

  return (
    <section
      id="spotify"
      className="px-6 py-24 text-[#291503] md:px-16 md:py-36"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-8 text-[11px] uppercase tracking-[0.4em] text-[#291503]/40">
          Sound Meditation
        </p>

        <h2 className="text-5xl font-light tracking-tight md:text-6xl">
          Spotify Playlists
        </h2>

        <div className="mt-16 border-t border-[#291503]/10">
          {playlists.map((list, index) => (
            <a
              key={list.title}
              href={list.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-8 border-b border-[#291503]/10 py-8 transition"
            >
              <div className="flex gap-6">
                <span className="mt-1 w-8 text-sm text-[#291503]/35">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-2xl font-light transition group-hover:translate-x-1">
                    {list.title}
                  </h3>

                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#291503]/60">
                    {list.description}
                  </p>
                </div>
              </div>

              <span className="text-xl text-[#291503]/30 transition group-hover:translate-x-1 group-hover:text-[#291503]/70">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}