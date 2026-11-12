"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { profile } from "../content";

const links = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "how-i-work", label: "How I work" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-night/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400"
      />
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 font-display text-sm font-bold text-night transition-transform group-hover:rotate-6">
            SK
          </span>
          <span className="font-display font-semibold text-white">
            Sumit<span className="text-slate-500">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors ${
                active === l.id ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-white/[0.06] ring-1 ring-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{l.label}</span>
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-400/10"
          >
            Resume
          </a>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg p-2 text-slate-300 hover:bg-white/5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col px-5 py-3">
              {[...links, { id: "resume", label: "Resume" }].map((l, i) => (
                <motion.a
                  key={l.id}
                  href={l.id === "resume" ? profile.resume : `#${l.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-line/60 py-3 text-slate-300 last:border-0"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
