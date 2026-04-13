import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

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
          <p className="mb-6">
            Each judge scored every team on ten criteria — zero, one, or two points per criterion. Five judges. One hundred possible points per team.
          </p>
          <div className="flex flex-wrap gap-6 md:gap-10 text-sm not-italic font-sans">
            {[
              { v: "10", l: "Criteria" },
              { v: "0 · 1 · 2", l: "Score Range" },
              { v: "20", l: "Per Judge", accent: true },
              { v: "100", l: "Team Total" },
            ].map((s) => (
              <div key={s.l}>
                <div className={`font-display text-3xl md:text-4xl leading-none mb-1 ${s.accent ? "text-primary" : "text-foreground"}`}>
                  {s.v}
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </>
      }
    />

    <div className="max-w-5xl mx-auto border-t border-foreground/10">
      {criteria.map((c, i) => (
        <Reveal key={c.num} delay={i * 0.04}>
          <div className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-7 border-b border-foreground/10 items-baseline group hover:bg-[hsl(40_20%_94%)] transition-colors duration-500">
            <div className="col-span-2 md:col-span-1">
              <span className="font-display text-xl md:text-2xl text-muted-foreground/50 group-hover:text-primary transition-colors duration-500">
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
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.3} className="max-w-4xl mx-auto mt-20 grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
      <div className="bg-[hsl(40_35%_97%)] p-8 md:p-10">
        <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">
          Pitch Format · Taiwan Hub
        </p>
        <p className="font-display text-3xl text-foreground leading-tight mb-3">5 minutes</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          3-minute pitch · 1.5-minute Q&A · 30-second buffer. Adapted from HSIL's 8-minute standard to accommodate 32 competing teams.
        </p>
      </div>
      <div className="bg-[hsl(40_35%_97%)] p-8 md:p-10">
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
    </Reveal>
  </Section>
);

export default JudgingSection;
