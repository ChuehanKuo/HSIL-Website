import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionOutro from "@/components/ui/SectionOutro";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { v: "10", l: "Criteria", accent: false },
  { v: "0·1·2", l: "Per Criterion", accent: false },
  { v: "20", l: "Per Judge", accent: true },
  { v: "5", l: "Judges", accent: false },
  { v: "100", l: "Team Total", accent: false },
];

const JudgingSection = () => (
  <Section id="judging" tone="stone">
    <SectionHeader
      eyebrow="The Judging Rubric"
      title={
        <>
          Ten criteria,
          <br />
          <span className="italic text-primary">twenty points</span>.
        </>
      }
      lede="Every team was evaluated on ten criteria — problem framing, value proposition, market opportunity, competition, business model, go-to-market, funding ask, team, presentation, and Q&A. Five judges. Zero, one, or two points per criterion. One hundred possible points per team."
    />

    <Reveal delay={0.1}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-px bg-foreground/10 border border-foreground/10">
        {stats.map((s) => (
          <div
            key={s.l}
            className={`p-8 md:p-10 text-center transition-colors duration-500 ${
              s.accent ? "bg-[hsl(40_35%_97%)]" : "bg-[hsl(40_35%_97%)] hover:bg-[hsl(40_20%_94%)]"
            }`}
          >
            <div
              className={`font-display leading-none mb-3 tabular-nums ${
                s.accent ? "text-primary text-5xl md:text-6xl italic" : "text-foreground text-4xl md:text-5xl"
              }`}
            >
              {s.v}
            </div>
            <p
              className={`text-[10px] tracking-[0.2em] uppercase ${
                s.accent ? "text-primary/70 font-medium" : "text-muted-foreground"
              }`}
            >
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </Reveal>

    <SectionOutro>
      Teams pitched for five minutes each — 3-minute pitch · 1.5-minute Q&A · 30-second buffer — adapted from HSIL's 8-minute global standard to accommodate 32 competing teams.
    </SectionOutro>
  </Section>
);

export default JudgingSection;
