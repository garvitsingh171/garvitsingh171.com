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

export type ProjectTextContent = string | string[];

export type ProjectFeature = {
  title: string;
  description?: string;
};

export type ProjectTechnicalDecision = {
  title: string;
  description?: string;
  reason?: string;
  tradeOff?: string;
};

export type ProjectChallenge = {
  challenge: string;
  resolution?: string;
  learning?: string;
};

export type ProjectCaseStudy = {
  role?: string;
  timeline?: string;
  team?: string;
  category?: string;
  problem?: ProjectTextContent;
  solution?: ProjectTextContent;
  targetUsers?: string[];
  useCases?: string[];
  features?: ProjectFeature[];
  architecture?: ProjectTextContent;
  technicalDecisions?: ProjectTechnicalDecision[];
  challenges?: ProjectChallenge[];
  learnings?: string[];
  results?: ProjectTextContent;
  currentProgress?: ProjectTextContent;
  limitations?: string[];
  futureImprovements?: string[];
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  description: string;
  status: ProjectStatus;
  type: ProjectType;
  techStack: string[];
  image?: ProjectImage;
  githubUrl?: string;
  liveUrl?: string;
  apiDocsUrl?: string;
  caseStudyUrl?: string;
  caseStudy?: ProjectCaseStudy;
  featured: boolean;
};
