import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  download?: boolean;
  className?: string;
  innerClassName?: string;
  target?: string;
  rel?: string;
};

export function MagneticButton({ children, href, download, className, innerClassName, target, rel }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ix = useMotionValue(0);
  const iy = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 180, damping: 18, mass: 0.6 });
  const six = useSpring(ix, { stiffness: 220, damping: 20, mass: 0.5 });
  const siy = useSpring(iy, { stiffness: 220, damping: 20, mass: 0.5 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    const radius = Math.max(r.width, r.height) / 2 + 50;
    if (dist < radius) {
      const strength = 8;
      x.set((dx / radius) * strength);
      y.set((dy / radius) * strength);
      ix.set((dx / radius) * 4);
      iy.set((dy / radius) * 4);
    }
  };

  const onLeave = () => {
    x.set(0); y.set(0); ix.set(0); iy.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      target={target}
      rel={rel}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      <motion.span style={{ x: six, y: siy }} className={innerClassName ?? "inline-block"}>
        {children}
      </motion.span>
    </motion.a>
  );
}