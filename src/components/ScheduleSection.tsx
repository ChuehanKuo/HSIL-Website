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
    items: [{ time: "即日起 — 2026/3/31", title: "線上報名（Airtable 表單）" }],
  },
  {
    label: "活動前",
    dotColor: "bg-secondary",
    items: [
      { time: "2026 年 4 月初", title: "公布錄取名單並發送確認信" },
      { time: "活動前一週", title: "寄送行前通知與參賽者指南" },
    ],
  },
  {
    label: "Day 1 — 4 月 10 日（週五）",
    dotColor: "bg-primary",
    items: [
      { time: "08:00–09:00", title: "報到與入場" },
      { time: "09:00–09:30", title: "開幕式與歡迎致詞" },
      { time: "09:30–10:00", title: "問題定義與挑戰說明" },
      { time: "10:00–10:30", title: "團隊組成" },
      { time: "10:30–12:30", title: "團隊腦力激盪與問題探索" },
      { time: "12:30–13:30", title: "午餐與交流" },
      { time: "13:30–17:00", title: "方案發想與原型開發" },
      { time: "17:00–17:30", title: "導師諮詢時段" },
      { time: "17:30", title: "Day 1 結束" },
    ],
  },
  {
    label: "Day 2 — 4 月 11 日（週六）",
    dotColor: "bg-primary",
    items: [
      { time: "08:30–09:00", title: "報到" },
      { time: "09:00–12:00", title: "方案精煉與簡報準備" },
      { time: "12:00–13:00", title: "午餐" },
      { time: "13:00–13:30", title: "簡報練習" },
      { time: "13:30–15:30", title: "團隊 Pitch 簡報" },
      { time: "15:30–16:00", title: "評審討論" },
      { time: "16:00–16:30", title: "頒獎典禮與閉幕式" },
      { time: "16:30–17:00", title: "交流與合影" },
    ],
  },
  {
    label: "活動後",
    dotColor: "bg-accent",
    items: [
      { time: "2026 年 5 月", title: "優勝隊伍方案精煉" },
      { time: "2026/6/19", title: "哈佛 Demo Day — 向全球評審展示方案" },
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
                <div className="ml-14 md:ml-16 space-y-2.5">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start bg-background/60 rounded-xl px-4 py-3 border border-border/50">
                      <span className="text-xs font-mono text-muted-foreground whitespace-nowrap min-w-[100px] pt-0.5">
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
