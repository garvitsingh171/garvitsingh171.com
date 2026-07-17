import type { OpenSourceContribution } from "../../types/openSource.js";
import { formatDate, pluralize } from "./openSourceUtils";

type ContributionMetadataProps = {
  contribution: OpenSourceContribution;
};

export function ContributionMetadata({
  contribution,
}: ContributionMetadataProps) {
  const metadata = [
    {
      label: "Merged",
      value: formatDate(contribution.mergedAt),
    },
    {
      label: "Commits",
      value: pluralize(contribution.commits, "commit"),
    },
    {
      label: "Files",
      value: pluralize(contribution.changedFiles, "file changed", "files changed"),
    },
    {
      label: "Diff",
      value: `+${contribution.additions} / -${contribution.deletions}`,
    },
  ];

  return (
    <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {metadata.map((item) => (
        <div
          key={item.label}
          className="min-w-0 rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2"
        >
          <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {item.label}
          </dt>
          <dd className="mt-1 break-words text-sm font-medium text-slate-200">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
