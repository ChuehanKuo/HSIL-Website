import { Instagram } from "lucide-react";
import hsilLogo from "@/assets/hsil-logo.png";

const Footer = () => (
  <footer className="bg-[hsl(220_26%_10%)] text-white/60 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-3">
          <img src={hsilLogo} alt="HSIL Logo" className="h-10 brightness-200" />
          <div>
            <p className="text-xs font-semibold text-white/90">Harvard T.H. Chan School of Public Health</p>
            <p className="text-xs opacity-50">Health Systems Innovation Lab</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm">
            台灣站由<span className="font-semibold text-white/90">國立臺灣大學</span>主辦
          </p>
        </div>

        <div className="flex items-center justify-center md:justify-end gap-4">
          <a
            href="https://www.instagram.com/hsil_hackathon_taiwan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors text-sm"
          >
            <Instagram className="w-5 h-5" />
            @hsil_hackathon_taiwan
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 pt-6 text-center">
        <p className="text-xs opacity-40">© 2026 HSIL Hackathon Taiwan Hub. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
