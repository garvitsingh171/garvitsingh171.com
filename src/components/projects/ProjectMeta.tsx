import type { Project } from "../../types/project";
import { Badge } from "../ui";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import { getProjectCategory, getProjectRole } from "./projectPresentationUtils";

export type ProjectMetaProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectMeta({ project, compact = false }: ProjectMetaProps) {
  const category = getProjectCategory(project);
  const role = getProjectRole(project);

  return (
    <div
      className={[
        "flex flex-wrap items-center",
        compact ? "gap-2" : "gap-3",
      ].join(" ")}
    >
      <ProjectStatusBadge status={project.status} />
      <Badge>{category}</Badge>
      {role ? <Badge>{role}</Badge> : null}
    </div>
  );
}
