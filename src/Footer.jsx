export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-end py-24">
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
