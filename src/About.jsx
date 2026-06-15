import profilepic from "/profilepic.png";

export default function About() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-6 -left-6 w-full h-full border border-[#291503]/10 rounded-[32px]" />

            <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
              <img
                src={profilepic}
                alt="Photo of Sam Cabrera"
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="mb-12">
              <p className="uppercase tracking-[0.4em] text-xs text-[#8B6B4A] mb-4">
                Meet
              </p>

              <h2 className="relative text-6xl md:text-8xl font-light leading-none text-[#291503]">
                Sam
              </h2>
            </div>

            <div className="max-w-2xl space-y-8 text-base md:text-lg leading-[1.9] opacity-80">
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
