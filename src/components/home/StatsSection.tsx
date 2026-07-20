import { personalStats } from "../../data/home";
import { SectionHeading } from "../ui";

export function StatsSection() {
  return (
    <section className="section-divider" aria-labelledby="home-proof-heading">
      <SectionHeading
        id="home-proof-heading"
        label="02 / Proof"
        title="Current signals from projects, open source, and academics."
        description="A concise snapshot of the work and learning milestones behind the portfolio."
        className="mb-10"
      />

      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {personalStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-card border border-border bg-surface p-5"
          >
            <dt className="text-label text-muted">{stat.label}</dt>
            <dd className="mt-3 text-3xl font-semibold text-primary">
              {stat.value}
            </dd>
            <p className="mt-3 text-body-sm text-secondary">
              {stat.description}
            </p>
          </div>
        ))}
      </dl>
    </section>
  );
}
