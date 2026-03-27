const UrgencyBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[hsl(170_85%_35%)] to-[hsl(170_85%_28%)] text-white py-2 px-4 text-center shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-2 md:gap-4 text-xs md:text-sm font-medium">
        <span>
          報名已截止 — 感謝所有報名者！錄取通知將於 <strong className="text-[hsl(37_90%_75%)]">4/1–4/2</strong> 發送
        </span>
      </div>
    </div>
  );
};

export default UrgencyBanner;
