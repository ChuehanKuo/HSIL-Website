import { Instagram, Mail } from "lucide-react";
import hsilLogo from "@/assets/hsil-logo.png";
import ntuCphLogo from "@/assets/ntu-cph-logo.png";

const Footer = () => (
  <footer className="bg-[hsl(220_45%_7%)] text-white/50 pt-20 pb-12 border-t border-white/5">
    <div className="container mx-auto px-6 max-w-6xl">
      {/* Institutional lockup */}
      <div className="mb-16 text-center">
        <p className="text-[10px] tracking-[0.35em] uppercase text-white/40 mb-8">
          Hosted by
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          <img src={hsilLogo} alt="Harvard T.H. Chan HSIL" className="h-11 brightness-200 opacity-90" />
          <div className="h-px w-16 md:h-12 md:w-px bg-white/20" />
          <img src={ntuCphLogo} alt="NTU College of Public Health" className="h-11 w-auto opacity-90" />
        </div>
      </div>

      <div className="h-px w-full bg-white/10 mb-10" />

      {/* Contact + copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <a
            href="https://www.instagram.com/hsilhackathon.taiwan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors text-sm font-medium"
          >
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
            <span>@hsilhackathon.taiwan</span>
          </a>
          <a
            href="mailto:hsilhackathon.taiwan@gmail.com"
            className="flex items-center gap-2 hover:text-white transition-colors text-sm font-medium"
          >
            <Mail className="w-4 h-4" strokeWidth={1.5} />
            <span>hsilhackathon.taiwan@gmail.com</span>
          </a>
        </div>

        <p className="text-xs tracking-[0.2em] uppercase text-white/30">
          © 2026 HSIL Hackathon Taiwan Hub
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
