import { Link, useParams } from "react-router-dom";
import { ProjectStatusBadge } from "../components/projects";
import { Button, Card } from "../components/ui";
import { projects } from "../data/projects";
import type { ProjectType } from "../types/project";

const projectTypeLabels = {
  "full-stack": "Full-stack",
  backend: "Backend",
  frontend: "Frontend",
  "open-source": "Open source",
} satisfies Record<ProjectType, string>;

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((projectItem) => projectItem.slug === slug);

  if (!project) {
    return (
      <section className="space-y-6">
        <Button as="link" to="/projects" variant="ghost" className="px-0">
          &larr; Back to Projects
        </Button>

        <Card className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Project not found
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            The project you are looking for does not exist or may have moved.
            Return to the projects page to explore the available work.
          </p>
          <Button as="link" to="/projects" className="mt-6 w-full sm:w-auto">
            View Projects
          </Button>
        </Card>
      </section>
    );
  }

  const projectLinks = [
    project.githubUrl
      ? {
          label: "GitHub Repository",
          href: project.githubUrl,
          ariaLabel: `View ${project.title} repository on GitHub in a new tab`,
        }
      : null,
    project.liveUrl
      ? {
          label: "Live Project",
          href: project.liveUrl,
          ariaLabel: `View the live ${project.title} project in a new tab`,
        }
      : null,
    project.caseStudyUrl
      ? {
          label: "Case Study",
          href: project.caseStudyUrl,
          ariaLabel: `View the ${project.title} case study in a new tab`,
        }
      : null,
  ].filter((link): link is { label: string; href: string; ariaLabel: string } =>
    Boolean(link),
  );

  return (
    <article className="space-y-10">
      <Link
        to="/projects"
        className="inline-flex text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      >
        &larr; Back to Projects
      </Link>

      <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <ProjectStatusBadge status={project.status} />
            <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-300">
              {projectTypeLabels[project.type]}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            {project.summary}
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
          <img
            src={project.image.src}
            alt={project.image.alt}
            className="aspect-video h-full w-full object-cover"
          />
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <Card>
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Overview
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            {project.description}
          </p>
        </Card>

        <aside className="space-y-6">
          <Card>
            <h2 className="text-lg font-semibold text-white">Tech Stack</h2>
            <ul
              aria-label={`${project.title} technologies`}
              className="mt-4 flex flex-wrap gap-2"
            >
              {project.techStack.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </Card>

          {projectLinks.length > 0 ? (
            <Card>
              <h2 className="text-lg font-semibold text-white">Links</h2>
              <div className="mt-4 flex flex-col gap-3">
                {projectLinks.map((link) => (
                  <Button
                    key={link.href}
                    as="anchor"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    aria-label={link.ariaLabel}
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </Card>
          ) : null}
        </aside>
      </div>
    </article>
  );
}
