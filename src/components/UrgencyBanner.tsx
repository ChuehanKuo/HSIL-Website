import { useEffect, useState } from "react";
import { ArrowRight, Clock } from "lucide-react";

const REGISTER_URL = "https://airtable.com/app06PiI7r4PVqBdt/pagFJFqJW3xFqnRFw/form";
const DEADLINE = new Date("2026-03-27T23:59:59+08:00");

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const update = () => {
      const diff = DEADLINE.getTime() - Date.now();
      if (diff <= 0) {
        setExpired(true);
        setTimeLeft("");
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      if (d > 0) {
        setTimeLeft(`${d} 天 ${h} 時 ${m} 分`);
      } else if (h > 0) {
        setTimeLeft(`${h} 時 ${m} 分`);
      } else {
        setTimeLeft(`${m} 分鐘`);
      }
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  if (expired) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[hsl(352_72%_45%)] to-[hsl(352_72%_35%)] text-white py-2 px-4 text-center shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-2 md:gap-4 text-xs md:text-sm font-medium">
        <Clock className="w-3.5 h-3.5 flex-shrink-0 animate-pulse" />
        <span>
          報名倒數 <strong className="text-[hsl(37_90%_75%)]">{timeLeft}</strong>
          <span className="hidden sm:inline"> — 3/27（五）23:59 截止</span>
        </span>
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 md:ml-2 inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-xs font-bold transition-colors"
        >
          立即報名
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export default UrgencyBanner;
