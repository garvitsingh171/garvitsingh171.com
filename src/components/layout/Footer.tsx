import { Link } from "react-router-dom";
import { ResumeDownloadButton } from "../resume";
import { SocialIcon } from "../social-links";
import { footerNavigation } from "../../constants/navigation";
import { SITE_CONFIG } from "../../constants/site";
import { socialLinks, type SocialLink } from "../../data/socialLinks";
import { isEmailLink, isExternalWebLink } from "../../utils/links";

const linkClasses = [
  "inline-flex min-h-9 items-center rounded-sm text-slate-300 transition-colors duration-150",
  "hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400",
].join(" ");

function FooterSocialLink({ link }: { link: SocialLink }) {
  const content = (
    <>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-blue-400/20 bg-blue-400/10 text-blue-200">
        <SocialIcon icon={link.icon} className="h-4 w-4" />
      </span>
      <span className="min-w-0 break-words">{link.label}</span>
    </>
  );

  const className = [
    "inline-flex min-h-10 items-center gap-3 rounded-md text-sm font-medium text-slate-300 transition-colors duration-150",
    "hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400",
  ].join(" ");

  if (isExternalWebLink(link.href)) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.ariaLabel}
        className={className}
      >
        {content}
      </a>
    );
  }

  if (isEmailLink(link.href)) {
    return (
      <a href={link.href} aria-label={link.ariaLabel} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link to={link.href} aria-label={link.ariaLabel} className={className}>
      {content}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/70">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-10 text-sm text-slate-400 md:grid-cols-2 lg:grid-cols-[minmax(0,1.45fr)_minmax(10rem,0.75fr)_minmax(12rem,0.9fr)]">
        <section className="space-y-4 md:col-span-2 lg:col-span-1">
          <div>
            <Link
              to="/"
              className="inline-flex rounded-sm text-base font-semibold text-white transition-colors hover:text-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-3 max-w-md leading-6 text-slate-300">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <span className="break-words text-slate-500">
              {SITE_CONFIG.domain}
            </span>
            <ResumeDownloadButton
              label="Download PDF"
              variant="ghost"
              className="min-h-9 px-0 py-0 text-slate-300 hover:bg-transparent hover:text-white"
            />
          </div>
        </section>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold text-white">Explore</h2>
          <ul className="mt-3 grid gap-1 sm:grid-cols-2 md:grid-cols-1">
            {footerNavigation.map((link) => (
              <li key={link.id}>
                <Link to={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Professional links">
          <h2 className="text-sm font-semibold text-white">Connect</h2>
          <ul className="mt-3 grid gap-1">
            {socialLinks.map((link) => (
              <li key={link.id} className="min-w-0">
                <FooterSocialLink link={link} />
              </li>
            ))}
          </ul>
        </nav>

        <p className="border-t border-slate-800 pt-6 text-slate-500 md:col-span-2 lg:col-span-3">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
