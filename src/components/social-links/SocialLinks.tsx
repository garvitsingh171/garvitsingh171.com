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
      className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-blue-200"
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
    "group flex min-h-16 items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/60 p-4 transition-colors",
    "hover:border-slate-700 hover:bg-slate-900/80",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400",
  ].join(" ");
}

function SocialLinkItem({ link }: { link: SocialLink }) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-400/10 text-blue-200 transition-colors group-hover:border-blue-300/40 group-hover:text-blue-100">
        <SocialIcon icon={link.icon} className="h-5 w-5" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-white">
          {link.label}
        </span>
        <span className="mt-1 block truncate text-sm text-slate-400">
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
