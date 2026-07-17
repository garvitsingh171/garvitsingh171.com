import { NavLink, Outlet } from "react-router-dom";
import { SITE_CONFIG } from "../constants/site";

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Open Source", to: "/open-source" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
] as const;

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <NavLink to="/" className="text-lg font-semibold">
            {SITE_CONFIG.name}
          </NavLink>

          <nav className="flex flex-wrap gap-2 text-sm font-medium">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    "rounded-md px-3 py-2 transition-colors",
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white",
                  ].join(" ")
                }
                end={link.to === "/"}
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
        <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-slate-400">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.domain}. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
