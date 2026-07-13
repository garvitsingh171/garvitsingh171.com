export type TechnologyListProps = {
  technologies: string[];
  ariaLabel: string;
  className?: string;
};

export function TechnologyList({
  technologies,
  ariaLabel,
  className = "",
}: TechnologyListProps) {
  if (technologies.length === 0) {
    return null;
  }

  return (
    <ul
      aria-label={ariaLabel}
      className={["flex flex-wrap gap-2", className].join(" ")}
    >
      {technologies.map((technology) => (
        <li
          key={technology}
          className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-300"
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}
