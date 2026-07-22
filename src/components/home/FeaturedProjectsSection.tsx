import { routes } from "@/routes/routes";
import { projects } from "@/data/projects";
import { AnimatedSection, StaggeredReveal, StaggeredRevealItem } from "../animation";
import { FeaturedProject, ProjectCard } from "../projects";
import { Button, SectionHeading } from "../ui";

export function FeaturedProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  if (featuredProjects.length === 0) {
    return null;
  }

  const [primaryProject, ...supportingProjects] = featuredProjects;

  return (
    <AnimatedSection className="section-divider" aria-labelledby="home-work-heading">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          id="home-work-heading"
          label="01 / Selected Work"
          title="Projects built around real product problems."
          description="A selection of full-stack products and backend systems built around practical problems, secure APIs, and real engineering workflows."
        />

        <Button
          as="link"
          to={routes.projects}
          variant="outline"
          className="w-full sm:w-auto"
        >
          View All Projects
        </Button>
      </div>

      <div className="mt-10 space-y-6">
        {primaryProject ? (
          <FeaturedProject project={primaryProject} priority />
        ) : null}

        {supportingProjects.length > 0 ? (
          <StaggeredReveal as="ul" className="grid gap-6 lg:grid-cols-2">
            {supportingProjects.map((project) => (
              <StaggeredRevealItem
                key={project.slug}
                as="li"
                className="h-full"
              >
                <ProjectCard project={project} />
              </StaggeredRevealItem>
            ))}
          </StaggeredReveal>
        ) : null}
      </div>
    </AnimatedSection>
  );
}
