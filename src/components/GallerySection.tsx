import { ImageIcon } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

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

const GallerySection = () => (
  <Section id="gallery" tone="ivory">
    <SectionHeader
      eyebrow="Moments · 兩天回顧"
      title={
        <>
          Two days, <span className="italic text-primary">one community</span>.
        </>
      }
      lede="From the opening keynote Friday morning to the final group photo Saturday evening — a visual record of Taiwan's first HSIL Hackathon."
    />

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
      {placeholders.map((p, i) => (
        <Reveal key={i} delay={i * 0.05} className={p.span}>
          <div className={`${p.ratio} relative bg-[hsl(40_15%_90%)] overflow-hidden group cursor-pointer`}>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-foreground/30 group-hover:text-primary/60 transition-colors duration-500">
              <ImageIcon className="w-8 h-8" strokeWidth={1} />
              <p className="text-[10px] tracking-[0.2em] uppercase">{p.label}</p>
            </div>
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
          </div>
        </Reveal>
      ))}
    </div>

    <p className="mt-14 text-xs text-muted-foreground/60 tracking-[0.2em] uppercase text-center">
      Full photo archive available upon request
    </p>
  </Section>
);

export default GallerySection;
