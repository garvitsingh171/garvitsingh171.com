import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { cardInteractionVariants } from "../../config/animations";
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

const MotionLink = motion.create(Link);

function ProjectNavLink({
  label,
  project,
  align = "left",
}: ProjectNavLinkProps) {
  const alignmentClass = align === "right" ? "text-right" : "text-left";
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimateInteraction = !shouldReduceMotion;

  return (
    <MotionLink
      to={`/projects/${project.slug}`}
      initial={false}
      animate={shouldAnimateInteraction ? "rest" : undefined}
      whileHover={shouldAnimateInteraction ? "hover" : undefined}
      whileFocus={shouldAnimateInteraction ? "focus" : undefined}
      variants={shouldAnimateInteraction ? cardInteractionVariants : undefined}
      className={[
        "rounded-card border border-border bg-surface p-5 transition duration-200 hover:border-border-strong hover:bg-surface-hover",
        "focus-visible:outline-focus",
        alignmentClass,
      ].join(" ")}
    >
      <span className="text-label text-accent">
        {label}
      </span>
      <span className="mt-2 block text-lg font-semibold text-primary">
        {project.title}
      </span>
      <span className="mt-2 line-clamp-2 block text-body-sm text-secondary">
        {project.summary}
      </span>
    </MotionLink>
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
