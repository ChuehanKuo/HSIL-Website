import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";

const requirements = [
  "大學生、研究生、博士生皆可報名",
  "不限科系 — 醫學、公衛、商管、設計、工程、法律、社會科學⋯都歡迎",
  "不需會寫程式",
  "可個人報名，活動當天現場組隊（3–5 人一組）",
  "須全程參與兩天活動",
  "須在報名截止前完成線上報名表單",
];

const EligibilitySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 section-subtle">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider uppercase text-secondary mb-3">Eligibility</p>
          <h2 className="text-3xl md:text-5xl font-black text-gradient-crimson mb-4">誰可以參加？</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            HSIL Hackathon 歡迎所有對健康系統創新有興趣的人參加，不限科系、不限年級、不需程式背景。
          </p>
        </div>

        <div className="space-y-3">
          {requirements.map((r, i) => (
            <div key={i} className="card-elevated rounded-2xl p-5 flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground font-medium">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
