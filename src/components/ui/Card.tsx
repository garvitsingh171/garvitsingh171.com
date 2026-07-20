import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({
  title,
  description,
  children,
  className = "",
  interactive = false,
}: CardProps) {
  const hasHeaderContent = Boolean(title || description);

  return (
    <article
      className={[
        "rounded-card border border-border bg-surface p-6 shadow-subtle transition duration-200",
        interactive
          ? "motion-safe:hover:-translate-y-0.5 hover:border-border-strong"
          : "",
        className,
      ].join(" ")}
    >
      {title ? (
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
      ) : null}

      {description ? (
        <p className="mt-3 leading-7 text-secondary">{description}</p>
      ) : null}

      {children ? (
        <div className={hasHeaderContent ? "mt-5" : ""}>{children}</div>
      ) : null}
    </article>
  );
}
