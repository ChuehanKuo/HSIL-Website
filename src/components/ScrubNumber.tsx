import { useRef, useLayoutEffect, useState } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGsap";

interface Props {
  target: number;
  format?: (n: number) => string;
  className?: string;
}

// Number that counts up as its container scrolls through the viewport.
// Driven by GSAP ScrollTrigger — tightly coupled to scroll position, no snap.
const ScrubNumber = ({ target, format, className }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { n: 0 };
    const tween = gsap.to(obj, {
      n: target,
      ease: "none",
      onUpdate: () => setVal(Math.floor(obj.n)),
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 30%",
        scrub: 0.5,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [target]);

  return (
    <span ref={ref} className={className}>
      {format ? format(val) : val.toLocaleString()}
    </span>
  );
};

export default ScrubNumber;
