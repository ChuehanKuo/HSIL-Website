import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import hsilLogo from "@/assets/hsil-logo.png";
import ntuLogo from "@/assets/ntu-logo.svg";

const navLinks = [
{ label: "關於活動", href: "#about" },
{ label: "活動亮點", href: "#highlights" },
{ label: "主題挑戰", href: "#theme" },
{ label: "時程表", href: "#schedule" },
{ label: "評審標準", href: "#judging" },
{ label: "常見問題", href: "#faq" }];



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-[36px] left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ?
      "bg-background/80 backdrop-blur-xl shadow-[0_1px_3px_hsl(0_0%_0%/0.06)] border-b border-border/50" :
      "bg-transparent"}`
      }>

      <div className="container mx-auto flex items-center justify-between py-3 px-3 sm:px-4">
        <a href="#" className="flex items-center gap-1 sm:gap-3 min-w-0 flex-1 lg:flex-none">
          <img src={hsilLogo} alt="HSIL Logo" className="h-4 sm:h-7 md:h-9 w-auto object-contain" />
          <img alt="NTU Logo" className="h-[18px] sm:h-7 md:h-9 w-auto object-contain ml-1 sm:ml-0" src="/lovable-uploads/452a84e7-add3-4a4e-9cd5-424e38658fad.png" />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring/50 ${
            scrolled ?
            "text-muted-foreground hover:text-foreground hover:bg-muted" :
            "text-white/70 hover:text-white hover:bg-white/10"}`
            }>

              {l.label}
            </a>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden shrink-0 ml-2 p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu">

          {mobileOpen ?
          <X className={scrolled ? "text-foreground" : "text-white"} /> :

          <Menu className={scrolled ? "text-foreground" : "text-white"} />
          }
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen &&
      <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t px-4 pb-4 shadow-lg">
          {navLinks.map((l) =>
        <a
          key={l.href}
          href={l.href}
          onClick={() => setMobileOpen(false)}
          className="block py-3 text-sm font-medium text-foreground hover:text-accent transition-colors border-b border-border/30">

              {l.label}
            </a>
        )}
        </div>
      }
    </nav>);

};

export default Navbar;