import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "需要會寫程式嗎？", a: "完全不需要。HSIL Hackathon 著重跨領域團隊合作與創意思維，而非技術能力。團隊中可能有技術背景的成員，但不是必須的。" },
  { q: "我沒有隊友，可以報名嗎？", a: "可以！你可以個人報名，活動前我們會邀請所有人加入 Slack 群組，讓大家事先認識彼此組隊；活動當天也會有現場組隊或調整的時間，最終以 3–5 人為一組。" },
  { q: "參加費用是多少？", a: "完全免費。現場提供茶點與咖啡，午餐請自行安排（校園周邊有豐富的用餐選擇）。" },
  { q: "活動語言是什麼？", a: "台灣站的活動主要以中文進行，部分資料為英文。團隊簡報可以選擇中文或英文。注意：賽後 Bootcamp 培訓計畫全程以英文進行，建議有意晉級的團隊至少 1–2 位成員具備英文溝通能力。" },
  { q: "優勝隊伍有什麼獎勵？", a: "台灣站前三名隊伍獲頒獎項，獲勝團隊將代表台灣進入哈佛 HSIL 的全球 Bootcamp 培訓計畫（全程線上）。計畫分為三階段：Bootcamp I → Bootcamp II → Venture Building Immersion，最終於 6/19 Demo Day 向投資人與產業領袖發表方案。" },
  { q: "簡報格式是什麼？", a: "每組 5 分鐘：3 分鐘 Pitch + 1.5 分鐘評審 Q&A + 0.5 分鐘緩衝。簡報須以 PDF 格式上傳至 Google Drive。" },
  { q: "證書怎麼發放？", a: "所有完成活動的參賽者皆可獲得 HSIL Hackathon 證書。前三名獲獎團隊將獲得紙本獎狀，其餘參賽者將收到數位 PDF 證書。" },
  { q: "我需要自備筆電嗎？", a: "建議自備筆電方便簡報製作，但不是強制要求。" },
  { q: "智慧財產權 (IP) 歸誰？", a: "所有參賽方案的智慧財產權完全歸屬於參賽團隊，HSIL 不會取得任何所有權。" },
  { q: "活動地點在哪裡？", a: "國立臺灣大學公共衛生學院內，詳細場地資訊將於錄取通知中公布。" },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-secondary mb-3">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-black text-gradient-crimson">常見問題</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="card-elevated rounded-2xl px-6 overflow-hidden border"
            >
              <AccordionTrigger className="text-left font-semibold text-sm hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
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
