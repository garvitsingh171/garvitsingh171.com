import type { ReactNode } from "react";
import { Button } from "../ui";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  ariaLabel?: string;
  variant?: "text" | "button";
  buttonVariant?: ButtonVariant;
  className?: string;
};

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M7 5H5.75A2.75 2.75 0 0 0 3 7.75v6.5A2.75 2.75 0 0 0 5.75 17h6.5A2.75 2.75 0 0 0 15 14.25V13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M11 3h6v6M10 10l6.5-6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExternalLink({
  href,
  children,
  ariaLabel,
  variant = "text",
  buttonVariant = "outline",
  className = "",
}: ExternalLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      <ExternalLinkIcon />
    </>
  );

  if (variant === "button") {
    return (
      <Button
        as="anchor"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variant={buttonVariant}
        className={className}
        aria-label={ariaLabel}
      >
        {content}
      </Button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={[
        "inline-flex min-h-10 items-center gap-1.5 rounded-md text-sm font-semibold text-accent transition-colors hover:text-accent",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
        className,
      ].join(" ")}
    >
      {content}
    </a>
  );
}
