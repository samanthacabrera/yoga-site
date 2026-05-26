import { useEffect, useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 bg-[#f3f3ee]
        flex justify-center
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 -translate-y-6 blur-sm"}
      `}
    >
      <div className="mt-6 md:mt-10 px-10 md:px-14 py-6 md:py-8">
        <h1 className="text-4xl md:text-6xl tracking-widest uppercase">
          La Cabra Yoga
        </h1>
        <h3 className="text-xs md:text-base tracking-wider mt-2">
          with Sam Cabrera
        </h3>
      </div>
    </header>
  );
}

