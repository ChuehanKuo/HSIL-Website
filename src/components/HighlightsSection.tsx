import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { DollarSign, Code, GraduationCap, Users, Handshake, HeartPulse } from "lucide-react";

const highlights = [
  { icon: DollarSign, title: "完全免費", desc: "零報名費、零參加費，活動兩天提供午餐、點心與飲料" },
  { icon: Code, title: "不需程式背景", desc: "不需要寫程式碼或做原型產品。你需要的只有創意思維和團隊合作能力" },
  { icon: GraduationCap, title: "哈佛 Bootcamp 機會", desc: "台灣站前兩名將進入 HSIL 全球 Bootcamp，經篩選後可於哈佛 Demo Day 向全球評審與投資人展示方案" },
  { icon: Users, title: "專業導師全程指導", desc: "活動期間有來自醫療、科技、商業等領域的專業導師協助你的團隊打磨方案" },
  { icon: Handshake, title: "跨領域交流", desc: "認識來自醫學、公衛、設計、工程、商管、法律等不同領域的優秀夥伴，拓展你的人脈" },
  { icon: HeartPulse, title: "解決真實問題", desc: "不是紙上談兵——你將針對台灣及全球健康系統面臨的真實挑戰，提出有影響力的解方" },
];

const HighlightsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="highlights" className="py-20 lg:py-28">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-crimson">
          為什麼要參加？
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          HSIL Hackathon 為你提供獨一無二的學習、交流與創新平台
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card border rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
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
