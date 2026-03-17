import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe, GraduationCap, Users, Trophy, Calendar, MapPin, Clock, UsersRound, Presentation, BrainCircuit } from "lucide-react";
import posterImg from "@/assets/hackathon-poster.png";

const quickFacts = [
{ icon: Calendar, label: "活動日期", value: "2026 年 4 月 10–11 日（週五、六）" },
{ icon: MapPin, label: "活動地點", value: "國立臺灣大學 公共衛生學院" },
{ icon: Clock, label: "活動時長", value: "兩天（每天約 8 小時）" },
{ icon: UsersRound, label: "團隊人數", value: "3–5 人一組（可個人報名，活動前透過 Slack 群組認識彼此，現場組隊或調整）" },
{ icon: Presentation, label: "最終產出", value: "3 分鐘 Pitch 成果發表｜不需可運作成品" },
{ icon: BrainCircuit, label: "活動語言", value: "中文為主、部分資料為英文" }];


const steps = [
{ num: "1", title: "線上報名", desc: "填寫 Airtable 報名表單，截止日為 3/27" },
{ num: "2", title: "錄取通知", desc: "4/1–4/2 通知錄取結果，並提供行前資訊" },
{ num: "3", title: "兩天黑客松", desc: "4/10–11 組隊共創、腦力激盪、方案打磨與實作推進" },
{ num: "4", title: "團隊 Pitch", desc: "每組 3 分鐘簡報 + 2 分鐘評審 Q&A" },
{ num: "5", title: "全球 Bootcamp", desc: "前兩名進入 HSIL 培訓計畫，代表台灣參加哈佛 Demo Day" }];


const features = [
{ icon: Globe, title: "全球 30+ 城市同步舉辦", color: "text-secondary" },
{ icon: GraduationCap, title: "哈佛大學主辦，頂尖學術支持", color: "text-primary" },
{ icon: Users, title: "跨領域團隊，不限身份與背景", color: "text-secondary" },
{ icon: Trophy, title: "優勝隊伍獲哈佛 Bootcamp 培訓機會", color: "text-accent" }];


const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32 section-subtle">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-secondary mb-3">About the Event</p>
          <h2 className="text-3xl md:text-5xl font-black text-gradient-crimson">
            什麼是 HSIL Hackathon？
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-4 text-foreground/80 leading-relaxed text-base">
            


            <p>HSIL Hackathon 是由哈佛大學陳曾熙公共衛生學院 Health Systems Innovation Lab（HSIL）發起的全球健康系統創新黑客松。今年台灣首度加入，Taiwan Hub 將於國立臺灣大學公共衛生學院舉辦，邀請跨領域團隊在 48 小時內提出可落地的 AI 健康系統解方。</p>

            <p className="mt-4 font-medium text-base">你會得到什麼？</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>參賽者皆可獲得 HSIL Hackathon 證書（可用於履歷）</li>
              <li>獲勝團隊可晉級 HSIL 後續 Venture Building Program（培訓與輔導），並於最終 Demo Day 向投資人／產業夥伴進行發表（以 HSIL 官方公告為準）。</li>
              <li>跨域交流與組隊：認識不同領域夥伴，把想法從「點子」推進到「可落地的方案」並上台 Pitch，獲得評審具體回饋</li>
            </ul>

            <p className="mt-4 text-xs">
</p>
            <div className="relative pl-5 border-l-4 border-primary">
              <p className="font-bold text-primary text-lg">免費參加　4/10–4/11（台大公衛）　報名截止 3/27
                <br />不需要程式背景，只需要你對健康議題的熱情和創新思維。
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-3xl blur-xl" />
              <img src={posterImg} alt="HSIL Hackathon 7th Edition 海報" className="relative rounded-2xl shadow-2xl max-w-md w-full" loading="lazy" />

            </div>
          </div>
        </div>

        {/* Quick facts grid */}
        <div className="mb-16 mt-16 lg:mt-36">
          <h3 className="text-xl font-bold text-center mb-6 text-foreground">
            活動快速資訊
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickFacts.map(({ icon: Icon, label, value }) => <div key={label} className="card-elevated rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-medium text-foreground mt-0.5">{value}</p>
                </div>
              </div>)}
          </div>
        </div>

        {/* How it works - step by step */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">
            參賽流程
          </h3>
          <div className="flex flex-col md:flex-row gap-3 md:gap-2 items-stretch">
            {steps.map((step, i) => <div key={step.num} className="flex-1 flex items-center">
                <div className="card-elevated rounded-2xl p-5 h-full w-full">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mb-3">
                    {step.num}
                  </div>
                  <h4 className="font-bold text-sm mb-1 text-foreground">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && <div className="hidden md:flex items-center px-1 text-muted-foreground/40 text-lg shrink-0">
                    →
                  </div>}
              </div>)}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, color }) => <div key={title} className="card-elevated rounded-2xl p-6 text-center">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <p className="text-sm font-semibold text-foreground">{title}</p>
            </div>)}
        </div>
      </div>
    </section>);};

export default AboutSection;