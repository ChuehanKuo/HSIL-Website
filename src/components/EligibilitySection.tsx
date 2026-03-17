import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Puzzle, CodeXml, Users, CalendarCheck } from "lucide-react";

const highlights = [
  {
    icon: Puzzle,
    title: "不限領域",
    desc: "醫學、公衛、商管、設計、工程、法律、社會科學⋯不限身份與背景，學生、社會人士皆歡迎",
    gradient: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
  },
  {
    icon: CodeXml,
    title: "不需要會寫程式",
    desc: "重視創意思維與跨領域合作，不需會寫程式",
    gradient: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary/15",
    iconColor: "text-secondary",
  },
  {
    icon: Users,
    title: "可個人報名",
    desc: "活動前會邀請所有人加入 Slack 群組，讓大家事先認識彼此組隊；活動當天也會有現場組隊或調整的時間",
    gradient: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
  },
];

const EligibilitySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 section-subtle">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3">
            Eligibility
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gradient-crimson mb-5">
            誰可以參加？
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-base leading-relaxed">
            HSIL Hackathon 歡迎所有對健康系統創新有興趣的人參加，<br className="hidden sm:inline" />
            不限身份、不限領域、不需要會寫程式。
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {highlights.map(({ icon: Icon, title, desc, gradient, iconBg, iconColor }, i) => (
            <div
              key={title}
              className={`relative overflow-hidden rounded-3xl bg-background border border-border/40 p-8 text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-500`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Subtle gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${iconColor}`} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Deadline callout */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-primary/5 border border-primary/20 px-6 py-3.5 hover:bg-primary/10 transition-colors duration-300">
            <CalendarCheck className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-semibold text-foreground">
              須在 <span className="text-primary">3/27</span> 報名截止前完成線上報名表單
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
