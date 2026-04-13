import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionOutro from "@/components/ui/SectionOutro";
import Reveal from "@/components/ui/Reveal";

const lead = {
  name: "Arthur Chueh-An Kuo",
  nameZh: "郭爵安",
  role: "Executive Director",
  roleZh: "執行總監",
  note: "NTU School of Public Health",
};

const advisor = {
  name: "Prof. John Tayu Lee",
  nameZh: "李達宇 教授",
  role: "Faculty Advisor",
  roleZh: "指導老師",
  note: "NTU Health Policy & Management · Health Economics & AI Lab",
};

const team = [
  { name: "艾庭", role: "Co-MC · Press & Consent Forms" },
  { name: "May", role: "Team Operations · Catering" },
  { name: "Jess", role: "Logistics · Day 1 Check-in" },
  { name: "Toby (楷博)", role: "Event Photography" },
  { name: "林彥均", role: "Printing · Certificates · Signage" },
  { name: "Freddy", role: "AV · Tech Lead" },
  { name: "Benson", role: "Catering & Snacks" },
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
      lede="A student-led team under the Health Economics & AI Lab at NTU College of Public Health, supported by the Harvard HSIL global program office."
    />

    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-px bg-foreground/10 mb-24 border border-foreground/10">
      {[lead, advisor].map((p, i) => (
        <Reveal key={p.name} delay={i * 0.15}>
          <div className="bg-[hsl(40_35%_97%)] p-10 md:p-14 h-full">
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-5">
              {p.role} · {p.roleZh}
            </p>
            <h3 className="font-display font-normal text-3xl md:text-4xl text-foreground leading-tight mb-2">
              {p.name}
            </h3>
            <p className="font-serif italic text-lg text-primary mb-5">
              {p.nameZh}
            </p>
            <div className="h-px w-10 bg-foreground/20 mb-5" />
            <p className="text-sm text-muted-foreground leading-relaxed">{p.note}</p>
          </div>
        </Reveal>
      ))}
    </div>

    <div className="max-w-4xl mx-auto">
      <Reveal>
        <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8 text-center">
          Core Organizing Team
        </p>
      </Reveal>
      <div className="border-t border-foreground/10">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.05}>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-6 border-b border-foreground/10 gap-1 sm:gap-8 group">
              <h4 className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                {m.name}
              </h4>
              <p className="font-serif italic text-sm md:text-base text-muted-foreground sm:text-right">
                {m.role}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>

    <SectionOutro>
      A student-led volunteer team. No agency. No sponsorship firm. Every detail — from the nametag lanyards to the judges' envelopes — assembled by the people listed above.
    </SectionOutro>
  </Section>
);

export default OrganizersSection;
