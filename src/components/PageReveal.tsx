import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageReveal({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: "none" }}
        className="fixed inset-0 z-[100] bg-bg"
        onAnimationComplete={(d: any) => {
          if (d?.opacity === 0) {
            const el = document.getElementById("page-reveal-overlay");
            if (el) el.style.display = "none";
          }
        }}
        id="page-reveal-overlay"
      />
    </>
  );
}