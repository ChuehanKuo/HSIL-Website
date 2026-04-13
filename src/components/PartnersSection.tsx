import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import microsoftLogo from "@/assets/partners/microsoft.svg";
import pathLogo from "@/assets/partners/path.png";
import discoveryLogo from "@/assets/partners/discovery.png";
import orrickLogo from "@/assets/partners/orrick.svg";
import tntLogo from "@/assets/partners/tnt.png";
import intersystemsLogo from "@/assets/partners/intersystems.svg";

const partners = [
  { name: "Microsoft", logo: microsoftLogo },
  { name: "PATH", logo: pathLogo },
  { name: "Discovery", logo: discoveryLogo },
  { name: "Orrick", logo: orrickLogo },
  { name: "TNT", logo: tntLogo },
  { name: "InterSystems", logo: intersystemsLogo },
];

const PartnersSection = () => (
  <Section tone="ivory">
    <SectionHeader
      eyebrow="Global Partners"
      title={
        <>
          Supported by <span className="italic text-primary">the best</span> in health innovation.
        </>
      }
      lede="HSIL Hackathon is made possible through a coalition of twenty+ organizations across healthcare, technology, government, and philanthropy — the global partners whose mentorship and resources anchor every edition."
    />

    <Reveal className="max-w-6xl mx-auto border-y border-foreground/10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {partners.map((p, i) => (
          <div
            key={p.name}
            className={`flex items-center justify-center py-12 md:py-16 px-6 border-foreground/10 group ${
              i % 2 === 0 ? "border-r" : ""
            } ${i < 4 ? "border-b lg:border-b-0" : ""} ${
              i % 3 !== 2 ? "md:border-r" : "md:border-r-0"
            } ${i < 3 ? "md:border-b" : "md:border-b-0"} ${
              i % 6 !== 5 ? "lg:border-r" : "lg:border-r-0"
            } lg:border-b-0`}
          >
            <img
              src={p.logo}
              alt={p.name}
              className="max-h-10 md:max-h-12 w-auto max-w-[140px] object-contain grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </Reveal>

    <p className="text-center text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60 mt-10">
      + 20 additional global partners
    </p>
  </Section>
);

export default PartnersSection;
