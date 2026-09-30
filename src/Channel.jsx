export default function Channel() {
  return (
    <section
      id="channel"
      className="flex h-full w-full items-center overflow-hidden px-8 py-10 text-[#291503] md:px-12 lg:px-16"
    >
      <div className="flex w-full max-w-xl flex-col justify-center">

        <h2 className="font-light tracking-tight md:text-xl">
          Watch latest flow 
        </h2>

        <div className="mt-8 border-t border-[#291503]/10 pt-8">
          <div className="space-y-6 text-sm leading-7 text-[#291503]/65 md:text-base">

            <p>
              A new 20-minute yoga and Pilates flow every Monday, designed to
              support strength, mobility, and mindful movement.
            </p>

            <p>
              Each practice ending in my signature ab circuit followed by
              savasana.
            </p>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#291503]/60 transition hover:text-[#291503]"
            >
              lets go
              <span>→</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}