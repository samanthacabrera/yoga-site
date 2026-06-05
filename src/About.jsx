import profilepic from "/profilepic.png";

export default function About() {
  return (
    <section className="pt-28 md:pt-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-start">
        <div className="lg:col-span-4">
          <div className="aspect-[3/4] overflow-hidden rounded-[28px] ">
            <img
              src={profilepic}
              alt="Photo of Sam Cabrera"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col justify-between h-full lg:pl-10 text-left">

          <div className="space-y-10">

            <div className="space-y-2">
              <p className="uppercase font-medium text-sm tracking-[0.35em] opacity-80">
                Meet
              </p>

              <h2 className="text-5xl md:text-7xl font-light leading-none text-[#291503]">
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