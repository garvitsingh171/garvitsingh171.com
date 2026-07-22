import { SITE_CONFIG } from "@/data/site";
import { socialLinks } from "./socialLinks";

const emailSubject = "Portfolio Contact";
const onlineProfileLinks = socialLinks.filter((link) => link.id !== "email");

export const contactDetails = {
  email: SITE_CONFIG.email,
  emailSubject,
  emailHref: `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(emailSubject)}`,
  emailCtaLabel: "Start a conversation",
  emailCtaAriaLabel: "Email Garvit Singh",
} as const;

export const contactPageContent = {
  meta: {
    title: "Contact | Garvit Singh",
    description:
      "Contact Garvit Singh about remote software engineering internships, backend and full-stack projects, open-source collaboration, and practical software products.",
  },
  introduction: {
    label: "Contact",
    heading: "Let's start a useful conversation.",
    description:
      "I'm open to thoughtful conversations about remote software engineering internships, backend and full-stack projects, open-source collaboration, and practical software products.",
    supportingDescription:
      "Whether you are hiring, building a product, maintaining an open-source project, or have constructive feedback on my work, feel free to reach out.",
  },
  opportunities: {
    heading: "What you can reach out about",
    items: [
      "Remote software engineering internships",
      "Backend and full-stack development",
      "Open-source collaboration",
      "Technical and product discussions",
      "Project feedback and professional networking",
    ],
  },
  emailCard: {
    title: "Start with an email",
    description:
      "Email is the best way to reach me about internship opportunities, collaboration, or detailed project discussions.",
  },
  availability: {
    heading: "Availability",
    description:
      "Available for remote internship opportunities from August 2026, alongside university commitments.",
  },
  responseNote:
    "I review relevant messages and reply as soon as I can around my university schedule.",
  socialSection: {
    label: "Profiles",
    title: "Find me online",
    description: "Explore my work on GitHub or connect with me on LinkedIn.",
    links: onlineProfileLinks,
  },
} as const;
