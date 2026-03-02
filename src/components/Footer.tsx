import { Instagram, Mail } from "lucide-react";
import hsilLogo from "@/assets/hsil-logo.png";
import ntuLogo from "@/assets/ntu-logo.svg";
import labLogo from "@/assets/lab-logo.svg";

const Footer = () =>
<footer className="bg-[hsl(220_26%_10%)] text-white/60 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-3">
          <img src={hsilLogo} alt="HSIL Logo" className="h-10 brightness-200" />
          <div>
            
            <p className="text-xs opacity-50">Health Systems Innovation Lab</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img alt="620 Health Economics & AI Lab" className="h-12 w-auto max-w-[280px] object-cover" src="/lovable-uploads/b25897d1-43e6-419d-900d-e4f4492df1c2.png" />
        </div>

        <div className="flex items-center justify-center md:justify-end gap-4 flex-wrap">
          <a
          href="https://www.instagram.com/hsilhackathon.taiwan/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors text-sm">
            <Instagram className="w-5 h-5" />
            @hsilhackathon.taiwan
          </a>
          <span className="text-muted-foreground hidden md:inline">|</span>
          <a
          href="mailto:hsilhackathon.taiwan@gmail.com"
          className="flex items-center gap-2 hover:text-white transition-colors text-sm">
            <Mail className="w-5 h-5" />
            hsilhackathon.taiwan@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 pt-6 text-center">
        <p className="text-xs opacity-40">© 2026 HSIL Hackathon Taiwan Hub. All rights reserved.</p>
      </div>
    </div>
  </footer>;


export default Footer;