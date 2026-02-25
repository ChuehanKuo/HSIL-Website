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
    <section id="judging" className="py-20 lg:py-28 bg-muted">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-crimson">
          評審標準
        </h2>
        <p className="text-center text-muted-foreground mb-12">總分：30 分</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {criteria.map((c) => (
            <div key={c.name} className="bg-card border rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full border-4 border-secondary flex items-center justify-center">
                <span className="text-2xl font-black text-secondary">{c.score}</span>
              </div>
              <h3 className="font-bold text-sm mb-1">{c.name}</h3>
              <p className="text-xs text-muted-foreground italic mb-2">{c.en}</p>
              <p className="text-xs text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JudgingSection;
