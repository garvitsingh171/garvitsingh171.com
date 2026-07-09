import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="space-y-4">
      <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="max-w-2xl text-lg leading-8 text-slate-300">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="inline-flex rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400"
      >
        Back to Home
      </Link>
    </section>
  );
}
