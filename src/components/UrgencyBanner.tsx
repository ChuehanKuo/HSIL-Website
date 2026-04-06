const UrgencyBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[hsl(170_85%_35%)] to-[hsl(170_85%_28%)] text-white py-1.5 px-3 md:py-2 md:px-4 text-center shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-1.5 md:gap-4 text-[11px] md:text-sm font-medium whitespace-nowrap">
        <span>✅</span>
        <span>
          報名已截止 — 感謝所有報名者！活動將於 4/10–4/11 舉行
        </span>
      </div>
    </div>
  );
};

export default UrgencyBanner;
