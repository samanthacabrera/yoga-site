// export default function Footer() {
//   return (
//     <footer className=" w-full min-h-[25vh] flex items-end py-12">
//       <div className="w-full mx-auto flex flex-col md:flex-row md:justify-between">

//         <div className="hidden md:flex">
//           La Cabra Yoga 
//         </div>

//         <div className="flex gap-2 self-center">
//           <a href="mailto:samantha.n.cabrera@gmail.com" className="hover:text-neutral-300 transition">
//             contact 
//           </a>
//             <span>|</span>
//           <a href="https://buymeacoffee.com" target="_blank" className="hover:text-neutral-300 transition">
//             support 
//           </a>
//             <span>|</span>
//           <a href="https://www.youtube.com/" target="_blank" className="hover:text-neutral-300 transition">
//             yt channel
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="min-h-[60vh] py-24 md:py-32 border-t border-[#291503]/10 flex items-end">
      <div className="w-full grid lg:grid-cols-12 gap-16 items-end">

        <div className="lg:col-span-7 flex flex-col justify-between h-full">

          <div>
            <h2 className="text-4xl md:text-6xl tracking-[-0.08em] font-light leading-none text-[#291503]">
             La <br/> Cabra <br/> Yoga
            </h2>
            <p className="uppercase text-[11px] tracking-[0.35em] opacity-80 mt-8">
            with Sam Cabrera
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-black/60 mt-16">
            <a href="mailto:samantha.n.cabrera@gmail.com">
              contact
            </a>

            <span>|</span>

            <a
              href="https://buymeacoffee.com"
              target="_blank"
              rel="noreferrer"
            >
              support
            </a>

            <span>|</span>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              yt channel
            </a>
          </div>

        </div>

        <div className="self-start lg:col-span-5">

          <p className="uppercase text-[11px] tracking-[0.35em] text-[#355070] mb-4">
            Newsletter
          </p>

          <p className="text-black/65 leading-relaxed max-w-sm mb-10">
            New flows, reflections, and retreat updates delivered when
            there's something worth sharing.
          </p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent border-b border-[#291503]/30 py-4 outline-none placeholder:text-black/40"
            />

            <button
              type="submit"
              className="uppercase text-[11px] tracking-[0.35em] border-b border-transparent hover:border-[#291503]"
            >
              Subscribe
            </button>
          </form>

        </div>

      </div>
    </footer>
  );
}