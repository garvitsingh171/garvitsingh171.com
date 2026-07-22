import { Card, SectionHeading } from "../ui";
import type { AboutCurrentLearning } from "@/types/about.js";
import { AnimatedSection } from "../animation";

type CurrentLearningSectionProps = {
  content: AboutCurrentLearning;
};

export function CurrentLearningSection({
  content,
}: CurrentLearningSectionProps) {
  return (
    <AnimatedSection
      className="section-divider"
      aria-labelledby="about-learning-heading"
    >
      <SectionHeading
        id="about-learning-heading"
        label="Learning Focus"
        title={content.heading}
        description={content.description}
        className="mb-8"
      />

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.areas.map((area) => (
          <li key={area.title} className="min-w-0">
            <Card
              title={area.title}
              description={area.description}
              className="h-full min-w-0"
            >
              {area.topics?.length ? (
                <ul className="flex flex-wrap gap-2">
                  {area.topics.map((topic) => (
                    <li key={topic} className="min-w-0 max-w-full">
                      <span className="inline-flex max-w-full rounded-md border border-border-strong bg-subtle px-2.5 py-1 text-xs font-medium leading-5 text-secondary break-words">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Card>
          </li>
        ))}
      </ul>
    </AnimatedSection>
  );
}
