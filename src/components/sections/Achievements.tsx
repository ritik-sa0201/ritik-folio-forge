import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { SectionLabel } from "@/components/SectionLabel";

export function Achievements() {
  return (
    <section id="achievements" className="px-6 md:px-10 py-32 border-t border-line">
      <div className="mb-16">
        <SectionLabel index="05" name="Achievements" />
        <h2 className="font-display font-bold text-5xl md:text-7xl mt-4 leading-none">
          Receipts.
        </h2>
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
    </section>
  );
}