import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const criteria = [
  { name: "問題定義", en: "Challenge", score: 5, desc: "是否清楚描述問題、根本原因，以及為何需要緊急解決？" },
  { name: "技術與創新", en: "Technology & Innovation", score: 5, desc: "是否提出新穎的技術解方？方案是否具有改善健康系統的潛力？" },
  { name: "實施可行性", en: "Implementation", score: 5, desc: "是否考慮實施障礙、商業模式與關鍵利害關係人？" },
  { name: "團隊", en: "Team", score: 5, desc: "團隊是否具備適當的技能組合與執行態度？" },
  { name: "簡報", en: "Pitch", score: 5, desc: "是否清楚表達挑戰與解方？視覺輔助是否有效？" },
  { name: "問答", en: "Q&A", score: 5, desc: "團隊能否回應評審提問並有效捍衛方案？" },
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
