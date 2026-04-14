import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionOutro from "@/components/ui/SectionOutro";
import Reveal from "@/components/ui/Reveal";

const team = [
  {
    name: "艾庭",
    role: "Co-MC · Press",
    contribution: "Ran the stage both days. Drafted press releases and the photography consent forms used at check-in.",
  },
  {
    name: "May",
    role: "Team Operations",
    contribution: "Kept the 32-team registry in sync across Airtable and Slack. Coordinated 110 lunch boxes × 2 days.",
  },
  {
    name: "Jess",
    role: "Day 1 Logistics",
    contribution: "Ran participant check-in and the four-station queue flow for 137 registrants on Day 1.",
  },
  {
    name: "Toby (楷博)",
    role: "Photography",
    contribution: "Official event photographer. Two days, ~100 participants, every pitch, every award.",
  },
  {
    name: "林彥均",
    role: "Production · Print",
    contribution: "Printed certificates, nametags, banners, award plaques, and every piece of signage in the building.",
  },
  {
    name: "Freddy",
    role: "AV · Tech Lead",
    contribution: "Lecture hall AV, the 36-hub Zoom live session, and slide loading for 32 team pitches.",
  },
  {
    name: "Benson",
    role: "Catering",
    contribution: "Coffee, snacks, and the daily runway of refreshments that kept 100 people working for two days.",
  },
];

const OrganizersSection = () => (
  <Section id="organizers" tone="stone">
    <SectionHeader
      eyebrow="The Team · 主辦團隊"
      title={
        <>
          The people who <span className="italic text-primary">built this</span>.
        </>
      }
      lede="A student-led volunteer team under NTU College of Public Health's Health Economics & AI Lab, operating the first HSIL Hackathon ever hosted in Taiwan."
    />

    {/* Warm intro — no self-reference */}
    <Reveal delay={0.1}>
      <div className="max-w-3xl mx-auto mb-24 md:mb-28 text-center">
        <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
          With gratitude
        </p>
        <p className="font-serif italic text-xl md:text-2xl text-foreground/85 leading-[1.55]">
          Every small detail of these two days — every nametag, every meal box, every slide loaded — belonged to someone on this page. Thank you.
        </p>
      </div>
    </Reveal>

    {/* Leadership pair — Arthur + Prof. Lee */}
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-px bg-foreground/10 mb-24 md:mb-28 border border-foreground/10">
      <Reveal>
        <div className="bg-[hsl(40_35%_97%)] p-10 md:p-14 h-full relative overflow-hidden">
          {/* Initials watermark */}
          <span
            aria-hidden
            className="absolute -bottom-8 -right-4 font-display italic text-[8rem] md:text-[10rem] leading-none text-primary/[0.06] select-none tracking-tighter"
          >
            ACK
          </span>

          <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-5 relative">
            Executive Director · 執行總監
          </p>
          <h3 className="font-display font-normal text-3xl md:text-4xl text-foreground leading-tight mb-2 relative">
            Arthur Chueh-An Kuo
          </h3>
          <p className="font-serif italic text-lg text-primary mb-6 relative">
            郭爵安
          </p>
          <div className="h-px w-10 bg-foreground/20 mb-6 relative" />
          <p className="text-sm text-muted-foreground leading-[1.8] mb-6 relative">
            First-year undergraduate, NTU School of Public Health. Oversaw end-to-end program design, partner and judge recruitment, participant communications, and event-day operations for Taiwan's inaugural HSIL Hackathon.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] tracking-[0.1em] uppercase text-muted-foreground relative">
            <span>Program Design</span>
            <span className="text-foreground/25">·</span>
            <span>Judge Relations</span>
            <span className="text-foreground/25">·</span>
            <span>Brand & Collateral</span>
            <span className="text-foreground/25">·</span>
            <span>Website</span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="bg-[hsl(40_35%_97%)] p-10 md:p-14 h-full">
          <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-5">
            Faculty Advisor · 指導老師
          </p>
          <h3 className="font-display font-normal text-3xl md:text-4xl text-foreground leading-tight mb-2">
            Prof. John Tayu Lee
          </h3>
          <p className="font-serif italic text-lg text-primary mb-6">
            李達宇 教授
          </p>
          <div className="h-px w-10 bg-foreground/20 mb-6" />
          <p className="text-sm text-muted-foreground leading-[1.8] mb-6">
            Associate Professor, NTU Institute of Health Policy & Management. Principal Investigator of the Health Economics & AI Lab (620 Lab), the co-host institution for the Taiwan Hub.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
            <span>Academic Sponsorship</span>
            <span className="text-foreground/25">·</span>
            <span>Institutional Liaison</span>
            <span className="text-foreground/25">·</span>
            <span>Judging Panel</span>
          </div>
        </div>
      </Reveal>
    </div>

    {/* Core team — editorial roll */}
    <div className="max-w-5xl mx-auto">
      <Reveal>
        <div className="flex items-baseline justify-between mb-10 pb-4 border-b border-foreground/15">
          <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Core Team
          </p>
          <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
            On-site · Apr 10–11
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-10">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.05}>
            <div className="group border-t border-foreground/10 pt-6">
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <h4 className="font-display text-2xl md:text-3xl text-foreground leading-tight group-hover:text-primary transition-colors duration-500">
                  {m.name}
                </h4>
                <span className="font-serif italic text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                  {m.role}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-[1.7]">
                {m.contribution}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>

    <SectionOutro>
      No agency. No sponsorship firm. Every detail — from the nametag lanyards to the judges' envelopes — assembled by the eight people listed above.
    </SectionOutro>
  </Section>
);

export default OrganizersSection;
