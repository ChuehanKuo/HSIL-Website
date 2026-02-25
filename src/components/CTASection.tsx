import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const REGISTER_URL = "https://airtable.com/appfJOsPFhsOlgBWL/shrVoYBfKbCbFSNaO";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 gradient-cta relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 border border-white/30 rounded-full" />
        <div className="absolute bottom-10 left-20 w-40 h-40 border border-white/20 rotate-45" />
      </div>

      <div
        ref={ref}
        className={`container mx-auto px-4 text-center relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          準備好改變世界了嗎？
        </h2>
        <p className="text-lg text-white/80 mb-8">
          報名截止日：2026 年 3 月 31 日
        </p>
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-accent-foreground px-10 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform shadow-xl"
        >
          立即報名 →
        </a>
        <p className="text-sm text-white/60 mt-6">
          如有任何問題，請聯繫主辦單位
        </p>
      </div>
    </section>
  );
};

export default CTASection;
