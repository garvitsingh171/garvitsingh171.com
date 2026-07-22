import type { OpenSourceContributionStatus } from "@/types/openSource.js";
import { Badge } from "../ui";

type StatusConfig = {
  label: string;
  tone: "success";
};

const statusConfig = {
  merged: {
    label: "Merged",
    tone: "success",
  },
} satisfies Record<OpenSourceContributionStatus, StatusConfig>;

type ContributionStatusBadgeProps = {
  status: OpenSourceContributionStatus;
};

export function ContributionStatusBadge({
  status,
}: ContributionStatusBadgeProps) {
  const config = statusConfig[status];

  return <Badge tone={config.tone}>{config.label}</Badge>;
}
