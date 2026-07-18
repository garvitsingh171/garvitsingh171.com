import type {
  ResumeAchievementItem,
  ResumeContent,
  ResumeEducationItem,
  ResumeExperienceItem,
  ResumeProjectItem,
  ResumeSkillGroup,
} from "../types/resume.js";
import { aboutContent } from "./about";
import { personalStats } from "./home";
import { openSourceContent } from "./openSource";
import { projects } from "./projects";
import { skillCategories, skills } from "./skills";

export const resumeConfig = {
  pagePath: "/resume",
  filePath: "/garvit-singh-resume.pdf",
} as const;

const resumeProjectSlugs = ["pravaah", "workoutly", "beathub-api"] as const;

const getOpenSourceStat = (label: string) =>
  openSourceContent.stats.find((stat) => stat.label === label);

const mergedPullRequests = getOpenSourceStat("Merged pull requests");
const programAttendance = getOpenSourceStat("Program attendance");
const certificatesStat = personalStats.find(
  (stat) => stat.label === "Certificates Earned",
);

const resumeSkillGroups: ResumeSkillGroup[] = skillCategories
  .map((category) => ({
    title: category.title,
    description: category.description,
    skills: skills
      .filter((skill) => skill.category === category.id)
      .map((skill) => skill.name),
  }))
  .filter((group) => group.skills.length > 0);

const resumeExperience: ResumeExperienceItem[] = [
  {
    title: "Open-source contributor",
    organization: openSourceContent.program.name,
    duration: openSourceContent.program.duration,
    description: openSourceContent.program.summary,
    highlights: openSourceContent.program.outcomes,
  },
  ...openSourceContent.projects.map((project) => ({
    title: project.role,
    organization: project.name,
    description: project.contributionSummary,
    highlights: project.highlights,
  })),
];

const resumeFeaturedProjects: ResumeProjectItem[] = resumeProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project))
  .map((project) => ({
    title: project.title,
    summary: project.summary,
    technologies: project.techStack.slice(0, 8),
    href: `/projects/${project.slug}`,
    status: project.status,
  }));

const resumeEducation: ResumeEducationItem = {
  institution: aboutContent.education.institution,
  degree: aboutContent.education.degree,
  duration: aboutContent.education.period,
  location: aboutContent.education.location,
  description: aboutContent.education.description,
  highlights: aboutContent.education.highlights,
  metadata: [
    {
      label: "Specialization",
      value: aboutContent.education.specialization,
    },
    {
      label: "Collaboration",
      value: `In collaboration with ${aboutContent.education.collaboration}`,
    },
  ],
};

const resumeAchievements: ResumeAchievementItem[] = [
  {
    title: mergedPullRequests
      ? `${mergedPullRequests.value} ${mergedPullRequests.label.toLowerCase()}`
      : "Merged open-source pull requests",
    description:
      mergedPullRequests?.description ??
      "Reviewed and merged contributions across open-source projects.",
  },
  {
    title: programAttendance
      ? `${programAttendance.value} ${programAttendance.label.toLowerCase()}`
      : "Open-source program attendance",
    description:
      programAttendance?.description ??
      "Participated in the Kalvium × Mathesar Open Source Program.",
  },
  {
    title: "Academic performance",
    description:
      "Maintained a 9+ CGPA and achieved a 9.25 CGPA in the first semester.",
  },
  {
    title: certificatesStat
      ? `${certificatesStat.value} ${certificatesStat.label.toLowerCase()}`
      : "Certificates earned",
    description:
      certificatesStat?.description ??
      "Confirmed certificates will be listed as the portfolio data grows.",
  },
];

export const resumeContent: ResumeContent = {
  meta: {
    title: "Resume | Garvit Singh",
    description:
      "Resume overview for Garvit Singh, including software engineering skills, projects, education, and open-source work.",
  },
  introduction: {
    label: "Resume",
    heading: "A recruiter-friendly overview of my software engineering work.",
    description:
      "A concise overview of my education, technical skills, projects, open-source work, and software engineering experience.",
  },
  summary: [
    "I am a Software Product Engineering student at JECRC University in Jaipur, building full-stack applications with a growing focus on backend systems, data modelling, API design, and product architecture.",
    "My work combines React interfaces, Node.js and Express APIs, RESTful backend design, databases, authentication, documentation, and GitHub-based collaboration. I am especially interested in backend-first full-stack development, reliable product workflows, and learning through scoped open-source contributions.",
  ],
  skillGroups: resumeSkillGroups,
  experience: resumeExperience,
  featuredProjects: resumeFeaturedProjects,
  education: resumeEducation,
  achievements: resumeAchievements,
  finalCta: {
    heading: "Want the PDF version or a quick conversation?",
    description:
      "Download the resume PDF or reach out about internships, projects, and collaboration opportunities.",
  },
};
