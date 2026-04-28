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

const QuoteCard = ({ q }: { q: typeof quotes[0] }) => (
  <div className="w-[340px] md:w-[500px] flex-shrink-0 border-t border-foreground/10 pt-8 px-6">
    <blockquote className="font-serif italic text-xl md:text-2xl text-foreground leading-relaxed mb-8">
      &ldquo;{q.text}&rdquo;
    </blockquote>
    <p className="text-base font-medium text-foreground">{q.name}</p>
    <p className="text-sm text-muted-foreground mt-0.5">{q.org}</p>
  </div>
);

const TestimonialSection = () => {
  const doubled = [...quotes, ...quotes];

  return (
    <Section tone="ivory">
      <Reveal>
        <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-14 text-center">
          In Their Words
        </p>
      </Reveal>

      <div className="overflow-hidden">
        <div
          className="flex gap-6 animate-marquee"
          style={{ width: "max-content" }}
        >
          {doubled.map((q, i) => (
            <QuoteCard key={i} q={q} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TestimonialSection;
