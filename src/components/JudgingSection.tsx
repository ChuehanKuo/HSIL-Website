import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const criteria = [
  { name: "創新性", en: "Innovation", score: 5, desc: "方案是否具有原創性與創新思維？" },
  { name: "可行性", en: "Feasibility", score: 5, desc: "方案在技術和資源上是否可行？" },
  { name: "健康影響力", en: "Health Impact", score: 5, desc: "對健康系統的改善潛力有多大？" },
  { name: "可擴展性", en: "Scalability", score: 5, desc: "方案能否推廣到更大規模？" },
  { name: "簡報品質", en: "Presentation", score: 5, desc: "團隊的表達與展示是否清晰有力？" },
  { name: "AI 應用", en: "AI Integration", score: 5, desc: "AI 技術是否被有效且合理地應用？" },
];

const JudgingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="judging" className="py-24 lg:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-secondary mb-3">Judging</p>
          <h2 className="text-3xl md:text-5xl font-black text-gradient-crimson mb-3">評審標準</h2>
          <p className="text-muted-foreground">
            總分：<span className="font-bold text-foreground">30 分</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {criteria.map((c) => (
            <div key={c.name} className="card-elevated rounded-2xl p-6 text-center group">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="hsl(var(--border))" strokeWidth="4" />
                  <circle
                    cx="32" cy="32" r="28" fill="none"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="4"
                    strokeDasharray={`${28 * 2 * Math.PI}`}
                    strokeDashoffset={`${28 * 2 * Math.PI * (1 - c.score / 5)}`}
                    strokeLinecap="round"
                    className="transition-all duration-700"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xl font-black text-secondary">
                  {c.score}
                </span>
              </div>
              <h3 className="font-bold text-sm mb-0.5">{c.name}</h3>
              <p className="text-xs text-muted-foreground italic mb-2">{c.en}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JudgingSection;
