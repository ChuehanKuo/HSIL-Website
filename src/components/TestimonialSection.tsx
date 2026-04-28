import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const quotes = [
  {
    text: "[Quote placeholder]",
    name: "李達宇 Prof. Lee Tayu",
    org: "NTU Health Policy & Management",
  },
  {
    text: "[Quote placeholder]",
    name: "杜裕康 Prof. Tu Yu-Kang",
    org: "NTU Epidemiology & Preventive Medicine",
  },
  {
    text: "[Quote placeholder]",
    name: "王彥雯 Prof. Wang Yan-Wen",
    org: "NTU Health Data Analytics & Statistics",
  },
  {
    text: "[Quote placeholder]",
    name: "王佳惠 Victoria Wang",
    org: "Taiwan BioVentures Fund",
  },
  {
    text: "[Quote placeholder]",
    name: "劉致宏 James Liu",
    org: "Microsoft Taiwan",
  },
];

const TestimonialSection = () => (
  <Section tone="ivory">
    <div className="max-w-6xl mx-auto">
      <Reveal>
        <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-14 text-center">
          In Their Words
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {quotes.map((q, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="border-t border-foreground/10 pt-6">
              <blockquote className="font-serif italic text-lg md:text-xl text-foreground leading-relaxed mb-6">
                "{q.text}"
              </blockquote>
              <p className="text-sm font-medium text-foreground">{q.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{q.org}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);

export default TestimonialSection;
