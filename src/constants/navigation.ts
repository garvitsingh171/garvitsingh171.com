import { resumeConfig } from "../data/resume";
import { socialLinks } from "../data/socialLinks";

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
  ...socialLinks.map((link) => ({
    ...link,
    external: true,
  })),
  {
    label: "Resume",
    href: resumeConfig.pagePath,
    external: false,
  },
] as const;
