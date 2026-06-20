export function BgWord({ children, align = "right" }: { children: string; align?: "left" | "right" }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden select-none flex items-center"
      style={{ justifyContent: align === "right" ? "flex-end" : "flex-start" }}
    >
      <div
        className="font-display font-black uppercase whitespace-nowrap text-ink"
        style={{
          fontSize: "clamp(12rem, 32vw, 32rem)",
          opacity: 0.02,
          lineHeight: 0.85,
          letterSpacing: "-0.04em",
          transform: align === "right" ? "translateX(10%)" : "translateX(-10%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}