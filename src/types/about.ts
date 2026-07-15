export type AboutIntroduction = {
  heading: string;
  paragraphs: string[];
};

export type AboutEducation = {
  heading: string;
  institution: string;
  degree: string;
  specialization: string;
  collaboration: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
};

export type AboutLearningArea = {
  title: string;
  description: string;
  topics?: string[];
};

export type AboutCurrentLearning = {
  heading: string;
  description: string;
  areas: AboutLearningArea[];
};

export type AboutWorkingStylePrinciple = {
  title: string;
  description: string;
};

export type AboutWorkingStyle = {
  heading: string;
  description: string;
  principles: AboutWorkingStylePrinciple[];
};

export interface AboutContent {
  introduction: AboutIntroduction;
  education: AboutEducation;
  currentLearning: AboutCurrentLearning;
  workingStyle: AboutWorkingStyle;
}
