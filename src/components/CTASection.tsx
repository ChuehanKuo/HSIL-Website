import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const REGISTER_URL = "https://airtable.com/app06PiI7r4PVqBdt/pagFJFqJW3xFqnRFw/form";

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
        className={`container mx-auto px-4 text-center relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-5">
          延長報名中
        </h2>
        <p className="text-lg text-white/70 mb-5">
          延長報名截止：<strong className="text-[hsl(37_90%_75%)]">4/5（六）</strong> — 名額有限，把握最後機會！
        </p>
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-[hsl(352_72%_40%)] px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg mb-6"
        >
          立即報名
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="text-sm text-white/40 mt-8">
          如有任何問題，請聯繫主辦單位：hsilhackathon.taiwan@gmail.com
        </p>
      </div>
    </section>);

};

export default CTASection;
