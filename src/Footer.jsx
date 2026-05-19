export default function Footer() {
  return (
    <footer className="w-screen min-h-[25vh] flex items-end p-12">
      <div className="w-full max-w-8xl mx-auto flex flex-col md:flex-row md:justify-between">

        <div className="hidden md:flex">
          ninth life yoga
        </div>

        <div className="flex gap-2 self-center">
          <a href="mailto:samantha.n.cabrera@gmail.com" className="hover:text-neutral-300 transition">
            contact 
          </a>
            <span>|</span>
          <a href="https://buymeacoffee.com" target="_blank" className="hover:text-neutral-300 transition">
            support 
          </a>
            <span>|</span>
          <a href="https://www.youtube.com/@ninthlifeyoga" target="_blank" className="hover:text-neutral-300 transition">
            yt channel
          </a>
        </div>
      </div>
    </footer>
  );
}