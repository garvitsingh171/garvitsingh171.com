import { resumeConfig } from "../data/resume";

export const desktopNavigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Open Source",
    href: "/open-source",
  },
  {
    label: "Resume",
    href: resumeConfig.pagePath,
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export const mobilePrimaryNavigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Resume",
    href: resumeConfig.pagePath,
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export const footerNavigation = [
  {
    label: "GitHub",
    href: "https://github.com/garvitsingh171",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/garvitsingh171",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:garvitsingh171@gmail.com",
    external: true,
  },
  {
    label: "Resume",
    href: resumeConfig.pagePath,
    external: false,
  },
] as const;
