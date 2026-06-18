export default function Footer() {
  return (
    <footer
      id="connect"
      className="relative overflow-hidden px-6 py-12 md:px-16 text-[#291503]"
    >
      <div className="relative mx-auto max-w-5xl space-y-24">

        <div className="max-w-2xl">
          <div className="rounded-[2.5rem] border border-[#291503]/10 bg-white/40 backdrop-blur-sm p-8 md:p-12 space-y-6">

            <p className="text-[11px] uppercase tracking-[0.4em] text-[#291503]/50">
              Newsletter
            </p>

            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              A monthly reflection
            </h2>

            <p className="text-[#291503]/65 leading-[1.9]">
              I share what I’m exploring through yoga, reading, and daily life, as well as monthly challenges and retreat updates.
            </p>

            <form className="flex items-center gap-3 pt-4">
              <input
                type="email"
                placeholder="your email"
                className="w-full bg-transparent border-b border-[#291503]/20 py-2 text-sm text-[#291503] placeholder:text-[#291503]/40 focus:outline-none focus:border-[#291503]/50 transition"
              />

              <button
                type="submit"
                className="text-sm text-[#291503]/40 hover:text-[#291503] transition-all duration-200 border border-[#291503]/40 hover:border-[#291503] rounded-full px-4 py-1"
              >
                join
              </button>
            </form>

          </div>
        </div>

        <div className="border-t border-[#291503]/10" />

        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10">

          <div className="text-sm text-[#291503]/60">
            Sam Flows © 2026
          </div>

          <div className="flex gap-3 text-sm text-[#291503]/60">
            <a
              href="mailto:samantha.n.cabrera@gmail.com"
              className="hover:text-[#291503] transition"
            >
              contact
            </a>

            <span className="text-[#291503]/20">/</span>

            <a
              href="https://buymeacoffee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#291503] transition"
            >
              support
            </a>

            <span className="text-[#291503]/20">/</span>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#291503] transition"
            >
              youtube
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}