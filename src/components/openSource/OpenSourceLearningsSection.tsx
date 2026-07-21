import type { OpenSourceContent } from "../../types/openSource.js";
import { AnimatedSection } from "../animation";
import { Card, SectionHeading } from "../ui";
import { hasItems } from "./openSourceUtils";

type OpenSourceLearningsSectionProps = {
  content: OpenSourceContent["learningSummary"];
};

export function OpenSourceLearningsSection({
  content,
}: OpenSourceLearningsSectionProps) {
  if (!hasItems(content.learnings)) {
    return null;
  }

  return (
    <AnimatedSection
      className="section-divider"
      aria-labelledby="open-source-learnings-heading"
    >
      <SectionHeading
        id="open-source-learnings-heading"
        label="Lessons"
        title={content.heading}
        description={content.description}
        className="mb-8"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.learnings.map((learning) => (
          <Card
            key={learning.title}
            title={learning.title}
            description={learning.description}
            className="h-full min-w-0"
          >
            {hasItems(learning.examples) ? (
              <div>
                <h4 className="text-label text-accent">
                  Examples
                </h4>
                <ul className="mt-3 space-y-2">
                  {learning.examples.map((example) => (
                    <li
                      key={example}
                      className="border-l border-border-strong pl-3 text-sm leading-6 text-secondary"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
