export function MobileBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] flex items-center gap-2 rounded-2xl border border-white/15 bg-[#17120d]/95 p-2 text-white shadow-2xl backdrop-blur-xl md:hidden">
      <a href="tel:+916362422938" className="flex flex-1 flex-col items-center rounded-xl py-2 text-[10px] font-semibold">
        <span className="text-sm">☎</span>
        Call
      </a>
      <a
        href="https://wa.me/916362422938"
        target="_blank"
        rel="noreferrer"
        className="flex flex-[1.5] items-center justify-center rounded-xl bg-[#e2b66d] py-3 text-xs font-bold text-ink"
      >
        WhatsApp
      </a>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Cafe%20Varsha%20Gokarna%20Near%20Kariyappa%20Katte%20Gokarna%20Karnataka%20581326"
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 flex-col items-center rounded-xl py-2 text-[10px] font-semibold"
      >
        <span className="text-sm">⌖</span>
        Directions
      </a>
    </div>
  );
}
