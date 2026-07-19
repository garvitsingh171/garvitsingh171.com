import { useState } from "react";
import {
  ProjectCard,
  ProjectFilters,
  type ProjectFilter,
} from "../components/projects";
import { EmptyState } from "../components/ui";
import { projects } from "../data/projects";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>("all");

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.type === selectedFilter);
  const hasProjects = projects.length > 0;

  return (
    <section>
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
          Selected Work
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Projects
        </h1>

        <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
          Explore the full-stack applications and backend systems I have built
          while developing practical product and engineering skills.
        </p>
      </header>

      <div className="mt-8">
        <ProjectFilters
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
      </div>

      <div className="mt-10">
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
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
    </section>
  );
}
