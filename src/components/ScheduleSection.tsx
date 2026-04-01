import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface TimelineItem {
  time: string;
  title: string;
}

interface TimelineGroup {
  label: string;
  dotColor: string;
  items: TimelineItem[];
}

const schedule: TimelineGroup[] = [
  {
    label: "報名階段",
    dotColor: "bg-accent",
    items: [{ time: "延長報名至 4/5（日）", title: "線上報名（延長報名中 — 名額有限！）" }],
  },
  {
    label: "活動前",
    dotColor: "bg-secondary",
    items: [
      { time: "2026 年 4/1~4/2", title: "公布錄取名單、發送確認信與 Slack 邀請" },
      { time: "4/7 & 4/8", title: "線上行前說明會（Zoom，兩場內容相同，擇一參加）" },
    ],
  },
  {
    label: "Day 1 — 4 月 10 日（週五）",
    dotColor: "bg-primary",
    items: [
      { time: "08:00–09:00", title: "報到與入場" },
      { time: "09:00–09:15", title: "開幕式與歡迎致詞" },
      { time: "09:15–09:55", title: "Keynote: AI 驅動的數位健康解決方案" },
      { time: "10:00–10:30", title: "HSIL 全球直播（Zoom）— 所有 Hub 連線，台灣站亮相" },
      { time: "10:30–10:45", title: "休息" },
      { time: "10:45–11:05", title: "Hack 101：規則、評分標準與簡報格式說明" },
      { time: "11:05–12:30", title: "團隊組成與報名" },
      { time: "12:30–13:30", title: "午餐" },
      { time: "13:30–17:00", title: "方案發想與指導老師諮詢" },
      { time: "17:00–17:20", title: "Day 1 總結與公告" },
      { time: "17:20–17:30", title: "簡報順序抽籤" },
      { time: "17:30~", title: "Open Hack Time（自由延續討論）" },
    ],
  },
  {
    label: "Day 2 — 4 月 11 日（週六）",
    dotColor: "bg-primary",
    items: [
      { time: "08:00–09:00", title: "報到與入場" },
      { time: "09:00–09:15", title: "Day 2 歡迎與流程說明" },
      { time: "09:15–12:00", title: "方案精煉、指導老師諮詢與簡報準備（12:00 簡報截止）" },
      { time: "12:00–13:00", title: "午餐（簡報測試 + 評審會議）" },
      { time: "13:00–13:10", title: "評審介紹" },
      { time: "13:10–17:04", title: "團隊 Pitch 簡報（3 分鐘 + 1.5 分鐘 Q&A）" },
      { time: "17:04–17:14", title: "評審回饋" },
      { time: "17:30–17:50", title: "頒獎典禮與優勝公布" },
      { time: "17:50–18:00", title: "閉幕致詞與大合照" },
    ],
  },
  {
    label: "活動後",
    dotColor: "bg-accent",
    items: [
      { time: "4/20–5/1", title: "Bootcamp I — 全球 ~100 團隊，1:1 導師指導" },
      { time: "5/4–5/15", title: "Bootcamp II — 全球 ~50 團隊" },
      { time: "5/18–6/12", title: "Venture Building Immersion — 全球前 10 強" },
      { time: "2026/6/19", title: "哈佛 Demo Day — 向投資人與產業領袖發表方案" },
    ],
  },
];

const ScheduleSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="schedule" className="py-24 lg:py-32 section-subtle">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-secondary mb-3">Schedule</p>
          <h2 className="text-3xl md:text-5xl font-black text-gradient-crimson">活動時程</h2>
        </div>

        <div className="relative">
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-secondary to-primary" />

          <div className="space-y-10">
            {schedule.map((group) => (
              <div key={group.label}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-3 h-3 rounded-full ${group.dotColor} relative z-10 ml-[14px] md:ml-[18px] ring-4 ring-background`} />
                  <h3 className="font-bold text-base text-foreground">{group.label}</h3>
                </div>
                <div className="ml-10 md:ml-16 space-y-2.5">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-start bg-background/60 rounded-2xl px-4 py-3 border border-border/50 hover:border-secondary/40 hover:shadow-sm transition-all duration-300">
                      <span className="text-xs font-mono text-muted-foreground whitespace-nowrap sm:min-w-[100px] pt-0.5">
                        {item.time}
                      </span>
                      <span className="text-sm text-foreground font-medium">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
