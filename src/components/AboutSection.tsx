import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "137", label: "Registered Applicants" },
  { value: "32", label: "Competing Teams" },
  { value: "~100", label: "Participants on Site" },
  { value: "5", label: "Judges" },
  { value: "3", label: "Mentors" },
  { value: "2", label: "Days · Apr 10–11" },
];

const AboutSection = () => (
  <Section id="about" tone="stone">
    <SectionHeader
      eyebrow="About · 活動回顧"
      title={
        <>
          Taiwan's <span className="italic text-primary">first</span>
          <br />
          HSIL Hackathon.
        </>
      }
      lede={
        <>
          <p className="mb-4">
            On April 10 and 11, 2026, the Harvard T.H. Chan School of Public Health's{" "}
            <em className="text-primary">Health Systems Innovation Lab</em> brought its seventh annual hackathon to Taipei — the first time the program has been hosted in Taiwan.
          </p>
          <p className="text-sm md:text-base not-italic text-foreground/70 font-sans leading-[1.8]">
            Co-hosted by National Taiwan University's Health Economics & AI Lab (620 Lab), the two-day event gathered students, clinicians, engineers, designers, and researchers to build AI-driven solutions for high-value health systems.
          </p>
        </>
      }
    />

    <div className="max-w-6xl mx-auto">
      <Reveal>
        <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-10 border-t border-foreground/10 pt-8">
          By the Numbers
        </p>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div>
              <div className="font-display font-normal text-5xl md:text-6xl text-foreground leading-none mb-3 tabular-nums">
                {s.value}
              </div>
              <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground leading-snug">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>

    <Reveal delay={0.2} className="max-w-4xl mx-auto mt-28 lg:mt-36 text-center">
      <div className="h-px w-16 bg-foreground/20 mx-auto mb-10" />
      <p className="font-display italic text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.2]">
        "Two days of real problems, real teams, and a conversation that didn't end at closing ceremony."
      </p>
      <div className="h-px w-16 bg-foreground/20 mx-auto mt-10" />
    </Reveal>
  </Section>
);

export default AboutSection;
