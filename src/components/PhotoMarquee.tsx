import m01 from "@/assets/marquee/01.jpg";
import m02 from "@/assets/marquee/02.jpg";
import m03 from "@/assets/marquee/03.jpg";
import m04 from "@/assets/marquee/04.jpg";
import m05 from "@/assets/marquee/05.jpg";
import m06 from "@/assets/marquee/06.jpg";
import m07 from "@/assets/marquee/07.jpg";
import m08 from "@/assets/marquee/08.jpg";
import m09 from "@/assets/marquee/09.jpg";
import m10 from "@/assets/marquee/10.jpg";
import m11 from "@/assets/marquee/11.jpg";
import m12 from "@/assets/marquee/12.jpg";
import m13 from "@/assets/marquee/13.jpg";
import m14 from "@/assets/marquee/14.jpg";

const row1 = [m01, m02, m03, m04, m05, m06, m07];
const row2 = [m08, m09, m10, m11, m12, m13, m14];

const MarqueeRow = ({ images, reverse = false }: { images: string[]; reverse?: boolean }) => {
  const doubled = [...images, ...images];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ width: "max-content" }}
      >
        {doubled.map((src, i) => (
          <div key={i} className="w-[280px] h-[187px] flex-shrink-0 overflow-hidden rounded-sm">
            <img
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const PhotoMarquee = () => (
  <div className="space-y-3 py-8 overflow-hidden">
    <MarqueeRow images={row1} />
    <MarqueeRow images={row2} reverse />
  </div>
);

export default PhotoMarquee;
