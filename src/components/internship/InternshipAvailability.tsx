import { Link } from "react-router-dom";
import type { InternshipAvailabilityContent } from "../../types/internship.js";
import { ResumeDownloadButton } from "../resume";
import { Button } from "../ui";

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
          <span className="inline-flex max-w-full rounded-md border border-slate-700 bg-slate-950/70 px-2.5 py-1 text-xs font-medium leading-5 text-slate-300 break-words">
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
    <section
      className="border-t border-slate-800 py-12 sm:py-16"
      aria-labelledby="internship-availability-heading"
    >
      <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            {content.label}
          </p>

          <p className="w-fit rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-sm font-semibold text-blue-200">
            {content.status}
          </p>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.75fr)]">
          <div className="min-w-0">
            <h2
              id="internship-availability-heading"
              className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {content.heading}
            </h2>

            <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-slate-300">
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
              className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-slate-300"
            >
              {content.supportingLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-sm transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                    aria-label={link.ariaLabel}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="rounded-sm transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
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
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
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
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
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
              <div className="rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Working preference
                </dt>
                <dd className="mt-1 text-sm font-semibold leading-6 text-slate-100">
                  {content.workingPreference}
                </dd>
              </div>
              <div className="rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Availability
                </dt>
                <dd className="mt-1 text-sm leading-6 text-slate-300">
                  {content.availability}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
