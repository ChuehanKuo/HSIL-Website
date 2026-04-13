import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
});

const useCountUp = (target: number, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now() + delay;
          const step = (now: number) => {
            const elapsed = Math.max(0, now - start);
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, delay]);

  return { count, ref };
};

const HeroSection = () => {
  const global = useCountUp(14708, 2000, 700);
  const local = useCountUp(137, 1500, 900);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center gradient-hero overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 hero-grid opacity-40" />

      {/* Giant Roman-numeral watermark — VII edition */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 1.6, delay: 0.3 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display italic text-white text-[40vw] md:text-[32vw] lg:text-[26vw] leading-none tracking-tighter">
          VII
        </span>
      </motion.div>

      {/* Top institutional bar */}
      <motion.div
        {...fadeUp(0)}
        className="absolute top-20 md:top-24 left-0 right-0 z-20 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] md:text-xs tracking-[0.25em] text-white/50 uppercase">
          <span>Harvard T.H. Chan · HSIL</span>
          <span className="hidden md:inline">·</span>
          <span>National Taiwan University · Health Economics & AI Lab</span>
        </div>
        <div className="h-px w-full bg-white/10 mt-4 max-w-6xl mx-auto" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-40 pb-24 md:pt-44 md:pb-28 text-white max-w-6xl">

        {/* Eyebrow */}
        <motion.div {...fadeUp(0.1)} className="mb-12 md:mb-16 text-center">
          <p className="font-display tracking-[0.4em] text-xs md:text-sm text-[hsl(37_90%_75%)] uppercase">
            VII<span className="mx-3 opacity-50">·</span>7th Edition
          </p>
        </motion.div>

        {/* Editorial title */}
        <motion.div {...fadeUp(0.2)} className="text-center mb-12 md:mb-16">
          <h1 className="font-display font-normal text-white leading-[1] tracking-tight">
            <span className="block text-[2.8rem] md:text-[5rem] lg:text-[6.5rem]">
              全球健康創新黑客松
            </span>
            <span className="block text-[2.8rem] md:text-[5rem] lg:text-[6.5rem] italic text-[hsl(37_90%_75%)] mt-2">
              台灣站 2026
            </span>
          </h1>

          <div className="mt-8 md:mt-10 max-w-2xl mx-auto">
            <p className="font-serif italic text-lg md:text-2xl text-white/75 leading-[1.5]">
              Building High-Value Health Systems,
              <span className="text-white"> Leveraging AI.</span>
            </p>
          </div>
        </motion.div>

        {/* Dates + venue line */}
        <motion.div {...fadeUp(0.35)} className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-16 md:mb-20 text-sm md:text-base">
          <span className="font-display text-white/90 tracking-wide">April 10–11, 2026</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span className="font-serif italic text-white/70">NTU College of Public Health</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span className="font-serif italic text-white/70">Taipei</span>
        </motion.div>

        {/* Stats — bigger, more confident */}
        <motion.div {...fadeUp(0.45)} className="grid grid-cols-3 gap-2 md:gap-8 mb-14 md:mb-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div ref={global.ref} className="font-display text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-none mb-3 tabular-nums">
              {global.count.toLocaleString()}
            </div>
            <div className="text-[9px] md:text-xs uppercase tracking-[0.25em] text-white/50">
              Global Registrants
            </div>
          </div>
          <div className="text-center border-l border-r border-white/10 px-2 md:px-4">
            <div className="font-display text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-none mb-3">
              36
            </div>
            <div className="text-[9px] md:text-xs uppercase tracking-[0.25em] text-white/50">
              Countries
            </div>
          </div>
          <div className="text-center">
            <div ref={local.ref} className="font-display italic text-4xl md:text-6xl lg:text-7xl font-normal text-[hsl(37_90%_75%)] leading-none mb-3 tabular-nums">
              {local.count}
            </div>
            <div className="text-[9px] md:text-xs uppercase tracking-[0.25em] text-white/50">
              Taiwan Applicants
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#winners"
            className="group bg-white text-[hsl(220_50%_10%)] px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[hsl(37_90%_85%)] transition-all duration-300 flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            View the Winners
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="group text-white/80 hover:text-white px-4 py-2 text-sm font-medium tracking-wide flex items-center gap-2 transition-colors"
            href="https://hsph.harvard.edu/research/health-systems-innovation-lab/work/hsil-hackathon-2026-building-high-value-health-systems-leveraging-ai/"
          >
            Visit HSIL
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
