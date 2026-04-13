import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

const OrganizersSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="organizers" className="py-28 lg:py-36 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-3xl mb-20">
          <p className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-6">
            The Team · 主辦團隊
          </p>
          <h2 className="font-display font-normal text-5xl md:text-7xl text-foreground leading-[1.05] mb-6">
            The people who <span className="italic text-primary">built this</span>
          </h2>
          <p className="font-serif italic text-lg md:text-xl text-muted-foreground">
            A student-led team under the Health Economics & AI Lab at NTU College of Public Health, supported by the Harvard HSIL global program office.
          </p>
        </div>

        {/* Lead + Advisor — two column editorial */}
        <div className="grid md:grid-cols-2 gap-px bg-foreground/10 mb-20 border border-foreground/10">
          {[lead, advisor].map((p) => (
            <div key={p.name} className="bg-background p-10 md:p-14">
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
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.note}
              </p>
            </div>
          ))}
        </div>

        {/* Core team — editorial list */}
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8 text-center">
            Core Organizing Team
          </p>
          <div className="border-t border-foreground/10">
            {team.map((m) => (
              <div
                key={m.name}
                className="flex flex-col sm:flex-row sm:items-baseline justify-between py-6 border-b border-foreground/10 gap-1 sm:gap-8 group"
              >
                <h4 className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                  {m.name}
                </h4>
                <p className="font-serif italic text-sm md:text-base text-muted-foreground sm:text-right">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-16 text-center font-serif italic text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
          "A hackathon is a conversation between disciplines. We owe this one to everyone who showed up to listen."
        </p>
      </div>
    </section>
  );
};

export default OrganizersSection;
