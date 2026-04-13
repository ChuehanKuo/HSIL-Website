import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { DollarSign, Code, GraduationCap, Users, Handshake, HeartPulse } from "lucide-react";

const highlights = [
  { icon: DollarSign, title: "完全免費", desc: "無任何報名費或參加費用", accent: "from-secondary to-secondary/70" },
  { icon: Code, title: "不需要會寫程式", desc: "重視創意思維與跨領域合作，不需會寫程式", accent: "from-primary to-primary/70" },
  { icon: GraduationCap, title: "哈佛 Bootcamp 機會", desc: "獲勝團隊進入哈佛 HSIL 全球 Bootcamp 培訓計畫，表現優異者晉級 Demo Day", accent: "from-accent to-accent/70" },
  { icon: Users, title: "專業指導老師", desc: "活動期間邀請來自醫療、科技、商業領域的專業指導老師現場提供諮詢與回饋", accent: "from-secondary to-secondary/70" },
  { icon: Handshake, title: "跨領域交流", desc: "認識來自醫學、設計、工程、商管、法律等不同領域的優秀夥伴", accent: "from-primary to-primary/70" },
  { icon: HeartPulse, title: "解決真實問題", desc: "針對台灣及全球健康系統面臨的真實挑戰提出解方", accent: "from-accent to-accent/70" },
];

const HighlightsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="highlights" className="py-24 lg:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-secondary mb-3">Why Join?</p>
          <h2 className="font-display font-normal text-4xl md:text-6xl text-foreground leading-[1.1] mb-4">
            活動<span className="italic text-primary">亮點</span>
          </h2>
          <p className="font-serif italic text-muted-foreground max-w-2xl mx-auto text-lg">
            A unique platform for learning, connection, and health-systems innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, title, desc, accent }) => (
            <div
              key={title}
              className="group card-elevated rounded-2xl p-8 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
