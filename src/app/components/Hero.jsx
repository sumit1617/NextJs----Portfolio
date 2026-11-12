"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDownRightIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../content";

const ease = [0.22, 1, 0.36, 1];
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

// Code card tokens: [text, className]
const k = "text-violet-400";
const s = "text-emerald-300";
const p = "text-sky-300";
const c = "text-slate-500";
const codeLines = [
  [["// engineer.js", c]],
  [["const ", k], ["engineer", "text-cyan-300"], [" = {", "text-slate-300"]],
  [["  role", p], [": ", "text-slate-400"], ['"Backend Engineer"', s], [",", "text-slate-400"]],
  [["  company", p], [": ", "text-slate-400"], ['"Codexlab"', s], [",", "text-slate-400"]],
  [["  experience", p], [": ", "text-slate-400"], ['"2+ years"', s], [",", "text-slate-400"]],
  [["  primary", p], [": [", "text-slate-400"], ['"Node.js"', s], [", ", "text-slate-400"], ['"Express"', s], [", ", "text-slate-400"], ['"MongoDB"', s], ["],", "text-slate-400"]],
  [["  alsoShips", p], [": [", "text-slate-400"], ['".NET"', s], [", ", "text-slate-400"], ['"C#"', s], [", ", "text-slate-400"], ['"SQL"', s], ["],", "text-slate-400"]],
  [["  cloud", p], [": [", "text-slate-400"], ['"AWS"', s], [", ", "text-slate-400"], ['"Docker"', s], ["],", "text-slate-400"]],
  [["  aiToolkit", p], [": { ", "text-slate-400"], ["plan", p], [": ", "text-slate-400"], ['"ChatGPT"', s], [", ", "text-slate-400"], ["code", p], [": ", "text-slate-400"], ['"Claude"', s], [" },", "text-slate-400"]],
  [["};", "text-slate-300"]],
];

function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, delay: 0.4, ease }}
      className="relative min-w-0"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-400/50 via-transparent to-emerald-400/40" />
      <div className="relative overflow-hidden rounded-2xl bg-surface shadow-2xl shadow-cyan-950/50">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-3 font-mono text-xs text-slate-500">engineer.js</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-7 sm:text-[13px]">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.12, duration: 0.4 }}
              className="flex"
            >
              <span className="mr-5 w-4 select-none text-right text-slate-600">{i + 1}</span>
              <span className="whitespace-pre">
                {line.map(([t, cls], j) => (
                  <span key={j} className={cls}>{t}</span>
                ))}
                {i === codeLines.length - 1 && (
                  <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-cyan-400" />
                )}
              </span>
            </motion.div>
          ))}
        </pre>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      {/* background */}
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-32 left-[10%] h-[28rem] w-[28rem] animate-drift rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-20 right-[5%] h-[24rem] w-[24rem] animate-drift rounded-full bg-emerald-500/15 blur-[120px] [animation-delay:-7s]" />

      <div className="relative mx-auto grid max-w-page grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="min-w-0">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Software Engineer at Codexlab · Mumbai
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Sumit Kumar <span className="text-gradient">Singh</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-5 min-h-[2.5em] font-display text-xl text-slate-300 sm:text-2xl"
          >
            Backend engineer building{" "}
            <TypeAnimation
              sequence={[
                "scalable REST APIs",
                2000,
                "Node.js + MongoDB services",
                2000,
                ".NET + SQL systems",
                2000,
                "secure, production backends",
                2000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="text-cyan-300"
            />
          </motion.p>

          <motion.p
            {...fadeUp(0.3)}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            2+ years designing APIs, data models and services that run in
            production. I&apos;ve owned most of my projects end to end, from
            database design to deployment on AWS.
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-night shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
              View my work
              <ArrowDownRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-slate-500 hover:-translate-y-0.5"
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
              Resume
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a href={profile.github} aria-label="GitHub" className="rounded-lg p-2.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-white">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href={profile.linkedin} aria-label="LinkedIn" className="rounded-lg p-2.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-[#0a66c2]">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <CodeCard />
      </div>
    </section>
  );
}
