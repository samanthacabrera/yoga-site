export default function Channel() {
  return (
    <section
      id="channel"
      className="relative overflow-hidden rounded-lg scroll-mt-12 bg-[#355070] px-6 py-20 text-white md:px-12"
    >
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-[#FFBC40]/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-[28rem] w-[28rem] rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#FFBC40]/70">
          new video every Monday
        </p>

        <h2 className="mt-5 text-5xl font-light tracking-tight md:text-6xl">
          join us on youtube
        </h2>
      </div>

      <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">
        <div className="grid md:grid-cols-[1.6fr_1fr]">
          <div className="group relative aspect-video overflow-hidden">
            <img
              src="/thumbnail.jpg"
              alt="Latest video"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition group-hover:scale-105 group-hover:text-[#FFBC40]">
                ▶
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 md:p-10">
            <span className="text-[11px] uppercase tracking-[0.35em] text-white/50">
              latest flow
            </span>

            <h3 className="mt-3 text-3xl font-light tracking-tight text-white">
              Morning Power Flow
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-white/60">
              A quick session focused on breath-led movement, ending with my signature core curcuit.
            </p>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-[#FFBC40]"
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