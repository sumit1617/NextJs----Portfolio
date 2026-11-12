"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../content";
import Reveal, { SectionHeading } from "./Reveal";

const inputClass =
  "w-full rounded-xl border border-line bg-night/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    data.access_key = "0f031885-ceec-49ce-8ac1-a1e2085421a6";
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-page scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading index="05" eyebrow="Contact" title="Let's build something solid" />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-cyan-500/10 via-surface to-emerald-500/10 p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-slate-300">
              Need a backend that holds up in production, or want to talk about
              a role? My inbox is open.
            </p>
            <div className="mt-8 space-y-4">
              <a href={`mailto:${profile.email}`} className="group flex items-center gap-3 text-slate-200 transition-colors hover:text-cyan-300">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/25">
                  <EnvelopeIcon className="h-5 w-5" />
                </span>
                <span className="break-all text-sm sm:text-base">{profile.email}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/25">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                {profile.location}
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <a href={profile.github} className="inline-flex items-center gap-2 rounded-xl border border-line bg-night/60 px-4 py-2.5 text-sm text-slate-300 transition-all hover:-translate-y-0.5 hover:border-slate-500 hover:text-white">
                <FaGithub className="h-4 w-4" /> GitHub
              </a>
              <a href={profile.linkedin} className="inline-flex items-center gap-2 rounded-xl border border-line bg-night/60 px-4 py-2.5 text-sm text-slate-300 transition-all hover:-translate-y-0.5 hover:border-[#0a66c2] hover:text-white">
                <FaLinkedin className="h-4 w-4 text-[#0a66c2]" /> LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="h-full space-y-5 rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">Name</label>
                <input id="name" name="name" required placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@company.com" className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-300">Subject</label>
              <input id="subject" name="subject" required placeholder="Backend role / project" className={inputClass} />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">Message</label>
              <textarea id="message" name="message" rows={5} required placeholder="Tell me what you're working on…" className={inputClass} />
            </div>
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3.5 text-sm font-semibold text-night shadow-lg shadow-cyan-500/20 transition-shadow hover:shadow-cyan-500/40 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              <PaperAirplaneIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </motion.button>
            {status === "sent" && (
              <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-emerald-300">
                Thanks, your message is on its way. I&apos;ll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <p className="text-sm text-rose-300">
                Something went wrong. Please email me directly at {profile.email}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
