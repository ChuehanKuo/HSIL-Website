import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionOutro from "@/components/ui/SectionOutro";
import Reveal from "@/components/ui/Reveal";

const stages = [
  { num: "I", title: "Taiwan Hub Hackathon", zh: "台灣站黑客松", dates: "April 10–11, 2026", desc: "Two days of team formation, ideation, and pitching at NTU College of Public Health. Top three teams take the stage; the top two advance.", status: "Completed" },
  { num: "II", title: "Bootcamp I & II", zh: "全球訓練營", dates: "April 20 – May 15", desc: "Advancing teams join the global cohort for six weeks of 1:1 mentorship, deck refinement, and virtual judging rounds. ~100 teams → ~20.", status: "In Progress" },
  { num: "III", title: "Venture Building Immersion", zh: "創業深耕", dates: "May 18 – June 12", desc: "Top twenty teams enter intensive build mode — working demos, validation, and investor-ready narratives, guided by HSIL and industry partners.", status: "Upcoming" },
  { num: "IV", title: "Demo Day", zh: "Demo Day · 哈佛大學", dates: "June 19, 2026", desc: "Top ten teams present to investors, venture capitalists, and industry leaders at Harvard. A chance at funding, partnerships, and signal.", status: "Upcoming" },
];

const PipelineSection = () => (
  <Section tone="ivory">
    <SectionHeader
      eyebrow="The Journey Continues"
      title={
        <>
          The hackathon was{" "}
          <span className="italic text-primary">chapter one</span>.
        </>
      }
      lede={
        <>
          <p className="mb-4 text-xl md:text-2xl">黑客松之後的旅程</p>
          <p className="text-sm md:text-base not-italic font-sans text-muted-foreground leading-[1.85]">
            Two Taiwan teams — <span className="text-foreground font-medium">PhenoCDS</span> and <span className="text-foreground font-medium">ICBigBoss</span> — now join the HSIL Global Bootcamp, an eight-week virtual program running from April 20 through June 19, culminating in Demo Day at Harvard.
          </p>
        </>
      }
    />

    <div className="max-w-5xl mx-auto border-t border-foreground/10">
      {stages.map((s, i) => (
        <Reveal key={s.num} delay={i * 0.08}>
          <div className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-foreground/10 group hover:bg-foreground/[0.02] transition-colors duration-500">
            <div className="col-span-2 md:col-span-1">
              <span className="font-display italic text-2xl md:text-3xl text-primary/50 group-hover:text-primary transition-colors duration-500">
                {s.num}
              </span>
            </div>
            <div className="col-span-10 md:col-span-4">
              <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight mb-1">
                {s.title}
              </h3>
              <p className="font-serif italic text-sm text-primary/70 mb-2">
                {s.zh}
              </p>
              <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                {s.dates}
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col justify-between gap-3">
              <p className="text-sm md:text-base text-muted-foreground leading-[1.75]">{s.desc}</p>
              <p className={`text-[10px] tracking-[0.25em] uppercase self-start ${
                s.status === "Completed" ? "text-[hsl(170_85%_32%)]" :
                s.status === "In Progress" ? "text-[hsl(37_90%_44%)]" : "text-muted-foreground"
              }`}>
                {s.status === "Completed" ? "● Completed" : s.status === "In Progress" ? "◉ In Progress" : "○ Upcoming"}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>

    <SectionOutro>
      Culminating in Demo Day at Harvard — June 19, 2026.
    </SectionOutro>
  </Section>
);

export default PipelineSection;
