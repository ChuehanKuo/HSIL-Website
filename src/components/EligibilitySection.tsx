import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle } from "lucide-react";

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
    <section className="py-20 lg:py-28">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gradient-crimson">
          誰可以參加？
        </h2>
        <p className="text-center text-foreground/80 mb-10 max-w-2xl mx-auto">
          HSIL Hackathon 歡迎所有對健康系統創新有興趣的人參加，不限科系、不限年級、不需程式背景。
        </p>

        <div className="space-y-4">
          {requirements.map((r, i) => (
            <div key={i} className="flex items-start gap-3 bg-muted rounded-xl p-4">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
