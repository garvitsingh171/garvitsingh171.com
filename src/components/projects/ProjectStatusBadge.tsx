import type { ProjectStatus } from "../../types/project";

export type ProjectStatusBadgeProps = {
  status: ProjectStatus;
};

type StatusConfig = {
  label: string;
  className: string;
};

const statusConfig = {
  completed: {
    label: "Completed",
    className: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  },
  "in-progress": {
    label: "In Progress",
    className: "border-blue-400/30 bg-blue-400/10 text-blue-200",
  },
  planned: {
    label: "Planned",
    className: "border-slate-600 bg-slate-800/70 text-slate-300",
  },
} satisfies Record<ProjectStatus, StatusConfig>;

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
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
