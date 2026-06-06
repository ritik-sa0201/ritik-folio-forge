export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line py-4">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: "marquee 40s linear infinite", width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-sm text-ink/80">
            <span className="text-accent mr-3">●</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}