import { resumeConfig } from "../data/resume";

export type NavigationItem = {
  id: string;
  label: string;
  href: string;
};

export const primaryNavigation = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
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

const footerNavigationIds = [
  "about",
  "projects",
  "open-source",
  "writing",
  "resume",
  "contact",
] as const;

const navigationById = new Map(primaryNavigation.map((item) => [item.id, item]));

export const footerNavigation = footerNavigationIds.map((id) => {
  const item = navigationById.get(id);

  if (!item) {
    throw new Error(`Missing footer navigation item: ${id}`);
  }

  return item;
});
