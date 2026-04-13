import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-32 md:py-48 bg-[hsl(220_40%_10%)] relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-20" />

      {/* Single soft glow — crimson */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[hsl(352_72%_40%/0.15)] blur-[160px] pointer-events-none"
        aria-hidden
      />

      <div
        ref={ref}
        className={`container mx-auto px-6 relative z-10 max-w-4xl text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-[10px] md:text-xs font-medium tracking-[0.35em] text-[hsl(37_90%_75%)] uppercase mb-10">
          Until Next Year
        </p>

        <h2 className="font-display font-normal text-white leading-[1.02] tracking-tight mb-10">
          <span className="block text-5xl md:text-7xl lg:text-8xl">
            活動
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl italic text-[hsl(37_90%_75%)] mt-2">
            圓滿落幕.
          </span>
        </h2>

        <div className="max-w-2xl mx-auto mb-14">
          <p className="font-serif italic text-xl md:text-2xl text-white/80 leading-[1.5]">
            Thank you to every participant, mentor, judge, and partner who made Taiwan's first HSIL Hackathon possible.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="h-px w-20 bg-white/25" />
          <span className="font-display italic text-sm text-white/50">2027</span>
          <div className="h-px w-20 bg-white/25" />
        </div>

        <p className="font-display text-2xl md:text-3xl text-white/90 leading-snug mb-3">
          See you next year — <span className="italic text-[hsl(37_90%_75%)]">bigger, broader, bolder.</span>
        </p>

        <p className="text-xs tracking-[0.25em] uppercase text-white/40 mt-16">
          Contact · hsilhackathon.taiwan@gmail.com
        </p>
      </div>
    </section>
  );
};

export default CTASection;
