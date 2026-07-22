import {
  AboutHeroSection,
  CurrentLearningSection,
  EducationSection,
  WorkingStyleSection,
} from "@/components/about";
import { SEO } from "@/components/seo";
import { SkillsSection } from "@/components/skills";
import { aboutContent } from "@/data/about";
import { staticRouteSeo } from "@/data/seo";

export default function About() {
  return (
    <>
      <SEO {...staticRouteSeo.about} />
      <div className="space-y-12 sm:space-y-16">
        <AboutHeroSection content={aboutContent.introduction} />
        <EducationSection content={aboutContent.education} />
        <CurrentLearningSection content={aboutContent.currentLearning} />
        <SkillsSection />
        <WorkingStyleSection content={aboutContent.workingStyle} />
      </div>
    </>
  );
}
