import { resumeConfig } from "../data/resume";

export type NavigationItem = {
  id: string;
  label: string;
  href: string;
};

export const primaryNavigation = [
  {
    id: "work",
    label: "Work",
    href: "/projects",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "open-source",
    label: "Open Source",
    href: "/open-source",
  },
  {
    id: "resume",
    label: "Resume",
    href: resumeConfig.pagePath,
  },
] as const satisfies readonly NavigationItem[];

export const contactNavigation = {
  id: "contact",
  label: "Contact",
  href: "/contact",
} as const satisfies NavigationItem;

export const mobileNavigation = [
  ...primaryNavigation,
  contactNavigation,
] as const satisfies readonly NavigationItem[];

export const footerNavigation = [
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
  },
  {
    id: "open-source",
    label: "Open Source",
    href: "/open-source",
  },
  {
    id: "writing",
    label: "Writing",
    href: "/writing",
  },
  {
    id: "resume",
    label: "Resume",
    href: resumeConfig.pagePath,
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
] as const satisfies readonly NavigationItem[];
