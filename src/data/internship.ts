import { SITE_CONFIG } from "@/data/site";
import type { InternshipAvailabilityContent } from "@/types/internship.js";
import { socialLinks } from "./socialLinks";

const getSocialLink = (label: string) =>
  socialLinks.find((link) => link.label === label);

const githubLink = getSocialLink("GitHub");
const linkedinLink = getSocialLink("LinkedIn");

if (!githubLink || !linkedinLink) {
  throw new Error("Internship availability requires GitHub and LinkedIn links.");
}

export const internshipAvailability: InternshipAvailabilityContent = {
  label: "Internship Availability",
  status: "Available from August 2026",
  heading: "Open to Remote Internship Opportunities",
  description:
    "I'm currently looking for a remote internship where I can contribute to real software products, strengthen my engineering skills, and work with a team that values ownership, clear communication, and practical problem-solving.",
  rolePreferenceDescription:
    "My strongest interests are backend and full-stack engineering, and I'm also open to software engineering, product engineering, and well-scoped startup roles.",
  technicalStrengthDescription:
    "I have practical experience building full-stack applications and REST APIs using React, TypeScript, Node.js, Express, PostgreSQL, Prisma, MongoDB, Docker, and Git/GitHub workflows.",
  preferredRoles: [
    "Backend Developer Intern",
    "Full-Stack Developer Intern",
    "Software Engineering Intern",
    "Product Engineering Intern",
    "Startup Engineering Intern",
  ],
  technicalFocus: [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "REST APIs",
    "PostgreSQL",
    "Prisma",
    "MongoDB",
    "Docker",
    "Git/GitHub",
  ],
  workingPreference: "Remote",
  availability:
    "Available to begin from August 2026, with working hours coordinated around university commitments.",
  emailCta: {
    label: "Discuss an Opportunity",
    href: `mailto:${SITE_CONFIG.email}?subject=Internship%20Opportunity%20for%20Garvit%20Singh`,
    ariaLabel: "Email Garvit Singh about an internship opportunity",
  },
  resumeCtaLabel: "Download Resume",
  supportingLinks: [
    {
      label: "View Projects",
      href: "/projects",
      ariaLabel: "View Garvit Singh's projects",
    },
    {
      label: "GitHub",
      href: githubLink.href,
      external: true,
      ariaLabel: "View Garvit Singh's GitHub profile",
    },
    {
      label: "LinkedIn",
      href: linkedinLink.href,
      external: true,
      ariaLabel: "View Garvit Singh's LinkedIn profile",
    },
  ],
};
