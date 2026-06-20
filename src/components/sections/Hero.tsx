import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { ThinkWord } from "@/components/ThinkWord";
import { MagneticButton } from "@/components/MagneticButton";
import { BgWord } from "@/components/BgWord";

const word = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const container = {
  hidden: {},
  visible: { transition: { delayChildren: 0.5, staggerChildren: 0.08 } },
};

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 pb-12 overflow-hidden">
      <BgWord align="right">THINK</BgWord>
      <div className="relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="font-label text-[11px] tracking-[0.2em] text-muted uppercase mb-10"
      >
        // {resume.tagline}
      </motion.div>

      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        className="font-display font-bold leading-[0.95] tracking-tight"
        style={{ fontSize: "clamp(2.75rem, 10vw, 10rem)" }}
      >
        <div className="overflow-hidden">
          <motion.span variants={word} className="inline-block">
            Building things
          </motion.span>
        </div>
        <div className="overflow-hidden">
          <motion.span variants={word} className="inline-block">
            that <ThinkWord />
          </motion.span>
        </div>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="mt-10 font-mono text-sm text-muted max-w-xl"
      >
        {resume.education_line}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <MagneticButton
          href="#projects"
          className="font-label text-[11px] uppercase tracking-[0.2em] bg-accent text-bg px-6 py-4 hover:bg-ink transition-colors duration-200 inline-block"
        >
          View Projects →
        </MagneticButton>
        <MagneticButton
          href="/RITIK_SAINI.pdf"
          download
          className="font-label text-[11px] uppercase tracking-[0.2em] border border-ink/30 text-ink px-6 py-4 hover:border-accent hover:text-accent transition-colors duration-200 inline-block"
        >
          Download Resume
        </MagneticButton>
      </motion.div>

      <ScrollIndicator />
      </div>
    </section>
  );
}