import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, GraduationCap, Rocket, Presentation } from "lucide-react";

const stages = [
  {
    icon: Trophy,
    num: "1",
    title: "台灣站黑客松",
    subtitle: "4/10–11",
    desc: "兩天內組隊、發想、打磨方案，最後上台 Pitch。前兩名代表台灣晉級。",
    color: "bg-primary",
    iconColor: "text-primary",
    iconBg: "bg-primary/15",
  },
  {
    icon: GraduationCap,
    num: "2",
    title: "Bootcamp I & II",
    subtitle: "4 週",
    desc: "全球入選團隊接受 1:1 導師指導、精煉方案，向哈佛評審進行簡報。全球前 20 強進入第二階段。",
    color: "bg-secondary",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/15",
  },
  {
    icon: Rocket,
    num: "3",
    title: "Venture Building",
    subtitle: "4 週",
    desc: "全球前 10 強進入高強度培訓，開發可運作的 Demo、驗證實施路徑，準備最終發表。",
    color: "bg-accent",
    iconColor: "text-accent",
    iconBg: "bg-accent/15",
  },
  {
    icon: Presentation,
    num: "4",
    title: "Demo Day",
    subtitle: "哈佛大學",
    desc: "向投資人、創投、產業領袖與全球創新社群發表方案，爭取資金與合作機會。",
    color: "bg-[hsl(170_85%_32%)]",
    iconColor: "text-[hsl(170_85%_45%)]",
    iconBg: "bg-[hsl(170_85%_32%/0.15)]",
  },
];

const PipelineSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 section-dark relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-30" />

      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-5xl relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-[hsl(170_85%_55%)] mb-3">
            Post-Hackathon
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-3">
            黑客松之後的旅程
          </h2>
          <p className="text-white/40 max-w-3xl mx-auto text-xs md:text-sm tracking-wide">
            黑客松只是起點 — HSIL 提供完整八週全球培訓，帶你從想法走到向投資人發表的舞台
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 md:gap-3">
          {stages.map((stage, i) => (
            <div key={stage.num} className="relative flex flex-col">
              {/* Connector arrow (desktop only) */}
              {i < stages.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-3 z-10 text-white/20 text-lg">
                  →
                </div>
              )}

              <div className="glass-card rounded-2xl p-6 flex-1 hover:bg-[hsl(0_0%_100%/0.08)] transition-all duration-300 group">
                <div className={`w-10 h-10 rounded-xl ${stage.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stage.icon className={`w-5 h-5 ${stage.iconColor}`} />
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className={`text-xs font-bold ${stage.iconColor} uppercase tracking-wider`}>
                    Stage {stage.num}
                  </span>
                </div>

                <h3 className="font-bold text-base mb-0.5 text-white">{stage.title}</h3>
                <p className="text-xs text-white/40 mb-3 font-medium">{stage.subtitle}</p>
                <p className="text-xs text-white/55 leading-relaxed">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/30 mt-8">
          全程線上進行（八週）｜以 HSIL 官方公告為準
        </p>
      </div>
    </section>
  );
};

export default PipelineSection;
