export type InternshipLink = {
  label: string;
  href: string;
  external?: boolean;
  ariaLabel: string;
};

export type InternshipAvailabilityContent = {
  label: string;
  status: string;
  heading: string;
  description: string;
  rolePreferenceDescription: string;
  technicalStrengthDescription: string;
  preferredRoles: string[];
  technicalFocus: string[];
  workingPreference: string;
  availability: string;
  emailCta: InternshipLink;
  resumeCtaLabel: string;
  supportingLinks: InternshipLink[];
};
