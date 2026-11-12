export default function Project({ project, index }) {
  const { title, org, period, ownership, summary, points, compare, stack } =
    project;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="border-t border-rule py-10 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-mono text-xs text-accent">{number}</span>
        <h3 className="font-serif text-2xl leading-snug sm:text-[1.7rem]">
          {title}
        </h3>
      </div>

      <p className="mt-2 font-mono text-xs text-muted">
        {org} <span className="px-1.5 text-rule">/</span> {period}
      </p>

      <p className="mt-5 max-w-2xl leading-relaxed">{summary}</p>

      {points && (
        <ul className="mt-5 max-w-2xl space-y-2.5">
          {points.map((p) => (
            <li
              key={p}
              className="relative pl-5 leading-relaxed text-ink/85 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-muted"
            >
              {p}
            </li>
          ))}
        </ul>
      )}

      {compare && (
        <div className="mt-6 max-w-2xl overflow-x-auto">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-ink/70 font-mono text-xs uppercase tracking-wider text-muted">
                <th className="w-[22%] py-2 pr-4 font-normal"></th>
                <th className="py-2 pr-4 font-normal">v1</th>
                <th className="py-2 font-normal text-accent">v2</th>
              </tr>
            </thead>
            <tbody>
              {compare.rows.map(([label, before, after]) => (
                <tr key={label} className="border-b border-rule align-top">
                  <th className="py-3 pr-4 font-medium">{label}</th>
                  <td className="py-3 pr-4 leading-relaxed text-muted">
                    {before}
                  </td>
                  <td className="py-3 leading-relaxed">{after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6 flex max-w-2xl flex-col gap-3 text-sm sm:flex-row sm:items-baseline sm:justify-between">
        <p className="italic text-muted font-serif text-base">{ownership}</p>
        <p className="shrink-0 font-mono text-xs text-muted">
          {stack.join(" · ")}
        </p>
      </div>
    </article>
  );
}
