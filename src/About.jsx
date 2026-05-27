export default function About() {
  return (
    <section className="space-y-16 pt-24 text-[#2c1e11]">
      <div className="flex flex-col items-center text-center space-y-12">
        <div className="relative">
          <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#355070]/20 rounded-full" />

          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-[#2c1e11] bg-[#c4dfe9] flex items-center justify-center overflow-hidden">
            <p className="uppercase text-xs tracking-[0.35em] font-black text-[#2c1e11]/60">
              add photo hereeee 
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
            <p className="uppercase tracking-[0.30em] font-medium text-[#2c1e11]/60">
            Get to Know
            </p>  
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-wide">
            Sam
          </h3>
        </div>

        <p className="mt-12 text-[#2c1e11]/70 max-w-2xl leading-loose">
         I was born and raised in Southern California. I currently live in Utrecht with my husband and our sweet cat, Ares. In my free time, you can find me crocheting, solving puzzles, or watching movies. When the weather permits, I love to go on picnics and hike. I am in constant pursuit of new experiences, embracing the richness that life has to offer.
        </p>
      </div>
    </section>
  );
}