export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 rounded-lg bg-[#355070] text-white p-8 md:p-12 flex flex-col justify-around">
          <h2 className="text-5xl md:text-7xl tracking-[-0.05em]">
            20 
            <br />
            minutes
            <br />
            is all 
            <br />
            you 
            <br />
            need.
          </h2>

          <div className="max-w-2xl space-y-5">
            <p className="text-lg">
              Vinyasa-inspired flows that build heat and cultivate a sense of play.
            </p>

            <p className="text-lg">
              Each class ends with my signature core circuit,
              followed by a surrender into savasana.
            </p>
          </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="p-1 -translate-x-1 text-sm   tracking-widest hover:text-[#355070] hover:bg-white transition-all duration-300"
          >
            Watch latest flow
          </a>
        </div>
      </div>

      <div className="lg:col-span-4 grid grid-cols-1 gap-6">
        <div className=" -[#d18f2f] bg-[#FFBC40] rounded-lg p-8 min-h-[170px] flex flex-col justify-between">
          <div>
            <p className="uppercase text-xs tracking-[0.25em]  mb-6">
              Flows
            </p>

            <h3 className="text-6xl  leading-none">
              1+
            </h3>
          </div>

          <p className="mt-5  text-lg">
            guided vinyasa flows to explore
          </p>
        </div>

        <div className=" -[#9fb9c4] bg-[#c4dfe9] rounded-lg p-8 min-h-[170px] flex flex-col justify-between">
          <div>
            <p className="uppercase text-xs tracking-[0.25em]  mb-6">
              Community
            </p>

            <h3 className="text-6xl  leading-none">
              1+
            </h3>
          </div>

          <p className="mt-5  text-lg">
            yogis apart of our growing community
          </p>
        </div>

        <div className=" -[#1a1a1a] bg-[#2c1e11] text-white rounded-lg p-8 min-h-[170px] flex flex-col justify-between">
          <div>
            <p className="uppercase text-xs tracking-[0.25em]  mb-6">
              Views
            </p>

            <h3 className="text-6xl  leading-none">
              1M+
            </h3>
          </div>

          <p className="mt-5  text-lg">
            views across all platforms
          </p>
        </div>
      </div>
    </section>
  );
}