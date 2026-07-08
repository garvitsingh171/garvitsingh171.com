export type ProjectStatus = "completed" | "in-progress" | "planned";

export type ProjectType =
  | "full-stack"
  | "backend"
  | "frontend"
  | "open-source";

export type Project = {
  title: string;
  slug: string;
  summary: string;
  status: ProjectStatus;
  type: ProjectType;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
};