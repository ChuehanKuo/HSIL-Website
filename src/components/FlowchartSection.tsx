import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import flowchart from "@/assets/hsil-hackathon-flowchart.avif";

const FlowchartSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 section-subtle">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-10">
          <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-secondary mb-2">Timeline</p>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">活動流程</h2>
        </div>
        <img
          src={flowchart}
          alt="HSIL Hackathon 流程圖"
          className="w-full rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default FlowchartSection;
