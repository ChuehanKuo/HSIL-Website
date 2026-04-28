import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionOutro from "@/components/ui/SectionOutro";
import Reveal from "@/components/ui/Reveal";

import coreTeam from "@/assets/team/core-team.jpg";

const team = [
  {
    name: "Arthur C. Kuo",
    nameZh: "郭爵安",
    role: "Executive Director · 執行總監",
    initials: "郭",
    bio: "[Bio placeholder]",
  },
  {
    name: "Prof. John Tayu Lee",
    nameZh: "李達宇",
    role: "Faculty Advisor · 指導老師",
    initials: "李",
    bio: "[Bio placeholder]",
  },
  {
    name: "May",
    nameZh: "",
    role: "Co-Lead",
    initials: "M",
    bio: "[Bio placeholder — school, major, background]",
  },
  {
    name: "艾庭",
    nameZh: "",
    role: "Co-MC · Press",
    initials: "艾",
    bio: "[Bio placeholder — school, major, background]",
  },
  {
    name: "Jess",
    nameZh: "",
    role: "Logistics",
    initials: "J",
    bio: "[Bio placeholder — school, major, background]",
  },
  {
    name: "Toby",
    nameZh: "楷博",
    role: "Photography",
    initials: "楷",
    bio: "[Bio placeholder — school, major, background]",
  },
  {
    name: "林彥均",
    nameZh: "",
    role: "Production · Print",
    initials: "林",
    bio: "[Bio placeholder — school, major, background]",
  },
  {
    name: "Freddy",
    nameZh: "",
    role: "AV · Tech Lead",
    initials: "F",
    bio: "[Bio placeholder — school, major, background]",
  },
  {
    name: "Benson",
    nameZh: "",
    role: "Catering · Registration · Documentation",
    initials: "B",
    bio: "[Bio placeholder — school, major, background]",
  },
  {
    name: "Andrew",
    nameZh: "",
    role: "Video · AV Equipment",
    initials: "A",
    bio: "[Bio placeholder — school, major, background]",
  },
];

const OrganizersSection = () => (
  <Section id="organizers" tone="stone">
    <SectionHeader
      eyebrow="The Team · 主辦團隊"
      title={
        <>
          The people who{" "}
          <span className="italic text-primary whitespace-nowrap">built this</span>.
        </>
      }
      lede="A student-led volunteer team under NTU College of Public Health's Health Economics & AI Lab, operating the first HSIL Hackathon ever hosted in Taiwan."
    />

    <div className="max-w-3xl mx-auto mb-24">
      <Reveal>
        <figure className="relative overflow-hidden rounded-sm">
          <img src={coreTeam} alt="Core organizing team" loading="lazy" decoding="async" className="w-full h-auto" />
        </figure>
      </Reveal>
    </div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
      {team.map((m, i) => (
        <Reveal key={m.name} delay={i * 0.04}>
          <div className="text-center">
            <div className="w-28 h-28 bg-foreground/5 border border-foreground/10 flex items-center justify-center rounded-full mx-auto mb-4">
              <span className="font-display text-3xl text-foreground/40">{m.initials}</span>
            </div>
            <h4 className="font-display text-lg text-foreground leading-tight">{m.name}</h4>
            {m.nameZh && <p className="text-sm text-muted-foreground">{m.nameZh}</p>}
            <p className="text-xs font-medium text-primary mt-1">{m.role}</p>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{m.bio}</p>
          </div>
        </Reveal>
      ))}
    </div>

    <SectionOutro>
      No agency. No sponsorship firm. Ten people, two days.
    </SectionOutro>
  </Section>
);

export default OrganizersSection;
