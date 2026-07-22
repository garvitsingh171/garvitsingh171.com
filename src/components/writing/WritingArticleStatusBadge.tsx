import type { WritingArticleStatus } from "@/types/writing";

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
    className: "border-accent-border bg-accent-soft text-accent",
  },
  draft: {
    label: "Draft",
    className: "border-border-strong bg-subtle text-secondary",
  },
  "coming-soon": {
    label: "Coming Soon",
    className: "border-border-strong bg-subtle text-secondary",
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
