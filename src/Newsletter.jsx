export default function Newsletter() {
  return (
    <section
      id="connect"
      className="flex h-full w-full items-center overflow-hidden px-8 py-10 text-[#291503] md:px-12 lg:px-16"
    >
      <div className="flex w-full max-w-xl flex-col justify-center">

        <h2 className="font-light tracking-tight md:text-xl">
          Newsletter
        </h2>

        <div className="mt-8 border-t border-[#291503]/10 pt-8">
          <div className="space-y-6 text-sm leading-7 text-[#291503]/65 md:text-base">
            <p>
              A monthly reflection where I share what I’m exploring through my
              yoga practice and readings, my daily life, as well as my retreat updates.
            </p>

            <p>
              If you'd like to follow along, you can join the newsletter below.
            </p>

            <form className="flex items-center gap-3 pt-1">
              <input
                type="email"
                placeholder="your email"
                className="w-full bg-transparent py-1 text-sm text-[#291503] placeholder:text-[#291503]/40 focus:outline-none"
              />

              <button
                type="submit"
                className="shrink-0 text-sm text-[#291503]/50 transition hover:text-[#291503]"
              >
                join →
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}