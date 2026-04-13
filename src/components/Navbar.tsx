import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import hsilLogo from "@/assets/hsil-logo.png";

const navLinks = [
  { label: "Winners", href: "#winners" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Theme", href: "#theme" },
  { label: "Schedule", href: "#schedule" },
  { label: "Team", href: "#organizers" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect section tone behind the navbar
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-tone]");
    const probeY = 72;

    const update = () => {
      let foundDark = false;
      for (const s of sections) {
        const rect = s.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom >= probeY) {
          foundDark = s.dataset.tone === "dark";
          break;
        }
      }
      setOnDark(foundDark);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const textColor = onDark ? "text-white" : "text-foreground";
  const mutedText = onDark ? "text-white/60 hover:text-white" : "text-foreground/60 hover:text-foreground";
  const hoverBg = onDark ? "hover:bg-white/10" : "hover:bg-foreground/5";
  const navBg = scrolled
    ? onDark
      ? "bg-[hsl(220_45%_7%/0.7)] backdrop-blur-xl border-b border-white/10"
      : "bg-[hsl(40_35%_97%/0.7)] backdrop-blur-xl border-b border-foreground/10"
    : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        <a href="#" className="flex items-center shrink-0">
          <img
            src={hsilLogo}
            alt="HSIL Hackathon"
            className={`h-6 md:h-7 w-auto object-contain transition-all duration-300 ${onDark ? "brightness-200" : ""}`}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 ${mutedText} ${hoverBg}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden shrink-0 p-2 rounded-lg transition-colors ${hoverBg}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className={textColor} /> : <Menu className={textColor} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`lg:hidden ${onDark ? "bg-[hsl(220_45%_7%/0.95)] border-white/10" : "bg-[hsl(40_35%_97%/0.95)] border-foreground/10"} backdrop-blur-xl border-t px-4 pb-4 shadow-lg`}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium transition-colors border-b ${onDark ? "text-white border-white/10" : "text-foreground border-foreground/10"} last:border-0`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
