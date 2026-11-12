"use client";
import { motion } from "framer-motion";
import { stack } from "../content";
import { techIcons } from "./techIcons";
import { SectionHeading } from "./Reveal";

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-page scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading
        index="03"
        eyebrow="Stack"
        title="What I build with"
        intro="Node.js and MongoDB day to day. .NET and SQL in production where the project calls for it."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {stack.map((g, gi) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: gi * 0.1, duration: 0.6 }}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500">{g.group}</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {g.items.map((name, i) => {
                const t = techIcons[name];
                return (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + i * 0.05 + 0.2 }}
                    whileHover={{ y: -3 }}
                    className="inline-flex cursor-default items-center gap-2 rounded-xl border border-line bg-night/70 px-3.5 py-2 text-sm text-slate-200 transition-colors hover:border-slate-500"
                  >
                    {t ? (
                      <t.Icon className="h-4 w-4" style={{ color: t.color }} aria-hidden />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    )}
                    {name}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
