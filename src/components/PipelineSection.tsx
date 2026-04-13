import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionOutro from "@/components/ui/SectionOutro";
import Reveal from "@/components/ui/Reveal";

const stages = [
  { num: "I", title: "Taiwan Hub Hackathon", zh: "台灣站黑客松", dates: "April 10–11, 2026", desc: "Two days of team formation, ideation, and pitching at NTU College of Public Health. Top three teams take the stage; the top two advance.", status: "Completed" },
  { num: "II", title: "Bootcamp I & II", zh: "全球訓練營", dates: "April 20 – May 15", desc: "Advancing teams join the global cohort for six weeks of 1:1 mentorship, deck refinement, and virtual judging rounds. ~100 teams → ~20.", status: "Upcoming" },
  { num: "III", title: "Venture Building Immersion", zh: "創業深耕", dates: "May 18 – June 12", desc: "Top twenty teams enter intensive build mode — working demos, validation, and investor-ready narratives, guided by HSIL and industry partners.", status: "Upcoming" },
  { num: "IV", title: "Demo Day", zh: "Demo Day · 哈佛大學", dates: "June 19, 2026", desc: "Top ten teams present to investors, venture capitalists, and industry leaders at Harvard. A chance at funding, partnerships, and signal.", status: "Upcoming" },
];

const PipelineSection = () => (
  <Section tone="dark">
    <div
      className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full blur-[120px] pointer-events-none"
      style={{ background: "radial-gradient(circle, hsl(170 70% 35% / 0.12) 0%, transparent 60%)" }}
      aria-hidden
    />

    <SectionHeader
      tone="dark"
      eyebrow="The Journey Continues"
      title={
        <>
          The hackathon was <span className="italic text-[hsl(37_90%_75%)]">chapter one</span>.
        </>
      }
      lede={
        <>
          <p className="mb-4 text-xl md:text-2xl">黑客松之後的旅程</p>
          <p className="text-sm md:text-base not-italic font-sans text-white/60 leading-[1.85]">
            Two Taiwan teams — <span className="text-white/90">PhenoCDS</span> and <span className="text-white/90">ICBigBoss</span> — now join the HSIL Global Bootcamp, an eight-week virtual program running from April 20 through June 19, culminating in Demo Day at Harvard.
          </p>
        </>
      }
    />

    <div className="max-w-5xl mx-auto border-t border-white/10">
      {stages.map((s, i) => (
        <Reveal key={s.num} delay={i * 0.08}>
          <div className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-white/10 group hover:bg-white/[0.03] transition-colors duration-500">
            <div className="col-span-2 md:col-span-1">
              <span className="font-display italic text-2xl md:text-3xl text-[hsl(37_90%_75%)]/70 group-hover:text-[hsl(37_90%_75%)] transition-colors duration-500">
                {s.num}
              </span>
            </div>
            <div className="col-span-10 md:col-span-4">
              <h3 className="font-display text-xl md:text-2xl text-white leading-tight mb-1">
                {s.title}
              </h3>
              <p className="font-serif italic text-sm text-[hsl(37_90%_75%)]/80 mb-2">
                {s.zh}
              </p>
              <p className="text-[11px] tracking-[0.15em] uppercase text-white/40">
                {s.dates}
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col justify-between gap-3">
              <p className="text-sm md:text-base text-white/60 leading-[1.75]">{s.desc}</p>
              <p className={`text-[10px] tracking-[0.25em] uppercase self-start ${s.status === "Completed" ? "text-[hsl(170_85%_65%)]" : "text-white/40"}`}>
                {s.status === "Completed" ? "● Completed" : "○ Upcoming"}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>

    <SectionOutro tone="dark">
      Fully virtual · Per HSIL global program schedule — culminating in Demo Day at Harvard on June 19, 2026.
    </SectionOutro>
  </Section>
);

export default PipelineSection;
