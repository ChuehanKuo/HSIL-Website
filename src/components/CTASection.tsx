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
        className={`container mx-auto px-4 text-center relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-5">
          報名已截止
        </h2>
        <p className="text-lg text-white/70 mb-5">
          感謝所有報名者！錄取通知將於 4/1–4/2 發送
        </p>
        <p className="text-sm text-white/40 mt-8">
          如有任何問題，請聯繫主辦單位：hsilhackathon.taiwan@gmail.com
        </p>
      </div>
    </section>);

};

export default CTASection;
