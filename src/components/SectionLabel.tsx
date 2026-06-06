export function SectionLabel({ index, name }: { index: string; name: string }) {
  return (
    <div className="font-label text-[11px] tracking-[0.2em] text-muted uppercase">
      <span className="text-accent">{`// ${index}`}</span>
      <span className="mx-2">—</span>
      <span>{name}</span>
    </div>
  );
}