import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import microsoftLogo from "@/assets/partners/microsoft.svg";
import pathLogo from "@/assets/partners/path.png";
import discoveryLogo from "@/assets/partners/discovery.png";
import orrickLogo from "@/assets/partners/orrick.svg";
import tntLogo from "@/assets/partners/tnt.png";
import intersystemsLogo from "@/assets/partners/intersystems.svg";

const partners = [
  { name: "Microsoft", logo: microsoftLogo, className: "max-h-20 md:max-h-24 scale-[1.3]" },
  { name: "PATH", logo: pathLogo, className: "max-h-20 md:max-h-24 scale-[0.8]" },
  { name: "Discovery", logo: discoveryLogo },
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
        className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-14">
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
          {partners.map(({ name, logo, className }) => (
            <div
              key={name}
              className="card-elevated rounded-2xl px-6 py-8 flex items-center justify-center group hover:scale-105 transition-transform duration-300 aspect-[3/2]"
            >
              <img
                src={logo}
                alt={name}
                className={`${className || "max-h-20 md:max-h-24"} w-auto max-w-[85%] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-xs font-light tracking-wide text-foreground/40 mt-10">
          及 20+ 全球產業合作夥伴
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;
