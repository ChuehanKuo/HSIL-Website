import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const criteria = [
  { num: "01", en: "Problem Definition & Solution Framing", zh: "問題定義與方案框架" },
  { num: "02", en: "Value Proposition & Innovation", zh: "價值主張與創新" },
  { num: "03", en: "Opportunity", zh: "市場機會" },
  { num: "04", en: "Competitive Landscape", zh: "競爭分析" },
  { num: "05", en: "Business Model", zh: "商業模式" },
  { num: "06", en: "Go-to-Market Strategy", zh: "市場進入策略" },
  { num: "07", en: "Ask", zh: "資金需求" },
  { num: "08", en: "Team", zh: "團隊" },
  { num: "09", en: "Presentation", zh: "簡報呈現" },
  { num: "10", en: "Q&A", zh: "問答應答" },
];

const JudgingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="judging" className="py-28 lg:py-36 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Asymmetric editorial header */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20 max-w-6xl mx-auto">
          <div className="lg:col-span-5">
            <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-6">
              The Judging Rubric
            </p>
            <h2 className="font-display font-normal text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05]">
              Ten criteria,
              <br />
              <span className="italic text-primary">twenty points.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <p className="font-serif italic text-lg md:text-xl text-muted-foreground leading-relaxed mb-5">
              Each judge scored every team on ten criteria — zero, one, or two points per criterion. Five judges. One hundred possible points per team.
            </p>
            <div className="flex flex-wrap gap-6 md:gap-10 text-sm">
              <div>
                <div className="font-display text-3xl md:text-4xl text-foreground leading-none mb-1">10</div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Criteria</p>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl text-foreground leading-none mb-1">0 · 1 · 2</div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Score Range</p>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl text-primary leading-none mb-1">20</div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Per Judge</p>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl text-foreground leading-none mb-1">100</div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Team Total</p>
              </div>
            </div>
          </div>
        </div>

        {/* Criteria — editorial two-column list */}
        <div className="max-w-5xl mx-auto border-t border-foreground/10">
          {criteria.map((c) => (
            <div
              key={c.num}
              className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-7 border-b border-foreground/10 items-baseline group hover:bg-[hsl(220_15%_97%)] transition-colors"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="font-display text-xl md:text-2xl text-muted-foreground/50 group-hover:text-primary transition-colors">
                  {c.num}
                </span>
              </div>
              <div className="col-span-7 md:col-span-8">
                <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight">
                  {c.en}
                </h3>
                <p className="font-serif italic text-sm text-muted-foreground mt-1">
                  {c.zh}
                </p>
              </div>
              <div className="col-span-3 text-right">
                <span className="font-display text-xl md:text-2xl text-foreground">2</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground ml-1.5">pts</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pitch format note — editorial footer */}
        <div className="max-w-4xl mx-auto mt-20 grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          <div className="bg-background p-8 md:p-10">
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">
              Pitch Format · Taiwan Hub
            </p>
            <p className="font-display text-3xl text-foreground leading-tight mb-3">
              5 minutes
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              3-minute pitch · 1.5-minute Q&A · 30-second buffer.
              Adapted from HSIL's 8-minute standard to accommodate 32 competing teams.
            </p>
          </div>
          <div className="bg-background p-8 md:p-10">
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">
              Recommended Slide Structure
            </p>
            <ol className="space-y-1 text-sm font-serif text-foreground/85">
              {["Problem", "Solution", "Opportunity", "Competition", "Business Model", "Go-to-Market", "Ask", "Team"].map((s, i) => (
                <li key={s} className="flex gap-3">
                  <span className="text-muted-foreground/50 w-5">{String(i + 1).padStart(2, "0")}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgingSection;
