const REGISTER_URL = "https://airtable.com/app06PiI7r4PVqBdt/pagFJFqJW3xFqnRFw/form";

const UrgencyBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[hsl(352_72%_42%)] to-[hsl(352_72%_35%)] text-white py-2 px-4 text-center shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-2 md:gap-4 text-xs md:text-sm font-medium">
        <span className="animate-pulse">🔥</span>
        <span>
          延長報名至 <strong className="text-[hsl(37_90%_75%)]">延長報名至 <strong className="text-[hsl(37_90%_75%)]">4/5（日）</strong> — 名額有限，把握機會！</strong> — 名額有限，把握機會！
        </span>
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 bg-white text-[hsl(352_72%_40%)] px-3 py-0.5 rounded-full text-xs font-bold hover:bg-white/90 transition-colors"
        >
          立即報名
        </a>
      </div>
    </div>
  );
};

export default UrgencyBanner;
