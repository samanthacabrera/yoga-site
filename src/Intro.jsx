function Intro() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-7">
        <p className="uppercase text-xs tracking-[0.3em] font-black mb-6">
          About The Channel
        </p>

        <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight mb-8">
          Yoga for real life,
          <br />
          not perfection.
        </h2>

        <p className="text-lg leading-relaxed font-medium max-w-2xl my-4">
        I first started by making videos just for my grandparents, showing them simple stretches they could do at home.
        </p>
        <p className="text-lg leading-relaxed font-medium max-w-2xl my-4">
          But in the process, I realized I loved teaching. Over time, it naturally became something I did more consistently.
        </p>
        <p className="text-lg leading-relaxed font-medium max-w-2xl my-4">
          Some flows are strong, some are slow, and most are somewhere in between. What matters most to me is showing up, even in small ways, and staying consistent over time.
          Because I’ve found that consistency is what actually creates change. 
        </p>
        <p className="text-lg leading-relaxed font-medium max-w-2xl my-4">
          That’s what <span className="italic uppercase">la cabra yoga</span> is built on.
        </p>
      </div>

      <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-center">
        <div className="text-2xl my-6">
          ❝
        </div>

        <blockquote className="text-3xl md:text-4xl">
          Your practice
          begins where
          you are.
        </blockquote>

        <div className="text-2xl my-6 self-end">
          ❞
        </div>
      </div>
    </section>
  );
}

export default Intro;

