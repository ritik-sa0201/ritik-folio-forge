import { motion } from "framer-motion";
import { resume, sectionVariants } from "@/data/resume";
import { SectionLabel } from "@/components/SectionLabel";
import { Marquee } from "@/components/Marquee";

export function About() {
  return (
    <section id="about" className="relative px-6 md:px-10 py-32 border-t border-line">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-[1fr_3fr] gap-12"
      >
        <div className="flex md:flex-col items-start gap-6">
          <SectionLabel index="01" name="About" />
          <div
            className="hidden md:block font-display font-bold text-[8rem] leading-none text-line select-none"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            ABOUT
          </div>
        </div>

        <div>
          <p className="font-mono text-base md:text-lg leading-relaxed text-ink/90 max-w-3xl">
            {resume.bio}
          </p>

          <div className="mt-16">
            <div className="font-label text-[10px] uppercase tracking-[0.3em] text-muted mb-6">
              Education
            </div>
            <div className="space-y-6">
              {resume.education.map((e) => (
                <div key={e.institution} className="grid grid-cols-12 gap-4 font-mono text-sm">
                  <div className="col-span-12 md:col-span-5 text-ink">{e.degree}</div>
                  <div className="col-span-7 md:col-span-4 text-muted">{e.institution}</div>
                  <div className="col-span-3 md:col-span-2 text-muted">{e.year}</div>
                  <div className="col-span-2 md:col-span-1 text-accent text-right">{e.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-24 -mx-6 md:-mx-10">
        <Marquee items={resume.currently} />
      </div>
    </section>
  );
}