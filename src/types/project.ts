export type ProjectStatus = "completed" | "in-progress" | "planned";

export type ProjectType =
  | "full-stack"
  | "backend"
  | "frontend"
  | "open-source";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  description: string;
  status: ProjectStatus;
  type: ProjectType;
  techStack: string[];
  image: ProjectImage;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
};
