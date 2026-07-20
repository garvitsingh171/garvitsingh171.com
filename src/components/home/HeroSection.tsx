import { heroContent } from "../../data/home";
import { projects } from "../../data/projects";
import { ResumeDownloadButton } from "../resume";
import { Button } from "../ui";
import { ProjectStatusBadge } from "../projects";

export function HeroSection() {
  const heroProject = projects.find((project) => project.slug === "pravaah") ?? projects[0];

  return (
    <section aria-labelledby="home-hero-title" className="py-4 sm:py-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.72fr)] lg:items-center">
        <div className="min-w-0">
          <p className="text-label text-accent">{heroContent.label}</p>

          <h1 id="home-hero-title" className="mt-5 max-w-5xl text-display-1 text-primary">
            {heroContent.heading}
          </h1>

          <p className="mt-6 max-w-3xl text-body-lg text-secondary">
            {heroContent.description}
          </p>

          <p className="mt-5 max-w-3xl border-l border-border-strong pl-4 text-body-md text-secondary">
            {heroContent.position}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              as="link"
              to={heroContent.primaryCta.href}
              size="lg"
              className="w-full sm:w-auto"
            >
              {heroContent.primaryCta.label}
            </Button>
            <ResumeDownloadButton
              variant="outline"
              className="w-full sm:w-auto"
            />
            <Button
              as="link"
              to={heroContent.secondaryCta.href}
              variant="ghost"
              className="w-full sm:w-auto"
            >
              {heroContent.secondaryCta.label}
            </Button>
          </div>
        </div>

        {heroProject?.image ? (
          <aside
            className="rounded-media border border-border bg-surface p-3 shadow-subtle"
            aria-label="Featured project preview"
          >
            <div className="overflow-hidden rounded-card border border-border bg-subtle">
              <img
                src={heroProject.image.src}
                alt={heroProject.image.alt}
                decoding="async"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>

            <div className="p-4">
              <div className="flex flex-wrap items-center gap-2">
                <ProjectStatusBadge status={heroProject.status} />
                <span className="text-label text-muted">Current build</span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-primary">
                {heroProject.title}
              </h2>
              <p className="mt-2 text-body-sm text-secondary">
                {heroProject.caseStudy?.category ?? heroProject.summary}
              </p>
            </div>
          </aside>
        ) : null}
      </div>
    </section>
  );
}
