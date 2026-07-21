import { heroContent, heroFacts } from "../../data/home";
import { Button } from "../ui";
import { PortraitCard } from "./PortraitCard";

export function HeroSection() {
  return (
    <section aria-labelledby="home-hero-title" className="py-4 sm:py-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.62fr)] lg:items-center">
        <div className="min-w-0">
          <p className="text-label text-accent">{heroContent.label}</p>

          <h1 id="home-hero-title" className="mt-5 max-w-5xl text-display-1 text-primary">
            {heroContent.heading}
          </h1>

          <p className="mt-6 max-w-3xl text-body-lg text-secondary">
            {heroContent.description}
          </p>

          <p className="mt-5 max-w-3xl border-l border-border-strong pl-4 text-body-md text-secondary">
            {heroContent.position}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              as="link"
              to={heroContent.primaryCta.href}
              size="lg"
              className="w-full sm:w-auto"
            >
              {heroContent.primaryCta.label}
            </Button>
            <Button
              as="link"
              to={heroContent.secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              {heroContent.secondaryCta.label}
            </Button>
          </div>

          <dl className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroFacts.map((fact) => (
              <div key={fact.label} className="border-l border-border pl-3">
                <dt className="text-label text-muted">{fact.label}</dt>
                <dd className="mt-2 text-sm font-semibold text-primary">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <PortraitCard />
      </div>
    </section>
  );
}
