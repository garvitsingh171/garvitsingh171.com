import type { Project } from "../../types/project";
import { Button, Card } from "../ui";
import { ProjectStatusBadge } from "./ProjectStatusBadge";

export type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasProjectLinks = Boolean(project.githubUrl || project.liveUrl);

  return (
    <Card className="group h-full shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-950/30">
      <div className="flex h-full flex-col">
        <div className="aspect-video overflow-hidden rounded-md border border-slate-800 bg-slate-950">
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>

        <div className="mt-5 flex flex-1 flex-col">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="min-w-0 flex-1 text-xl font-semibold text-white">
              {project.title}
            </h3>

            <ProjectStatusBadge status={project.status} />
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            {project.summary}
          </p>

          <ul
            aria-label={`${project.title} technologies`}
            className="mt-5 flex flex-wrap gap-2"
          >
            {project.techStack.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {technology}
              </li>
            ))}
          </ul>

          {hasProjectLinks ? (
            <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
              {project.githubUrl ? (
                <Button
                  as="anchor"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="w-full sm:w-auto"
                  aria-label={`View ${project.title} repository on GitHub in a new tab`}
                >
                  GitHub Repository
                </Button>
              ) : null}

              {project.liveUrl ? (
                <Button
                  as="anchor"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                  aria-label={`View the live ${project.title} project in a new tab`}
                >
                  Live Project
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
