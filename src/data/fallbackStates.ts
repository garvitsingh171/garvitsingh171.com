export const fallbackStates = {
  globalNotFound: {
    label: "404",
    title: "Page not found",
    description:
      "The page you requested may have moved, been removed, or never existed.",
    meta: {
      title: "Page Not Found | Garvit Singh",
      description:
        "The requested page could not be found. Return to Garvit Singh's portfolio homepage or explore available software projects.",
    },
  },
  projectNotFound: {
    label: "Project unavailable",
    title: "Project not found",
    description:
      "The project you requested may have moved, been removed, or never existed.",
    meta: {
      title: "Project Not Found | Garvit Singh",
      description:
        "The requested project could not be found. Return to Garvit Singh's projects page or explore the portfolio homepage.",
    },
  },
} as const;
