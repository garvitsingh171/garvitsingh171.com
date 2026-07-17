import type { OpenSourceContributionStatus } from "../../types/openSource.js";

type StatusConfig = {
  label: string;
  className: string;
};

const statusConfig = {
  merged: {
    label: "Merged",
    className: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  },
} satisfies Record<OpenSourceContributionStatus, StatusConfig>;

type ContributionStatusBadgeProps = {
  status: OpenSourceContributionStatus;
};

export function ContributionStatusBadge({
  status,
}: ContributionStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={[
        "inline-flex w-fit shrink-0 items-center rounded-full border px-2.5 py-1 text-xs font-semibold leading-none",
        config.className,
      ].join(" ")}
    >
      {config.label}
    </span>
  );
}
