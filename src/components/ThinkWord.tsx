import { motion } from "framer-motion";
import { useState } from "react";

export function ThinkWord({ text = "think." }: { text?: string }) {
  const [hover, setHover] = useState(false);
  const chars = text.split("");
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="inline-block italic"
      style={{ color: hover ? "#f4ff7a" : "#e8ff47", transition: "color 250ms ease, letter-spacing 250ms ease", letterSpacing: hover ? "0.04em" : "-0.01em" }}
    >
      {chars.map((c, i) => {
        const offsets = [-1.5, 1, -1, 2, -2, 1.5];
        const dy = hover ? offsets[i % offsets.length] : 0;
        return (
          <motion.span
            key={i}
            animate={{ y: dy, x: hover ? (i % 2 ? 1 : -1) : 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {c}
          </motion.span>
        );
      })}
    </span>
  );
}