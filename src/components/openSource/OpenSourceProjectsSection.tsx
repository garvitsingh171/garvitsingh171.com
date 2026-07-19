import type { OpenSourceProject } from "../../types/openSource.js";
import { SectionHeading } from "../ui";
import { OpenSourceProjectSection } from "./OpenSourceProjectSection";
import { hasItems } from "./openSourceUtils";

type OpenSourceProjectsSectionProps = {
  projects: OpenSourceProject[];
};

export function OpenSourceProjectsSection({
  projects,
}: OpenSourceProjectsSectionProps) {
  if (!hasItems(projects)) {
    return null;
  }

  return (
    <section
      className="border-t border-slate-800 pt-10 sm:pt-12"
      aria-labelledby="open-source-projects-heading"
    >
      <SectionHeading
        id="open-source-projects-heading"
        label="Projects"
        title="Contributions across different kinds of repositories."
        description="Each project is rendered from the same reusable structure so future open-source work can be added without changing the page layout."
        className="mb-2"
      />

      <div className="mt-8 space-y-10 sm:space-y-12">
        {projects.map((project) => (
          <OpenSourceProjectSection key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
