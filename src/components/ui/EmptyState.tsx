import type { ReactNode } from "react";
import { Button } from "./Button";

export type EmptyStateHeadingLevel = "h1" | "h2" | "h3";
export type EmptyStateVariant = "section" | "page";
export type EmptyStateAlignment = "left" | "center";

type EmptyStateLinkAction = {
  type: "link";
  label: string;
  to: string;
  ariaLabel?: string;
};

type EmptyStateButtonAction = {
  type: "button";
  label: string;
  onClick: () => void;
  ariaLabel?: string;
};

export type EmptyStateAction = EmptyStateLinkAction | EmptyStateButtonAction;

export type EmptyStateProps = {
  label?: string;
  title: string;
  description: string;
  headingLevel?: EmptyStateHeadingLevel;
  variant?: EmptyStateVariant;
  align?: EmptyStateAlignment;
  icon?: ReactNode;
  primaryAction?: EmptyStateAction;
  secondaryAction?: EmptyStateAction;
  announce?: boolean;
  className?: string;
};

const variantClasses: Record<EmptyStateVariant, string> = {
  section: "rounded-lg border border-slate-800 bg-slate-900/60 p-6 sm:p-8",
  page: "mx-auto max-w-3xl rounded-lg border border-slate-800 bg-slate-900/60 p-6 sm:p-8 lg:p-10",
};

const headingClasses: Record<EmptyStateVariant, string> = {
  section: "text-2xl font-bold tracking-tight text-white sm:text-3xl",
  page: "text-4xl font-bold tracking-tight text-white sm:text-5xl",
};

function EmptyStateHeading({
  level,
  className,
  children,
}: {
  level: EmptyStateHeadingLevel;
  className: string;
  children: ReactNode;
}) {
  const Heading = level;

  return <Heading className={className}>{children}</Heading>;
}

function EmptyStateActionButton({
  action,
  variant,
}: {
  action: EmptyStateAction;
  variant: "primary" | "outline";
}) {
  const className = "w-full sm:w-auto";

  if (action.type === "link") {
    return (
      <Button
        as="link"
        to={action.to}
        variant={variant}
        className={className}
        aria-label={action.ariaLabel}
      >
        {action.label}
      </Button>
    );
  }

  return (
    <Button
      as="button"
      type="button"
      variant={variant}
      className={className}
      onClick={action.onClick}
      aria-label={action.ariaLabel}
    >
      {action.label}
    </Button>
  );
}

export function EmptyState({
  label,
  title,
  description,
  headingLevel = "h2",
  variant = "section",
  align = "center",
  icon,
  primaryAction,
  secondaryAction,
  announce = false,
  className = "",
}: EmptyStateProps) {
  const alignmentClasses =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";
  const descriptionClasses =
    align === "center"
      ? "mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300"
      : "mt-4 max-w-2xl text-base leading-7 text-slate-300";
  const hasActions = Boolean(primaryAction || secondaryAction);

  return (
    <div
      role={announce ? "status" : undefined}
      aria-live={announce ? "polite" : undefined}
      className={[
        "flex flex-col",
        alignmentClasses,
        variantClasses[variant],
        className,
      ].join(" ")}
    >
      {icon ? (
        <span
          aria-hidden="true"
          className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-400/10 text-blue-200"
        >
          {icon}
        </span>
      ) : null}

      {label ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
          {label}
        </p>
      ) : null}

      <EmptyStateHeading
        level={headingLevel}
        className={[label ? "mt-3" : "", headingClasses[variant]].join(" ")}
      >
        {title}
      </EmptyStateHeading>

      <p className={descriptionClasses}>{description}</p>

      {hasActions ? (
        <div
          className={[
            "mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap",
            align === "center" ? "sm:justify-center" : "",
          ].join(" ")}
        >
          {primaryAction ? (
            <EmptyStateActionButton action={primaryAction} variant="primary" />
          ) : null}
          {secondaryAction ? (
            <EmptyStateActionButton action={secondaryAction} variant="outline" />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
