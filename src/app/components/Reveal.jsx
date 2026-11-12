"use client";
import { motion, MotionConfig } from "framer-motion";

export function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default function Reveal({ children, delay = 0, y = 28, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ index, eyebrow, title, intro }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="font-mono text-sm text-cyan-400">
        <span className="text-slate-500">{index} /</span> {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-slate-400 leading-relaxed">{intro}</p>}
    </Reveal>
  );
}
