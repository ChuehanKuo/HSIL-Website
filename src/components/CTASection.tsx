import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/SplitReveal";

const CTASection = () => (
  <Section tone="dark">
    {/* Crimson glow — atmospheric */}
    <motion.div
      className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, hsl(352 72% 40% / 0.2) 0%, transparent 65%)" }}
      animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    />

    <div className="max-w-4xl mx-auto text-center">
      <Reveal>
        <p className="text-[10px] md:text-xs font-medium tracking-[0.35em] text-[hsl(37_90%_75%)] uppercase mb-10">
          Until Next Year
        </p>
      </Reveal>

      <h2 className="font-display font-normal text-white leading-[1] tracking-tight mb-12">
        <SplitReveal by="char" stagger={0.05} duration={1} className="block text-6xl md:text-8xl lg:text-9xl">
          活動
        </SplitReveal>
        <SplitReveal by="char" stagger={0.05} delay={0.2} duration={1} className="block text-6xl md:text-8xl lg:text-9xl italic text-[hsl(37_90%_75%)] mt-3">
          圓滿落幕.
        </SplitReveal>
      </h2>

      <Reveal delay={0.2}>
        <p className="font-serif italic text-xl md:text-2xl text-white/80 leading-[1.5] max-w-2xl mx-auto mb-16">
          Thank you to every participant, mentor, judge, and partner who made Taiwan's first HSIL Hackathon possible.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-20 bg-white/25" />
          <span className="font-display italic text-sm text-white/50">2027</span>
          <div className="h-px w-20 bg-white/25" />
        </div>
        <p className="font-display text-2xl md:text-3xl text-white/90 leading-snug">
          See you next year — <span className="italic text-[hsl(37_90%_75%)]">bigger, broader, bolder.</span>
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <p className="text-xs tracking-[0.25em] uppercase text-white/40 mt-14">
          Contact · hsilhackathon.taiwan@gmail.com
        </p>
      </Reveal>
    </div>
  </Section>
);

export default CTASection;
