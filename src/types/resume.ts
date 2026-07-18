import type { ProjectStatus } from "./project.js";

export type ResumeButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export type ResumeIntro = {
  label: string;
  heading: string;
  description: string;
};

export type ResumeSkillGroup = {
  title: string;
  description?: string;
  skills: string[];
};

export type ResumeExperienceItem = {
  title: string;
  organization: string;
  duration?: string;
  description: string;
  highlights?: string[];
};

export type ResumeProjectItem = {
  title: string;
  summary: string;
  technologies: string[];
  href: string;
  status: ProjectStatus;
};

export type ResumeEducationItem = {
  institution: string;
  degree: string;
  duration: string;
  location?: string;
  description?: string;
  highlights?: string[];
  metadata?: {
    label: string;
    value: string;
  }[];
};

export type ResumeAchievementItem = {
  title: string;
  description?: string;
};

export type ResumeContent = {
  meta: {
    title: string;
    description: string;
  };
  introduction: ResumeIntro;
  summary: string[];
  skillGroups: ResumeSkillGroup[];
  experience: ResumeExperienceItem[];
  featuredProjects: ResumeProjectItem[];
  education: ResumeEducationItem;
  achievements: ResumeAchievementItem[];
  finalCta: {
    heading: string;
    description: string;
  };
};
