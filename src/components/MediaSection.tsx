import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    outlet: "NTU AI Center (AINTU)",
    title: "全球36國同步連線　台灣首屆健康創新黑客松登場",
    preview: "台大人工智慧中心協辦，Harvard HSIL 第七屆全球健康創新黑客松首度落地台灣，130 位參賽者於台大公衛學院展開兩天密集創新挑戰。",
    url: "https://ai.ntu.edu.tw/%E3%80%90%E6%96%B0%E8%81%9E%E7%A8%BF%E3%80%91%E5%85%A8%E7%90%8336%E5%9C%8B%E5%90%8C%E6%AD%A5%E9%80%A3%E7%B7%9A%E3%80%80%E5%8F%B0%E7%81%A3%E9%A6%96%E5%B1%86%E5%81%A5%E5%BA%B7%E5%89%B5%E6%96%B0%E9%BB%91/",
  },
  {
    outlet: "NTU Sustainability (永續發展)",
    title: "HSIL Hackathon 2026 Taiwan Hub — 健康創新黑客松",
    preview: "台大公衛學院健康經濟與人工智慧實驗室主辦，31 組團隊聚焦 AI 與醫療體系創新，前兩名晉級 Harvard HSIL Global Bootcamp。",
    url: "https://sustainable.ntu.edu.tw/ntu-sdgs/actions/69e9b764dac24/detail",
  },
];

const MediaSection = () => (
  <Section id="media" tone="ivory">
    <SectionHeader
      eyebrow="Press · 媒體報導"
      title={
        <>
          Media{" "}<span className="italic text-primary">coverage</span>.
        </>
      }
    />

    <div className="max-w-4xl mx-auto">
      <Reveal>
        <div className="border-t border-foreground/10">
          {articles.map((a, i) => (
            <a
              key={i}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-8 border-b border-foreground/10 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    {a.outlet}
                  </p>
                  <h3 className="font-display text-lg md:text-xl text-foreground group-hover:text-primary transition-colors mb-2">
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {a.preview}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  </Section>
);

export default MediaSection;
