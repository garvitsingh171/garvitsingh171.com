import type {
  OpenSourceContent,
  OpenSourceLink,
  OpenSourceStat,
} from "../../types/openSource.js";
import { Card } from "../ui";
import { ExternalLink } from "./ExternalLink";
import { hasItems } from "./openSourceUtils";

type OpenSourceHeroSectionProps = {
  introduction: OpenSourceContent["introduction"];
  links: OpenSourceLink[];
  stats: OpenSourceStat[];
};

export function OpenSourceHeroSection({
  introduction,
  links,
  stats,
}: OpenSourceHeroSectionProps) {
  const heroStats = stats.slice(0, 2);

  return (
    <section
      aria-labelledby="open-source-page-heading"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <div className="min-w-0 max-w-4xl">
          {introduction.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              {introduction.eyebrow}
            </p>
          ) : null}

          <h1
            id="open-source-page-heading"
            className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {introduction.heading}
          </h1>

          <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-slate-300 sm:text-lg">
            {introduction.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {hasItems(links) ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {links.map((link) => (
                <ExternalLink
                  key={link.url}
                  href={link.url}
                  variant="button"
                  buttonVariant="secondary"
                  className="w-full sm:w-auto"
                  ariaLabel={`${link.label} in a new tab`}
                >
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          ) : null}
        </div>

        {hasItems(heroStats) ? (
          <Card className="p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
              Contribution snapshot
            </p>
            <dl className="mt-5 space-y-5">
              {heroStats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="text-sm font-medium text-slate-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 break-words text-3xl font-bold text-white">
                    {stat.value}
                  </dd>
                  {stat.description ? (
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {stat.description}
                    </p>
                  ) : null}
                </div>
              ))}
            </dl>
          </Card>
        ) : null}
      </div>
    </section>
  );
}
