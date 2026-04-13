import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Character reveal
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
          delay: delay + i * 0.04,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

const useCountUp = (target: number, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
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
  const global = useCountUp(14708, 2000, 1800);
  const local = useCountUp(137, 1600, 1900);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
      data-tone="ivory"
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[900px] h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(352 72% 50% / 0.16) 0%, transparent 60%)" }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -left-48 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(37 90% 60% / 0.10) 0%, transparent 60%)" }}
          animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Cursor glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none opacity-50 hidden md:block"
        style={{
          background:
            "radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), hsl(352 72% 50% / 0.05), transparent 45%)",
        }}
        aria-hidden
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.20] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(220 30% 15% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(220 30% 15% / 0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />

      {/* Hero content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex-1 container mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-16 md:pb-20 max-w-6xl flex flex-col justify-center items-center text-center"
      >
        {/* HSIL HACKATHON lockup — compact, single cluster */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mb-8 md:mb-10"
        >
          <p className="font-display tracking-[0.4em] text-sm md:text-lg text-foreground uppercase mb-3">
            HSIL Hackathon
          </p>
          <div className="flex items-center justify-center gap-3 text-foreground/55">
            <div className="h-px w-6 bg-foreground/20" />
            <span className="font-display italic text-primary tracking-[0.2em] text-[10px] md:text-[11px]">
              VII · 7th Edition
            </span>
            <span className="w-1 h-1 rounded-full bg-foreground/20" />
            <span className="tracking-[0.2em] text-[10px] md:text-[11px] uppercase">
              April 10–11, 2026
            </span>
            <div className="h-px w-6 bg-foreground/20" />
          </div>
        </motion.div>

        {/* Chinese + gold title */}
        <div className="mb-6 md:mb-8">
          <h1 className="font-display font-normal text-foreground leading-[1] tracking-tight">
            <span className="block overflow-hidden whitespace-nowrap">
              <RevealText
                text="全球健康創新黑客松"
                className="text-[2.25rem] sm:text-5xl md:text-[3.75rem] lg:text-[4.5rem] xl:text-[5.25rem]"
                delay={0.45}
              />
            </span>
            <span className="block overflow-hidden whitespace-nowrap mt-2 md:mt-3">
              <RevealText
                text="台灣站 2026"
                className="text-[2.25rem] sm:text-5xl md:text-[3.75rem] lg:text-[4.5rem] xl:text-[5.25rem] italic text-primary"
                delay={0.85}
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.25 }}
            className="font-serif italic text-base md:text-xl text-foreground/70 leading-[1.5] mt-6 md:mt-8 max-w-2xl mx-auto"
          >
            Building High-Value Health Systems,{" "}
            <span className="text-foreground">Leveraging AI</span>.
          </motion.p>
        </div>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mb-10 md:mb-12 text-xs md:text-sm text-foreground/55"
        >
          <span className="font-serif italic">NTU College of Public Health</span>
          <span className="w-1 h-1 rounded-full bg-foreground/25" />
          <span className="font-serif italic">Taipei</span>
        </motion.div>

        {/* Stats — compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.55 }}
          className="grid grid-cols-3 gap-2 md:gap-6 mb-10 md:mb-12 max-w-3xl w-full"
        >
          {[
            { ref: global.ref, val: global.count.toLocaleString(), label: "Global Registrants", italic: false },
            { val: "36", label: "Countries", italic: false },
            { ref: local.ref, val: local.count, label: "Taiwan Applicants", italic: true },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`text-center ${i === 1 ? "border-l border-r border-foreground/10 px-2" : ""}`}
            >
              <div
                ref={s.ref}
                className={`font-display ${s.italic ? "italic text-primary" : "text-foreground"} text-3xl md:text-5xl leading-none mb-2 tabular-nums`}
              >
                {s.val}
              </div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
        >
          <a
            href="#winners"
            className="group relative inline-flex items-center gap-2.5 bg-foreground text-background px-7 py-3.5 rounded-full text-sm font-semibold overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
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

      {/* Scroll indicator — pinned inside hero, not overlapping */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="relative z-10 pb-6 flex flex-col items-center gap-1 text-foreground/35"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-foreground/15 overflow-hidden">
          <motion.div
            className="w-full h-full bg-primary origin-top"
            animate={{ scaleY: [0, 1, 0], y: ["0%", "0%", "100%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
