import { SITE_CONFIG } from "../constants/site";

export type SocialLinkIconName = "github" | "linkedin" | "email";

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: SocialLinkIconName;
  external?: boolean;
  ariaLabel: string;
  username?: string;
  description?: string;
};

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/garvitsingh171",
    icon: "github",
    external: true,
    ariaLabel: "Visit Garvit Singh's GitHub profile",
    username: "@garvitsingh171",
    description: "Projects, pull requests, and open-source work.",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/garvitsingh171",
    icon: "linkedin",
    external: true,
    ariaLabel: "Visit Garvit Singh's LinkedIn profile",
    username: "garvitsingh171",
    description: "Professional background and networking.",
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${SITE_CONFIG.email}`,
    icon: "email",
    external: false,
    ariaLabel: "Email Garvit Singh",
    username: SITE_CONFIG.email,
    description: "Best for direct opportunities and collaboration notes.",
  },
] as const satisfies readonly SocialLink[];
