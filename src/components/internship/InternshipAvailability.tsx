import { Link } from "react-router-dom";
import type { InternshipAvailabilityContent } from "@/types/internship.js";
import { AnimatedSection } from "../animation";
import { ResumeDownloadButton } from "../resume";
import { Badge, Button } from "../ui";

export type InternshipAvailabilityProps = {
  content: InternshipAvailabilityContent;
};

function TagList({
  items,
  ariaLabel,
}: {
  items: string[];
  ariaLabel: string;
}) {
  return (
    <ul aria-label={ariaLabel} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="min-w-0 max-w-full">
          <span className="inline-flex max-w-full rounded-md border border-border-strong bg-subtle px-2.5 py-1 text-xs font-medium leading-5 text-secondary break-words">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function InternshipAvailability({
  content,
}: InternshipAvailabilityProps) {
  return (
    <AnimatedSection
      className="section-divider"
      aria-labelledby="internship-availability-heading"
    >
      <div className="surface-card p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-label text-accent">
            {content.label}
          </p>

          <Badge tone="accent" className="text-sm">{content.status}</Badge>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.75fr)]">
          <div className="min-w-0">
            <h2
              id="internship-availability-heading"
              className="max-w-3xl text-heading-2 text-primary"
            >
              {content.heading}
            </h2>

            <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-secondary">
              <p>{content.description}</p>
              <p>{content.rolePreferenceDescription}</p>
              <p>{content.technicalStrengthDescription}</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                as="anchor"
                href={content.emailCta.href}
                className="w-full sm:w-auto"
                aria-label={content.emailCta.ariaLabel}
              >
                {content.emailCta.label}
              </Button>
              <ResumeDownloadButton
                label={content.resumeCtaLabel}
                variant="outline"
                className="w-full sm:w-auto"
              />
            </div>

            <nav
              aria-label="Internship supporting links"
              className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-secondary"
            >
              {content.supportingLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                    aria-label={link.ariaLabel}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="rounded-sm transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                    aria-label={link.ariaLabel}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </div>

          <div className="min-w-0 space-y-6">
            <div>
              <h3 className="text-label text-accent">
                Preferred roles
              </h3>
              <div className="mt-3">
                <TagList
                  items={content.preferredRoles}
                  ariaLabel="Preferred internship roles"
                />
              </div>
            </div>

            <div>
              <h3 className="text-label text-accent">
                Technical focus
              </h3>
              <div className="mt-3">
                <TagList
                  items={content.technicalFocus}
                  ariaLabel="Internship technical focus"
                />
              </div>
            </div>

            <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="surface-muted rounded-control px-3 py-2">
                <dt className="text-xs font-semibold uppercase text-muted">
                  Working preference
                </dt>
                <dd className="mt-1 text-sm font-semibold leading-6 text-primary">
                  {content.workingPreference}
                </dd>
              </div>
              <div className="surface-muted rounded-control px-3 py-2">
                <dt className="text-xs font-semibold uppercase text-muted">
                  Availability
                </dt>
                <dd className="mt-1 text-sm leading-6 text-secondary">
                  {content.availability}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
