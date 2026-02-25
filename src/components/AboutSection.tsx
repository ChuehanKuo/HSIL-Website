import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe, GraduationCap, Users, Trophy, Calendar, MapPin, Clock, UsersRound, Presentation, BrainCircuit } from "lucide-react";
import posterImg from "@/assets/hackathon-poster.png";

const quickFacts = [
  { icon: Calendar, label: "活動日期", value: "2026 年 4 月 10–11 日（週五、六）" },
  { icon: MapPin, label: "活動地點", value: "國立臺灣大學公共衛生學院" },
  { icon: Clock, label: "活動時長", value: "兩天（每天約 8 小時）" },
  { icon: UsersRound, label: "團隊人數", value: "3–5 人一組（可個人報名，現場組隊）" },
  { icon: Presentation, label: "最終產出", value: "3 分鐘 Pitch 簡報（不需要寫程式或做原型）" },
  { icon: BrainCircuit, label: "活動語言", value: "中文為主、部分資料為英文" },
];

const steps = [
  { num: "1", title: "線上報名", desc: "填寫 Airtable 報名表單，截止日為 3/31" },
  { num: "2", title: "錄取通知", desc: "4 月初公布錄取名單，寄送行前指南" },
  { num: "3", title: "兩天黑客松", desc: "4/10–11 現場組隊、腦力激盪、導師指導、方案發想" },
  { num: "4", title: "團隊 Pitch", desc: "每組 3 分鐘簡報 + 2 分鐘評審 Q&A" },
  { num: "5", title: "全球 Bootcamp", desc: "前兩名進入 HSIL 培訓計畫，代表台灣參加哈佛 Demo Day" },
];

const features = [
  { icon: Globe, title: "全球 30+ 城市同步舉辦" },
  { icon: GraduationCap, title: "HSIL 主辦，哈佛頂尖學術支持" },
  { icon: Users, title: "跨領域團隊，不限科系背景" },
  { icon: Trophy, title: "優勝隊伍獲哈佛 Bootcamp 培訓機會" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 lg:py-28 bg-muted">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-crimson">
          什麼是 HSIL Hackathon？
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          一場為期兩天、不需要寫程式的健康系統創新挑戰賽
        </p>

        {/* Main intro with poster */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-5 text-foreground/85 leading-relaxed">
            <p>
              HSIL Hackathon 是由 Health Systems Innovation Lab (HSIL) 主辦的年度全球黑客松。HSIL 隸屬於哈佛大學 T.H. Chan 公共衛生學院。2026 年已是第七屆，活動在全球超過 30 個城市同步舉辦。
            </p>
            <p>
              <strong>這不是程式競賽。</strong>你不需要寫任何程式碼，也不需要做出可運行的產品。活動著重的是<strong>跨領域團隊合作</strong>——結合醫學、公衛、商管、設計、工程、法律等不同背景的參賽者，針對真實的健康系統問題提出創新方案，最終以<strong>簡報 (Pitch)</strong> 的方式呈現。
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
              <p className="font-semibold text-primary text-base">
                簡單來說：你和隊友花兩天時間，針對一個健康問題想出解決方案，然後做一個 3 分鐘的簡報給評審聽。就這樣！
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={posterImg}
              alt="HSIL Hackathon 7th Edition 海報"
              className="rounded-2xl shadow-2xl max-w-sm w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Quick facts grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-6 text-foreground">
            活動快速資訊
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickFacts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-card border rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-medium text-foreground mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works - step by step */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            參賽流程
          </h3>
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-stretch">
            {steps.map((step, i) => (
              <div key={step.num} className="flex-1 relative">
                <div className="bg-card border rounded-xl p-5 h-full md:mx-1">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mb-3">
                    {step.num}
                  </div>
                  <h4 className="font-bold text-sm mb-1 text-foreground">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-1 transform -translate-y-1/2 text-muted-foreground/40 text-lg z-10">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title }) => (
            <div key={title} className="bg-card rounded-xl p-6 text-center shadow-sm border hover:shadow-md transition-shadow">
              <Icon className="w-8 h-8 mx-auto mb-3 text-secondary" />
              <p className="text-sm font-semibold text-foreground">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
