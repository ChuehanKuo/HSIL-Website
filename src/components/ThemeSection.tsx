import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const challenges = [
  { num: "01", en: "EHR Analysis", zh: "電子病歷分析", desc: "Using AI to analyze electronic health records and build predictive models that improve clinical decisions." },
  { num: "02", en: "Diagnosis & Monitoring", zh: "診斷與監測改善", desc: "AI-driven tools for diagnosis and monitoring, strengthening early detection." },
  { num: "03", en: "Intelligent Chatbots", zh: "智慧對話機器人", desc: "Conversational AI assisting patients and clinical staff through LLMs." },
  { num: "04", en: "Fragmentation of Care", zh: "照護碎片化", desc: "Bridging incompatible EHRs and discontinuous care across systems." },
  { num: "05", en: "Information Overload", zh: "資訊過量", desc: "Helping users navigate a flood of health information and apps to find what's credible." },
  { num: "06", en: "Healthcare Workforce", zh: "醫療人力短缺", desc: "Easing workforce shortages through AI-optimized staffing and workload." },
  { num: "07", en: "Care Pathways", zh: "照護路徑碎片化", desc: "Improving coordination, communication, and continuity across institutions." },
  { num: "08", en: "Health Literacy", zh: "健康素養", desc: "Raising public health knowledge — understanding symptoms and clinical decisions." },
  { num: "09", en: "Preventive Engagement", zh: "預防健康參與", desc: "Personalized prevention plans that integrate individual and environmental data." },
  { num: "10", en: "Communication Barriers", zh: "打破溝通障礙", desc: "Translating complex medical information into clear, multilingual guidance." },
  { num: "11", en: "Pediatric AI", zh: "兒科 AI 應用", desc: "Integrating multi-modal data across developmental stages to improve pediatric care." },
];

const ThemeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="theme" className="py-28 lg:py-36 bg-[hsl(220_50%_8%)] relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-30" />

      <div
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Editorial header — asymmetric */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-24 max-w-6xl mx-auto">
          <div className="lg:col-span-5">
            <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-[hsl(37_90%_75%)] uppercase mb-6">
              The 2026 Theme
            </p>
            <h2 className="font-display font-normal text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05]">
              Building high-value health systems,{" "}
              <span className="italic text-[hsl(37_90%_75%)]">leveraging AI</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="font-serif italic text-xl md:text-2xl text-white/85 leading-[1.5] mb-6">
              運用 AI 打造高價值醫療體系
            </p>
            <p className="text-sm md:text-base text-white/60 leading-[1.85]">
              Across eleven reference directions, teams used artificial intelligence to propose concrete, deployable interventions for the health system. Teams were free to choose any health topic — these tracks served as starting points, not boundaries.
            </p>
          </div>
        </div>

        {/* Editorial list — numbered, bilingual, hairline dividers */}
        <div className="max-w-5xl mx-auto border-t border-white/10">
          {challenges.map((c) => (
            <div
              key={c.num}
              className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 border-b border-white/10 group hover:bg-white/[0.02] transition-colors"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="font-display text-xl md:text-2xl text-white/40 group-hover:text-[hsl(37_90%_75%)] transition-colors">
                  {c.num}
                </span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-display text-lg md:text-2xl text-white leading-tight mb-1">
                  {c.en}
                </h3>
                <p className="font-serif italic text-xs md:text-sm text-[hsl(37_90%_75%)]/80">
                  {c.zh}
                </p>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="text-sm md:text-base text-white/60 leading-[1.7] md:pt-1">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs tracking-[0.2em] uppercase text-white/30">
          Reference tracks · from the HSIL 2026 Participant Guide
        </p>
      </div>
    </section>
  );
};

export default ThemeSection;
