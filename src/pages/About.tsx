import {
  AboutHeroSection,
  CurrentLearningSection,
  EducationSection,
  WorkingStyleSection,
} from "../components/about";
import { aboutContent } from "../data/about";

export default function About() {
  return (
    <>
      <AboutHeroSection content={aboutContent.introduction} />
      <EducationSection content={aboutContent.education} />
      <CurrentLearningSection content={aboutContent.currentLearning} />
      <WorkingStyleSection content={aboutContent.workingStyle} />
    </>
  );
}
