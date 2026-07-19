import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/layout";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col text-slate-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-md focus:bg-blue-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar />

      <main
        id="main-content"
        className="mx-auto w-full max-w-5xl flex-1 px-6 py-12"
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
