import { routes } from "@/routes/routes";
import type { Project } from "@/types/project";
import { Button } from "../ui";

export type ProjectActionsProps = {
  project: Project;
  compact?: boolean;
  className?: string;
};

export function ProjectActions({
  project,
  compact = false,
  className = "",
}: ProjectActionsProps) {
  const buttonClass = compact ? "w-full sm:w-auto" : "w-full sm:w-auto";

  return (
    <ul
      className={[
        "flex flex-col gap-3 sm:flex-row sm:flex-wrap",
        className,
      ].join(" ")}
    >
      <li className="min-w-0">
        <Button
          as="link"
          to={routes.project(project.slug)}
          size={compact ? "sm" : "md"}
          className={buttonClass}
          aria-label={`Read ${project.title} case study`}
        >
          Read case study
        </Button>
      </li>

      {project.liveUrl ? (
        <li className="min-w-0">
          <Button
            as="anchor"
            href={project.liveUrl}
            target="_blank"
            variant="ghost"
            size={compact ? "sm" : "md"}
            className={buttonClass}
            aria-label={`View the live ${project.title} project in a new tab`}
          >
            View live project
          </Button>
        </li>
      ) : null}

      {project.githubUrl ? (
        <li className="min-w-0">
          <Button
            as="anchor"
            href={project.githubUrl}
            target="_blank"
            variant="ghost"
            size={compact ? "sm" : "md"}
            className={buttonClass}
            aria-label={`View ${project.title} source code on GitHub in a new tab`}
          >
            View source code
          </Button>
        </li>
      ) : null}
    </ul>
  );
}
