import { ImageIcon } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionOutro from "@/components/ui/SectionOutro";
import Reveal from "@/components/ui/Reveal";

const placeholders = [
  { span: "md:col-span-2", label: "Opening ceremony · Day 1", ratio: "aspect-[16/10]" },
  { span: "md:col-span-2", label: "Award ceremony · Day 2", ratio: "aspect-[16/10]" },
  { span: "md:col-span-1", label: "Mentor consultation", ratio: "aspect-[4/3]" },
  { span: "md:col-span-1", label: "Pitch presentation", ratio: "aspect-[4/3]" },
  { span: "md:col-span-1", label: "Judging panel", ratio: "aspect-[4/3]" },
  { span: "md:col-span-1", label: "Group photo", ratio: "aspect-[4/3]" },
];

const GallerySection = () => (
  <Section id="gallery" tone="stone">
    <SectionHeader
      eyebrow="Moments · 兩天回顧"
      title={
        <>
          Two days, <span className="italic text-primary">one community</span>.
        </>
      }
      lede="From the opening keynote Friday morning to the final group photo Saturday evening — a visual record of Taiwan's first HSIL Hackathon."
    />

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
      {placeholders.map((p, i) => (
        <Reveal key={i} delay={i * 0.05} className={p.span}>
          <div className={`${p.ratio} relative bg-[hsl(40_15%_90%)] overflow-hidden group cursor-pointer transition-colors duration-500 hover:bg-[hsl(40_20%_86%)]`}>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-foreground/30 group-hover:text-foreground/50 transition-colors duration-500">
              <ImageIcon className="w-8 h-8" strokeWidth={1} />
              <p className="text-[10px] tracking-[0.2em] uppercase">{p.label}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>

    <SectionOutro>Full photo archive available upon request — hsilhackathon.taiwan@gmail.com</SectionOutro>
  </Section>
);

export default GallerySection;
