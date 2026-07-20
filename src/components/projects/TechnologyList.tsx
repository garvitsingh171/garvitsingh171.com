import { Badge } from "../ui";

export type TechnologyListProps = {
  technologies: string[];
  ariaLabel: string;
  className?: string;
  limit?: number;
};

export function TechnologyList({
  technologies,
  ariaLabel,
  className = "",
  limit,
}: TechnologyListProps) {
  const visibleTechnologies =
    typeof limit === "number" ? technologies.slice(0, limit) : technologies;
  const hiddenCount = technologies.length - visibleTechnologies.length;

  if (visibleTechnologies.length === 0) {
    return null;
  }

  return (
    <ul
      aria-label={ariaLabel}
      className={["flex flex-wrap gap-2", className].join(" ")}
    >
      {visibleTechnologies.map((technology) => (
        <li key={technology}>
          <Badge className="rounded-md font-medium normal-case">
            {technology}
          </Badge>
        </li>
      ))}
      {hiddenCount > 0 ? (
        <li>
          <Badge className="rounded-md font-medium normal-case">
            +{hiddenCount} more
          </Badge>
        </li>
      ) : null}
    </ul>
  );
}
