import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface TimelineItem {
  time: string;
  title: string;
}

interface TimelineGroup {
  label: string;
  color: string;
  items: TimelineItem[];
}

const schedule: TimelineGroup[] = [
  {
    label: "報名階段",
    color: "bg-accent",
    items: [
      { time: "即日起 — 2026/3/31", title: "線上報名（Airtable 表單）" },
    ],
  },
  {
    label: "活動前",
    color: "bg-secondary",
    items: [
      { time: "2026 年 4 月初", title: "公布錄取名單並發送確認信" },
      { time: "活動前一週", title: "寄送行前通知與參賽者指南" },
    ],
  },
  {
    label: "Day 1 — 4 月 10 日（週五）",
    color: "bg-primary",
    items: [
      { time: "08:00–09:00", title: "報到與入場" },
      { time: "09:00–09:30", title: "開幕式與歡迎致詞" },
      { time: "09:30–10:00", title: "HSIL 全球 Zoom 歡迎會議（連線哈佛）" },
      { time: "10:00–10:30", title: "HSIL 專題演講：AI for Health Systems" },
      { time: "10:30–11:00", title: "Hack 101 — 規則說明、評審標準、Q&A" },
      { time: "11:00–11:30", title: "團隊組成（個人報名者現場配對）" },
      { time: "11:30–12:30", title: "團隊腦力激盪與問題探索" },
      { time: "12:30–13:30", title: "午餐與交流" },
      { time: "13:30–17:00", title: "方案發想與原型開發" },
      { time: "17:00–17:30", title: "導師諮詢時段" },
      { time: "17:30", title: "Day 1 結束・抽籤決定 Day 2 簡報順序" },
    ],
  },
  {
    label: "Day 2 — 4 月 11 日（週六）",
    color: "bg-primary",
    items: [
      { time: "08:30–09:00", title: "報到" },
      { time: "09:00–09:30", title: "HSIL 專題演講：Empowering Women in HealthTech" },
      { time: "09:30–12:00", title: "方案精煉與簡報準備（含導師指導）" },
      { time: "12:00–13:00", title: "午餐" },
      { time: "13:00–13:30", title: "簡報練習" },
      { time: "13:30–15:30", title: "團隊 Pitch 簡報（每組 3 分鐘 + 2 分鐘 Q&A）" },
      { time: "15:30–16:00", title: "評審討論" },
      { time: "16:00–16:30", title: "頒獎典禮與閉幕式" },
      { time: "16:30–17:00", title: "交流與合影" },
    ],
  },
  {
    label: "活動後",
    color: "bg-accent",
    items: [
      { time: "2026 年 5 月", title: "優勝隊伍方案精煉（2 週 Bootcamp）" },
      { time: "進階階段", title: "Top 20 進入延伸培訓 → 8 隊 VIP 計畫" },
      { time: "2026/6/19", title: "哈佛 Demo Day — 向全球評審與投資人展示方案" },
    ],
  },
];

const ScheduleSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="schedule" className="py-20 lg:py-28">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-crimson">
          活動時程
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-10">
            {schedule.map((group) => (
              <div key={group.label}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${group.color} relative z-10 ml-[10px] md:ml-[18px]`} />
                  <h3 className="font-bold text-lg text-foreground">{group.label}</h3>
                </div>
                <div className="ml-12 md:ml-16 space-y-3">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="text-xs font-mono text-muted-foreground whitespace-nowrap min-w-[100px]">
                        {item.time}
                      </span>
                      <span className="text-sm text-foreground">{item.title}</span>
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
