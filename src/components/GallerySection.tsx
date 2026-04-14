import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionOutro from "@/components/ui/SectionOutro";
import Reveal from "@/components/ui/Reveal";
import ParallaxTitle from "@/components/ParallaxTitle";

import opening from "@/assets/gallery/01-opening-ceremony.jpg";
import groupPhoto from "@/assets/gallery/02-group-photo.jpg";
import mentor from "@/assets/gallery/03-mentor-consultation.jpg";
import podium from "@/assets/gallery/04-pitch-podium.jpg";
import judges from "@/assets/gallery/05-judging-panel.jpg";
import healthorithm from "@/assets/gallery/06-healthorithm-pitch.jpg";

interface Tile {
  span: string;
  ratio: string;
  src: string;
  label: string;
  drift: number;
}

const tiles: Tile[] = [
  { span: "md:col-span-2", ratio: "aspect-[16/10]", src: opening,        label: "Opening ceremony · April 10",    drift: 70 },
  { span: "md:col-span-2", ratio: "aspect-[16/10]", src: groupPhoto,     label: "大合照 · The whole room, Day 1",  drift: 30 },
  { span: "md:col-span-1", ratio: "aspect-[4/3]",   src: mentor,         label: "Mentor consultation",            drift: 55 },
  { span: "md:col-span-1", ratio: "aspect-[4/3]",   src: podium,         label: "Team pitch · NTU CPH",           drift: 20 },
  { span: "md:col-span-1", ratio: "aspect-[4/3]",   src: judges,         label: "The judging panel",              drift: 45 },
  { span: "md:col-span-1", ratio: "aspect-[4/3]",   src: healthorithm,   label: "The Healthorithm · 3rd place",   drift: 15 },
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
      lede="From the opening keynote Friday morning to the final Saturday pitches — a visual record of Taiwan's first HSIL Hackathon."
    />

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
      {tiles.map((t, i) => (
        <Reveal key={i} delay={i * 0.05} className={t.span}>
          <ParallaxTitle distance={t.drift}>
            <figure className={`${t.ratio} relative overflow-hidden group bg-[hsl(40_15%_90%)]`}>
              <img
                src={t.src}
                alt={t.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/90 font-medium">
                  {t.label}
                </p>
              </figcaption>
            </figure>
          </ParallaxTitle>
        </Reveal>
      ))}
    </div>

    <SectionOutro>Full photo archive available upon request — hsilhackathon.taiwan@gmail.com</SectionOutro>
  </Section>
);

export default GallerySection;
