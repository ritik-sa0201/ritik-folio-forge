import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { SectionLabel } from "@/components/SectionLabel";
import { BgWord } from "@/components/BgWord";
import { Counter } from "@/components/Counter";

export function Achievements() {
  return (
    <section id="achievements" className="relative px-6 md:px-10 py-32 border-t border-line overflow-hidden">
      <BgWord align="left">CODE</BgWord>
      <div className="relative z-10">
      <div className="mb-16">
        <SectionLabel index="05" name="Achievements" />
        <h2 className="font-display font-bold text-5xl md:text-7xl mt-4 leading-none">
          Receipts.
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-y border-line py-10">
        {[
          { v: 2024, label: "LeetCode Rating" },
          { v: 1650, label: "Problems Solved", suffix: "+" },
          { v: 50000, label: "Solution Views", suffix: "+" },
          { v: 302, label: "Codolio Rank" },
        ].map((m) => (
          <div key={m.label} className="flex flex-col gap-2">
            <div className="font-display font-bold text-4xl md:text-6xl text-accent tabular-nums">
              <Counter to={m.v} suffix={m.suffix ?? ""} />
            </div>
            <div className="font-label text-[10px] uppercase tracking-[0.25em] text-muted">{m.label}</div>
          </div>
        ))}
      </div>

      <div>
        {resume.achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
            className="grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr_2fr] gap-6 items-baseline py-6 border-b border-line group hover:bg-surface/40 transition-colors px-2 -mx-2"
          >
            <div className="font-display font-bold text-3xl md:text-5xl text-line group-hover:text-accent transition-colors">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="font-display text-lg md:text-2xl font-medium text-ink col-span-2 md:col-span-1">
              {a.title}
            </div>
            <div className="font-mono text-xs md:text-sm text-muted leading-relaxed col-span-2 md:col-span-1">
              {a.detail}
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}