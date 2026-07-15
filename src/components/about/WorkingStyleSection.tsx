import { Card, SectionHeading } from "../ui";
import type { AboutWorkingStyle } from "../../types/about.js";

type WorkingStyleSectionProps = {
  content: AboutWorkingStyle;
};

export function WorkingStyleSection({ content }: WorkingStyleSectionProps) {
  return (
    <section className="border-t border-slate-800 py-12 sm:py-16">
      <SectionHeading
        label="How I Work"
        title={content.heading}
        description={content.description}
        className="mb-8"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {content.principles.map((principle, index) => (
          <Card key={principle.title} className="h-full min-w-0">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-300">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-white">
              {principle.title}
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              {principle.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
