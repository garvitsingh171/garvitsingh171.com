import { heroContent, heroFacts } from "../../data/home";
import { projects } from "../../data/projects";
import { Button } from "../ui";
import { ProjectMedia, ProjectMeta } from "../projects";

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
            <Button
              as="link"
              to={heroContent.secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              {heroContent.secondaryCta.label}
            </Button>
          </div>

          <dl className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroFacts.map((fact) => (
              <div key={fact.label} className="border-l border-border pl-3">
                <dt className="text-label text-muted">{fact.label}</dt>
                <dd className="mt-2 text-sm font-semibold text-primary">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {heroProject?.image ? (
          <aside
            className="rounded-media border border-border bg-surface p-3 shadow-subtle"
            aria-label="Featured project preview"
          >
            <ProjectMedia
              image={heroProject.image}
              projectTitle={heroProject.title}
              priority
              className="rounded-card"
            />

            <div className="p-4">
              <ProjectMeta project={heroProject} compact />
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
