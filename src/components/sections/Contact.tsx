import { motion } from "framer-motion";
import { resume, sectionVariants } from "@/data/resume";
import { SectionLabel } from "@/components/SectionLabel";
import { BgWord } from "@/components/BgWord";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-10 py-32 border-t border-line overflow-hidden">
      <BgWord align="right">CONTACT</BgWord>
      <div className="relative z-10">
      <SectionLabel index="06" name="Contact" />
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-16 mt-8 items-start"
      >
        <h2
          className="font-display font-bold leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          Let's build<br />
          <span className="text-accent italic">something.</span>
        </h2>

        <div className="flex flex-col gap-5 md:pt-8">
          <a
            href={`mailto:${resume.contact.email}`}
            className="group flex items-baseline justify-between border-b border-line pb-4 font-mono text-sm md:text-base hover:text-accent transition-colors duration-200"
          >
            <span>
              <span className="text-muted text-xs uppercase tracking-wider mr-3">Email</span>
              {resume.contact.email}
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>
          {resume.contact.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-baseline justify-between border-b border-line pb-4 font-mono text-sm md:text-base hover:text-accent transition-colors duration-200"
            >
              <span>
                <span className="text-muted text-xs uppercase tracking-wider mr-3">{l.label}</span>
                {l.display}
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
  );
}