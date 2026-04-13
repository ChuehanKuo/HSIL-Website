import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
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
  const global = useCountUp(14708, 2000, 600);
  const local = useCountUp(137, 1500, 800);

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 hero-grid opacity-50" />

      {/* Subtle ambient glow — fewer, more refined */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[hsl(352_72%_40%/0.12)] blur-[140px] animate-float-slow" />
        <div className="absolute -bottom-48 -right-48 w-[700px] h-[700px] rounded-full bg-[hsl(170_85%_32%/0.08)] blur-[140px] animate-float-slow-reverse" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-24 pb-20 md:pt-28 md:pb-24 text-white max-w-6xl">

        {/* Single lockup — brand + edition + dates */}
        <motion.div {...fadeUp(0)} className="mb-10 md:mb-14 flex flex-col items-center gap-4">
          <p className="font-display tracking-[0.35em] text-xs md:text-sm text-[hsl(37_90%_75%)] uppercase">
            HSIL Hackathon · 7th Edition
          </p>
          <div className="h-px w-12 bg-white/30" />
          <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-white/60 uppercase">
            April 10–11, 2026 · Taipei
          </p>
        </motion.div>

        {/* Editorial title */}
        <motion.div {...fadeUp(0.15)} className="text-center mb-10 md:mb-14">
          <h1 className="font-display font-normal text-white leading-[1.05] tracking-tight">
            <span className="block text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem]">
              全球健康創新黑客松
            </span>
            <span className="block text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] italic text-[hsl(37_90%_75%)]">
              台灣站 2026
            </span>
          </h1>

          <div className="mt-6 md:mt-8 max-w-2xl mx-auto">
            <p className="font-serif italic text-base md:text-xl text-white/70 leading-relaxed">
              Building High-Value Health Systems,
              <span className="text-white/95"> Leveraging AI.</span>
            </p>
          </div>
        </motion.div>

        {/* Subtle divider */}
        <motion.div {...fadeUp(0.3)} className="flex justify-center mb-10 md:mb-12">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </motion.div>

        {/* Institutional credit — top */}
        <motion.div {...fadeUp(0.4)} className="text-center mb-12 md:mb-16">
          <p className="text-[10px] md:text-xs font-medium tracking-[0.2em] opacity-50 uppercase mb-3">
            Hosted by
          </p>
          <p className="font-serif text-sm md:text-base text-white/85 leading-relaxed">
            Harvard T.H. Chan School of Public Health
            <br />
            <span className="text-white/60 text-xs md:text-sm">Health Systems Innovation Lab</span>
          </p>
          <div className="mt-3 flex items-center justify-center gap-3 text-white/40">
            <div className="h-px w-6 bg-white/30" />
            <span className="text-xs">×</span>
            <div className="h-px w-6 bg-white/30" />
          </div>
          <p className="font-serif text-sm md:text-base text-white/85 leading-relaxed mt-3">
            National Taiwan University
            <br />
            <span className="text-white/60 text-xs md:text-sm">Health Economics & AI Lab (620 Lab)</span>
          </p>
        </motion.div>

        {/* Stats — editorial / magazine style */}
        <motion.div {...fadeUp(0.5)} className="grid grid-cols-3 gap-4 md:gap-12 mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div ref={global.ref} className="font-display text-3xl md:text-5xl font-medium text-white mb-1">
              {global.count.toLocaleString()}
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/50">
              Global Registrants
            </div>
          </div>
          <div className="text-center border-l border-r border-white/15 px-2">
            <div className="font-display text-3xl md:text-5xl font-medium text-white mb-1">
              36
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/50">
              Countries
            </div>
          </div>
          <div className="text-center">
            <div ref={local.ref} className="font-display text-3xl md:text-5xl font-medium text-[hsl(37_90%_75%)] mb-1">
              {local.count}
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/50">
              Taiwan Applicants
            </div>
          </div>
        </motion.div>

        {/* CTAs — minimal, editorial */}
        <motion.div {...fadeUp(0.6)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#winners"
            className="group bg-white text-[hsl(220_50%_15%)] px-7 py-3 rounded-full text-sm font-semibold hover:bg-white/90 transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50">
            View the Winners
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-white/30 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/30"
            href="https://hsph.harvard.edu/research/health-systems-innovation-lab/work/hsil-hackathon-2026-building-high-value-health-systems-leveraging-ai/">
            Visit HSIL
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Date / Venue — minimal footer */}
        <motion.div {...fadeUp(0.7)} className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs md:text-sm font-medium opacity-60">
          <span>April 10–11, 2026</span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/40" />
          <span>NTU College of Public Health</span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/40" />
          <span>Taipei, Taiwan</span>
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[hsl(220_14%_96%)] to-transparent" />
    </section>
  );
};

export default HeroSection;
