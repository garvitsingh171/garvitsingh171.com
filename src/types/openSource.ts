export type OpenSourceContributionStatus = "merged";

export type OpenSourceLinkType =
  | "repository"
  | "fork"
  | "pull-request"
  | "issue"
  | "profile"
  | "program"
  | "certificate";

export type OpenSourceLink = {
  label: string;
  url: string;
  type: OpenSourceLinkType;
};

export type OpenSourceStat = {
  label: string;
  value: string;
  description?: string;
};

export type OpenSourceContribution = {
  id: string;
  projectId: string;
  repository: string;
  title: string;
  summary: string;
  problem: string;
  solution: string[];
  impact: string[];
  technologies: string[];
  learnings: string[];
  reviewNotes?: string[];
  verification?: string[];
  status: OpenSourceContributionStatus;
  pullRequestNumber: number;
  pullRequestUrl: string;
  issueUrl?: string;
  filePaths?: string[];
  createdAt: string;
  mergedAt: string;
  commits: number;
  changedFiles: number;
  additions: number;
  deletions: number;
};

export type OpenSourceProject = {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  role: string;
  contributionSummary: string;
  repositoryUrl: string;
  forkUrl?: string;
  technologies: string[];
  stats?: OpenSourceStat[];
  highlights: string[];
  learnings: string[];
  links: OpenSourceLink[];
  contributions: OpenSourceContribution[];
};

export type OpenSourceLearning = {
  title: string;
  description: string;
  examples?: string[];
};

export type OpenSourceProgram = {
  name: string;
  duration: string;
  attendance: string;
  summary: string;
  mentors?: string[];
  reviewers?: string[];
  activities: string[];
  outcomes: string[];
  certificateUrl?: string;
};

export interface OpenSourceContent {
  introduction: {
    eyebrow?: string;
    heading: string;
    paragraphs: string[];
  };
  links: OpenSourceLink[];
  program: OpenSourceProgram;
  stats: OpenSourceStat[];
  projects: OpenSourceProject[];
  learningSummary: {
    heading: string;
    description: string;
    learnings: OpenSourceLearning[];
  };
  closing: {
    heading: string;
    paragraphs: string[];
  };
}
