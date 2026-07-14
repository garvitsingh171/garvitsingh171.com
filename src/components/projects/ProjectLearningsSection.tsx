import type {
  ProjectLearning,
  ProjectLearningCategory,
} from "../../types/project";
import { Card } from "../ui";
import { CaseStudySection } from "./CaseStudySection";

export type ProjectLearningsSectionProps = {
  projectTitle: string;
  learnings?: ProjectLearning[];
};

const learningCategoryLabels = {
  technical: "Technical",
  architecture: "Architecture",
  debugging: "Debugging",
  deployment: "Deployment",
  collaboration: "Collaboration",
  product: "Product Thinking",
} satisfies Record<ProjectLearningCategory, string>;

function hasLearningContent(learning: ProjectLearning) {
  return Boolean(learning.title.trim() && learning.description.trim());
}

export function ProjectLearningsSection({
  projectTitle,
  learnings,
}: ProjectLearningsSectionProps) {
  const visibleLearnings = learnings?.filter(hasLearningContent) ?? [];

  if (visibleLearnings.length === 0) {
    return null;
  }

  return (
    <CaseStudySection
      id="learnings"
      title="What I Learned"
      subtitle={`The technical and engineering lessons that shaped how I approached ${projectTitle}.`}
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {visibleLearnings.map((learning) => (
          <li key={`${learning.category}-${learning.title}`}>
            <Card className="h-full p-5">
              <span className="inline-flex rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-300">
                {learningCategoryLabels[learning.category]}
              </span>

              <h3 className="mt-4 text-lg font-semibold text-white">
                {learning.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {learning.description}
              </p>

              {learning.application?.trim() ? (
                <div className="mt-5 border-t border-slate-800 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                    How I apply it
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {learning.application}
                  </p>
                </div>
              ) : null}
            </Card>
          </li>
        ))}
      </ul>
    </CaseStudySection>
  );
}
