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
        fixed top-0 left-0 w-full z-50 
        flex justify-center
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 -translate-y-6 blur-sm"}
      `}
    >
      <div className="mt-2 py-6 md:py-8">
        <h1 className="text-xl md:text-2xl tracking-widest ">
          Sam Flows
        </h1>
      </div>
    </header>
  );
}


