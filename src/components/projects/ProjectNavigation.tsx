import { Link } from "react-router-dom";
import type { Project } from "../../types/project";

export type ProjectNavigationProps = {
  projects: Project[];
  currentSlug: string;
};

type ProjectNavLinkProps = {
  label: string;
  project: Project;
  align?: "left" | "right";
};

function ProjectNavLink({
  label,
  project,
  align = "left",
}: ProjectNavLinkProps) {
  const alignmentClass = align === "right" ? "text-right" : "text-left";

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={[
        "rounded-lg border border-slate-800 bg-slate-900/60 p-5 transition-colors hover:border-slate-600 hover:bg-slate-900",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400",
        alignmentClass,
      ].join(" ")}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
        {label}
      </span>
      <span className="mt-2 block text-lg font-semibold text-white">
        {project.title}
      </span>
      <span className="mt-2 line-clamp-2 block text-sm leading-6 text-slate-300">
        {project.summary}
      </span>
    </Link>
  );
}

export function ProjectNavigation({
  projects,
  currentSlug,
}: ProjectNavigationProps) {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex >= 0 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : undefined;

  if (!previousProject && !nextProject) {
    return null;
  }

  return (
    <nav aria-label="Project navigation" className="grid gap-4 md:grid-cols-2">
      {previousProject ? (
        <ProjectNavLink label="Previous Project" project={previousProject} />
      ) : (
        <div className="hidden md:block" aria-hidden="true" />
      )}

      {nextProject ? (
        <ProjectNavLink
          label="Next Project"
          project={nextProject}
          align="right"
        />
      ) : null}
    </nav>
  );
}
