import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

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

// Character-by-character reveal
const RevealText = ({
  text,
  className,
  delay = 0,
}: { text: string; className?: string; delay?: number }) => (
  <span className={`inline-block ${className ?? ""}`} aria-label={text}>
    {Array.from(text).map((char, i) => (
      <motion.span
        key={i}
        aria-hidden
        className="inline-block"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.9,
          delay: delay + i * 0.035,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

const HeroSection = () => {
  const global = useCountUp(14708, 2200, 1200);
  const local = useCountUp(137, 1800, 1300);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Cursor glow
  const glowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.setProperty("--mx", `${e.clientX}px`);
      glowRef.current.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-[hsl(40_35%_97%)]"
    >
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(352 72% 50% / 0.14) 0%, transparent 65%)" }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(37 90% 60% / 0.10) 0%, transparent 65%)" }}
          animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(220 60% 40% / 0.08) 0%, transparent 65%)" }}
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Cursor-tracked glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none opacity-60 hidden md:block"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), hsl(352 72% 50% / 0.06), transparent 45%)",
        }}
        aria-hidden
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(220 30% 15% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(220 30% 15% / 0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      {/* Institutional top strip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 pt-24 md:pt-28 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6 text-[10px] md:text-xs tracking-[0.3em] text-foreground/60 uppercase">
          <span className="font-medium">Harvard T.H. Chan · HSIL</span>
          <span className="hidden md:block h-px w-10 bg-foreground/20" />
          <span className="font-medium">National Taiwan University · Health Economics & AI Lab</span>
        </div>
      </motion.div>

      {/* Hero content with parallax */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex-1 container mx-auto px-6 md:px-12 py-16 md:py-20 max-w-6xl flex flex-col justify-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-10 md:mb-14"
        >
          <div className="h-px w-10 bg-primary/40" />
          <span className="font-display italic text-primary tracking-widest text-xs md:text-sm">
            VII &nbsp;·&nbsp; 7th Edition
          </span>
          <div className="h-px w-10 bg-primary/40" />
        </motion.div>

        {/* Editorial headline — massive, character-revealed */}
        <div className="text-center mb-10 md:mb-14 overflow-hidden">
          <h1 className="font-display font-normal text-foreground leading-[0.95] tracking-tight">
            <span className="block overflow-hidden">
              <RevealText
                text="全球健康創新黑客松"
                className="text-[3rem] md:text-[6rem] lg:text-[7.5rem]"
                delay={0.5}
              />
            </span>
            <span className="block overflow-hidden mt-2 md:mt-3">
              <RevealText
                text="台灣站 2026"
                className="text-[3rem] md:text-[6rem] lg:text-[7.5rem] italic text-primary"
                delay={0.9}
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="font-serif italic text-lg md:text-2xl text-foreground/70 leading-[1.5] mt-8 md:mt-10 max-w-2xl mx-auto"
          >
            Building High-Value Health Systems,{" "}
            <span className="text-foreground">Leveraging AI</span>.
          </motion.p>
        </div>

        {/* Dates + venue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-14 md:mb-20 text-sm md:text-base text-foreground/70"
        >
          <span className="font-display">April 10–11, 2026</span>
          <span className="w-1 h-1 rounded-full bg-foreground/30" />
          <span className="font-serif italic">NTU College of Public Health</span>
          <span className="w-1 h-1 rounded-full bg-foreground/30" />
          <span className="font-serif italic">Taipei</span>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="grid grid-cols-3 gap-2 md:gap-8 mb-14 md:mb-16 max-w-4xl mx-auto w-full"
        >
          {[
            { ref: global.ref, val: global.count.toLocaleString(), label: "Global Registrants", italic: false },
            { val: "36", label: "Countries", italic: false },
            { ref: local.ref, val: local.count, label: "Taiwan Applicants", italic: true },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`text-center ${i === 1 ? "border-l border-r border-foreground/10 px-2 md:px-4" : ""}`}
            >
              <div
                ref={s.ref}
                className={`font-display ${s.italic ? "italic text-primary" : "text-foreground"} text-4xl md:text-6xl lg:text-7xl leading-none mb-3 tabular-nums`}
              >
                {s.val}
              </div>
              <div className="text-[9px] md:text-xs uppercase tracking-[0.25em] text-foreground/50">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs with magnetic hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-5"
        >
          <a
            href="#winners"
            className="group relative inline-flex items-center gap-2.5 bg-foreground text-background px-8 py-4 rounded-full text-sm font-semibold overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative z-10">View the Winners</span>
            <ArrowDown className="relative z-10 w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-foreground/70 hover:text-primary px-4 py-2 text-sm font-medium tracking-wide transition-colors"
            href="https://hsph.harvard.edu/research/health-systems-innovation-lab/work/hsil-hackathon-2026-building-high-value-health-systems-leveraging-ai/"
          >
            Visit HSIL
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-foreground/20 overflow-hidden"
          aria-hidden
        >
          <motion.div
            className="w-full h-full bg-primary origin-top"
            animate={{ scaleY: [0, 1, 0], y: ["0%", "0%", "100%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
