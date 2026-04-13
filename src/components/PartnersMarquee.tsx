import microsoftLogo from "@/assets/partners/microsoft.svg";
import pathLogo from "@/assets/partners/path.png";
import discoveryLogo from "@/assets/partners/discovery.png";
import orrickLogo from "@/assets/partners/orrick.svg";
import tntLogo from "@/assets/partners/tnt.png";
import intersystemsLogo from "@/assets/partners/intersystems.svg";

const logos = [
  { name: "Microsoft", src: microsoftLogo },
  { name: "PATH", src: pathLogo },
  { name: "Discovery", src: discoveryLogo },
  { name: "Orrick", src: orrickLogo },
  { name: "TNT", src: tntLogo },
  { name: "InterSystems", src: intersystemsLogo },
];

const PartnersMarquee = () => {
  const items = [...logos, ...logos, ...logos];

  return (
    <section className="py-14 md:py-16 bg-[hsl(40_35%_97%)] border-y border-foreground/10 overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
          In partnership with
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[hsl(40_35%_97%)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[hsl(40_35%_97%)] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-16 md:gap-24 animate-marquee whitespace-nowrap">
          {items.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="shrink-0 flex items-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
