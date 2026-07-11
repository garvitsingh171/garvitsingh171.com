import { useState } from "react";
import {
  ProjectCard,
  ProjectFilters,
  type ProjectFilter,
} from "../components/projects";
import { projects } from "../data/projects";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>("all");

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.type === selectedFilter);

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
        ) : (
          <div
            role="status"
            className="rounded-lg border border-slate-800 bg-slate-900/60 p-8 text-center"
          >
            <h2 className="text-xl font-semibold text-white">
              No projects in this category yet
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              More projects will be added as the portfolio grows. Choose another
              category to continue browsing.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
