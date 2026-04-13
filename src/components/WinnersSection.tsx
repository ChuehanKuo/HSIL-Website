import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionOutro from "@/components/ui/SectionOutro";
import Reveal from "@/components/ui/Reveal";

const winners = [
  { place: "01", label: "First Place", labelZh: "冠軍", team: "PhenoCDS", score: 91, primary: true },
  { place: "02", label: "Second Place", labelZh: "亞軍", team: "ICBigBoss", score: 82, primary: false },
  { place: "03", label: "Third Place", labelZh: "季軍", team: "The Healthorithm", score: 77, primary: false },
];

const WinnersSection = () => (
  <Section id="winners" tone="ivory">
    {/* Whisper of hero atmosphere */}
    <div
      className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, hsl(352 72% 50% / 0.06) 0%, transparent 60%)" }}
      aria-hidden
    />

    <SectionHeader
      eyebrow="The Winners · April 11, 2026"
      title={
        <>
          Meet the <span className="italic text-primary">top three</span>.
        </>
      }
      lede="Selected from 32 teams by a panel of five judges across ten criteria — scored out of 20 points per judge, 100 total."
    />

    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {winners.map((w, i) => (
        <Reveal key={w.place} delay={i * 0.12}>
          <div
            className={`relative pt-10 pb-12 border-t group transition-colors duration-500 ${
              w.primary ? "border-primary/60 hover:border-primary" : "border-foreground/15 hover:border-primary"
            }`}
          >
            <div
              className={`font-display font-normal leading-none mb-8 tabular-nums transition-colors duration-500 ${
                w.primary
                  ? "text-primary text-[7rem] md:text-[9rem]"
                  : "text-foreground/80 group-hover:text-primary text-7xl md:text-8xl"
              }`}
            >
              {w.place}
            </div>
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
              {w.label} · {w.labelZh}
            </p>
            <h3
              className={`font-display font-normal mb-6 leading-tight ${
                w.primary ? "text-4xl md:text-5xl text-foreground" : "text-3xl md:text-4xl text-foreground"
              }`}
            >
              {w.team}
            </h3>
            <div className="flex items-baseline gap-2 text-muted-foreground">
              <span className={`font-display ${w.primary ? "text-3xl text-primary" : "text-2xl text-foreground"}`}>
                {w.score}
              </span>
              <span className="text-xs tracking-[0.2em] uppercase">/ 100 points</span>
            </div>
          </div>
        </Reveal>
      ))}
    </div>

    <SectionOutro>
      Top two teams — <span className="text-foreground not-italic">PhenoCDS</span> and{" "}
      <span className="text-foreground not-italic">ICBigBoss</span> — advance to the HSIL Global Bootcamp, a six-week
      virtual program with global mentors and investors.
    </SectionOutro>
  </Section>
);

export default WinnersSection;
