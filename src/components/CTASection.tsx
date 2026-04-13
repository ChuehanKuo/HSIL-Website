import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 gradient-cta relative overflow-hidden">
      <div className="absolute inset-0 hero-grid" />

      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-[hsl(0_0%_100%/0.03)] blur-[60px]" />
        <div className="absolute bottom-10 left-20 w-60 h-60 rounded-full bg-[hsl(37_90%_44%/0.06)] blur-[80px]" />
      </div>

      <div
        ref={ref}
        className={`container mx-auto px-4 text-center relative z-10 transition-all duration-700 max-w-3xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

        <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-white/50 uppercase mb-6">
          Until Next Year
        </p>
        <h2 className="font-display font-normal text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">
          活動圓滿落幕
        </h2>
        <p className="font-serif italic text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
          Thank you to every participant, mentor, judge, and partner who made
          <br className="hidden md:block" />
          Taiwan's first HSIL Hackathon possible.
        </p>
        <div className="h-px w-16 bg-white/30 mx-auto mb-8" />
        <p className="text-sm text-white/50 leading-relaxed">
          See you in 2027 — bigger, broader, and bolder.
        </p>
        <p className="text-xs text-white/30 mt-6">
          Contact: hsilhackathon.taiwan@gmail.com
        </p>
      </div>
    </section>);

};

export default CTASection;
