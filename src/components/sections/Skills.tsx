import { motion } from "framer-motion";
import { resume, sectionVariants } from "@/data/resume";
import { SectionLabel } from "@/components/SectionLabel";
import { BgWord } from "@/components/BgWord";

export function Skills() {
  return (
    <section id="skills" className="relative px-6 md:px-10 py-32 border-t border-line overflow-hidden">
      <BgWord align="right">STACK</BgWord>
      <div className="relative z-10">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <SectionLabel index="04" name="Skills" />
        <h2 className="font-display font-bold text-5xl md:text-7xl mt-4 mb-16 leading-none">
          What I<br />work with.
        </h2>

        <div className="space-y-10">
          {resume.skills.map((cat) => (
            <div key={cat.label} className="grid md:grid-cols-[200px_1fr] gap-6 pb-10 border-b border-line">
              <div className="font-label text-[11px] uppercase tracking-[0.3em] text-muted pt-3">
                {cat.label}
              </div>
              <div className="font-display text-2xl md:text-4xl leading-tight">
                {cat.items.map((s, i) => (
                  <span key={s}>
                    <span className="hover:text-accent transition-colors duration-200">{s}</span>
                    {i < cat.items.length - 1 && <span className="text-muted mx-3">·</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
  );
}