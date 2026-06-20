export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[2] mix-blend-overlay"
      style={{ opacity: 0.06 }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="120%"
          height="120%"
          filter="url(#grain)"
          style={{ animation: "grainShift 12s steps(6) infinite" }}
        />
      </svg>
    </div>
  );
}