export default function Philosophy() {
  return (
    <section className="relative overflow-hidden rounded-lg border border-[#2a3f55] bg-[#355070] text-white px-8 py-16 md:px-16 md:py-24">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFBC40]/10 blur-3xl rounded-full" />

      <div className="relative max-w-5xl">
        <p className="uppercase text-xs tracking-[0.35em] font-black text-[#FFBC40] mb-10">
          consistency & adaptability
        </p>

        <h2 className="text-5xl md:text-7xl tracking-[-0.06em] font-black uppercase max-w-4xl">
            Teaching
          <br />
          Philosophy
        </h2>

        <div className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-11 space-y-4">
            <p className="leading-loose">
                I’ve always felt a connection to mountain goats. They’re resilient, adaptable animals that navigate steep and unpredictable terrain with steady focus and balance. They don’t resist the environment, they adjust to it.
            </p>
            <p className="leading-loose">
                My practice is rooted in this same principle: strength without unnecessary tension, mobility without collapse, and control that comes from awareness rather than force.
            </p>

            <p className="leading-loose">
                On the mat, this shows up in breath-led movement, progressive loading, and learning to maintain steady pacing through transitions. Off the mat, it extends into stress regulation, focus, and the ability to stay regulated in moments of discomfort or change.
            </p>
            
            <p className="leading-loose">
                These flows are designed to support that process. They help you reconnect to the body through breath, build sustainable strength and mobility, and develop a more stable internal baseline. The intention is not performance, but consistency.
            </p>

            <p className="leading-loose">
                For me, consistency matters more than intensity. That’s why my tutorials stay around 20 minutes. It’s a realistic window for most schedules, designed to reduce friction and support daily practice.
            </p>

            <p className="leading-loose">
                The main intention I want my audience to leave with is simple: to meet each day as it is, adapt with awareness, and make the most of it. Life is meant to be enjoyed, on and off the mat. 
            </p>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-6">
            <div className="h-px w-20 bg-[#FFBC40]" />
            <p className="uppercase tracking-[0.3em] text-sm font-black text-[#FFBC40]">
                sam cabrera
            </p>
        </div>
      </div>
    </section>
  );
}