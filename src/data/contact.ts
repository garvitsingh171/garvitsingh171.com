import { SITE_CONFIG } from "../constants/site";
import { socialLinks } from "./socialLinks";

const emailSubject = "Portfolio Contact";

export const contactDetails = {
  email: SITE_CONFIG.email,
  emailSubject,
  emailHref: `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(emailSubject)}`,
  emailCtaLabel: "Send me an email",
  emailCtaAriaLabel:
    "Email Garvit Singh about internships, projects, collaboration, or professional networking",
} as const;

export const contactPageContent = {
  meta: {
    title: "Contact | Garvit Singh",
    description:
      "Contact Garvit Singh for internships, software development opportunities, open-source collaboration, technical discussions, and professional networking.",
  },
  introduction: {
    label: "Contact",
    heading: "Let's connect.",
    description:
      "I am open to thoughtful conversations around software engineering, product work, and opportunities where I can contribute and keep learning.",
    supportingDescription:
      "Email is the best starting point for internships, scoped projects, open-source collaboration, technical discussions, professional networking, or feedback about something I have built.",
    welcomedContexts: [
      "Internship opportunities",
      "Software development projects",
      "Open-source collaboration",
      "Technical discussions",
      "Professional networking",
      "Project feedback",
    ],
  },
  emailCard: {
    title: "Start with email",
    description:
      "Send a short note with context and I will reply as soon as I can.",
  },
  socialSection: {
    label: "Profiles",
    title: "Professional links",
    description:
      "These are the same profile links used across the site, kept in one place so they stay current.",
    links: socialLinks,
  },
} as const;
