import { Card, SectionHeading } from "../ui";
import type { AboutCurrentLearning } from "../../types/about.js";

type CurrentLearningSectionProps = {
  content: AboutCurrentLearning;
};

export function CurrentLearningSection({
  content,
}: CurrentLearningSectionProps) {
  return (
    <section className="border-t border-slate-800 pt-10 sm:pt-12">
      <SectionHeading
        label="Learning Focus"
        title={content.heading}
        description={content.description}
        className="mb-8"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.areas.map((area) => (
          <Card
            key={area.title}
            title={area.title}
            description={area.description}
            className="h-full min-w-0"
          >
            {area.topics?.length ? (
              <ul className="flex flex-wrap gap-2">
                {area.topics.map((topic) => (
                  <li key={topic} className="min-w-0 max-w-full">
                    <span className="inline-flex max-w-full rounded-md border border-slate-700 bg-slate-950/70 px-2.5 py-1 text-xs font-medium leading-5 text-slate-300 break-words">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
}
