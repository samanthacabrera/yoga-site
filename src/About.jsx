// import profilepic from "/profilepic.png"
// export default function About() {
//   return (
//     <section className="pt-24 text-[#2c1e11]">
//       <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
//         <div className="lg:col-span-5 flex justify-center lg:justify-end">
//           <div className="relative mr-12">
//             <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-[#c4dfe9]" />

//             <div className="relative w-[180px] h-[260px] md:w-[240px] md:h-[340px] overflow-hidden rounded-2xl">
//                <img
//                   src={profilepic}
//                   alt="Photo of Sam Cabrera"
//                   className="w-full h-full object-cover"
//                 />
//             </div>
//           </div>
//         </div>

//         <div className="lg:col-span-7 space-y-8">
//           <div className="space-y-4">
//             <p className="uppercase text-xs tracking-[0.3em] opacity-70">
//               Meet
//             </p>

//             <h2 className="text-4xl md:text-5xl  uppercase tracking-tight leading-none">
//               Sam
//             </h2>
//           </div>

//           <div className="space-y-6 max-w-xl opacity-70">
//             <p>
//               I was born and raised in Southern California and currently live
//               in Utrecht with my husband and our sweet cat, Ares.
//             </p>

//             <p>
//               In my free time, you can find me crocheting, solving puzzles, or watching movies.
//               When the weather permits, I love to go on picnics and hike.
//             </p>

//             <p>
//               I am in constant pursuit of new experiences, embracing the richness that life has to offer.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import profilepic from "/profilepic.png";

export default function About() {
  return (
    <section className="bg-[#c4dfe9] relative overflow-hidden rounded-lg px-8 py-16 md:px-16 md:py-24">

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FFBC40]/50 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-[200px] h-[280px] md:w-[260px] md:h-[360px] overflow-hidden">
            <img
              src={profilepic}
              alt="Photo of Sam Cabrera"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">

          <p className="uppercase tracking-widest text-[#355070]/80">
            Meet
          </p>

          <h2 className="text-5xl md:text-6xl  uppercase tracking-tight leading-[0.9]">
            Sam
          </h2>

          <div className="space-y-6 max-w-xl text-[#291503]/75 leading-loose">

            <p>
              I was born and raised in Southern California and currently live
              in Utrecht with my husband and our sweet cat, Ares.
            </p>

            <p>
              In my free time, you can find me crocheting, solving puzzles, or watching movies.
              When the weather permits, I love to go on picnics and hike.
            </p>

            <p>
              I am in constant pursuit of new experiences, embracing the richness that life has to offer.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}