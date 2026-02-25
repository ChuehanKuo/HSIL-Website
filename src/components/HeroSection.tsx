import { ArrowDown, ArrowRight, CalendarClock } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const REGISTER_URL = "https://airtable.com/appfJOsPFhsOlgBWL/shrVoYBfKbCbFSNaO";
const DEADLINE = new Date("2026-03-31T23:59:59+08:00");

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
});

const useCountdown = (target: Date) => {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor(diff % 86400000 / 3600000),
      mins: Math.floor(diff % 3600000 / 60000)
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc), 60000);
    return () => clearInterval(id);
  }, []);
  return t;
};

const HeroSection = () => {
  const countdown = useCountdown(DEADLINE);

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
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

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-28 text-center text-white flex flex-col items-center justify-center min-h-screen">
        <div className="flex-1" />

        <div>
          <motion.p
            {...fadeUp(0)}
            className="text-xs md:text-sm font-medium tracking-[0.2em] opacity-60 mb-8 uppercase">

            Harvard T.H. Chan School of Public Health — Health Systems Innovation Lab
          </motion.p>

          <motion.h1
            {...fadeUp(0.15)}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-[1.1] tracking-tight">

            HSIL 全球健康系統
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(37_90%_65%)] via-[hsl(37_90%_75%)] to-[hsl(170_85%_55%)]">
              創新黑客松 2026
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.25)} className="text-lg md:text-2xl font-light mb-4 opacity-80">
            第七屆 · 台灣站 — 國立臺灣大學
          </motion.p>

          





          {/* Date / Location / Free — prominent treatment */}
          <motion.div {...fadeUp(0.42)} className="flex items-center justify-center gap-3 text-sm md:text-base font-medium opacity-75 mb-10">
            <span>📅 2026 年 4 月 10–11 日</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span>📍 臺大公衛學院</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span className="text-[hsl(170_85%_60%)] font-semibold">免費參加</span>
          </motion.div>
        </div>

        {/* CTA buttons */}
        <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-accent text-accent-foreground px-8 py-4 rounded-2xl text-lg font-bold glow-accent hover:scale-105 transition-all duration-300 flex items-center gap-2">

            立即報名
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="border border-white/30 text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2">

            了解更多
            <ArrowDown className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Countdown / deadline urgency strip */}
        <motion.div {...fadeUp(0.6)} className="flex items-center gap-2 text-xs md:text-sm opacity-60">
          <CalendarClock className="w-4 h-4" />
          <span>報名截止：3/31</span>
          <span className="mx-1">—</span>
          <span>倒數 <strong className="text-[hsl(37_90%_70%)] opacity-100">{countdown.days}</strong> 天 <strong className="text-[hsl(37_90%_70%)] opacity-100">{countdown.hours}</strong> 時 <strong className="text-[hsl(37_90%_70%)] opacity-100">{countdown.mins}</strong> 分</span>
        </motion.div>

        <div className="flex-1" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[hsl(220_14%_96%)] to-transparent" />
    </section>);

};

export default HeroSection;