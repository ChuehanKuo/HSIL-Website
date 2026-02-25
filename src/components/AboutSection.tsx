import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe, GraduationCap, Users, Trophy } from "lucide-react";
import posterImg from "@/assets/hackathon-poster.png";

const features = [
  { icon: Globe, title: "全球 30+ 城市同步舉辦", color: "text-secondary" },
  { icon: GraduationCap, title: "哈佛大學主辦，頂尖學術支持", color: "text-primary" },
  { icon: Users, title: "跨領域團隊，不限科系背景", color: "text-secondary" },
  { icon: Trophy, title: "優勝隊伍獲哈佛 Bootcamp 培訓機會", color: "text-accent" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32 section-subtle">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-secondary mb-3">About the Event</p>
          <h2 className="text-3xl md:text-5xl font-black text-gradient-crimson">
            什麼是 HSIL Hackathon？
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6 text-foreground/80 leading-relaxed text-base">
            <p>
              HSIL Hackathon 是由哈佛大學 T.H. Chan 公共衛生學院旗下 Health Systems Innovation Lab (HSIL) 主辦的年度全球黑客松。2026 年已是第七屆，活動在全球超過 30 個城市同步舉辦。
            </p>
            <p>
              這不是一般的程式競賽。HSIL Hackathon 著重跨領域團隊合作，結合醫學、公共衛生、商管、設計、工程、法律、社會科學等背景的參賽者，一起針對真實的健康系統問題提出創新方案。
            </p>
            <div className="relative pl-5 border-l-4 border-primary/60">
              <p className="font-bold text-primary text-lg">
                不需要會寫程式。<br />只需要你對健康議題的熱情和創新思維。
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-3xl blur-xl" />
              <img
                src={posterImg}
                alt="HSIL Hackathon 7th Edition 海報"
                className="relative rounded-2xl shadow-2xl max-w-sm w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, color }) => (
            <div key={title} className="card-elevated rounded-2xl p-6 text-center">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <p className="text-sm font-semibold text-foreground">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
