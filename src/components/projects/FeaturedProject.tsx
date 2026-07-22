import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import type { Project } from "@/types/project";
import { Card } from "../ui";
import { ProjectActions } from "./ProjectActions";
import { ProjectMedia } from "./ProjectMedia";
import { ProjectMeta } from "./ProjectMeta";
import { TechnologyList } from "./TechnologyList";
import { getProjectEngineeringHighlights } from "./projectPresentationUtils";

export type FeaturedProjectProps = {
  project: Project;
  priority?: boolean;
};

export function FeaturedProject({
  project,
  priority = false,
}: FeaturedProjectProps) {
  const [engineeringHighlight] = getProjectEngineeringHighlights(project);

  return (
    <Card
      interactive
      className="group overflow-hidden p-0 focus-within:border-border-strong"
    >
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <ProjectMedia
          image={project.image}
          projectTitle={project.title}
          aspect="featured"
          priority={priority}
          className="rounded-none border-0 border-b lg:border-b-0 lg:border-r"
        />

        <div className="flex min-w-0 flex-col p-6 sm:p-8 lg:p-10">
          <ProjectMeta project={project} />

          <h3 className="mt-5 text-heading-2 text-primary">
            <Link
              to={routes.project(project.slug)}
              className="rounded-sm transition hover:text-accent focus-visible:outline-focus"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-4 text-body-md text-secondary">{project.summary}</p>

          {engineeringHighlight ? (
            <div className="mt-6 border-l border-border-strong pl-4">
              <p className="text-label text-accent">Engineering highlight</p>
              <p className="mt-2 text-body-sm text-secondary">
                {engineeringHighlight}
              </p>
            </div>
          ) : null}

          <TechnologyList
            technologies={project.techStack}
            ariaLabel={`${project.title} featured technologies`}
            limit={5}
            className="mt-6"
          />

          <ProjectActions project={project} className="mt-auto pt-8" />
        </div>
      </div>
    </Card>
  );
}
