import { projects } from "../../data/projects";
import { ProjectCard } from "../projects";
import { Button, SectionHeading } from "../ui";

export function FeaturedProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-slate-800 pt-10 sm:pt-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          label="Selected Work"
          title="Featured projects"
          description="A selection of full-stack products and backend systems built around practical problems, secure APIs, and real engineering workflows."
        />

        <Button
          as="link"
          to="/projects"
          variant="outline"
          className="w-full sm:w-auto"
        >
          View All Projects
        </Button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
