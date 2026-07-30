import { SITE_CONFIG } from "../data/site.ts";
import type { SeoInput } from "../lib/seo.ts";

export type StaticRouteSeo = SeoInput & {
  path: string;
};

const personEntity = {
  "@type": "Person",
  name: SITE_CONFIG.name,
  url: `${SITE_CONFIG.url}/`,
  jobTitle: "Software Engineering Student and Full-Stack Developer",
  sameAs: [
    "https://github.com/garvitsingh171",
    "https://linkedin.com/in/garvitsingh171",
  ],
} as const;

export const staticRouteSeo = {
  home: {
    path: "/",
    title: SITE_CONFIG.defaultTitle,
    description:
      "Garvit Singh is a software engineering student and backend-focused full-stack developer sharing projects, open-source work, and engineering notes.",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          name: SITE_CONFIG.name,
          url: `${SITE_CONFIG.url}/`,
        },
        personEntity,
      ],
    },
  },
  about: {
    path: "/about",
    title: "About Garvit Singh — Software Engineering Student",
    description:
      "Learn about Garvit Singh's background, education, engineering interests, current learning, skills, and approach to building software products.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: "About Garvit Singh",
      url: `${SITE_CONFIG.url}/about`,
      mainEntity: personEntity,
    },
  },
  projects: {
    path: "/projects",
    title: "Software Engineering Projects — Garvit Singh",
    description:
      "Explore software projects by Garvit Singh, including backend APIs, full-stack applications, architecture notes, and engineering case studies.",
  },
  openSource: {
    path: "/open-source",
    title: "Open Source Contributions — Garvit Singh",
    description:
      "Review Garvit Singh's open-source contributions, pull requests, collaboration experience, and lessons from maintained software projects.",
  },
  writing: {
    path: "/writing",
    title: "Software Engineering Writing — Garvit Singh",
    description:
      "Read Garvit Singh's notes on software projects, backend engineering, open-source collaboration, DSA practice, and engineering growth.",
  },
  experience: {
    path: "/experience",
    title: "Experience and Open-Source Contributions — Garvit Singh",
    description:
      "Review Garvit Singh's software engineering experience, open-source work, contributions, achievements, and professional updates.",
  },
  resume: {
    path: SITE_CONFIG.resumePath,
    title: "Resume — Garvit Singh",
    description:
      "View Garvit Singh's education, technical skills, software projects, open-source contributions, achievements, and internship-focused resume.",
  },
  contact: {
    path: "/contact",
    title: "Contact Garvit Singh — Software Developer",
    description:
      "Contact Garvit Singh about remote software engineering internships, backend and full-stack projects, open-source work, and practical software products.",
  },
} as const satisfies Record<string, StaticRouteSeo>;

export const indexableStaticRoutes = Object.values(staticRouteSeo);
