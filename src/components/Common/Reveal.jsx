import { motion, useReducedMotion } from "framer-motion";

/**
 * Reveal — animates its children into view on scroll.
 * Fades content in and slides it upward when it enters the viewport.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 32,
  className = "",
  as = "div",
}) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className}
      initial={
        prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: prefersReducedMotion ? 0 : y }
      }
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}