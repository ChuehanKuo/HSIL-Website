import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Puzzle, CodeXml, Users, ClipboardList } from "lucide-react";

const highlights = [
  {
    icon: Puzzle,
    title: "不限領域",
    desc: "醫學、公衛、商管、設計、工程、法律、社會科學⋯不限身份與背景，學生、社會人士皆歡迎",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: CodeXml,
    title: "不需要會寫程式",
    desc: "重視創意思維與跨領域合作，不需會寫程式",
    accent: "bg-secondary/10 text-secondary",
  },
  {
    icon: Users,
    title: "可個人報名",
    desc: "活動前會邀請所有人加入 Slack 群組，讓大家事先認識彼此組隊；活動當天也會有現場組隊或調整的時間",
    accent: "bg-accent/10 text-accent",
  },
];

const details = [
  { icon: ClipboardList, text: "須在 3/27 報名截止前完成線上報名表單" },
];

const EligibilitySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 section-subtle">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider uppercase text-secondary mb-3">Eligibility</p>
          <h2 className="text-3xl md:text-5xl font-black text-gradient-crimson mb-4">誰可以參加？</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            HSIL Hackathon 歡迎所有對健康系統創新有興趣的人參加，不限身份、不限領域、不需要會寫程式。
          </p>
        </div>

        {/* Hero highlights — key selling points */}
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {highlights.map(({ icon: Icon, title, desc, accent }) => (
            <div key={title} className="card-elevated rounded-2xl p-6 text-center group">
              <div className={`w-14 h-14 rounded-2xl ${accent} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-base mb-1.5 text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Supporting details */}
        <div className="grid md:grid-cols-1 gap-4 max-w-md mx-auto">
          {details.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 rounded-2xl bg-background/60 border border-border/50 px-5 py-4 hover:border-secondary/40 transition-colors duration-300">
              <Icon className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-sm text-foreground font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
