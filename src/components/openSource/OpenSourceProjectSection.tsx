import type { OpenSourceProject } from "../../types/openSource.js";
import { TechnologyList } from "../projects";
import { ContributionCard } from "./ContributionCard";
import { ExternalLink } from "./ExternalLink";
import { hasItems } from "./openSourceUtils";

type OpenSourceProjectSectionProps = {
  project: OpenSourceProject;
};

function ProjectList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (!hasItems(items)) {
    return null;
  }

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-5">
      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="border-l border-slate-700 pl-3 text-sm leading-6 text-slate-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function OpenSourceProjectSection({
  project,
}: OpenSourceProjectSectionProps) {
  const projectHeadingId = `project-${project.id}`;
  const showShortName =
    Boolean(project.shortName) && project.shortName !== project.name;

  return (
    <section
      className="border-t border-slate-800 py-12 sm:py-16"
      aria-labelledby={projectHeadingId}
    >
      <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.45fr)]">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            {showShortName ? (
              <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-300">
                {project.shortName}
              </span>
            ) : null}
            <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-200">
              {project.role}
            </span>
          </div>

          <h3
            id={projectHeadingId}
            className="mt-5 break-words text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {project.name}
          </h3>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
            {project.description}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            {project.contributionSummary}
          </p>

          <TechnologyList
            technologies={project.technologies}
            ariaLabel={`${project.name} technologies encountered`}
            className="mt-6"
          />
        </div>

        {hasItems(project.links) ? (
          <div className="min-w-0 rounded-lg border border-slate-800 bg-slate-900/50 p-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
              Project links
            </h4>
            <div className="mt-4 flex flex-col items-start gap-2">
              {project.links.map((link) => (
                <ExternalLink
                  key={link.url}
                  href={link.url}
                  ariaLabel={`${link.label} in a new tab`}
                >
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <ProjectList title="Highlights" items={project.highlights} />
        <ProjectList title="Project learnings" items={project.learnings} />

        {hasItems(project.stats) ? (
          <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
              Project stats
            </h4>
            <dl className="mt-4 space-y-4">
              {project.stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="text-sm font-medium text-slate-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 break-words text-xl font-semibold text-white">
                    {stat.value}
                  </dd>
                  {stat.description ? (
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {stat.description}
                    </p>
                  ) : null}
                </div>
              ))}
            </dl>
          </div>
        ) : null}
      </div>

      {hasItems(project.contributions) ? (
        <div className="mt-10">
          <h4 className="text-xl font-semibold text-white">Contributions</h4>
          <ol className="mt-6 space-y-6 md:border-l md:border-slate-800 md:pl-6">
            {project.contributions.map((contribution) => (
              <li key={contribution.id} className="relative min-w-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.85rem] top-6 hidden h-3 w-3 rounded-full border border-emerald-300 bg-slate-950 md:block"
                />
                <ContributionCard contribution={contribution} />
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </section>
  );
}
