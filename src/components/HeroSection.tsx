import { Calendar, MapPin, DollarSign, ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const REGISTER_URL = "https://airtable.com/appfJOsPFhsOlgBWL/shrVoYBfKbCbFSNaO";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden pb-20">
    {/* Grid overlay */}
    <div className="absolute inset-0 hero-grid" />

    {/* Floating orbs */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[hsl(352_72%_40%/0.15)] blur-[120px]" />
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full bg-[hsl(37_90%_44%/0.1)] blur-[120px]" />
      <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-[hsl(170_85%_32%/0.08)] blur-[100px]" />
      <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-[hsl(352_72%_50%/0.06)] blur-[80px]" />
    </div>

    {/* Geometric shapes */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
      <div className="absolute top-20 left-[8%] w-72 h-72 border border-white rounded-full animate-[spin_60s_linear_infinite]" />
      <div className="absolute bottom-24 right-[12%] w-96 h-96 border border-white rounded-full animate-[spin_80s_linear_infinite_reverse]" />
      <div className="absolute top-[45%] left-[35%] w-48 h-48 border border-white rotate-45 animate-[spin_50s_linear_infinite]" />
    </div>

    <div className="relative z-10 container mx-auto px-4 pt-28 pb-20 text-center text-white">
      <motion.p
        {...fadeUp(0)}
        className="text-xs md:text-sm font-medium tracking-[0.2em] opacity-60 mb-6 uppercase"
      >
        Harvard T.H. Chan School of Public Health — Health Systems Innovation Lab
      </motion.p>

      <motion.h1
        {...fadeUp(0.15)}
        className="text-4xl md:text-6xl lg:text-7xl font-black mb-5 leading-[1.1] tracking-tight"
      >
        HSIL 全球健康系統
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(37_90%_65%)] via-[hsl(37_90%_75%)] to-[hsl(170_85%_55%)]">
          創新黑客松 2026
        </span>
      </motion.h1>

      <motion.p {...fadeUp(0.3)} className="text-lg md:text-2xl font-light mb-2 opacity-80">
        第七屆 · 台灣站 — 國立臺灣大學
      </motion.p>

      <motion.div {...fadeUp(0.4)} className="mb-2">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(37_90%_44%/0.2)] border border-[hsl(37_90%_44%/0.3)] text-[hsl(37_90%_70%)] text-base md:text-lg font-semibold">
          打造高價值醫療體系：運用人工智慧
        </span>
      </motion.div>

      <motion.p {...fadeUp(0.45)} className="text-sm md:text-base font-light opacity-50 italic mb-12">
        Building High-Value Health Systems: Leveraging AI
      </motion.p>

      <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-accent text-accent-foreground px-8 py-4 rounded-2xl text-lg font-bold glow-accent hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          立即報名
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#about"
          className="border border-white/30 text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
        >
          了解更多
          <ArrowDown className="w-5 h-5" />
        </a>
      </motion.div>

      <motion.div
        {...fadeUp(0.7)}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
      >
        {[
          { icon: Calendar, label: "日期", value: "2026 年 4 月 10–11 日（週五、六）" },
          { icon: MapPin, label: "地點", value: "國立臺灣大學公共衛生學院" },
          { icon: DollarSign, label: "費用", value: "完全免費" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="glass-card rounded-2xl p-6 hover:bg-[hsl(0_0%_100%/0.1)] transition-colors">
            <Icon className="w-6 h-6 mx-auto mb-2 text-[hsl(37_90%_65%)]" />
            <p className="text-xs font-semibold tracking-wider uppercase opacity-60 mb-1">{label}</p>
            <p className="text-sm font-medium">{value}</p>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[hsl(220_14%_96%)] to-transparent" />
  </section>
);

export default HeroSection;
