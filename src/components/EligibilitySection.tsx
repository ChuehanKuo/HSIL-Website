import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Puzzle, CodeXml, Users } from "lucide-react";

const highlights = [
  {
    icon: Puzzle,
    title: "不限領域",
    desc: "醫學、公衛、商管、設計、工程、法律、社會科學⋯不限身份與背景，學生與社會人士皆歡迎。",
    iconBg: "bg-primary/12",
    iconColor: "text-primary",
  },
  {
    icon: CodeXml,
    title: "不需要會寫程式",
    desc: "重視創意思維與跨領域合作，完全不需要程式背景。",
    iconBg: "bg-secondary/12",
    iconColor: "text-secondary",
  },
  {
    icon: Users,
    title: "可個人報名",
    desc: "活動前透過 Slack 群組認識彼此、事先組隊，當天也有現場組隊時間。",
    iconBg: "bg-accent/12",
    iconColor: "text-accent",
  },
];

const EligibilitySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 section-subtle">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
            Eligibility
          </p>
          <h2 className="font-display font-normal text-4xl md:text-6xl text-foreground leading-[1.1] mb-5">
            誰<span className="italic text-primary">參與</span>？
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            這是一場開放給所有對健康系統創新有興趣的人的活動 — 不限身份、不限領域、不需要會寫程式。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {highlights.map(({ icon: Icon, title, desc, iconBg, iconColor }) => (
            <div
              key={title}
              className="rounded-2xl bg-background border border-border/40 p-7 group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <Icon className={`w-6 h-6 ${iconColor}`} />
              </div>
              <h3 className="font-bold text-base mb-2 text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
