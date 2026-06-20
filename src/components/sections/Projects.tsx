import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { resume } from "@/data/resume";
import { SectionLabel } from "@/components/SectionLabel";
import { BgWord } from "@/components/BgWord";

export function Projects() {
  return (
    <section id="projects" className="relative px-6 md:px-10 py-32 border-t border-line overflow-hidden">
      <BgWord align="left">BUILD</BgWord>
      <div className="relative z-10">
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
            className="group relative block bg-surface p-8"
          >
            <span className="pointer-events-none absolute inset-0">
              <span className="absolute top-0 left-0 h-px w-full bg-line" />
              <span className="absolute top-0 right-0 w-px h-full bg-line" />
              <span className="absolute bottom-0 left-0 h-px w-full bg-line" />
              <span className="absolute top-0 left-0 w-px h-full bg-line" />
              <span className="absolute top-0 left-0 h-px w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              <span className="absolute top-0 right-0 w-px h-full bg-accent origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out delay-[300ms]" />
              <span className="absolute bottom-0 left-0 h-px w-full bg-accent origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out delay-[600ms]" />
              <span className="absolute top-0 left-0 w-px h-full bg-accent origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out delay-[900ms]" />
            </span>
            <span className="absolute -top-3 left-6 font-label text-[10px] tracking-[0.3em] text-accent bg-bg px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              [{String(i + 1).padStart(2, "0")}]
            </span>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-display font-bold text-2xl md:text-3xl flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1">
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
              {p.stack.map((s, k) => (
                <span
                  key={s}
                  className="font-mono text-[10px] uppercase tracking-wider border border-accent/40 text-accent px-2 py-1 transition-transform duration-300 ease-out group-hover:-translate-y-1"
                  style={{ transitionDelay: `${k * 40}ms` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
      </div>
    </section>
  );
}