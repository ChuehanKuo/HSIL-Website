import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText, Stethoscope, MessageSquare, UserCog, Heart, Ribbon, Brain, ShieldAlert } from "lucide-react";

const challenges = [
  { icon: FileText, title: "電子病歷 (EHR) 數據分析", desc: "利用 AI 分析電子病歷，改善臨床決策支持" },
  { icon: Stethoscope, title: "AI 診斷工具", desc: "開發輔助診斷工具，提升早期疾病偵測能力" },
  { icon: MessageSquare, title: "臨床對話機器人", desc: "建立智慧健康諮詢系統，改善醫病溝通" },
  { icon: UserCog, title: "醫療人力短缺", desc: "運用 AI 優化人力配置，解決醫護人力不足問題" },
  { icon: Heart, title: "心血管疾病", desc: "運用數據驅動方法改善心血管疾病預防與管理" },
  { icon: Ribbon, title: "癌症照護", desc: "AI 輔助癌症篩檢、診斷及個人化治療方案" },
  { icon: Brain, title: "心理健康", desc: "利用科技改善心理健康服務的可及性與品質" },
  { icon: ShieldAlert, title: "傳染病防治", desc: "AI 驅動的流行病監測與因應策略" },
];

const ThemeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="theme" className="py-24 lg:py-32 section-dark relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 hero-grid opacity-50" />

      <div
        ref={ref}
        className={`container mx-auto px-4 relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-[hsl(170_85%_55%)] mb-3">2026 Theme</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-3">
            運用 AI 打造高價值醫療體系
          </h2>
          <p className="text-[hsl(170_85%_55%)] italic mb-4 text-sm">
            Building High-Value Health Systems: Leveraging AI
          </p>
          <p className="text-white/60 max-w-5xl mx-auto">
            今年的黑客松聚焦於如何運用人工智慧 (AI) 技術來改善健康系統。參賽團隊將針對以下領域的挑戰提出創新解方：
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {challenges.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass-card rounded-2xl p-6 hover:bg-[hsl(0_0%_100%/0.1)] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[hsl(170_85%_32%/0.2)] flex items-center justify-center mb-4 group-hover:bg-[hsl(170_85%_32%/0.3)] transition-colors">
                <Icon className="w-5 h-5 text-[hsl(170_85%_55%)]" />
              </div>
              <h3 className="font-bold text-sm mb-2 text-white">{title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;
