export default function Connect() {
  return (
    <div
      id="connect"
      className="relative overflow-hidden px-6 py-12 md:px-16 text-[#291503]"
    >

        <div className="max-w-2xl">
          <div className="rounded-[2.5rem] border border-[#291503]/10 bg-white backdrop-blur-sm p-8 md:p-12 space-y-6">

            <p className="text-[11px] uppercase tracking-[0.4em] text-[#291503]/50">
              Newsletter
          </p>
          
            <p className="text-[#291503]/65 leading-[1.9]">
              A monthly reflection where I share what I’m exploring through yoga, reading, and daily life, as well retreat updates.
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

    </div>
  );
}