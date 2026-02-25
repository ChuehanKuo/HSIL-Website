import { Instagram, Facebook, Mail } from "lucide-react";
import hsilLogo from "@/assets/hsil-logo.png";

const Footer = () => (
  <footer className="bg-foreground text-white/80 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="flex items-center gap-3">
          <img src={hsilLogo} alt="HSIL Logo" className="h-10 brightness-200" />
          <div>
            <p className="text-xs font-semibold text-white">Health Systems Innovation Lab</p>
            <p className="text-xs opacity-70">Harvard T.H. Chan School of Public Health</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm">
            台灣站由<span className="font-semibold text-white">國立臺灣大學公共衛生學院</span>主辦
          </p>
          <p className="text-xs opacity-60 mt-1">指導教授：李達宇教授（健康經濟與 AI 實驗室）</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <a
            href="https://www.instagram.com/hsilhackathon.taiwan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors text-sm"
          >
            <Instagram className="w-4 h-4" />
            @hsilhackathon.taiwan
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61587778492454"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors text-sm"
          >
            <Facebook className="w-4 h-4" />
            HSIL Hackathon Taiwan
          </a>
          <a
            href="mailto:hsilhackathon.taiwan@gmail.com"
            className="flex items-center gap-2 hover:text-white transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            hsilhackathon.taiwan@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 pt-6 text-center">
        <p className="text-xs opacity-60">© 2026 HSIL Hackathon Taiwan Hub. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
