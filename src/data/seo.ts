import { SITE_CONFIG } from "../constants/site.ts";
import type { SeoInput } from "../utils/seo.ts";

export type StaticRouteSeo = SeoInput & {
  path: string;
};

export const staticRouteSeo = {
  home: {
    path: "/",
    title: SITE_CONFIG.defaultTitle,
    description:
      "Portfolio of Garvit Singh, a Software Product Engineering student building practical backend and full-stack products with modern web technologies.",
  },
  about: {
    path: "/about",
    title: "About Garvit Singh | Software Product Engineering",
    description:
      "Learn about Garvit Singh's Software Product Engineering journey, education, development approach, current learning, and product-building experience.",
  },
  projects: {
    path: "/projects",
    title: "Software Projects and Case Studies | Garvit Singh",
    description:
      "Explore backend and full-stack projects by Garvit Singh, including product decisions, architecture, implementation challenges, and technical outcomes.",
  },
  openSource: {
    path: "/open-source",
    title: "Open Source Contributions | Garvit Singh",
    description:
      "Review Garvit Singh's open-source work, merged contributions, engineering collaboration, and experience contributing to maintained software projects.",
  },
  writing: {
    path: "/writing",
    title: "Writing on Software Engineering | Garvit Singh",
    description:
      "Read Garvit Singh's notes on software projects, backend engineering, open-source collaboration, DSA, and engineering growth.",
  },
  experience: {
    path: "/experience",
    title: "Experience | Garvit Singh",
    description:
      "Review Garvit Singh's work history page for software engineering experience, achievements, and professional updates as the portfolio grows.",
  },
  resume: {
    path: SITE_CONFIG.resumePath,
    title: "Resume | Garvit Singh",
    description:
      "View Garvit Singh's education, technical skills, software projects, open-source contributions, achievements, and internship-focused resume.",
  },
  contact: {
    path: "/contact",
    title: "Contact Garvit Singh | Backend & Full-Stack Developer",
    description:
      "Contact Garvit Singh about remote software engineering internships, backend and full-stack projects, open-source work, and practical software products.",
  },
} as const satisfies Record<string, StaticRouteSeo>;

export const indexableStaticRoutes = Object.values(staticRouteSeo);
