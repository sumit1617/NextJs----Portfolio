"use client";
import { motion } from "framer-motion";
import { AcademicCapIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import { experience, education, certifications } from "../content";
import Reveal, { SectionHeading } from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 border-y border-line bg-surface/40">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading index="02" eyebrow="Experience" title="Where I work" />

        <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 h-full w-[3px] origin-top bg-gradient-to-b from-cyan-400 via-emerald-400 to-transparent"
              />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-cyan-300">{experience.org}</p>
                </div>
                <div className="sm:text-right">
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300 ring-1 ring-emerald-400/20">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    {experience.period}
                  </span>
                  <p className="mt-2 text-xs text-slate-500">{experience.place}</p>
                </div>
              </div>

              <ul className="mt-7 space-y-4">
                {experience.points.map((pt, i) => (
                  <motion.li
                    key={pt}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="flex gap-3 leading-relaxed text-slate-300"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    {pt}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {experience.tags.map((t) => (
                  <span key={t} className="rounded-md bg-cyan-400/[0.08] px-2.5 py-1 font-mono text-xs text-cyan-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-400/10 text-violet-300 ring-1 ring-violet-400/25">
                    <AcademicCapIcon className="h-5 w-5" />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-500">Education</p>
                </div>
                <h4 className="mt-4 font-display text-lg font-semibold text-white">{education.degree}</h4>
                <p className="mt-1 text-sm text-slate-400">{education.school}</p>
                <div className="mt-3 flex justify-between font-mono text-xs text-slate-500">
                  <span>{education.period}</span>
                  <span className="text-violet-300">{education.note}</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/25">
                    <CheckBadgeIcon className="h-5 w-5" />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-500">Certifications</p>
                </div>
                <ul className="mt-4 space-y-3">
                  {certifications.map((c) => (
                    <li key={c} className="text-sm leading-snug text-slate-300">{c}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
