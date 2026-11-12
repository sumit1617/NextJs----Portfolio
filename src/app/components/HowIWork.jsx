"use client";
import { motion } from "framer-motion";
import { SiOpenai } from "react-icons/si";
import { UserIcon, CodeBracketIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { aiFlow } from "../content";
import { SectionHeading } from "./Reveal";

const stepStyle = {
  Plan: { Icon: SiOpenai, ring: "ring-emerald-400/30 bg-emerald-400/10 text-emerald-300" },
  Build: { Icon: CodeBracketIcon, ring: "ring-sky-400/30 bg-sky-400/10 text-sky-300" },
  Review: { Icon: ShieldCheckIcon, ring: "ring-violet-400/30 bg-violet-400/10 text-violet-300" },
  Ship: { Icon: UserIcon, ring: "ring-cyan-400/30 bg-cyan-400/10 text-cyan-300" },
};

export default function HowIWork() {
  return (
    <section id="how-i-work" className="relative scroll-mt-20 overflow-hidden border-y border-line bg-surface/40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[120px]" />
      <div className="relative mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          index="04"
          eyebrow="How I work"
          title="AI is part of my daily workflow"
          intro="I use ChatGPT to plan and Claude to code and review. It makes me faster, but the decisions and the responsibility stay with me."
        />

        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* connector line on large screens */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[12%] right-[12%] top-[2.6rem] hidden h-px origin-left bg-gradient-to-r from-emerald-400/60 via-violet-400/60 to-cyan-400/60 lg:block"
          />
          {aiFlow.map((f, i) => {
            const st = stepStyle[f.step];
            return (
              <motion.div
                key={f.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.15 + i * 0.15, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="relative rounded-2xl border border-line bg-surface p-6"
              >
                <span className={`relative grid h-12 w-12 place-items-center rounded-xl ring-1 ${st.ring}`}>
                  <st.Icon className="h-5 w-5" />
                </span>
                <div className="mt-5 flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-semibold text-white">
                    <span className="mr-2 font-mono text-xs text-slate-500">0{i + 1}</span>
                    {f.step}
                  </h3>
                  <span className="font-mono text-xs text-slate-400">{f.tool}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
