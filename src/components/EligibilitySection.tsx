import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Puzzle, CodeXml, Users, CalendarCheck, ClipboardList } from "lucide-react";

const highlights = [
  {
    icon: Puzzle,
    title: "不限科系",
    desc: "醫學、公衛、商管、設計、工程、法律、社會科學⋯都歡迎",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: CodeXml,
    title: "不需程式背景",
    desc: "重視創意思維與跨領域合作，不需要會寫程式",
    accent: "bg-secondary/10 text-secondary",
  },
  {
    icon: Users,
    title: "可個人報名",
    desc: "活動當天現場組隊，3–5 人一組",
    accent: "bg-accent/10 text-accent",
  },
];

const details = [
  { icon: GraduationCap, text: "大學生、研究生、博士生皆可報名" },
  { icon: CalendarCheck, text: "須全程參與兩天活動" },
  { icon: ClipboardList, text: "須在報名截止前完成線上報名表單" },
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
            HSIL Hackathon 歡迎所有對健康系統創新有興趣的人參加，不限科系、不限年級、不需程式背景。
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
        <div className="grid md:grid-cols-3 gap-4">
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
