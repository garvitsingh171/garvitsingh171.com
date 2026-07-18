import { heroContent } from "../../data/home";
import { ResumeDownloadButton } from "../resume";
import { Button } from "../ui";

export function HeroSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="home-hero-title">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
          {heroContent.label}
        </p>

        <h1
          id="home-hero-title"
          className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {heroContent.heading}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          {heroContent.description}
        </p>

        <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-slate-400 sm:text-base">
          {heroContent.position}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            as="link"
            to={heroContent.primaryCta.href}
            className="w-full sm:w-auto"
          >
            {heroContent.primaryCta.label}
          </Button>
          <ResumeDownloadButton
            variant="outline"
            className="w-full sm:w-auto"
          />
          <Button
            as="link"
            to={heroContent.secondaryCta.href}
            variant="ghost"
            className="w-full sm:w-auto"
          >
            {heroContent.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
