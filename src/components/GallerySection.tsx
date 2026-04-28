import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionOutro from "@/components/ui/SectionOutro";
import Reveal from "@/components/ui/Reveal";

import d1_group from "@/assets/gallery/_MG_5219.jpg";
import d1_keynote from "@/assets/gallery/_MG_4608.jpg";
import d1_opening from "@/assets/gallery/_MG_4738.jpg";
import d1_mentor from "@/assets/gallery/_MG_5070.jpg";
import d1_teams from "@/assets/gallery/_MG_5086.jpg";
import d1_proflee from "@/assets/gallery/_MG_5158.jpg";
import d1_network from "@/assets/gallery/_MG_5216.jpg";

import d2_group from "@/assets/gallery/_MG_5326.jpg";
import d2_pitch from "@/assets/gallery/_MG_5460.jpg";
import d2_judges from "@/assets/gallery/_MG_5655.jpg";
import d2_phenocds from "@/assets/gallery/_MG_6095.jpg";
import d2_discuss from "@/assets/gallery/_MG_5666.jpg";
import d2_pitch2 from "@/assets/gallery/_MG_5625.jpg";
import d2_victoria from "@/assets/gallery/_MG_6152.jpg";
import d2_judge_q from "@/assets/gallery/_MG_6113.jpg";
import d2_judges_side from "@/assets/gallery/_MG_5399.jpg";
import d2_team_pitch from "@/assets/gallery/_MG_6047.jpg";
import d2_audience from "@/assets/gallery/_MG_5251.jpg";

interface Tile { src: string; gc: string; gr: string }

// Layout:
// [ 1  1  2  3 ]  row 1
// [ 1  1  4  5 ]  row 2
// [ 6  7  8  8 ]  row 3
// [ 6  7  9  9 ]  row 4

const day1: Tile[] = [
  { src: d1_group,   gc: "1 / 3", gr: "1 / 3" },
  { src: d1_keynote, gc: "3 / 4", gr: "1 / 2" },
  { src: d1_opening, gc: "4 / 5", gr: "1 / 2" },
  { src: d1_mentor,  gc: "3 / 4", gr: "2 / 3" },
  { src: d2_victoria, gc: "4 / 5", gr: "2 / 3" },
  { src: d1_proflee, gc: "1 / 2", gr: "3 / 5" },
  { src: d1_network, gc: "2 / 3", gr: "3 / 5" },
  { src: d1_teams,   gc: "3 / 5", gr: "3 / 4" },
  { src: d2_discuss,  gc: "3 / 5", gr: "4 / 5" },
];

const day2: Tile[] = [
  { src: d2_group,    gc: "1 / 3", gr: "1 / 3" },
  { src: d2_pitch,    gc: "3 / 4", gr: "1 / 2" },
  { src: d2_judges,   gc: "4 / 5", gr: "1 / 2" },
  { src: d2_phenocds, gc: "3 / 4", gr: "2 / 3" },
  { src: d2_pitch2,   gc: "4 / 5", gr: "2 / 3" },
  { src: d2_judge_q,  gc: "1 / 2", gr: "3 / 5" },
  { src: d2_audience,  gc: "2 / 3", gr: "3 / 5" },
  { src: d2_team_pitch, gc: "3 / 5", gr: "3 / 4" },
  { src: d2_judges_side, gc: "3 / 5", gr: "4 / 5" },
];

const MosaicGrid = ({ tiles, delay = 0 }: { tiles: Tile[]; delay?: number }) => (
  <>
    {/* Desktop mosaic */}
    <div
      className="hidden md:grid gap-[6px]"
      style={{ gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "14vw" }}
    >
      {tiles.map((t, i) => (
        <Reveal
          key={i}
          delay={delay + i * 0.04}
          style={{ gridColumn: t.gc, gridRow: t.gr }}
        >
          <div className="relative overflow-hidden w-full h-full group">
            <img
              src={t.src}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </Reveal>
      ))}
    </div>
    {/* Mobile: simple 2-col */}
    <div className="grid grid-cols-2 gap-2 md:hidden">
      {tiles.map((t, i) => (
        <Reveal key={i} delay={i * 0.03}>
          <figure className="aspect-[3/2] relative overflow-hidden">
            <img
              src={t.src}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </figure>
        </Reveal>
      ))}
    </div>
  </>
);

const GallerySection = () => (
  <Section id="gallery" tone="stone">
    <SectionHeader
      eyebrow="Gallery · 活動紀實"
      title={
        <>
          The event,{" "}<span className="italic text-primary whitespace-nowrap">in frames</span>.
        </>
      }
      lede="Two days at NTU — in pictures."
    />

    <div className="max-w-7xl mx-auto space-y-12">
      <div>
        <Reveal>
          <p className="font-display text-2xl md:text-3xl text-foreground mb-8">
            Day 1 · April 10
          </p>
        </Reveal>
        <MosaicGrid tiles={day1} />
      </div>

      <div>
        <Reveal>
          <p className="font-display text-2xl md:text-3xl text-foreground mb-8">
            Day 2 · April 11
          </p>
        </Reveal>
        <MosaicGrid tiles={day2} delay={0.2} />
      </div>
    </div>

  </Section>
);

export default GallerySection;
