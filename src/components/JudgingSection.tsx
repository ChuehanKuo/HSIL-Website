import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const criteria = [
  { name: "問題定義與方案框架", en: "Problem Definition & Solution Framing", score: 2, desc: "是否清楚定義問題並提出合理的解方框架？" },
  { name: "價值主張與創新", en: "Value Proposition & Innovation", score: 2, desc: "方案的價值主張是否明確？是否具有創新性？" },
  { name: "市場機會", en: "Opportunity", score: 2, desc: "是否辨識出具規模的市場機會？" },
  { name: "競爭分析", en: "Competitive Landscape", score: 2, desc: "是否了解競爭環境並展示差異化優勢？" },
  { name: "商業模式", en: "Business Model", score: 2, desc: "商業模式是否可行且具可持續性？" },
  { name: "市場策略", en: "Go-to-Market Strategy", score: 2, desc: "是否有清楚的市場進入策略？" },
  { name: "資金需求", en: "Ask", score: 2, desc: "資金需求是否合理且有明確用途？" },
  { name: "團隊", en: "Team", score: 2, desc: "團隊是否具備適當的技能組合與執行能力？" },
  { name: "簡報", en: "Presentation", score: 2, desc: "簡報是否清晰、有條理且具說服力？" },
  { name: "問答", en: "Q&A", score: 2, desc: "團隊能否回應評審提問並有效捍衛方案？" },
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
            總分：<span className="font-bold text-foreground">20 分</span>（每項 0、1 或 2 分）
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
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
                    strokeDashoffset={`${28 * 2 * Math.PI * (1 - c.score / 2)}`}
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

        {/* Pitch format & recommended slides */}
        <div className="mt-16 max-w-3xl mx-auto space-y-6">
          <div className="card-elevated rounded-2xl p-6">
            <h3 className="font-bold text-base mb-3 text-foreground">簡報格式（台灣站）</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              每組 <strong className="text-foreground">5 分鐘</strong>：3 分鐘 Pitch + 1.5 分鐘評審 Q&A + 0.5 分鐘緩衝
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              HSIL 標準為 8 分鐘（3 分鐘 Pitch + 5 分鐘 Q&A），台灣站因團隊數較多而調整。
            </p>
          </div>
          <div className="card-elevated rounded-2xl p-6">
            <h3 className="font-bold text-base mb-3 text-foreground">建議投影片結構（8 頁）</h3>
            <div className="flex flex-wrap gap-2">
              {["Problem", "Solution", "Opportunity", "Competition", "Business Model", "GTM", "Ask", "Team"].map((slide, i) => (
                <span key={slide} className="text-xs bg-muted rounded-lg px-3 py-1.5 font-medium text-muted-foreground">
                  {i + 1}. {slide}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgingSection;
