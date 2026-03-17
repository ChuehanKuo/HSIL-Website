import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import microsoftLogo from "@/assets/partners/microsoft.svg";
import pathLogo from "@/assets/partners/path.png";
import discoveryLogo from "@/assets/partners/discovery.svg";
import orrickLogo from "@/assets/partners/orrick.svg";
import tntLogo from "@/assets/partners/tnt.png";
import intersystemsLogo from "@/assets/partners/intersystems.svg";

const topPartners = [
  { name: "Microsoft", logo: microsoftLogo },
  { name: "PATH", logo: pathLogo },
  { name: "Discovery", logo: discoveryLogo },
];

const otherPartners = [
  { name: "Orrick", logo: orrickLogo },
  { name: "TNT", logo: tntLogo },
  { name: "InterSystems", logo: intersystemsLogo },
];

const PartnersSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 section-subtle">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider uppercase text-secondary mb-3">
            Partners
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gradient-crimson mb-4">
            合作夥伴
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            攜手全球頂尖產業夥伴，共同推動健康系統創新
          </p>
        </div>

        {/* Top-tier partners */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 mb-10">
          {topPartners.map(({ name, logo }) => (
            <div
              key={name}
              className="card-elevated rounded-2xl px-8 py-5 flex items-center justify-center group hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
                alt={name}
                className="h-10 md:h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        {/* Other partners */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-8">
          {otherPartners.map(({ name, logo }) => (
            <div
              key={name}
              className="rounded-xl bg-background/60 border border-border/50 px-6 py-4 hover:border-secondary/40 transition-colors duration-300 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={name}
                className="h-7 md:h-9 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          及 20+ 全球產業合作夥伴
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;
