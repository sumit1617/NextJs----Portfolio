"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  TrophyIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  BuildingLibraryIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { projects } from "../content";
import { TechChip } from "./techIcons";
import { SectionHeading } from "./Reveal";

const icons = {
  building: BuildingOffice2Icon,
  calendar: CalendarDaysIcon,
  trophy: TrophyIcon,
  shield: ShieldCheckIcon,
  clipboard: ClipboardDocumentCheckIcon,
  library: BuildingLibraryIcon,
};

// Full class strings so Tailwind can see them at build time.
const accents = {
  amber: { icon: "bg-amber-400/10 text-amber-300 ring-amber-400/25", hover: "hover:border-amber-400/40", glow: "bg-amber-500/20", bar: "from-amber-400 to-orange-500", check: "text-amber-300", badge: "text-amber-200 bg-amber-400/10 ring-amber-400/20" },
  violet: { icon: "bg-violet-400/10 text-violet-300 ring-violet-400/25", hover: "hover:border-violet-400/40", glow: "bg-violet-500/20", bar: "from-violet-400 to-fuchsia-500", check: "text-violet-300", badge: "text-violet-200 bg-violet-400/10 ring-violet-400/20" },
  emerald: { icon: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/25", hover: "hover:border-emerald-400/40", glow: "bg-emerald-500/20", bar: "from-emerald-400 to-teal-500", check: "text-emerald-300", badge: "text-emerald-200 bg-emerald-400/10 ring-emerald-400/20" },
  sky: { icon: "bg-sky-400/10 text-sky-300 ring-sky-400/25", hover: "hover:border-sky-400/40", glow: "bg-sky-500/20", bar: "from-sky-400 to-blue-500", check: "text-sky-300", badge: "text-sky-200 bg-sky-400/10 ring-sky-400/20" },
  rose: { icon: "bg-rose-400/10 text-rose-300 ring-rose-400/25", hover: "hover:border-rose-400/40", glow: "bg-rose-500/20", bar: "from-rose-400 to-pink-500", check: "text-rose-300", badge: "text-rose-200 bg-rose-400/10 ring-rose-400/20" },
  slate: { icon: "bg-slate-400/10 text-slate-300 ring-slate-400/25", hover: "hover:border-slate-400/40", glow: "bg-slate-400/15", bar: "from-slate-300 to-slate-500", check: "text-slate-300", badge: "text-slate-200 bg-slate-400/10 ring-slate-400/20" },
};

const filters = ["All", "Node.js", ".NET"];

function ProjectCard({ project }) {
  const a = accents[project.color];
  const Icon = icons[project.icon];
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 ${a.hover}`}
    >
      <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${a.bar} opacity-60 transition-opacity group-hover:opacity-100`} />
      <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${a.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />

      <div className="relative flex items-start justify-between gap-3">
        <span className={`grid h-11 w-11 place-items-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${a.icon}`}>
          <Icon className="h-5 w-5" />
        </span>
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${a.badge}`}>
          {project.badge}
        </span>
      </div>

      <h3 className="relative mt-5 font-display text-xl font-semibold text-white">
        {project.title}
      </h3>
      <p className="relative mt-1 font-mono text-xs text-slate-500">{project.org}</p>

      <p className="relative mt-4 text-sm leading-relaxed text-slate-400">
        {project.summary}
      </p>

      {project.migration && (
        <div className="relative mt-4 flex flex-wrap items-center gap-2 rounded-lg border border-line bg-night/60 px-3 py-2 font-mono text-xs">
          <span className="text-slate-500 line-through decoration-slate-600">v1 {project.migration.from}</span>
          <ArrowRightIcon className="h-3.5 w-3.5 text-violet-300 transition-transform group-hover:translate-x-1" />
          <span className="text-violet-200">v2 {project.migration.to}</span>
        </div>
      )}

      <ul className="relative mt-4 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-sm leading-snug text-slate-300">
            <CheckIcon className={`mt-0.5 h-4 w-4 shrink-0 ${a.check}`} />
            {h}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex flex-wrap gap-1.5 pt-6">
        {project.stack.map((t) => (
          <TechChip key={t} name={t} />
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = projects.filter(
    (p) => filter === "All" || p.filters.includes(filter)
  );

  return (
    <section id="work" className="mx-auto max-w-page scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title="Systems I've designed and shipped"
          intro="Apart from the property platform, where a team joined recently, I built each of these on my own."
        />
        <div className="mb-12 inline-flex self-start rounded-xl border border-line bg-surface p-1 lg:self-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                filter === f ? "text-night" : "text-slate-400 hover:text-white"
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.ul layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
