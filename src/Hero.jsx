export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 relative overflow-hidden rounded-lg shadow bg-[#c35d31] text-white px-8 py-16 md:px-16 md:py-24">
        <div className="absolute top-12 left-12 w-[500px] h-[500px] bg-yellow-300/30 blur-3xl rounded-full" />

        <p className="uppercase text-xs tracking-[0.3em] mb-6">
          New videos every week
        </p>

        <div className="flex flex-col max-w-2xl font-bold">
          <p className="text-2xl">❝</p>

          <h1 className="text-4xl md:text-6xl leading-tight tracking-tight px-8 md:px-12 py-8">
            All you need is twenty minutes.
          </h1>

          <p className="text-2xl mr-8 -mt-2 self-end">❞</p>
        </div>

        <div className="text-lg space-y-6 my-12 max-w-2xl">
          <p>
            Every Monday, a new 20-minute Power Vinyasa Flow is posted, with a
            focus on building strength and flexibility.
          </p>

          <p>
            Every Wednesday, you'll find a 10-minute Stretch & Breath Flow designed
            to improve mobility.
          </p>
        </div>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="inline-block uppercase text-xs tracking-[0.3em] hover:opacity-70 transition-opacity"
        >
          Watch Latest Flow
        </a>
      </div>

      <div className="lg:col-span-4 grid grid-cols-1 gap-6">
        <div className="bg-[#FFBC40] rounded-lg p-8 min-h-[170px] flex flex-col justify-between">
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

        <div className="bg-[#2c1e11] text-white rounded-lg p-8 min-h-[170px] flex flex-col justify-between">
          <div>
            <p className="uppercase text-xs tracking-[0.25em] mb-6">
              Views
            </p>

            <h3 className="text-6xl leading-none">
              1M+
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