import type { Project } from "../../types/project";

export const projectTypeLabels = {
  "full-stack": "Full-stack product",
  backend: "Backend API",
  frontend: "Frontend build",
  "open-source": "Open source",
} satisfies Record<Project["type"], string>;

export function getProjectCategory(project: Project) {
  return project.caseStudy?.category ?? projectTypeLabels[project.type];
}

export function getProjectRole(project: Project) {
  return project.caseStudy?.role;
}

export function getProjectEngineeringHighlights(project: Project) {
  const decisions = project.caseStudy?.technicalDecisions
    ?.slice(0, 3)
    .map((decision) => decision.title);

  if (decisions?.length) {
    return decisions;
  }

  return (
    project.caseStudy?.features?.slice(0, 3).map((feature) => feature.title) ??
    []
  );
}
