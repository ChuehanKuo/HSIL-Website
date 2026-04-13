import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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

const PartnersSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 lg:py-36 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Editorial header — asymmetric */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-24">
          <div className="lg:col-span-5">
            <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-6">
              Global Partners
            </p>
            <h2 className="font-display font-normal text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05]">
              Supported by <span className="italic text-primary">the best</span> in health innovation.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <p className="font-serif italic text-lg md:text-xl text-muted-foreground leading-relaxed">
              HSIL Hackathon is made possible through a coalition of twenty+ organizations across healthcare, technology, government, and philanthropy — the global partners whose mentorship and resources anchor every edition.
            </p>
          </div>
        </div>

        {/* Logo strip — borderless, monochrome, hairline dividers */}
        <div className="border-y border-foreground/10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {partners.map((p, i) => (
              <div
                key={p.name}
                className={`flex items-center justify-center py-12 md:py-16 px-6 ${
                  i < 3 ? "md:border-b-0 border-b border-foreground/10" : ""
                } ${
                  i % 3 !== 2 ? "md:border-r border-foreground/10" : ""
                } ${i % 2 !== 1 ? "border-r md:border-r" : ""} ${i > 2 ? "lg:border-b-0" : ""} border-foreground/10 group`}
                style={{ borderRightWidth: i % 6 === 5 ? 0 : undefined }}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-10 md:max-h-12 w-auto max-w-[140px] object-contain grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground/60 mt-10">
          + 20 additional global partners
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;
