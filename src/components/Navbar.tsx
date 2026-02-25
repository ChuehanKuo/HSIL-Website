import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import hsilLogo from "@/assets/hsil-logo.png";

const navLinks = [
  { label: "關於活動", href: "#about" },
  { label: "活動亮點", href: "#highlights" },
  { label: "主題挑戰", href: "#theme" },
  { label: "時程表", href: "#schedule" },
  { label: "評審標準", href: "#judging" },
  { label: "常見問題", href: "#faq" },
];

const REGISTER_URL = "https://airtable.com/appfJOsPFhsOlgBWL/shrVoYBfKbCbFSNaO";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-3">
          <img src={hsilLogo} alt="HSIL Logo" className="h-10" />
          <span className={`hidden sm:block text-sm font-semibold ${scrolled ? "text-foreground" : "text-white"}`}>
            HSIL Hackathon 2026 | 台灣站
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
          >
            立即報名
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-foreground hover:text-accent border-b border-border/50"
            >
              {l.label}
            </a>
          ))}
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-center bg-accent text-accent-foreground px-5 py-3 rounded-lg text-sm font-bold"
          >
            立即報名
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
