import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionOutro from "@/components/ui/SectionOutro";
import Reveal from "@/components/ui/Reveal";

interface Item { time: string; title: string; }
interface Day { label: string; date: string; subtitle: string; items: Item[]; }

const days: Day[] = [
  {
    label: "Day One",
    date: "Friday · April 10",
    subtitle: "Opening · Team Formation · Ideation",
    items: [
      { time: "09:00", title: "Opening ceremony" },
      { time: "10:00", title: "HSIL Global Live Session — all hubs connect worldwide" },
      { time: "11:05", title: "Team formation & registration" },
      { time: "13:30", title: "Ideation & mentor consultations" },
      { time: "17:30", title: "Day 1 wrap-up & pitch order lottery" },
    ],
  },
  {
    label: "Day Two",
    date: "Saturday · April 11",
    subtitle: "Refinement · Pitches · Awards",
    items: [
      { time: "09:15", title: "Solution refinement & pitch preparation" },
      { time: "12:00", title: "Slide deadline · judges arrive" },
      { time: "13:10", title: "Team pitches · 31 teams · 3-min pitch + Q&A" },
      { time: "17:30", title: "Awards ceremony — 1st · 2nd · 3rd" },
      { time: "17:50", title: "Closing remarks & group photo" },
    ],
  },
];

const ScheduleSection = () => (
  <Section id="schedule" tone="ivory">
    <SectionHeader
      eyebrow="The Schedule"
      title={
        <>
          Two days,
          <br />
          <span className="italic text-primary whitespace-nowrap">start to finish</span>.
        </>
      }
      lede="How the two days unfolded — from opening ceremony to closing group photo."
    />

    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
      {days.map((day, d) => (
        <Reveal key={day.label} delay={d * 0.15}>
          <div className="bg-[hsl(40_35%_97%)] p-8 md:p-12 h-full">
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

    <SectionOutro>
      Two days, one venue — NTU College of Public Health, Room 201.
    </SectionOutro>
  </Section>
);

export default ScheduleSection;
