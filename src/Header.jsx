import { useEffect, useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    const hero = document.getElementById("hero");

    const observer = new IntersectionObserver(
      ([entry]) => {
        // true when hero has been scrolled past
        setPastHero(!entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    if (hero) {
      observer.observe(hero);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        flex justify-center
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          pastHero && visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-6 opacity-0 pointer-events-none"
        }
      `}
    >
      <div className="mt-5">
        <div className="rounded-full border border-[#291503]/10 bg-white/90 px-8 py-4 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="mb-1 text-[9px] uppercase tracking-[0.4em] text-[#291503]/40">
                Yoga Journal by Sam Cabrera
              </p>

              <h1 className="text-lg font-light tracking-[0.12em] text-[#291503]/85 md:text-xl">
                Sam Flows
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}