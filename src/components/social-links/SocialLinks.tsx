import { Link } from "react-router-dom";
import type { SocialLink } from "../../data/socialLinks";
import { isEmailLink, isExternalWebLink } from "../../utils/links";
import { SocialIcon } from "./SocialIcon";

export type SocialLinksProps = {
  links: readonly SocialLink[];
  ariaLabel?: string;
  className?: string;
};

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-muted transition group-hover:text-accent"
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

function getLinkClasses() {
  return [
    "group flex min-h-16 items-center gap-3 rounded-card border border-border bg-surface p-4 transition duration-200",
    "motion-safe:hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-hover",
    "focus-visible:outline-focus",
  ].join(" ");
}

function SocialLinkItem({ link }: { link: SocialLink }) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control border border-accent-border bg-accent-soft text-accent transition group-hover:border-accent">
        <SocialIcon icon={link.icon} className="h-5 w-5" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-primary">
          {link.label}
        </span>
        <span className="mt-1 block truncate text-sm text-secondary">
          {link.username ?? link.description ?? link.href}
        </span>
      </span>

      {isExternalWebLink(link.href) ? <ExternalLinkIcon /> : null}
    </>
  );

  if (isExternalWebLink(link.href)) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={getLinkClasses()}
        aria-label={link.ariaLabel}
      >
        {content}
      </a>
    );
  }

  if (isEmailLink(link.href)) {
    return (
      <a href={link.href} className={getLinkClasses()} aria-label={link.ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <Link to={link.href} className={getLinkClasses()} aria-label={link.ariaLabel}>
      {content}
    </Link>
  );
}

export function SocialLinks({
  links,
  ariaLabel = "Social links",
  className = "",
}: SocialLinksProps) {
  return (
    <nav aria-label={ariaLabel} className={className}>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <li key={link.id} className="min-w-0">
            <SocialLinkItem link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
