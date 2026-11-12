"use client";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { stats } from "../content";

function Counter({ value, suffix, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="mx-auto max-w-page px-5 sm:px-8">
      <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-line gap-px lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group bg-surface p-6 transition-colors hover:bg-[#0f1624] sm:p-8"
          >
            <p className="font-display text-3xl font-bold text-white sm:text-4xl">
              <span className="text-gradient">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </span>
            </p>
            <p className="mt-2 text-sm leading-snug text-slate-400">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
