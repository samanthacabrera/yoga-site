export default function Channel() {
  return (
    <section
      id="channel"
      className="relative overflow-hidden scroll-mt-12 px-6 py-24 text-[#291503] md:px-12"
    >
      <div className="absolute inset-0 bg-[#f3f3ee]/70" />

      <div className="absolute left-1/2 top-24 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#FFBC40]/8 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-[28rem] w-[28rem] rounded-full bg-[#355070]/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-[#291503]/50">
          new video every Monday
        </p>

        <h2 className="mt-6 text-5xl font-light tracking-tight md:text-6xl">
          join us on youtube
        </h2>
      </div>

      <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2.5rem] border border-[#291503]/10 bg-white/50 backdrop-blur-sm shadow-sm transition-shadow duration-700 hover:shadow-lg">
        <div className="grid md:grid-cols-[1.6fr_1fr]">
          <div className="group relative aspect-video overflow-hidden">
            <img
              src="/thumbnail.jpg"
              alt="Latest video"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/80 text-[#291503]/70 transition group-hover:scale-105">
                ▶
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 md:p-10">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#291503]/50">
              latest flow
            </span>

            <h3 className="mt-3 text-3xl font-light tracking-tight text-[#291503]">
              Morning Power Flow
            </h3>

            <p className="mt-4 text-sm leading-[1.9] text-[#291503]/70">
              A quick session focused on breath-led movement, ending with my signature core curcuit.
            </p>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm text-[#291503]/70 transition hover:italic"
            >
              Watch on YouTube
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}