import type { Project } from "@/types/project";
import { Card } from "../ui";
import { ProjectActions } from "./ProjectActions";
import { ProjectMedia } from "./ProjectMedia";
import { ProjectMeta } from "./ProjectMeta";
import { TechnologyList } from "./TechnologyList";
import { getProjectEngineeringHighlights } from "./projectPresentationUtils";

export type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [engineeringHighlight] = getProjectEngineeringHighlights(project);

  return (
    <Card
      interactive
      className="group h-full overflow-hidden p-0 focus-within:border-border-strong"
    >
      <ProjectMedia
        image={project.image}
        projectTitle={project.title}
        className="rounded-none border-0 border-b"
      />

      <div className="flex h-full min-w-0 flex-col p-5 sm:p-6">
        <ProjectMeta project={project} compact />

        <h3 className="mt-4 min-w-0 text-2xl font-semibold text-primary">
          {project.title}
        </h3>

        <p className="mt-3 text-body-sm text-secondary">
          {project.summary}
        </p>

        {engineeringHighlight ? (
          <p className="mt-4 border-l border-border-strong pl-3 text-body-sm text-secondary">
            <span className="font-semibold text-primary">
              Engineering:
            </span>{" "}
            {engineeringHighlight}
          </p>
        ) : null}

        <TechnologyList
          technologies={project.techStack}
          ariaLabel={`${project.title} technologies`}
          limit={4}
          className="mt-5"
        />

        <ProjectActions project={project} compact className="mt-auto pt-7" />
      </div>
    </Card>
  );
}
