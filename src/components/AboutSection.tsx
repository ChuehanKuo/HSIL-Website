import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe, GraduationCap, Users, Trophy } from "lucide-react";
import posterImg from "@/assets/hackathon-poster.png";

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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-crimson">
          什麼是 HSIL Hackathon？
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-5 text-foreground/85 leading-relaxed">
            <p>
              HSIL Hackathon 是由 Health Systems Innovation Lab (HSIL) 主辦的年度全球黑客松。HSIL 隸屬於哈佛大學 T.H. Chan 公共衛生學院。2026 年已是第七屆，活動在全球超過 30 個城市同步舉辦。
            </p>
            <p>
              這不是一般的程式競賽。HSIL Hackathon 著重跨領域團隊合作，結合醫學、公共衛生、商管、設計、工程、法律、社會科學等背景的參賽者，一起針對真實的健康系統問題提出創新方案。
            </p>
            <p className="font-semibold text-primary text-lg">
              不需要會寫程式。只需要你對健康議題的熱情和創新思維。
            </p>
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
