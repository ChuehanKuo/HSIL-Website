import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const TestimonialSection = () => (
  <Section tone="ivory">
    <div className="max-w-4xl mx-auto text-center">
      <Reveal>
        <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-14">
          In Their Words
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <blockquote className="font-display italic text-3xl md:text-5xl lg:text-6xl text-foreground leading-[1.2] tracking-tight">
          "The quality of the pitches rivaled what I see from funded startups.
          This is a glimpse of Taiwan's next decade in health innovation."
        </blockquote>
      </Reveal>

      <Reveal delay={0.3} className="mt-14">
        <div className="h-px w-12 bg-foreground/20 mx-auto mb-6" />
        <p className="text-sm md:text-base text-foreground font-medium">
          Judge · HSIL Hackathon 2026, Taiwan Hub
        </p>
        <p className="font-serif italic text-muted-foreground text-sm mt-1">
          Day 2 · April 11, 2026
        </p>
      </Reveal>
    </div>
  </Section>
);

export default TestimonialSection;
