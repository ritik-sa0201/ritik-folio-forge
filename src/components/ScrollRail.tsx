import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "00" },
  { id: "about", label: "01" },
  { id: "experience", label: "02" },
  { id: "projects", label: "03" },
  { id: "skills", label: "04" },
  { id: "achievements", label: "05" },
  { id: "contact", label: "06" },
];

export function ScrollRail() {
  const [progress, setProgress] = useState<number[]>(sections.map(() => 0));

  useEffect(() => {
    const update = () => {
      const vh = window.innerHeight;
      const next = sections.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        // 0 when section bottom above viewport top? no — measure how far the user has scrolled through it.
        const total = r.height;
        const scrolled = Math.min(Math.max(vh * 0.5 - r.top, 0), total);
        return Math.max(0, Math.min(1, scrolled / total));
      });
      setProgress(next);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-[3px]">
      {sections.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group relative block w-[2px] overflow-hidden bg-line"
          style={{ height: `${80 / sections.length}px` }}
          aria-label={s.label}
        >
          <span
            className="absolute inset-x-0 top-0 bg-accent origin-top transition-transform duration-300"
            style={{ transform: `scaleY(${progress[i]})` }}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 font-label text-[9px] tracking-[0.2em] text-muted opacity-0 group-hover:opacity-100 transition-opacity">
            {s.label}
          </span>
        </a>
      ))}
    </div>
  );
}