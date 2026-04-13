import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Item {
  time: string;
  title: string;
}

interface Day {
  label: string;
  date: string;
  subtitle: string;
  items: Item[];
}

const days: Day[] = [
  {
    label: "Day One",
    date: "Friday · April 10",
    subtitle: "Opening · Team Formation · Ideation",
    items: [
      { time: "08:00", title: "Check-in & arrival" },
      { time: "09:00", title: "Opening ceremony & welcome remarks" },
      { time: "09:15", title: "Keynote: AI-Driven Digital Solutions for Health Systems" },
      { time: "10:00", title: "HSIL Global Live Session — all 36 hubs connect via Zoom" },
      { time: "10:45", title: "Hack 101 — rules, rubric, pitch format" },
      { time: "11:05", title: "Team formation & registration" },
      { time: "12:30", title: "Lunch · meal boxes in the foyer" },
      { time: "13:30", title: "Ideation & mentor consultations" },
      { time: "17:00", title: "Day 1 wrap-up & pitch-order lottery" },
      { time: "17:30", title: "Open hack time" },
    ],
  },
  {
    label: "Day Two",
    date: "Saturday · April 11",
    subtitle: "Refinement · Pitches · Awards",
    items: [
      { time: "08:00", title: "Check-in" },
      { time: "09:00", title: "Day 2 briefing" },
      { time: "09:15", title: "Solution refinement & pitch preparation" },
      { time: "12:00", title: "Slide deadline · submit PDF to shared drive" },
      { time: "13:00", title: "Judge briefing" },
      { time: "13:10", title: "Team pitches · 32 teams · 3-min + 1.5-min Q&A each" },
      { time: "17:04", title: "Judge feedback" },
      { time: "17:30", title: "Awards ceremony — 1st · 2nd · 3rd" },
      { time: "17:50", title: "Closing remarks & group photo" },
    ],
  },
];

const ScheduleSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="schedule" className="py-28 lg:py-36 bg-[hsl(220_15%_97%)]">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Editorial header */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-24 max-w-6xl mx-auto">
          <div className="lg:col-span-5">
            <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-6">
              The Schedule
            </p>
            <h2 className="font-display font-normal text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05]">
              Two days,
              <br />
              <span className="italic text-primary">one rhythm</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <p className="font-serif italic text-lg md:text-xl text-muted-foreground leading-relaxed">
              A retrospective look at how the two days unfolded — from the opening keynote to the closing photo, with the HSIL global live session, mentor consultations, and 32 team pitches in between.
            </p>
          </div>
        </div>

        {/* Two-column editorial timetable */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          {days.map((day) => (
            <div key={day.label} className="bg-background p-8 md:p-12">
              <div className="mb-10 pb-6 border-b border-foreground/10">
                <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  {day.date}
                </p>
                <h3 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-2">
                  {day.label}
                </h3>
                <p className="font-serif italic text-sm md:text-base text-muted-foreground">
                  {day.subtitle}
                </p>
              </div>

              <div className="space-y-0">
                {day.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-6 py-4 border-b border-foreground/5 last:border-0 group"
                  >
                    <span className="font-display text-base md:text-lg text-muted-foreground w-14 shrink-0 tabular-nums pt-0.5">
                      {item.time}
                    </span>
                    <span className="text-sm md:text-base text-foreground leading-relaxed group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Context footer */}
        <div className="max-w-4xl mx-auto mt-16 grid sm:grid-cols-3 gap-10 text-center">
          <div>
            <div className="font-display text-4xl text-foreground leading-none mb-2">32</div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Teams Pitched</p>
          </div>
          <div>
            <div className="font-display text-4xl text-foreground leading-none mb-2">~16h</div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Total Runtime</p>
          </div>
          <div>
            <div className="font-display text-4xl text-foreground leading-none mb-2">1</div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Venue · NTU CPH</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
