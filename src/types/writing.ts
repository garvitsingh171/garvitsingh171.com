export type WritingCategoryId =
  | "project-learnings"
  | "backend-engineering"
  | "open-source"
  | "dsa-problem-solving"
  | "engineering-growth";

export type WritingArticleStatus = "draft" | "published" | "coming-soon";

export type WritingCategory = {
  id: WritingCategoryId;
  label: string;
  description: string;
};

export type WritingArticleSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type WritingArticleBody = {
  introduction: string[];
  sections: WritingArticleSection[];
  conclusion?: string[];
};

export type WritingPlannedSection = {
  heading: string;
  topics: string[];
};

export type WritingRelatedLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type WritingArticle = {
  title: string;
  slug: string;
  summary: string;
  category: WritingCategoryId;
  tags: string[];
  status: WritingArticleStatus;
  publishedAt?: string;
  readingTime?: string;
  featured?: boolean;
  relatedProjectSlug?: string;
  relatedLinks?: WritingRelatedLink[];
  body?: WritingArticleBody;
  plannedSections?: WritingPlannedSection[];
};
