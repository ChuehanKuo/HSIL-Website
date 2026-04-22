import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionOutro from "@/components/ui/SectionOutro";
import Reveal from "@/components/ui/Reveal";

import opening from "@/assets/gallery/01-opening-ceremony.jpg";
import groupPhoto from "@/assets/gallery/02-group-photo.jpg";
import mentor from "@/assets/gallery/03-mentor-consultation.jpg";
import podium from "@/assets/gallery/04-pitch-podium.jpg";
import judges from "@/assets/gallery/05-judging-panel.jpg";
import healthorithm from "@/assets/gallery/06-healthorithm-pitch.jpg";
import phenocds from "@/assets/gallery/07-phenocds-pitch.jpg";
import teamRoom from "@/assets/gallery/08-team-in-room.jpg";
import keynote from "@/assets/gallery/09-keynote-speaker.jpg";
import profLee from "@/assets/gallery/10-prof-lee.jpg";

interface Tile {
  span: string;
  ratio: string;
  src: string;
  label: string;
}

const tiles: Tile[] = [
  // Row 1 — two heroes
  { span: "md:col-span-2", ratio: "aspect-[16/10]", src: opening, label: "Opening ceremony · April 10" },
  { span: "md:col-span-2", ratio: "aspect-[16/10]", src: groupPhoto, label: "大合照 · The whole room, Day 1" },

  // Row 2 — 4 standards (winners prominent)
  { span: "md:col-span-1", ratio: "aspect-[4/3]", src: phenocds, label: "PhenoCDS · 1st place" },
  { span: "md:col-span-1", ratio: "aspect-[4/3]", src: healthorithm, label: "The Healthorithm · 3rd place" },
  { span: "md:col-span-1", ratio: "aspect-[4/3]", src: judges, label: "The judging panel" },
  { span: "md:col-span-1", ratio: "aspect-[4/3]", src: mentor, label: "Mentor consultation" },

  // Row 3 — 4 standards (the day-of texture)
  { span: "md:col-span-1", ratio: "aspect-[4/3]", src: keynote, label: "Keynote · HSIL 7th Edition" },
  { span: "md:col-span-1", ratio: "aspect-[4/3]", src: podium, label: "Team pitch · NTU CPH podium" },
  { span: "md:col-span-1", ratio: "aspect-[4/3]", src: teamRoom, label: "Teams in the room · Day 1" },
  { span: "md:col-span-1", ratio: "aspect-[4/3]", src: profLee, label: "Prof. 李達宇 · faculty advisor" },
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

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
      {tiles.map((t, i) => (
        <Reveal key={i} delay={i * 0.05} className={t.span}>
          <figure className={`${t.ratio} relative overflow-hidden group bg-[hsl(40_15%_90%)]`}>
            <img
              src={t.src}
              alt={t.label}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/90 font-medium">
                {t.label}
              </p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>

    <SectionOutro>Full photo archive available upon request — hsilhackathon.taiwan@gmail.com</SectionOutro>
  </Section>
);

export default GallerySection;
