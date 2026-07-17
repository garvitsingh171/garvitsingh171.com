import type { ReactNode } from "react";
import type { OpenSourceContribution } from "../../types/openSource.js";
import { TechnologyList } from "../projects";
import { Card } from "../ui";
import { ContributionMetadata } from "./ContributionMetadata";
import { ContributionStatusBadge } from "./ContributionStatusBadge";
import { ExternalLink } from "./ExternalLink";
import { hasItems } from "./openSourceUtils";

type ContributionCardProps = {
  contribution: OpenSourceContribution;
};

type DetailBlockProps = {
  title: string;
  children: ReactNode;
};

function DetailBlock({ title, children }: DetailBlockProps) {
  return (
    <div className="min-w-0">
      <h5 className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
        {title}
      </h5>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="border-l border-slate-700 pl-3 text-sm leading-6 text-slate-300"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ContributionCard({ contribution }: ContributionCardProps) {
  return (
    <Card className="min-w-0 p-5 sm:p-6">
      <article aria-labelledby={`${contribution.id}-title`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <ContributionStatusBadge status={contribution.status} />
              <span className="rounded-full border border-slate-700 bg-slate-950/70 px-2.5 py-1 text-xs font-semibold text-slate-300">
                PR #{contribution.pullRequestNumber}
              </span>
            </div>

            <h4
              id={`${contribution.id}-title`}
              className="mt-4 break-words text-xl font-semibold tracking-tight text-white"
            >
              {contribution.title}
            </h4>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
          {contribution.summary}
        </p>

        <div className="mt-5">
          <ContributionMetadata contribution={contribution} />
        </div>

        <TechnologyList
          technologies={contribution.technologies}
          ariaLabel={`${contribution.title} technologies`}
          className="mt-5"
        />

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ExternalLink
            href={contribution.pullRequestUrl}
            variant="button"
            buttonVariant="secondary"
            className="w-full sm:w-auto"
            ariaLabel={`View pull request ${contribution.pullRequestNumber} for ${contribution.title} on GitHub in a new tab`}
          >
            View pull request
          </ExternalLink>

          {contribution.issueUrl ? (
            <ExternalLink
              href={contribution.issueUrl}
              variant="button"
              buttonVariant="outline"
              className="w-full sm:w-auto"
              ariaLabel={`View related issue for pull request ${contribution.pullRequestNumber} on GitHub in a new tab`}
            >
              Related issue
            </ExternalLink>
          ) : null}
        </div>

        <details className="group mt-6 rounded-md border border-slate-800 bg-slate-950/50">
          <summary
            className={[
              "flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 rounded-md px-4 py-3 text-sm font-semibold text-slate-100 transition-colors",
              "hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400",
              "[&::-webkit-details-marker]:hidden",
            ].join(" ")}
          >
            <span>View contribution details</span>
            <svg
              aria-hidden="true"
              className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="m5 8 5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </summary>

          <div className="space-y-6 border-t border-slate-800 px-4 py-5 sm:px-5">
            {contribution.problem ? (
              <DetailBlock title="Problem">
                <p className="text-sm leading-6 text-slate-300">
                  {contribution.problem}
                </p>
              </DetailBlock>
            ) : null}

            {hasItems(contribution.solution) ? (
              <DetailBlock title="What changed">
                <DetailList items={contribution.solution} />
              </DetailBlock>
            ) : null}

            {hasItems(contribution.impact) ? (
              <DetailBlock title="Impact">
                <DetailList items={contribution.impact} />
              </DetailBlock>
            ) : null}

            {hasItems(contribution.learnings) ? (
              <DetailBlock title="What I learned">
                <DetailList items={contribution.learnings} />
              </DetailBlock>
            ) : null}

            {hasItems(contribution.reviewNotes) ? (
              <DetailBlock title="Review notes">
                <DetailList items={contribution.reviewNotes} />
              </DetailBlock>
            ) : null}

            {hasItems(contribution.verification) ? (
              <DetailBlock title="Verification">
                <DetailList items={contribution.verification} />
              </DetailBlock>
            ) : null}

            {hasItems(contribution.filePaths) ? (
              <DetailBlock title="Files changed">
                <ul className="space-y-2">
                  {contribution.filePaths.map((filePath) => (
                    <li key={filePath}>
                      <code className="block rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-xs leading-5 text-slate-300 break-all">
                        {filePath}
                      </code>
                    </li>
                  ))}
                </ul>
              </DetailBlock>
            ) : null}
          </div>
        </details>
      </article>
    </Card>
  );
}
