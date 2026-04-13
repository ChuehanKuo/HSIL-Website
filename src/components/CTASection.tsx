import { motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";

const CTASection = () => (
  <section className="relative py-32 md:py-48 bg-[hsl(220_45%_7%)] overflow-hidden">
    {/* Grid */}
    <div
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(hsl(0 0% 100% / 0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />

    {/* Crimson glow */}
    <motion.div
      className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, hsl(352 72% 40% / 0.2) 0%, transparent 65%)" }}
      animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    />

    <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
      <Reveal>
        <p className="text-[10px] md:text-xs font-medium tracking-[0.35em] text-[hsl(37_90%_75%)] uppercase mb-10">
          Until Next Year
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="font-display font-normal text-white leading-[1] tracking-tight mb-12">
          <span className="block text-6xl md:text-8xl lg:text-9xl">活動</span>
          <span className="block text-6xl md:text-8xl lg:text-9xl italic text-[hsl(37_90%_75%)] mt-3">
            圓滿落幕.
          </span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="font-serif italic text-xl md:text-2xl text-white/80 leading-[1.5] max-w-2xl mx-auto mb-16">
          Thank you to every participant, mentor, judge, and partner who made Taiwan's first HSIL Hackathon possible.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-20 bg-white/25" />
          <span className="font-display italic text-sm text-white/50">2027</span>
          <div className="h-px w-20 bg-white/25" />
        </div>
        <p className="font-display text-2xl md:text-3xl text-white/90 leading-snug mb-3">
          See you next year — <span className="italic text-[hsl(37_90%_75%)]">bigger, broader, bolder.</span>
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <p className="text-xs tracking-[0.25em] uppercase text-white/40 mt-16">
          Contact · hsilhackathon.taiwan@gmail.com
        </p>
      </Reveal>
    </div>
  </section>
);

export default CTASection;
