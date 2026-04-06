import { useEffect, useRef, useState } from "react";

const NAV_LINKS = ["Home", "Studio", "Services", "Contact", "FAQs"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (!sentinelRef.current || typeof IntersectionObserver === "undefined") {
      const onScroll = () => setIsScrolled(window.scrollY > 8);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 1 },
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute top-0 h-px w-full"
        aria-hidden="true"
      />

      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-black/10 bg-white/80 backdrop-blur-md"
            : "bg-white/95",
        ].join(" ")}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="text-lg font-semibold tracking-wide text-black transition-opacity duration-300 hover:opacity-70"
          >
            Elementium
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-black/80 transition-colors duration-300 hover:text-black"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 transition-colors duration-300 hover:bg-black/3 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <span className="relative block h-4 w-5">
              <span
                className={[
                  "absolute left-0 top-0 block h-0.5 w-5 bg-black transition-transform duration-200",
                  isMenuOpen ? "translate-y-1.75 rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-1.75 block h-0.5 w-5 bg-black transition-opacity duration-200",
                  isMenuOpen ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-3.5 block h-0.5 w-5 bg-black transition-transform duration-200",
                  isMenuOpen ? "-translate-y-1.75 -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>
        </nav>

        {isMenuOpen ? (
          <div className="border-t border-black/10 bg-white motion-fade-up md:hidden">
            <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
              {NAV_LINKS.map((item) => (
                <li key={`mobile-${item}`}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-sm font-medium text-black/80 transition-colors duration-300 hover:text-black"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </header>
    </>
  );
}
