import type { ProjectStatus } from "../../types/project";
import { Badge } from "../ui";

export type ProjectStatusBadgeProps = {
  status: ProjectStatus;
};

type StatusConfig = {
  label: string;
  tone: "neutral" | "success" | "warning";
};

const statusConfig = {
  completed: {
    label: "Completed",
    tone: "success",
  },
  "in-progress": {
    label: "In Progress",
    tone: "warning",
  },
  planned: {
    label: "Planned",
    tone: "neutral",
  },
} satisfies Record<ProjectStatus, StatusConfig>;

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  const config = statusConfig[status];

  return <Badge tone={config.tone}>{config.label}</Badge>;
}
