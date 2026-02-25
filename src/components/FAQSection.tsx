import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "需要會寫程式嗎？", a: "完全不需要。HSIL Hackathon 著重跨領域團隊合作與創意思維，而非技術能力。團隊中可能有技術背景的成員，但不是必須的。參賽者不需要提交可運行的程式碼或原型，概念階段的方案即可參賽。" },
  { q: "我沒有隊友，可以報名嗎？", a: "可以！你可以個人報名，活動第一天會有團隊配對環節，現場組成 3–5 人的跨領域團隊。建議團隊人數為 3–5 人。" },
  { q: "參加費用是多少？", a: "完全免費，包含兩天的午餐、點心、飲料和活動物資。" },
  { q: "活動語言是什麼？", a: "台灣站的活動主要以中文進行，部分資料為英文。團隊簡報可以選擇中文或英文。" },
  { q: "優勝隊伍有什麼獎勵？", a: "台灣站的前兩名隊伍將代表台灣進入 HSIL 全球 Bootcamp 培訓計畫。完整流程：2 週 Bootcamp → Top 20 進入延伸培訓 → 8 隊 VIP 計畫 → 2026 年 6 月 19 日在哈佛大學 Demo Day 向全球專家與投資人展示方案。" },
  { q: "我需要自備筆電嗎？", a: "建議自備筆電方便簡報製作，但不是強制要求。" },
  { q: "智慧財產權 (IP) 歸誰？", a: "所有參賽方案的智慧財產權完全歸屬於參賽團隊，HSIL 不會取得任何所有權。" },
  { q: "活動地點在哪裡？", a: "國立臺灣大學公共衛生學院。詳細場地資訊將於錄取通知中公布。" },
  { q: "挑戰主題是否有限定？", a: "團隊可針對任何健康系統 + AI 相關議題提出方案。網站上列出的 8 個挑戰方向為 HSIL 提供的選擇性參考，並非強制限定。" },
  { q: "最終簡報的格式為何？", a: "每組有 3 分鐘的 Pitch 簡報時間，接著是 2 分鐘的評審 Q&A。簡報可使用中文或英文。" },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-20 lg:py-28 bg-muted">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-crimson">
          常見問題
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left font-semibold text-sm hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
