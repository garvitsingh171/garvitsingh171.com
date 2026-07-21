import { useState } from "react";
import {
  ProjectCard,
  ProjectFilters,
  type ProjectFilter,
} from "../components/projects";
import { AnimatedSection } from "../components/animation";
import { SEO } from "../components/seo";
import { EmptyState, PageHeader } from "../components/ui";
import { projects } from "../data/projects";
import { staticRouteSeo } from "../data/seo";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>("all");

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.type === selectedFilter);
  const hasProjects = projects.length > 0;

  return (
    <>
      <SEO {...staticRouteSeo.projects} />
      <AnimatedSection>
        <PageHeader
          label="Selected Work"
          title="Projects"
          description="Explore the full-stack applications and backend systems I have built while developing practical product and engineering skills."
        />

        <div className="mt-8">
          <ProjectFilters
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
          />
        </div>

        <div className="mt-10">
          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : hasProjects ? (
            <EmptyState
              title="No projects found in this category"
              description="Try another category or reset the filter to view all projects."
              headingLevel="h2"
              announce
              primaryAction={{
                type: "button",
                label: "View all projects",
                onClick: () => setSelectedFilter("all"),
              }}
            />
          ) : (
            <EmptyState
              title="No projects have been added yet"
              description="Project case studies will appear here as the portfolio grows."
              headingLevel="h2"
            />
          )}
        </div>
      </AnimatedSection>
    </>
  );
}
