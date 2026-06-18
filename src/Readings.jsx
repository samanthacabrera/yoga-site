const currentReading = {
  month: "June 2026",
  title: "The Heart of Yoga Teachings",
  author: "Ram Dass",
};

const pastReadings = [
  {}
];

const futureReadings = [
  { title: "Living Your Yoga: Finding the Spiritual in Everyday Life", author: "Judith Hanson Lasater PhD PT" },
  { title: "Roots of Yoga", author: "James Mallinson, Mark Singelton" },
  { title: "The Yoga Sutras of Patanjali", author: "Patanjali, Sri Swami Satchidananda" },
  { title: "Yoga as Embodied Resistance...", author: "Anijali Rao, Thenmozhi Soundararajan" },
];

export default function Readings() {
  return (
    <section
      id="readings"
      className="relative overflow-hidden px-6 py-12 text-[#291503] md:px-16 md:py-28"
    >
      <div className="relative mx-auto max-w-5xl">
        <p className="mb-10 text-[11px] uppercase tracking-[0.4em] text-[#291503]/50">
          Readings
        </p>

        <h2 className="text-5xl font-light tracking-tight md:text-6xl">
          Dive Deeper 
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#291503]/65">
            I focus on one book each month and try to read most days, allowing the ideas
            to settle alongside practice.
            <br />
            <br />
            I invite you to read along with this month’s book, or explore any of the other titles listed here.
        </p>

        <div className="mt-14 space-y-12">

          <div className="rounded-[3rem] border border-[#291503]/10 bg-white/60 backdrop-blur-md p-10 md:p-14">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#291503]/40">
                Reading now –   {currentReading.month}
                </p>
            
              <h3 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">
                {currentReading.title}
              </h3>

              <p className="mt-4 text-sm italic tracking-widest text-[#291503]/45">
                {currentReading.author}
              </p>
          </div>

          <div className="grid gap-2 md:grid-cols-2 md:items-start">

            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#291503]/45">
                Past Readings
              </p>

              <div className="mt-8 space-y-10">
                {pastReadings.map((book) => (
                  <article key={book.title}>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#291503]/30">
                      {book.month}
                    </p>

                    <h4 className="mt-2 text-xl font-light tracking-tight">
                      {book.title}
                    </h4>

                    <p className="text-sm italic text-[#291503]/40">
                      {book.author}
                    </p>

                    <p className="mt-4 border-l border-[#291503]/10 pl-4 text-[#291503]/65 leading-relaxed">
                      {book.note}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="md:border-l md:border-[#291503]/10 md:pl-10">
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#291503]/45">
                Future Readings
              </p>

              <div className="mt-8 space-y-5">
                {futureReadings.map((book) => (
                  <div
                    key={book.title}
                    className="flex items-start justify-between gap-6"
                  >
                    <div>
                      <p className="text-lg font-light tracking-tight text-[#291503]/80">
                        {book.title}
                      </p>
                      <p className="text-sm italic text-[#291503]/40">
                        {book.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}