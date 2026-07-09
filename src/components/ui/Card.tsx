import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function Card({
  title,
  description,
  children,
  className = "",
}: CardProps) {
  const hasHeaderContent = Boolean(title || description);

  return (
    <article
      className={[
        "rounded-lg border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-slate-700",
        className,
      ].join(" ")}
    >
      {title ? (
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      ) : null}

      {description ? (
        <p className="mt-3 leading-7 text-slate-300">{description}</p>
      ) : null}

      {children ? (
        <div className={hasHeaderContent ? "mt-5" : ""}>{children}</div>
      ) : null}
    </article>
  );
}
