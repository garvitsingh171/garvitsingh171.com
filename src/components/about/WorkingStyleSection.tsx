import { Card, SectionHeading } from "../ui";
import type { AboutWorkingStyle } from "../../types/about.js";

type WorkingStyleSectionProps = {
  content: AboutWorkingStyle;
};

export function WorkingStyleSection({ content }: WorkingStyleSectionProps) {
  return (
    <section className="section-divider">
      <SectionHeading
        label="How I Work"
        title={content.heading}
        description={content.description}
        className="mb-8"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {content.principles.map((principle, index) => (
          <Card key={principle.title} className="h-full min-w-0">
            <p className="text-sm font-semibold text-accent">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-primary">
              {principle.title}
            </h3>
            <p className="mt-3 leading-7 text-secondary">
              {principle.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
