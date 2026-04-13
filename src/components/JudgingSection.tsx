import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { v: "10", l: "Criteria" },
  { v: "0 · 1 · 2", l: "Per Criterion" },
  { v: "20", l: "Per Judge", accent: true },
  { v: "5", l: "Judges" },
  { v: "100", l: "Team Total" },
];

const JudgingSection = () => (
  <Section id="judging" tone="ivory">
    <SectionHeader
      eyebrow="The Judging Rubric"
      title={
        <>
          Ten criteria,
          <br />
          <span className="italic text-primary">twenty points</span>.
        </>
      }
      lede={
        <>
          Every team was evaluated on ten criteria — problem framing, value proposition, market opportunity, competition, business model, go-to-market, funding ask, team, presentation, and Q&A. Five judges. Zero, one, or two points per criterion. One hundred possible points per team.
        </>
      }
    />

    <Reveal delay={0.1}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-px bg-foreground/10 border border-foreground/10">
        {stats.map((s) => (
          <div key={s.l} className="bg-[hsl(40_35%_97%)] p-8 md:p-10 text-center">
            <div
              className={`font-display ${s.accent ? "text-primary" : "text-foreground"} text-4xl md:text-5xl leading-none mb-3 tabular-nums`}
            >
              {s.v}
            </div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </Reveal>

    <Reveal delay={0.25} className="mt-16 text-center max-w-2xl mx-auto">
      <p className="font-serif italic text-muted-foreground text-sm md:text-base leading-relaxed">
        Teams pitched for five minutes each — 3-min pitch · 1.5-min Q&A · 30-second buffer — adapted from HSIL's 8-minute global standard to accommodate 32 competing teams.
      </p>
    </Reveal>
  </Section>
);

export default JudgingSection;
