import type { OpenSourceStat } from "../../types/openSource.js";
import { SectionHeading } from "../ui";
import { hasItems } from "./openSourceUtils";

type OpenSourceStatsSectionProps = {
  stats: OpenSourceStat[];
};

export function OpenSourceStatsSection({ stats }: OpenSourceStatsSectionProps) {
  if (!hasItems(stats)) {
    return null;
  }

  const primaryStats = stats.slice(0, 6);
  const supportingStats = stats.slice(6);

  return (
    <section
      className="section-divider"
      aria-labelledby="open-source-stats-heading"
    >
      <SectionHeading
        id="open-source-stats-heading"
        label="Contribution Stats"
        title="Reviewed work, not just activity counts."
        description="The page keeps pull-request counts visible while giving lower emphasis to raw diff totals."
        className="mb-8"
      />

      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {primaryStats.map((stat) => (
          <li
            key={stat.label}
            className="min-w-0 rounded-lg border border-border bg-surface p-4 sm:p-5"
          >
            <p className="break-words text-3xl font-semibold text-primary sm:text-4xl">
              {stat.value}
            </p>
            <h3 className="mt-3 text-sm font-semibold text-primary">
              {stat.label}
            </h3>
            {stat.description ? (
              <p className="mt-2 text-sm leading-6 text-secondary">
                {stat.description}
              </p>
            ) : null}
          </li>
        ))}
      </ul>

      {hasItems(supportingStats) ? (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {supportingStats.map((stat) => (
            <li
              key={stat.label}
              className="min-w-0 rounded-lg border border-border bg-subtle p-4"
            >
              <p className="break-words text-xl font-semibold text-primary">
                {stat.value}
              </p>
              <h3 className="mt-2 text-sm font-semibold text-secondary">
                {stat.label}
              </h3>
              {stat.description ? (
                <p className="mt-2 text-sm leading-6 text-muted">
                  {stat.description}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
