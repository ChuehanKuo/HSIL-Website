import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

interface Item { time: string; title: string; }
interface Day { label: string; date: string; subtitle: string; items: Item[]; }

const days: Day[] = [
  {
    label: "Day One",
    date: "Friday · April 10",
    subtitle: "Opening · Team Formation · Ideation",
    items: [
      { time: "09:00", title: "Opening ceremony & keynote: AI-Driven Digital Solutions for Health Systems" },
      { time: "10:00", title: "HSIL Global Live Session — all 36 hubs connect" },
      { time: "11:05", title: "Team formation & registration" },
      { time: "13:30", title: "Ideation & mentor consultations" },
      { time: "17:30", title: "Open hack time" },
    ],
  },
  {
    label: "Day Two",
    date: "Saturday · April 11",
    subtitle: "Refinement · Pitches · Awards",
    items: [
      { time: "09:15", title: "Solution refinement & pitch preparation" },
      { time: "12:00", title: "Slide deadline · judges arrive" },
      { time: "13:10", title: "Team pitches · 32 teams · 3-min + 1.5-min Q&A" },
      { time: "17:30", title: "Awards ceremony — 1st · 2nd · 3rd" },
      { time: "17:50", title: "Closing remarks & group photo" },
    ],
  },
];

const ScheduleSection = () => (
  <Section id="schedule" tone="stone">
    <SectionHeader
      eyebrow="The Schedule"
      title={
        <>
          Two days,
          <br />
          <span className="italic text-primary">one rhythm</span>.
        </>
      }
      lede="A retrospective look at how the two days unfolded — from the opening keynote to the closing photo, with the HSIL global live session, mentor consultations, and 32 team pitches in between."
    />

    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
      {days.map((day, d) => (
        <Reveal key={day.label} delay={d * 0.15}>
          <div className="bg-[hsl(40_20%_94%)] p-8 md:p-12 h-full">
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

            <div>
              {day.items.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 py-4 border-b border-foreground/5 last:border-0 group"
                >
                  <span className="font-display text-base md:text-lg text-muted-foreground w-14 shrink-0 tabular-nums pt-0.5">
                    {item.time}
                  </span>
                  <span className="text-sm md:text-base text-foreground leading-relaxed group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.3} className="max-w-4xl mx-auto mt-20 grid sm:grid-cols-3 gap-10 text-center">
      {[
        { val: "32", label: "Teams Pitched" },
        { val: "~16h", label: "Total Runtime" },
        { val: "1", label: "Venue · NTU CPH" },
      ].map((s) => (
        <div key={s.label}>
          <div className="font-display text-4xl text-foreground leading-none mb-2">{s.val}</div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </Reveal>
  </Section>
);

export default ScheduleSection;
