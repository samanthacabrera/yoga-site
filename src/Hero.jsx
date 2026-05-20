export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-[#c4dfe9] px-6">
      <div className="text-center">
        <p className="
          mt-10
          text-[#355070]
          uppercase
          tracking-[0.35em]
          text-xs md:text-sm
          leading-relaxed
        ">
          new videos every Sunday 
        </p>

        <p className="
          mt-6
          text-[#2c1e11]/80
          text-sm md:text-base
          leading-relaxed
        ">
        Explore my non-traditional approach to yoga. 
        Vinyasa-inspired flows that build heat and culitvate a sense of play.
        </p>
        <p>
        Each class culminates in my signature core circuit, ending with a surrender into savasana.
        </p>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="
            inline-block mt-12
            px-10 py-3
            border border-[#2c1e11]/30
            text-[#2c1e11]
            uppercase
            tracking-[0.5em]
            text-xs
            transition-all duration-500
          "
        >
          watch on youtube
        </a>

      </div>
    </section>
  );
}