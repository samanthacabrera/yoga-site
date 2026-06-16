import profilepic from "/profilepic.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden scroll-mt-12 px-6 py-24 text-[#291503] md:px-16 md:py-28">
      <div className="absolute inset-0 bg-[#f3f3ee]/70" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-12">
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

          <div className="lg:col-span-7 text-center lg:text-left">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#291503]/50">
              Meet
            </p>

            <h2 className="mt-6 text-6xl font-light tracking-tight md:text-8xl">
              Sam
            </h2>

            <div className="mx-auto mt-10 max-w-xl space-y-6 text-base leading-[1.9] text-[#291503]/70">
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
    </section>
  );
}