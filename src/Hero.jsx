export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 relative overflow-hidden rounded-lg shadow bg-[#FFBC40] px-8 py-16 md:px-16 md:py-24">
        <div className="absolute top-12 left-4 w-[600px] h-[500px] bg-orange-600/30 blur-3xl rounded-full" />

        <p className="uppercase text-xs tracking-[0.3em] mb-6">
          New videos every week
        </p>

        <div className="flex flex-col max-w-2xl font-medium">
          <p className="text-2xl">❝</p>

          <h1 className="text-4xl md:text-7xl leading-tight tracking-tight px-8 md:px-12 py-8">
            All you need is twenty minutes.
          </h1>

          <p className="text-2xl mr-8 -mt-2 self-end">❞</p>
        </div>

        <div className="text-lg space-y-6 my-6 md:my-12 max-w-2xl">
          <p>
            Every Monday, I share a new 20-minute vinyasa flow, inspired by my personal practice.
          </p>

          <p>
            I pride my flows on being accessible for beginners while still offering challenge, depth, and room to grow for any yogi. 
          </p>
        </div>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 uppercase text-[11px] tracking-[0.35em] border border-[#2c1e11] rounded-full transition-all 
                  bg-[#2c1e11]
                  bg-transparent hover:bg-[#2c1e11] hover:text-white"
        >
          Watch Latest Flow
        </a>
      </div>

      <div className="lg:col-span-4 grid grid-cols-1 gap-6">
        <div className="bg-[#355070] text-white rounded-lg p-8 min-h-[170px] flex flex-col justify-between">
          <div>
            <p className="uppercase text-xs tracking-[0.25em] mb-6">
              Flows
            </p>

            <h3 className="text-6xl leading-none">
              1+
            </h3>
          </div>

          <p className="mt-5 text-lg">
            guided vinyasa flows to explore
          </p>
        </div>

        <div className="bg-[#c4dfe9] rounded-lg p-8 min-h-[170px] flex flex-col justify-between">
          <div>
            <p className="uppercase text-xs tracking-[0.25em] mb-6">
              Community
            </p>

            <h3 className="text-6xl leading-none">
              1+
            </h3>
          </div>

          <p className="mt-5 text-lg">
            yogis part of our growing community
          </p>
        </div>

        <div className="bg-[#355070] text-white rounded-lg p-8 min-h-[170px] flex flex-col justify-between">
          <div>
            <p className="uppercase text-xs tracking-[0.25em] mb-6">
              Views
            </p>

            <h3 className="text-6xl leading-none">
              1K+
            </h3>
          </div>

          <p className="mt-5 text-lg">
            views across all platforms
          </p>
        </div>
      </div>
    </section>
  );
}