import profilepic from "/profilepic.png";

export default function About() {
  return (
    <section
   id="about"
   className="px-6 py-24 text-[#291503] md:px-16 md:py-36"
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-10 text-[11px] uppercase tracking-[0.4em] text-[#291503]/50">About </p>
        <h2 className="text-5xl font-light tracking-tight md:text-6xl mb-12">
          Meet Sam
        </h2>

      <div className="grid grid-cols-2 gap-12">
        <img
          src={profilepic}
          alt="Photo of Sam Cabrera"
          className="mb-12 aspect-[4/5] w-full rounded-3xl object-cover"
        />

        <h2 className="mb-12 text-5xl md:text-7xl trakcing-tighter opacity-80 font-light">
          "Yoga changed the way I move through life."
        </h2>
      </div>


    <div className="space-y-6 text-lg leading-loose text-[#291503]/70">
      <p>
        I'm Sam, originally from Southern California and now living in Utrecht.
      </p>

      <p>
        I discovered yoga in 2019 while looking for a simple way to stay active, starting with 20-minute YouTube flows at home.
        It quickly became a constant in my daily routine and changed the way I move through life.
      </p>

      <p>
        In 2026, after years of practicing at home, I began attending classes in Utrecht.
        My instructors challenged me refine my practice and learn the philosophy that exists beyond the physical.
      </p>

      <p>
        Later that year, I started a personal reading challenge focused on learning more about yoga, philosophy, and related areas of thought.
        Through continual reflection, I hope to deepen my understanding of both yoga and myself.
      </p>
    </div>
  </div>
</section>

);
}
