import type { OpenSourceProject } from "@/types/openSource.js";
import { TechnologyList } from "../projects";
import { Badge } from "../ui";
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
    <div className="surface-card p-5">
      <h4 className="text-label text-accent">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="border-l border-border-strong pl-3 text-sm leading-6 text-secondary"
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
      className="section-divider"
      aria-labelledby={projectHeadingId}
    >
      <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.45fr)]">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            {showShortName ? (
              <Badge>
                {project.shortName}
              </Badge>
            ) : null}
            <Badge tone="accent">{project.role}</Badge>
          </div>

          <h3
            id={projectHeadingId}
            className="mt-5 break-words text-heading-2 text-primary"
          >
            {project.name}
          </h3>

          <p className="mt-5 max-w-3xl text-base leading-7 text-secondary">
            {project.description}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-secondary">
            {project.contributionSummary}
          </p>

          <TechnologyList
            technologies={project.technologies}
            ariaLabel={`${project.name} technologies encountered`}
            className="mt-6"
          />
        </div>

        {hasItems(project.links) ? (
          <div className="surface-card min-w-0 p-5">
            <h4 className="text-label text-accent">
              Project links
            </h4>
            <ul className="mt-4 flex flex-col items-start gap-2">
              {project.links.map((link) => (
                <li key={link.url}>
                  <ExternalLink
                    href={link.url}
                    ariaLabel={`${link.label} in a new tab`}
                  >
                    {link.label}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <ProjectList title="Highlights" items={project.highlights} />
        <ProjectList title="Project learnings" items={project.learnings} />

        {hasItems(project.stats) ? (
          <div className="surface-muted p-5">
            <h4 className="text-label text-accent">
              Project stats
            </h4>
            <dl className="mt-4 space-y-4">
              {project.stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="text-sm font-medium text-secondary">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 break-words text-xl font-semibold text-primary">
                    {stat.value}
                  </dd>
                  {stat.description ? (
                    <p className="mt-1 text-sm leading-6 text-muted">
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
          <h4 className="text-xl font-semibold text-primary">Contributions</h4>
          <ol className="mt-6 space-y-6 md:border-l md:border-border md:pl-6">
            {project.contributions.map((contribution) => (
              <li key={contribution.id} className="relative min-w-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.85rem] top-6 hidden h-3 w-3 rounded-full border border-success bg-page md:block"
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
