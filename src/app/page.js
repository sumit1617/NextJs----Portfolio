import Header from "./components/Header";
import Section from "./components/Section";
import Project from "./components/Project";
import {
  profile,
  projects,
  experience,
  stack,
  aiTools,
  education,
  certifications,
} from "./content";

const linkClass =
  "underline decoration-rule decoration-1 underline-offset-4 transition-colors hover:decoration-accent hover:text-accent";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="mx-auto max-w-page px-4 sm:px-8">
        {/* Intro */}
        <section className="pb-16 pt-16 md:pb-24 md:pt-28">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
            {profile.role} · {profile.location}
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-[2.4rem] leading-[1.1] tracking-tight sm:text-6xl">
            I design and build the APIs, data models and services that
            products run on.
          </h1>
          <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-ink/85">
            <p>
              I&apos;m Sumit. For the past two years I&apos;ve been building
              production backends at Codexlab in Mumbai, mostly with Node.js
              and MongoDB, and with .NET and SQL where a project needs them.
            </p>
            <p>
              Most of the work below I built on my own, from database design
              through to deployment, and I&apos;ve kept running it since.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-sm bg-ink px-4 py-2.5 text-paper transition-opacity hover:opacity-85"
            >
              Get in touch
            </a>
            <a href={profile.github} className={linkClass}>
              GitHub
            </a>
            <a href={profile.linkedin} className={linkClass}>
              LinkedIn
            </a>
          </div>
        </section>

        {/* Selected work */}
        <Section id="work" label="Selected work">
          {projects.map((p, i) => (
            <Project key={p.slug} project={p} index={i} />
          ))}
        </Section>

        {/* Experience */}
        <Section id="experience" label="Experience">
          <div className="space-y-12">
            {experience.map((job) => (
              <div key={job.org}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-serif text-2xl">
                    {job.role}
                    <span className="text-muted">, {job.org}</span>
                  </h3>
                  <p className="font-mono text-xs text-muted">
                    {job.period} · {job.place}
                  </p>
                </div>
                <ul className="mt-4 max-w-2xl space-y-2.5">
                  {job.points.map((pt) => (
                    <li
                      key={pt}
                      className="relative pl-5 leading-relaxed text-ink/85 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-muted"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Stack */}
        <Section id="stack" label="Stack">
          <dl className="grid max-w-3xl gap-x-10 gap-y-6 sm:grid-cols-2">
            {stack.map((s) => (
              <div key={s.group} className="border-t border-rule pt-3">
                <dt className="text-sm text-muted">{s.group}</dt>
                <dd className="mt-1 font-serif text-xl">
                  {s.items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* How I work */}
        <Section id="how-i-work" label="How I work">
          <p className="max-w-2xl font-serif text-2xl leading-snug">
            I use AI every day. It makes me faster; it doesn&apos;t make my
            decisions. I read, test and take responsibility for every line I
            ship.
          </p>
          <div className="mt-8 grid max-w-3xl gap-px overflow-hidden rounded-sm border border-rule bg-rule sm:grid-cols-2">
            {aiTools.map((t) => (
              <div key={t.tool} className="bg-tint p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {t.tool}
                </p>
                <p className="mt-2 leading-relaxed">{t.use}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" label="Education">
          <div className="grid max-w-3xl gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-serif text-xl">{education.degree}</h3>
              <p className="mt-1 text-muted">
                {education.school} · {education.period}
              </p>
              <p className="mt-1 font-mono text-xs text-muted">
                {education.note}
              </p>
            </div>
            <ul className="space-y-2 text-ink/85">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" label="Contact">
          <p className="max-w-2xl font-serif text-3xl leading-snug sm:text-4xl">
            Building something that needs a solid backend? I&apos;d like to
            hear about it.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className={`mt-6 inline-block break-all text-lg ${linkClass}`}
          >
            {profile.email}
          </a>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <a href={profile.linkedin} className={linkClass}>
              LinkedIn
            </a>
            <a href={profile.github} className={linkClass}>
              GitHub
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Resume (PDF)
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-page flex-col gap-1 px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} Sumit Kumar Singh</span>
          <span>Mumbai, India</span>
        </div>
      </footer>
    </>
  );
}
