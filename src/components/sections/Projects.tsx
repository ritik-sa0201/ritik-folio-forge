import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { resume } from "@/data/resume";
import { SectionLabel } from "@/components/SectionLabel";

export function Projects() {
  return (
    <section id="projects" className="px-6 md:px-10 py-32 border-t border-line">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <SectionLabel index="03" name="Projects" />
          <h2 className="font-display font-bold text-5xl md:text-7xl mt-4 leading-none">
            Selected<br />work.
          </h2>
        </div>
        <p className="font-mono text-sm text-muted max-w-md">
          Multi-agent AI systems built end-to-end — from architecture to deployment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {resume.projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            className="group block bg-surface border border-line p-8 hover:border-accent transition-colors duration-200"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-display font-bold text-2xl md:text-3xl flex items-center gap-3">
                {p.name}
                <ExternalLink size={18} className="text-muted group-hover:text-accent transition-colors" />
              </h3>
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-muted whitespace-nowrap mt-2">
                {p.date}
              </span>
            </div>
            <p className="font-mono text-xs italic text-muted mb-6">{p.subtitle}</p>

            <ul className="space-y-3 mb-8">
              {p.bullets.map((b, j) => (
                <li key={j} className="font-mono text-[13px] leading-relaxed text-ink/80 flex gap-2">
                  <span className="text-accent">›</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-line">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[10px] uppercase tracking-wider border border-accent/40 text-accent px-2 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}