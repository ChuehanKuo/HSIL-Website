import { Instagram, Mail } from "lucide-react";
import hsilLogo from "@/assets/hsil-logo.png";
import ntuCphLogo from "@/assets/ntu-cph-logo.png";

const Footer = () => (
  <footer className="bg-[hsl(220_26%_10%)] text-white/50 pt-14 pb-8">
    <div className="container mx-auto px-6 max-w-5xl">
      {/* Top: logos left, contact right */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
        {/* Logos */}
        <div className="flex items-center gap-5 flex-wrap">
          <img src={hsilLogo} alt="HSIL Logo" className="h-9 brightness-200" />
          <img src={ntuCphLogo} alt="NTU College of Public Health" className="h-9 w-auto" />
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2.5">
          <a
            href="https://www.instagram.com/hsilhackathon.taiwan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 hover:text-white/90 transition-colors text-sm font-medium"
          >
            <Instagram className="w-4 h-4" />
            <span>@hsilhackathon.taiwan</span>
          </a>
          <a
            href="mailto:hsilhackathon.taiwan@gmail.com"
            className="flex items-center gap-2.5 hover:text-white/90 transition-colors text-sm font-medium"
          >
            <Mail className="w-4 h-4" />
            <span>hsilhackathon.taiwan@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Divider + copyright */}
      <div className="border-t border-white/8 pt-5 text-center">
        <p className="text-xs text-white/30">© 2026 HSIL Hackathon Taiwan Hub. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;