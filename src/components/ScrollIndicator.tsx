export function ScrollIndicator() {
  return (
    <div className="hidden md:flex flex-col items-center gap-2 absolute bottom-8 right-8">
      <span className="font-label text-[10px] tracking-[0.3em] text-muted uppercase rotate-90 mb-6 origin-center">
        Scroll
      </span>
      <div className="relative h-16 w-px bg-line overflow-hidden">
        <span
          className="absolute left-1/2 -translate-x-1/2 top-0 w-1.5 h-1.5 rounded-full bg-accent"
          style={{ animation: "scrollDot 2s ease-in-out infinite" }}
        />
      </div>
    </div>
  );
}