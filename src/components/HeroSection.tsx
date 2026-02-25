import { Calendar, MapPin, DollarSign } from "lucide-react";

const REGISTER_URL = "https://airtable.com/app06PiI7r4PVqBdt/pagFJFqJW3xFqnRFw/form";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
    {/* Geometric overlay */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-64 h-64 border border-white/30 rounded-full" />
      <div className="absolute bottom-32 right-20 w-96 h-96 border border-white/20 rounded-full" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 border border-white/20 rotate-45" />
      <div className="absolute top-10 right-1/4 w-32 h-32 border border-white/15 rounded-full" />
    </div>

    <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 text-center text-white">
      <p className="text-sm md:text-base font-medium tracking-wider opacity-80 mb-4 uppercase">
        Harvard T.H. Chan School of Public Health — Health Systems Innovation Lab
      </p>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
        HSIL 全球健康系統<br className="hidden md:block" />創新黑客松 2026
      </h1>
      <p className="text-xl md:text-2xl font-light mb-2 opacity-90">
        第七屆 · 台灣站 — 國立臺灣大學
      </p>
      <p className="text-lg md:text-xl font-semibold mb-2 text-amber-300">
        打造高價值醫療體系：運用人工智慧
      </p>
      <p className="text-base md:text-lg font-light opacity-70 italic mb-10">
        Building High-Value Health Systems: Leveraging AI
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-accent-foreground px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform shadow-lg"
        >
          立即報名 →
        </a>
        <a
          href="#about"
          className="border-2 border-white/60 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/10 transition-colors"
        >
          了解更多 ↓
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {[
          { icon: Calendar, label: "日期", value: "2026 年 4 月 10–11 日（週五、六）" },
          { icon: MapPin, label: "地點", value: "國立臺灣大學公共衛生學院" },
          { icon: DollarSign, label: "費用", value: "完全免費" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20">
            <Icon className="w-6 h-6 mx-auto mb-2 text-amber-300" />
            <p className="text-sm font-semibold opacity-80">{label}</p>
            <p className="text-sm font-medium">{value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
