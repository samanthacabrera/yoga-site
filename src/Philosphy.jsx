export default function Philosophy() {
  return (
    <section className="relative overflow-hidden rounded-lg bg-[#355070] text-white px-8 py-16 md:px-16 md:py-24">
      <div className="absolute top-24 right-0 w-[500px] h-[500px] bg-[#FFBC40]/30 blur-3xl rounded-full" />

      <div className="relative max-w-5xl">
        <p className="uppercase text-xs tracking-[0.35em]  text-[#FFBC40] mb-10">
          Our Philosophy
        </p>

        <h2 className="text-5xl md:text-6xl leading-loose tracking-tight">
          Move & Explore
        </h2>

        <div className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-4">
            <p><span className="italic">Sam Flows</span> is my yoga diary: a place to document flows, routines, lessons, and experiences as they unfold. Some days bring progress. Other days bring perspective. Both are worth sharing.</p>
            <p>Through yoga, Pilates, and mindful movement, I've found new ways to build strength, improve mobility, and reconnect with my body. By sharing what I learn along the way, I hope to inspire others to explore movement and experience the same sense of well-being that keeps drawing me back to the mat. </p>
            <p>Remember, there is no finish line, only the practice itself and the joy of returning to it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}