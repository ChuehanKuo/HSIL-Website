import Section from "@/components/ui/Section";
import SectionOutro from "@/components/ui/SectionOutro";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/SplitReveal";
import ParallaxTitle from "@/components/ParallaxTitle";

import phenocdsImg from "@/assets/winners/phenocds.jpg";
import icbigbossImg from "@/assets/winners/icbigboss.jpg";
import healthorithmImg from "@/assets/winners/healthorithm.jpg";

const winners = [
  { place: "01", label: "First Place", labelZh: "冠軍", team: "PhenoCDS", desc: "AI-powered clinical decision support for early identification and diagnosis of rare diseases across multiple specialties.", primary: true, img: phenocdsImg },
  { place: "02", label: "Second Place", labelZh: "亞軍", team: "ICBigBoss", desc: "Smart eye health management tool combining visual fatigue tracking, risk assessment, and personalized eye care recommendations.", primary: false, img: icbigbossImg },
  { place: "03", label: "Third Place", labelZh: "季軍", team: "The Healthorithm", desc: "HealthPET — a multimodal AI health companion that improves medication adherence for chronic disease patients.", primary: false, img: healthorithmImg },
];

const WinnersSection = () => (
  <Section id="winners" tone="ivory">
    <div
      className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, hsl(352 72% 50% / 0.06) 0%, transparent 60%)" }}
      aria-hidden
    />

    {/* Custom asymmetric header with SplitReveal on the title */}
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-14 lg:mb-20 max-w-6xl mx-auto">
      <Reveal className="lg:col-span-5">
        <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-foreground/50 uppercase mb-6">
          The Winners · April 11, 2026
        </p>
        <h2 className="font-display font-normal text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-foreground">
          <SplitReveal by="word" stagger={0.08}>Meet the </SplitReveal>
          <SplitReveal by="word" stagger={0.08} delay={0.15} className="italic text-primary whitespace-nowrap">top three</SplitReveal>
          <span>.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.25} className="lg:col-span-7 lg:pt-6">
        <p className="font-serif italic text-lg md:text-xl leading-[1.6] text-muted-foreground">
          Selected from 31 teams by five judges. The top two now represent Taiwan on the global stage.
        </p>
      </Reveal>
    </div>

    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {winners.map((w, i) => (
        <Reveal key={w.place} delay={i * 0.12}>
          <div
            className={`relative pt-10 pb-12 border-t group transition-colors duration-500 ${
              w.primary ? "border-primary/60 hover:border-primary" : "border-foreground/15 hover:border-primary"
            }`}
          >
            <ParallaxTitle distance={w.primary ? 80 : 50}>
              <div
                className={`font-display font-normal leading-none mb-8 tabular-nums transition-colors duration-500 ${
                  w.primary
                    ? "text-primary text-[7rem] md:text-[9rem]"
                    : "text-foreground/80 group-hover:text-primary text-7xl md:text-8xl"
                }`}
              >
                {w.place}
              </div>
            </ParallaxTitle>
            <div className="aspect-[3/2] relative overflow-hidden mb-6 bg-[hsl(40_15%_90%)]">
              <img
                src={w.img}
                alt={w.team}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
              {w.label} · {w.labelZh}
            </p>
            <h3
              className={`font-display font-normal mb-3 leading-tight ${
                w.primary ? "text-4xl md:text-5xl text-foreground" : "text-3xl md:text-4xl text-foreground"
              }`}
            >
              {w.team}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {w.desc}
            </p>
          </div>
        </Reveal>
      ))}
    </div>

    <SectionOutro>
      <span className="text-foreground not-italic">PhenoCDS</span> and{" "}
      <span className="text-foreground not-italic">ICBigBoss</span> advance to the HSIL Global Bootcamp — an eight-week virtual program with global mentors and investors, culminating in Demo Day at Harvard.
    </SectionOutro>
  </Section>
);

export default WinnersSection;
