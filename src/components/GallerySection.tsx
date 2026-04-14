import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionOutro from "@/components/ui/SectionOutro";
import Reveal from "@/components/ui/Reveal";
import ParallaxTitle from "@/components/ParallaxTitle";

import opening     from "@/assets/gallery/01-opening-ceremony.jpg?w=640;1024;1600&format=avif;webp;jpg&as=picture";
import groupPhoto  from "@/assets/gallery/02-group-photo.jpg?w=640;1024;1600&format=avif;webp;jpg&as=picture";
import mentor      from "@/assets/gallery/03-mentor-consultation.jpg?w=640;1024&format=avif;webp;jpg&as=picture";
import podium      from "@/assets/gallery/04-pitch-podium.jpg?w=640;1024&format=avif;webp;jpg&as=picture";
import judges      from "@/assets/gallery/05-judging-panel.jpg?w=640;1024&format=avif;webp;jpg&as=picture";
import healthorithm from "@/assets/gallery/06-healthorithm-pitch.jpg?w=640;1024&format=avif;webp;jpg&as=picture";
import phenocds    from "@/assets/gallery/07-phenocds-pitch.jpg?w=640;1024&format=avif;webp;jpg&as=picture";
import teamRoom    from "@/assets/gallery/08-team-in-room.jpg?w=640;1024&format=avif;webp;jpg&as=picture";
import keynote     from "@/assets/gallery/09-keynote-speaker.jpg?w=640;1024&format=avif;webp;jpg&as=picture";
import profLee     from "@/assets/gallery/10-prof-lee.jpg?w=640;1024&format=avif;webp;jpg&as=picture";

interface Picture {
  sources: { srcset: string; type: string }[];
  img: { src: string; w: number; h: number };
}

interface Tile {
  span: string;
  ratio: string;
  pic: Picture;
  label: string;
  drift: number;
}

const tiles: Tile[] = [
  // Row 1 — two heroes
  { span: "md:col-span-2", ratio: "aspect-[16/10]", pic: opening as Picture,     label: "Opening ceremony · April 10",   drift: 70 },
  { span: "md:col-span-2", ratio: "aspect-[16/10]", pic: groupPhoto as Picture,  label: "大合照 · The whole room, Day 1", drift: 30 },

  // Row 2 — 4 standards (winners prominent)
  { span: "md:col-span-1", ratio: "aspect-[4/3]",   pic: phenocds as Picture,    label: "PhenoCDS · 1st place",          drift: 55 },
  { span: "md:col-span-1", ratio: "aspect-[4/3]",   pic: healthorithm as Picture, label: "The Healthorithm · 3rd place",  drift: 25 },
  { span: "md:col-span-1", ratio: "aspect-[4/3]",   pic: judges as Picture,      label: "The judging panel",              drift: 45 },
  { span: "md:col-span-1", ratio: "aspect-[4/3]",   pic: mentor as Picture,      label: "Mentor consultation",            drift: 15 },

  // Row 3 — 4 standards (the day-of texture)
  { span: "md:col-span-1", ratio: "aspect-[4/3]",   pic: keynote as Picture,     label: "Keynote · HSIL 7th Edition",     drift: 50 },
  { span: "md:col-span-1", ratio: "aspect-[4/3]",   pic: podium as Picture,      label: "Team pitch · NTU CPH podium",    drift: 30 },
  { span: "md:col-span-1", ratio: "aspect-[4/3]",   pic: teamRoom as Picture,    label: "Teams in the room · Day 1",      drift: 40 },
  { span: "md:col-span-1", ratio: "aspect-[4/3]",   pic: profLee as Picture,     label: "Prof. 李達宇 · faculty advisor",   drift: 20 },
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
          <ParallaxTitle distance={t.drift}>
            <figure className={`${t.ratio} relative overflow-hidden group bg-[hsl(40_15%_90%)]`}>
              <picture>
                {t.pic.sources.map((src, k) => (
                  <source key={k} type={src.type} srcSet={src.srcset} />
                ))}
                <img
                  src={t.pic.img.src}
                  width={t.pic.img.w}
                  height={t.pic.img.h}
                  alt={t.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </picture>
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
