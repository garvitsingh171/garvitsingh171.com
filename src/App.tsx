import { SITE_CONFIG } from "./constants/site";
import { projects } from "./data/projects";
import { socialLinks } from "./data/socialLinks";

function App() {
  return (
    <main className="min-h-screen px-6 py-16 text-slate-100">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
          Personal Website
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {SITE_CONFIG.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          {SITE_CONFIG.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        <section className="mt-16" id="projects">
          <h2 className="text-2xl font-bold">Featured Projects</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <article
                  key={project.slug}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-300">
                    {project.type}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;