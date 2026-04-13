import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "137", label: "Registered Applicants" },
  { value: "32", label: "Competing Teams" },
  { value: "~100", label: "Participants on Site" },
  { value: "5", label: "Judges" },
  { value: "3", label: "Mentors" },
  { value: "2", label: "Days · Apr 10–11" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-28 lg:py-36 bg-[hsl(220_15%_97%)]">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Editorial opening — asymmetric two column */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-24 lg:mb-32 max-w-6xl mx-auto">
          <div className="lg:col-span-5">
            <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-6">
              About · 活動回顧
            </p>
            <h2 className="font-display font-normal text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05]">
              Taiwan's <span className="italic text-primary">first</span>
              <br />
              HSIL Hackathon.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <p className="font-serif text-lg md:text-xl text-foreground/85 leading-[1.7] mb-6">
              On April 10 and 11, 2026, the Harvard T.H. Chan School of Public Health's
              <em className="text-primary"> Health Systems Innovation Lab </em>
              brought its seventh annual hackathon to Taipei — the first time the program has been hosted in Taiwan.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85]">
              Co-hosted by National Taiwan University's Health Economics & AI Lab (620 Lab) at the College of Public Health, the two-day event gathered students, clinicians, engineers, designers, and researchers to build AI-driven solutions for high-value health systems. Thirty-two teams competed. Three advanced. Two now continue on to the global bootcamp program.
            </p>
          </div>
        </div>

        {/* Stats — editorial grid */}
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-10 border-t border-foreground/10 pt-8">
            By the Numbers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-normal text-5xl md:text-6xl text-foreground leading-none mb-3">
                  {s.value}
                </div>
                <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <div className="max-w-4xl mx-auto mt-24 lg:mt-32 text-center">
          <div className="h-px w-16 bg-foreground/20 mx-auto mb-10" />
          <p className="font-display italic text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.2]">
            "Two days of real problems, real teams, and a conversation that didn't end at closing ceremony."
          </p>
          <div className="h-px w-16 bg-foreground/20 mx-auto mt-10" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
