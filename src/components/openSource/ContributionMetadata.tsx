import type { OpenSourceContribution } from "@/types/openSource.js";
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
          className="surface-muted min-w-0 rounded-control px-3 py-2"
        >
          <dt className="text-xs font-semibold uppercase text-muted">
            {item.label}
          </dt>
          <dd className="mt-1 break-words text-sm font-medium text-primary">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
