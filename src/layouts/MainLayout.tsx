import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/layout";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-page text-primary">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-control focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-inverse-text focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar />

      <main
        id="main-content"
        className="mx-auto w-full max-w-[var(--container-full)] flex-1 px-5 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-16"
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
