import {
  OpenSourceClosingSection,
  OpenSourceHeroSection,
  OpenSourceLearningsSection,
  OpenSourceProgramSection,
  OpenSourceProjectsSection,
  OpenSourceStatsSection,
} from "../components/openSource";
import { openSourceContent } from "../data/openSource";

export default function OpenSource() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <OpenSourceHeroSection
        introduction={openSourceContent.introduction}
        links={openSourceContent.links}
        stats={openSourceContent.stats}
      />
      <OpenSourceStatsSection stats={openSourceContent.stats} />
      <OpenSourceProgramSection program={openSourceContent.program} />
      <OpenSourceProjectsSection projects={openSourceContent.projects} />
      <OpenSourceLearningsSection content={openSourceContent.learningSummary} />
      <OpenSourceClosingSection
        content={openSourceContent.closing}
        links={openSourceContent.links}
      />
    </div>
  );
}
