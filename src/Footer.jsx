export default function Footer() {
  return (
    <footer className="w-full min-h-[25vh] flex flex-col items-end py-24">
      <div className="w-full bg-[#c4dfe9] rounded-lg px-8 py-16 md:px-16 md:py-24 mb-64 relative">
          <div className="absolute top-10 right-12 w-[300px] h-[300px] bg-amber-300/30 blur-3xl rounded-full" />
          <p className="text-5xl md:text-6xl leading-loose tracking-tight mb-8">
            Don't miss a thing
          </p>

          <p className="leading-relaxed">
            Sign up for our newsletter to have challenges, reflections, and retreat updates delivered directly to your inbox.
          </p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent border-b border-[#291503]/30 pt-6 pb-2 outline-none placeholder:text-black/40"
            />

            <button
              type="submit"
              className="uppercase text-[11px] tracking-[0.35em] border-b border-transparent hover:border-[#291503]"
            >
              Subscribe
            </button>
          </form>

        </div>
      <div className="w-full mx-auto flex flex-col md:flex-row md:justify-between">

        <div className="hidden md:flex">
          Sam Flows 
        </div>

        <div className="flex gap-2 self-center">
          <a href="mailto:samantha.n.cabrera@gmail.com" className="hover:italic transition">
            contact 
          </a>
            <span>|</span>
          <a href="https://buymeacoffee.com" target="_blank" className="hover:italic transition">
            support 
          </a>
            <span>|</span>
          <a href="https://www.youtube.com/" target="_blank" className="hover:italic transition">
            yt channel
          </a>
        </div>
      </div>
    </footer>
  );
}
