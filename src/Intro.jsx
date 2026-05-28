function Intro() {
  return (
    <section className="relative overflow-hidden rounded-lg shadow bg-[#FFBC40] px-8 py-16 md:px-16 md:py-24">
      <div className="absolute top-12 left-24 w-[500px] h-[500px] bg-orange-600/30 blur-3xl rounded-full" />
        <p className="uppercase text-xs tracking-[0.3em] mb-6">
          About The Channel
        </p>

        <div className="flex flex-col max-w-xl p-8 font-bold">
        <p className="text-2xl">❝</p>
        <h2 className="text-4xl md:text-5xl leading-loose tracking-tight p-12">
          Your practice begins where you are.
        </h2>
        <p className="text-2xl mr-8 -mt-8 self-end">❞</p>
        </div>
        
        <div className="text-lg space-y-8 my-12 max-w-2xl">
          <p>
          I first started sharing my yoga practice by making simple stretch videos for my grandparents. Through that, I realized I loved helping others feel healthier and more connected to their bodies. What started as a personal project, gradually grew into something bigger.
          </p>
          <p>
            The flows I share online are a concise version of my own personal daily flows. I want the videos to feel accessible for beginners while still offering challenge, depth, and room to grow for people who return consistently.
          </p>
          <p>
            No matter your experience, flexibility, or starting point, there is something here for you. The most important part of any practice is simply showing up to the mat.
          </p>
       </div>
    </section>
  );
}

export default Intro;

