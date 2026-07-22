import { routes } from "@/routes/routes";
import { openSourceContent } from "@/data/openSource";
import { AnimatedSection } from "../animation";
import { Button, SectionHeading } from "../ui";

export function OpenSourcePreviewSection() {
  const proofStats = openSourceContent.stats.slice(0, 3);

  return (
    <AnimatedSection
      className="section-divider"
      aria-labelledby="home-open-source-heading"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)] lg:items-start">
        <div>
          <SectionHeading
            id="home-open-source-heading"
            label="05 / Open Source"
            title="Real repositories, scoped pull requests, and maintainer review."
            description={openSourceContent.program.summary}
          />

          <div className="mt-8">
            <Button as="link" to={routes.openSource} variant="outline">
              View Open Source Work
            </Button>
          </div>
        </div>

        <dl className="grid gap-3">
          {proofStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-card border border-border bg-surface p-5"
            >
              <dt className="text-label text-muted">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-semibold text-primary">
                {stat.value}
              </dd>
              <p className="mt-2 text-body-sm text-secondary">
                {stat.description}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </AnimatedSection>
  );
}
