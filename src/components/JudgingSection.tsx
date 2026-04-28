import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionOutro from "@/components/ui/SectionOutro";
import Reveal from "@/components/ui/Reveal";

import tuWeichou from "@/assets/people/tu-weichou.jpg";
import linChin from "@/assets/people/lin-chin.jpg";
import jamesLiu from "@/assets/people/james-liu.jpg";
import leeTayu from "@/assets/people/lee-tayu.jpg";
import tuYukang from "@/assets/people/tu-yukang.jpg";
import wangYanwen from "@/assets/people/wang-yanwen.jpg";
import wangJiahui from "@/assets/people/wang-jiahui.jpg";

interface Person {
  name: string;
  en: string;
  title: string;
  org: string;
  img: string;
}

const mentors: Person[] = [
  { name: "杜維州", en: "Tu Wei-Chou", title: "執行長", org: "臺大人工智慧中心 (AINTU)", img: tuWeichou },
  { name: "林嶔", en: "Lin Chin", title: "AI 核心實驗室主任", org: "國防醫學院", img: linChin },
  { name: "劉致宏", en: "James Liu", title: "健康與醫療產業總監", org: "台灣微軟", img: jamesLiu },
];

const judges: Person[] = [
  { name: "李達宇", en: "Prof. Lee Tayu", title: "教授", org: "臺大健康政策與管理研究所", img: leeTayu },
  { name: "杜裕康", en: "Prof. Tu Yu-Kang", title: "教授", org: "臺大流行病學與預防醫學研究所", img: tuYukang },
  { name: "王彥雯", en: "Prof. Wang Yan-Wen", title: "教授", org: "臺大健康數據拓析統計研究所", img: wangYanwen },
  { name: "王佳惠", en: "Victoria Wang", title: "協理", org: "台杉投資", img: wangJiahui },
  { name: "劉致宏", en: "James Liu", title: "健康與醫療產業總監", org: "台灣微軟", img: jamesLiu },
];

const PersonCard = ({ person }: { person: Person }) => (
  <div className="text-center">
    <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
      <img
        src={person.img}
        alt={person.en}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
    </div>
    <p className="font-display text-base text-foreground leading-tight">{person.name}</p>
    <p className="text-sm text-muted-foreground">{person.en}</p>
    <p className="text-xs text-foreground/70 mt-1 font-medium">{person.title}</p>
    <p className="text-xs text-muted-foreground">{person.org}</p>
  </div>
);

const JudgingSection = () => (
  <Section id="judging" tone="stone">
    <SectionHeader
      eyebrow="Mentors & Judges"
      title={
        <>
          The <span className="italic text-primary">panel</span>.
        </>
      }
      lede="Three mentors on Day 1. Five judges on Day 2. Every team was seen."
    />

    <div className="max-w-5xl mx-auto space-y-16">
      <Reveal>
        <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8 border-t border-foreground/10 pt-6">
          Mentors · Day 1
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {mentors.map((m) => <PersonCard key={m.en} person={m} />)}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8 border-t border-foreground/10 pt-6">
          Judges · Day 2
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {judges.map((j) => <PersonCard key={j.en + j.title} person={j} />)}
        </div>
      </Reveal>
    </div>

    <SectionOutro>
      Each team had three minutes to pitch, followed by open Q&A from the judges — adapted from HSIL's 8-minute global standard to accommodate 31 competing teams.
    </SectionOutro>
  </Section>
);

export default JudgingSection;
