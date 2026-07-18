import type { WritingArticleStatus } from "../../types/writing";

export type WritingArticleStatusBadgeProps = {
  status: WritingArticleStatus;
};

type StatusConfig = {
  label: string;
  className: string;
};

const statusConfig = {
  published: {
    label: "Published",
    className: "border-blue-400/30 bg-blue-400/10 text-blue-200",
  },
  draft: {
    label: "Draft",
    className: "border-slate-600 bg-slate-800/70 text-slate-300",
  },
  "coming-soon": {
    label: "Coming Soon",
    className: "border-slate-700 bg-slate-950/70 text-slate-300",
  },
} satisfies Record<WritingArticleStatus, StatusConfig>;

export function WritingArticleStatusBadge({
  status,
}: WritingArticleStatusBadgeProps) {
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
