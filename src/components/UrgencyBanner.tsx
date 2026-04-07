const UrgencyBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground py-1.5 px-3 md:py-2 md:px-4 text-center shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-1.5 md:gap-3 text-[11px] md:text-sm font-medium whitespace-nowrap tracking-wide">
        <span className="relative inline-flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        <span className="text-white/90">
          報名已截止 — 感謝所有報名者！活動將於 4/10–4/11 舉行
        </span>
      </div>
    </div>
  );
};

export default UrgencyBanner;
