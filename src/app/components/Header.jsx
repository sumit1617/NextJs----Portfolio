import { profile } from "../content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#how-i-work", label: "How I work" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-page items-center justify-between gap-4 px-4 sm:px-8">
        <a href="#top" className="font-serif text-lg">
          Sumit Kumar Singh
        </a>
        <nav className="flex items-center gap-5 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden text-muted transition-colors hover:text-ink md:inline"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-ink/80 px-3 py-1 transition-colors hover:bg-ink hover:text-paper"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
