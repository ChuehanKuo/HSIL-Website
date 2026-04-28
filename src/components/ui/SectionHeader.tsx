import { motion } from "motion/react";
import { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center" | "asymmetric";
  tone?: "light" | "dark";
}

const SectionHeader = ({
  eyebrow,
  title,
  lede,
  align = "asymmetric",
  tone = "light",
}: Props) => {
  const eyebrowColor = tone === "dark" ? "text-white/50" : "text-foreground/50";
  const titleColor = tone === "dark" ? "text-white" : "text-foreground";
  const ledeColor = tone === "dark" ? "text-white/65" : "text-muted-foreground";

  if (align === "asymmetric") {
    return (
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-28 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <p className={`text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase mb-6 ${eyebrowColor}`}>
            {eyebrow}
          </p>
          <h2 className={`font-display font-normal text-5xl md:text-6xl lg:text-7xl leading-[1.2] tracking-tight ${titleColor}`}>
            {title}
          </h2>
        </motion.div>
        {lede && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 lg:pt-10"
          >
            <div className={`font-serif italic text-lg md:text-xl leading-[1.6] ${ledeColor}`}>
              {lede}
            </div>
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl mx-auto mb-20 lg:mb-24 ${align === "center" ? "text-center" : ""}`}
    >
      <p className={`text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase mb-6 ${eyebrowColor}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display font-normal text-5xl md:text-6xl lg:text-7xl leading-[1.2] tracking-tight mb-6 ${titleColor}`}>
        {title}
      </h2>
      {lede && (
        <p className={`font-serif italic text-lg md:text-xl leading-[1.6] ${ledeColor}`}>
          {lede}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
