import { NavLink, Outlet } from "react-router-dom";
import { ResumeDownloadButton } from "../components/resume";
import { desktopNavigation, footerNavigation } from "../constants/navigation";
import { SITE_CONFIG } from "../constants/site";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <NavLink to="/" className="text-lg font-semibold">
            {SITE_CONFIG.name}
          </NavLink>

          <nav className="flex flex-wrap gap-2 text-sm font-medium">
            {desktopNavigation.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  [
                    "rounded-md px-3 py-2 transition-colors",
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white",
                  ].join(" ")
                }
                end={link.href === "/"}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.domain}. All rights
            reserved.
          </p>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-4 gap-y-2"
          >
            {footerNavigation.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className="rounded-sm transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  {link.label}
                </NavLink>
              ),
            )}
            <ResumeDownloadButton
              label="Download PDF"
              variant="ghost"
              className="px-0 py-0 text-slate-400 hover:bg-transparent hover:text-white"
            />
          </nav>
        </div>
      </footer>
    </div>
  );
}
