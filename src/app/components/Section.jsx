export default function Section({ id, label, children }) {
  return (
    <section
      id={id}
      className="grid gap-6 border-t border-rule py-14 md:grid-cols-[11rem_1fr] md:gap-10 md:py-20"
    >
      <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted md:pt-2">
        {label}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
