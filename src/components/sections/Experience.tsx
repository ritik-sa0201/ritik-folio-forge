import { motion } from "framer-motion";
import { resume, sectionVariants } from "@/data/resume";
import { SectionLabel } from "@/components/SectionLabel";
import { BgWord } from "@/components/BgWord";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-10 py-32 border-t border-line overflow-hidden">
      <BgWord align="right">WORK</BgWord>
      <div className="relative z-10">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid md:grid-cols-[1fr_3fr] gap-12"
      >
        <div className="md:sticky md:top-24 self-start">
          <SectionLabel index="02" name="Experience" />
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-6 leading-tight">
            Where I've<br />shipped.
          </h2>
        </div>

        <div className="space-y-16">
          {resume.experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="relative pl-8"
            >
              <motion.span
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 bottom-0 w-px bg-line origin-top"
              />
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -left-[5px] top-2 w-[11px] h-[11px] bg-accent rounded-full"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="font-display font-bold text-2xl md:text-3xl">{job.company}</h3>
                <span className="font-label text-[11px] uppercase tracking-[0.2em] text-muted">
                  {job.date}
                </span>
              </div>
              <div className="font-mono text-sm text-muted mb-6">
                {job.role} · {job.location}
              </div>
              <ul className="space-y-3">
                {job.bullets.map((b, j) => (
                  <li key={j} className="font-mono text-sm leading-relaxed text-ink/85 flex gap-3">
                    <span className="text-accent mt-1">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
  );
}