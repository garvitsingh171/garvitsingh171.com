import type { ReactNode } from "react";

type PageHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function PageHeader({
  label,
  title,
  description,
  children,
  className = "",
}: PageHeaderProps) {
  return (
    <header className={["max-w-4xl", className].join(" ")}>
      {label ? <p className="text-label text-accent">{label}</p> : null}

      <h1 className={[label ? "mt-4" : "", "text-display-2 text-primary"].join(" ")}>
        {title}
      </h1>

      {description ? (
        <p className="mt-5 max-w-3xl text-body-lg text-secondary">
          {description}
        </p>
      ) : null}

      {children ? <div className="mt-8">{children}</div> : null}
    </header>
  );
}
