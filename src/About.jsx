import profilepic from "/profilepic.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-12 text-[#291503] md:px-16 md:py-28"
    >
      <div className="relative mx-auto max-w-5xl">
        <p className="mb-10 text-[11px] uppercase tracking-[0.4em] text-[#291503]/50">
          About
        </p>

        <h2 className="text-5xl font-light tracking-tight md:text-6xl">
          Meet Sam
        </h2>

        <div className="my-14 rounded-[2.5rem] border border-[#291503]/10 bg-white/50 backdrop-blur-sm px-8 py-10 md:px-12 md:py-14">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-2 rounded-[2.5rem] border border-[#291503]/10" />

                <div className="relative overflow-hidden rounded-[2.5rem] bg-white/40 backdrop-blur-sm">
                  <img
                    src={profilepic}
                    alt="Photo of Sam Cabrera"
                    className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6 text-base leading-[1.9] text-[#291503]/70">
                <p>
                  I was born and raised in Southern California and currently live
                  in Utrecht with my husband and our sweet cat, Ares.
                </p>

                <p>
                  In my free time, you can find me crocheting, solving puzzles,
                  or watching movies. When the weather permits, I love to go on
                  picnics and hike.
                </p>

                <p>
                  I am in constant pursuit of new experiences, embracing the
                  richness that life has to offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}