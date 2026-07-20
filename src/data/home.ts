export type HeroCta = {
  label: string;
  href: string;
};

export type HeroContent = {
  label: string;
  heading: string;
  description: string;
  position: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
};

export type PersonalStat = {
  value: string;
  label: string;
  description: string;
};

export const homeMeta = {
  title: "Garvit Singh | Full-Stack Developer",
  description:
    "Portfolio of Garvit Singh, a Software Product Engineering student building full-stack web projects, backend APIs, and practical software products.",
} as const;

export const heroContent: HeroContent = {
  label: "Building full-stack products and backend systems",
  heading: "I build software products around real workflows, clear architecture, and useful outcomes.",
  description:
    "I am Garvit Singh, a B.Tech CSE student at JECRC University in collaboration with Kalvium. My work focuses on full-stack products, backend APIs, data modelling, authentication, and practical user flows.",
  position:
    "Currently focused on backend development, full-stack projects, open source, and practical software engineering.",
  primaryCta: {
    label: "View Selected Work",
    href: "/projects",
  },
  secondaryCta: {
    label: "Contact Me",
    href: "/contact",
  },
};

export const personalStats: PersonalStat[] = [
  {
    value: "4+",
    label: "Projects Built",
    description: "Full-stack, backend, and product-focused learning projects.",
  },
  {
    value: "4+",
    label: "Open Source PRs Merged",
    description:
      "Contributions through GitHub issues, pull requests, and review workflows.",
  },
  {
    value: "9+",
    label: "CGPA",
    description:
      "Consistent academic performance in Software Product Engineering.",
  },
  {
    value: "3+",
    label: "Certificates Earned",
    description:
      "Open source, sprint-based learning, and Python bootcamp certifications.",
  },
];
