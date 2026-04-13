import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText, Stethoscope, MessageSquare, UserCog, Link2, Database, Route, BookOpen, HeartPulse, Languages, Baby } from "lucide-react";

const challenges = [
  { icon: FileText, title: "電子病歷 (EHR) 分析", desc: "利用 AI 分析電子病歷，建立預測模型改善臨床決策" },
  { icon: Stethoscope, title: "診斷與監測改善", desc: "開發 AI 驅動的診斷與病情監測工具，提升早期偵測能力" },
  { icon: MessageSquare, title: "智慧對話機器人", desc: "運用 AI 與大型語言模型開發輔助病患與醫療人員的聊天機器人" },
  { icon: Link2, title: "照護碎片化", desc: "解決不同醫療系統間電子病歷不相容與照護不連續的問題" },
  { icon: Database, title: "資訊過量", desc: "協助使用者從大量健康資訊與應用程式中找到可靠且適合的資源" },
  { icon: UserCog, title: "醫療人力短缺", desc: "運用 AI 緩解醫護人力不足，優化人力配置與工作負擔" },
  { icon: Route, title: "照護路徑碎片化", desc: "用 AI 改善跨機構的照護協調、溝通與連續性" },
  { icon: BookOpen, title: "健康素養", desc: "利用 AI 提升民眾的健康知識，幫助正確理解症狀與就醫決策" },
  { icon: HeartPulse, title: "預防健康參與", desc: "用 AI 建立個人化預防健康計畫，結合個人數據與環境因素" },
  { icon: Languages, title: "打破溝通障礙", desc: "用 AI 將複雜醫療資訊轉化為易懂語言，提供多語言支援" },
  { icon: Baby, title: "兒科 AI 應用", desc: "針對兒童不同發展階段，整合多元數據來源以改善兒科照護" },
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
          <h2 className="font-display font-normal text-4xl md:text-6xl text-white leading-[1.1] mb-4">
            運用 <span className="italic text-[hsl(37_90%_75%)]">AI</span> 打造高價值醫療體系
          </h2>
          <p className="font-serif italic text-[hsl(37_90%_75%)] mb-4 text-base md:text-lg">
            Building High-Value Health Systems: Leveraging AI
          </p>
          <p className="text-white/60 max-w-5xl mx-auto">
            今年的黑客松聚焦於如何運用人工智慧 (AI) 技術來改善健康系統。參賽團隊可自由選擇任何健康議題提出創新解方，以下為參考方向：
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {challenges.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass-card rounded-2xl p-6 hover:bg-[hsl(0_0%_100%/0.1)] hover:-translate-y-1 transition-all duration-300 group"
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
