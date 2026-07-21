export type ProjectStatus = "completed" | "in-progress" | "planned";

export type ProjectType =
  | "full-stack"
  | "backend"
  | "frontend"
  | "open-source";

export type ProjectImage = {
  alt: string;
  src?: string;
  light?: string;
  dark?: string;
};

export type ProjectTextContent = string | string[];

export type ProjectScreenshotViewport = "desktop" | "mobile";

export type ProjectScreenshot = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  viewport?: ProjectScreenshotViewport;
};

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

export type ProjectLearningCategory =
  | "technical"
  | "architecture"
  | "debugging"
  | "deployment"
  | "collaboration"
  | "product";

export type ProjectLearning = {
  title: string;
  description: string;
  category: ProjectLearningCategory;
  application?: string;
};

export type ProjectArchitectureLayerKind =
  | "client"
  | "api"
  | "service"
  | "database"
  | "external"
  | "tooling";

export type ProjectArchitectureLayer = {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  kind?: ProjectArchitectureLayerKind;
};

export type ProjectArchitectureConnection = {
  from: string;
  to: string;
  label?: string;
};

export type ProjectArchitectureDiagram = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectArchitecture = {
  overview?: ProjectTextContent;
  layers?: ProjectArchitectureLayer[];
  connections?: ProjectArchitectureConnection[];
  diagram?: ProjectArchitectureDiagram;
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
  architecture?: ProjectArchitecture;
  technicalDecisions?: ProjectTechnicalDecision[];
  challenges?: ProjectChallenge[];
  learnings?: ProjectLearning[];
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
  screenshots?: ProjectScreenshot[];
  githubUrl?: string;
  liveUrl?: string;
  apiDocsUrl?: string;
  caseStudyUrl?: string;
  caseStudy?: ProjectCaseStudy;
  featured: boolean;
};
