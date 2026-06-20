export function GridGuides() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, transparent 0, transparent calc(100%/12 - 1px), rgba(255,255,255,0.03) calc(100%/12 - 1px), rgba(255,255,255,0.03) calc(100%/12))",
      }}
    />
  );
}