import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const winners = [
  { place: "01", label: "First Place", labelZh: "冠軍", team: "PhenoCDS", score: 91 },
  { place: "02", label: "Second Place", labelZh: "亞軍", team: "ICBigBoss", score: 82 },
  { place: "03", label: "Third Place", labelZh: "季軍", team: "The Healthorithm", score: 77 },
];

const WinnersSection = () => (
  <Section id="winners" tone="ivory">
    <SectionHeader
      eyebrow="The Winners · April 11, 2026"
      title={
        <>
          Meet the <span className="italic text-primary">top three</span>.
        </>
      }
      lede={
        <>
          Selected from 32 teams by a panel of five judges across ten criteria — scored out of 20 points per judge, 100 total.
        </>
      }
    />

    <div className="grid md:grid-cols-3 gap-10 lg:gap-16 max-w-6xl mx-auto">
      {winners.map((w, i) => (
        <Reveal key={w.place} delay={i * 0.12}>
          <div className="relative pt-10 pb-12 border-t-2 border-foreground/20 group hover:border-primary transition-colors duration-500">
            <div className="font-display font-normal text-7xl md:text-8xl text-foreground/90 leading-none mb-8 tabular-nums group-hover:text-primary transition-colors duration-500">
              {w.place}
            </div>
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
              {w.label} · {w.labelZh}
            </p>
            <h3 className="font-display font-normal text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              {w.team}
            </h3>
            <div className="flex items-baseline gap-2 text-muted-foreground">
              <span className="font-display text-2xl text-foreground">{w.score}</span>
              <span className="text-xs tracking-[0.2em] uppercase">/ 100 points</span>
            </div>
          </div>
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.4} className="mt-24 text-center max-w-2xl mx-auto">
      <div className="h-px w-16 bg-foreground/20 mx-auto mb-8" />
      <p className="font-serif italic text-base md:text-lg text-muted-foreground leading-relaxed">
        Top two teams — <span className="text-foreground">PhenoCDS</span> and <span className="text-foreground">ICBigBoss</span> — advance to the HSIL Global Bootcamp, a six-week virtual program with global mentors and investors.
      </p>
    </Reveal>
  </Section>
);

export default WinnersSection;
