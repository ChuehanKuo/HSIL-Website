import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const winners = [
  {
    place: "01",
    label: "First Place",
    labelZh: "冠軍",
    team: "PhenoCDS",
    score: 91,
    accent: "text-[hsl(37_90%_55%)]",
    rule: "border-[hsl(37_90%_55%)]/50",
  },
  {
    place: "02",
    label: "Second Place",
    labelZh: "亞軍",
    team: "ICBigBoss",
    score: 82,
    accent: "text-foreground",
    rule: "border-foreground/30",
  },
  {
    place: "03",
    label: "Third Place",
    labelZh: "季軍",
    team: "The Healthorithm",
    score: 77,
    accent: "text-foreground/80",
    rule: "border-foreground/20",
  },
];

const WinnersSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="winners" className="py-28 lg:py-36 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-6">
            The Winners · April 11, 2026
          </p>
          <h2 className="font-display font-normal text-5xl md:text-7xl text-foreground leading-[1.05] mb-6">
            Meet the <span className="italic text-primary">top three</span>
          </h2>
          <p className="font-serif italic text-lg md:text-xl text-muted-foreground">
            Selected from 32 teams by a panel of five judges across ten criteria — scored out of 20 points per judge, 100 total.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {winners.map((w) => (
            <div key={w.place} className={`relative pt-10 pb-12 border-t-2 ${w.rule}`}>
              <div className={`font-display font-normal text-7xl md:text-8xl ${w.accent} leading-none mb-6`}>
                {w.place}
              </div>
              <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-3">
                {w.label} · {w.labelZh}
              </p>
              <h3 className="font-display font-normal text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                {w.team}
              </h3>
              <div className="flex items-baseline gap-2 text-muted-foreground">
                <span className="font-display text-2xl text-foreground">{w.score}</span>
                <span className="text-xs tracking-wider uppercase">/ 100 points</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-xl mx-auto">
          <div className="h-px w-16 bg-foreground/20 mx-auto mb-6" />
          <p className="font-serif italic text-base text-muted-foreground leading-relaxed">
            Top two teams — PhenoCDS and ICBigBoss — advance to the HSIL Global Bootcamp,
            a six-week virtual program with global mentors and investors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
