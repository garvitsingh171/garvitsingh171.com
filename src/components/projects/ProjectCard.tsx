import type { Project } from "../../types/project";
import { Button, Card } from "../ui";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import { TechnologyList } from "./TechnologyList";

export type ProjectCardProps = {
  project: Project;
  variant?: "standard" | "featured";
};

const projectTypeLabels = {
  "full-stack": "Full-stack product",
  backend: "Backend API",
  frontend: "Frontend build",
  "open-source": "Open source",
} satisfies Record<Project["type"], string>;

function getProjectHighlights(project: Project) {
  const decisions = project.caseStudy?.technicalDecisions
    ?.slice(0, 3)
    .map((decision) => decision.title);

  if (decisions?.length) {
    return decisions;
  }

  return project.caseStudy?.features?.slice(0, 3).map((feature) => feature.title) ?? [];
}

export function ProjectCard({
  project,
  variant = "standard",
}: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const highlights = getProjectHighlights(project);
  const category = project.caseStudy?.category ?? projectTypeLabels[project.type];
  const role = project.caseStudy?.role;

  return (
    <Card
      interactive
      className={[
        "group h-full overflow-hidden p-0",
        isFeatured ? "lg:grid lg:grid-cols-[1.25fr_minmax(0,0.85fr)]" : "",
      ].join(" ")}
    >
      <div className="flex h-full flex-col">
        {project.image ? (
          <div
            className={[
              "overflow-hidden border-b border-border bg-subtle",
              isFeatured ? "aspect-[16/10] lg:h-full lg:aspect-auto lg:border-b-0 lg:border-r" : "aspect-[4/3]",
            ].join(" ")}
          >
            <img
              src={project.image.src}
              alt={project.image.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />
          </div>
        ) : null}
      </div>

      <div
        className={[
          "flex h-full min-w-0 flex-col",
          isFeatured ? "p-6 sm:p-8 lg:p-10" : "p-5 sm:p-6",
        ].join(" ")}
      >
        <div className="flex flex-wrap items-center gap-2">
          <ProjectStatusBadge status={project.status} />
          <span className="text-label text-muted">{category}</span>
        </div>

        <h3
          className={[
            "mt-4 min-w-0 text-primary",
            isFeatured ? "text-heading-2" : "text-2xl font-semibold",
          ].join(" ")}
        >
          {project.title}
        </h3>

        <p
          className={[
            "mt-3 text-secondary",
            isFeatured ? "text-body-md" : "text-body-sm line-clamp-4",
          ].join(" ")}
        >
          {project.summary}
        </p>

        {role ? (
          <p className="mt-4 text-sm font-semibold text-primary">
            Role: <span className="font-medium text-secondary">{role}</span>
          </p>
        ) : null}

        {highlights.length > 0 ? (
          <ul className="mt-5 space-y-3">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="border-l border-border-strong pl-3 text-sm leading-6 text-secondary"
              >
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5">
          <TechnologyList
            technologies={project.techStack}
            ariaLabel={`${project.title} technologies`}
            limit={isFeatured ? 5 : 4}
          />
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row sm:flex-wrap">
          <Button
            as="link"
            to={`/projects/${project.slug}`}
            className="w-full sm:w-auto"
            aria-label={`View ${project.title} case study`}
          >
            View Case Study
          </Button>

          {project.githubUrl ? (
            <Button
              as="anchor"
              href={project.githubUrl}
              target="_blank"
              variant="ghost"
              className="w-full sm:w-auto"
              aria-label={`View ${project.title} repository on GitHub in a new tab`}
            >
              Repository
            </Button>
          ) : null}

          {project.liveUrl ? (
            <Button
              as="anchor"
              href={project.liveUrl}
              target="_blank"
              variant="ghost"
              className="w-full sm:w-auto"
              aria-label={`View the live ${project.title} project in a new tab`}
            >
              Live Project
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
