import { personalStats } from "../../data/home";
import { Card, SectionHeading } from "../ui";

export function StatsSection() {
  return (
    <section className="border-t border-slate-800 pt-10 sm:pt-12">
      <SectionHeading
        label="Proof of Work"
        title="Current signals from projects, open source, and academics."
        description="A concise snapshot of the work and learning milestones behind the portfolio."
        className="mb-8"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {personalStats.map((stat) => (
          <Card key={stat.label} className="h-full p-5">
            <div className="space-y-3">
              <p className="text-3xl font-bold tracking-tight text-white">
                {stat.value}
              </p>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
                {stat.label}
              </h3>
              <p className="text-sm leading-6 text-slate-300">
                {stat.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
