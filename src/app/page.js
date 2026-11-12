import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import HowIWork from "./components/HowIWork";
import Contact from "./components/Contact";
import { MotionProvider } from "./components/Reveal";
import { profile } from "./content";

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <Stats />
        <Projects />
        <Experience />
        <Stack />
        <HowIWork />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-page flex-col gap-2 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#top" className="transition-colors hover:text-cyan-300">
            Back to top ↑
          </a>
        </div>
      </footer>
    </MotionProvider>
  );
}
