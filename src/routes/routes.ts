import { SITE_CONFIG } from "@/data/site";

export const routes = {
  home: "/",
  about: "/about",
  projects: "/projects",
  projectDetail: "/projects/:slug",
  project: (slug: string) => `/projects/${slug}`,
  openSource: "/open-source",
  writing: "/writing",
  experience: "/experience",
  contact: "/contact",
  resume: SITE_CONFIG.resumePath,
  notFound: "*",
} as const;
