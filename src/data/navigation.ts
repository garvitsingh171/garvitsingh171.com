import { routes } from "@/routes/routes";

export type NavigationItem = {
  id: string;
  label: string;
  href: string;
};

export const primaryNavigation = [
  {
    id: "work",
    label: "Work",
    href: routes.projects,
  },
  {
    id: "about",
    label: "About",
    href: routes.about,
  },
  {
    id: "open-source",
    label: "Open Source",
    href: routes.openSource,
  },
  {
    id: "resume",
    label: "Resume",
    href: routes.resume,
  },
] as const satisfies readonly NavigationItem[];

export const contactNavigation = {
  id: "contact",
  label: "Contact",
  href: routes.contact,
} as const satisfies NavigationItem;

export const mobileNavigation = [
  ...primaryNavigation,
  contactNavigation,
] as const satisfies readonly NavigationItem[];

export const footerNavigation = [
  {
    id: "about",
    label: "About",
    href: routes.about,
  },
  {
    id: "projects",
    label: "Projects",
    href: routes.projects,
  },
  {
    id: "open-source",
    label: "Open Source",
    href: routes.openSource,
  },
  {
    id: "writing",
    label: "Writing",
    href: routes.writing,
  },
  {
    id: "resume",
    label: "Resume",
    href: routes.resume,
  },
  {
    id: "contact",
    label: "Contact",
    href: routes.contact,
  },
] as const satisfies readonly NavigationItem[];
