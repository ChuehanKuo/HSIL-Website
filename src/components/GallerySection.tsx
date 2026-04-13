import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ImageIcon } from "lucide-react";

const placeholders = [
  { span: "md:col-span-2 md:row-span-2", label: "Opening ceremony · Day 1", ratio: "aspect-square" },
  { span: "md:col-span-1", label: "Team formation", ratio: "aspect-[4/3]" },
  { span: "md:col-span-1", label: "Mentor consultation", ratio: "aspect-[4/3]" },
  { span: "md:col-span-1", label: "Pitch presentation", ratio: "aspect-[4/3]" },
  { span: "md:col-span-1", label: "Judging panel", ratio: "aspect-[4/3]" },
  { span: "md:col-span-2", label: "Award ceremony · Day 2", ratio: "aspect-[16/9]" },
  { span: "md:col-span-1", label: "Group photo", ratio: "aspect-[4/5]" },
  { span: "md:col-span-1", label: "Backstage", ratio: "aspect-[4/5]" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" className="py-28 lg:py-36 bg-[hsl(220_15%_97%)]">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-4xl mb-16 md:mb-20">
          <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-6">
            Moments · 兩天回顧
          </p>
          <h2 className="font-display font-normal text-5xl md:text-7xl text-foreground leading-[1.05] mb-6">
            Two days, <span className="italic text-primary">one community</span>
          </h2>
          <p className="font-serif italic text-lg md:text-xl text-muted-foreground max-w-2xl">
            From the opening keynote at 9 AM Friday to the final group photo on Saturday evening — a visual record of Taiwan's first HSIL Hackathon.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-auto">
          {placeholders.map((p, i) => (
            <div
              key={i}
              className={`${p.span} ${p.ratio} relative bg-[hsl(220_14%_92%)] overflow-hidden group`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors">
                <ImageIcon className="w-8 h-8" strokeWidth={1} />
                <p className="text-[10px] tracking-[0.2em] uppercase">{p.label}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground/60 tracking-wide text-center">
          Full photo archive available upon request · hsilhackathon.taiwan@gmail.com
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
