export default function Channel() {
  return (
    <section 
        id="cta"
        className="relative overflow-hidden rounded-lg bg-[#355070] px-8 py-24 md:px-16">

      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 bg-[#FFBC40]/15 blur-3xl rounded-full" />
        <div className="absolute left-0 bottom-0 h-[320px] w-[320px] bg-[#c4dfe9]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative flex flex-col items-center text-center">

        <p className="text-[10px] tracking-[0.5em] text-[#FFBC40] uppercase">
          new video every Monday
        </p>

        <h2 className="mt-6 text-3xl md:text-5xl leading-tight text-white tracking-tight">
          watch the latest flow
        </h2>

        <p className="mt-4 max-w-md text-sm text-white/60 leading-relaxed">
          an exploration of movement and breath.
        </p>

        <a
          href="https://youtube.com"
          target="_blank"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#FFBC40] bg-[#FFBC40] px-6 py-3 text-xs tracking-[0.35em] uppercase text-[#291503] transition hover:bg-transparent hover:text-[#FFBC40]"
        >
          watch now
          <span>↗</span>
        </a>

      </div>
    </section>
  );
}