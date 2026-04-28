import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import hsilLogo from "@/assets/hsil-logo.png";
import ntuCphLogo from "@/assets/ntu-cph-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Winners", href: "#winners" },
  { label: "Gallery", href: "#gallery" },
  { label: "Schedule", href: "#schedule" },
  { label: "Judging", href: "#judging" },
  { label: "Team", href: "#organizers" },
  { label: "Press", href: "#media" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled
    ? "bg-[hsl(40_35%_97%/0.8)] backdrop-blur-xl border-b border-foreground/10"
    : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="container mx-auto flex items-center justify-between py-3 md:py-4 px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 md:gap-4 shrink-0">
          <img
            src={hsilLogo}
            alt="Harvard T.H. Chan · HSIL"
            className="h-5 md:h-7 w-auto object-contain"
          />
          <div className="h-4 md:h-6 w-px bg-foreground/20 shrink-0" aria-hidden />
          <img
            src={ntuCphLogo}
            alt="NTU College of Public Health · Health Economics & AI Lab"
            className="h-5 md:h-7 w-auto object-contain"
          />
        </a>

        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium px-2.5 py-2 rounded-full text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="lg:hidden shrink-0 p-2 rounded-lg hover:bg-foreground/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="text-foreground" /> : <Menu className="text-foreground" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[hsl(40_35%_97%/0.95)] backdrop-blur-xl border-t border-foreground/10 px-4 pb-4 shadow-lg">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-foreground border-b border-foreground/10 last:border-0"
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
