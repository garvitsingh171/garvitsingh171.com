import { motion, useReducedMotion } from "motion/react";
import {
  heroContainerVariants,
  heroHeadingVariants,
  heroItemVariants,
  heroVisualVariants,
} from "@/config/animations";
import { heroContent, heroFacts } from "@/data/home";
import { Button } from "../ui";
import { PortraitCard } from "./PortraitCard";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const initialState = shouldReduceMotion ? false : "hidden";
  const animateState = shouldReduceMotion ? undefined : "visible";

  return (
    <section aria-labelledby="home-hero-title" className="py-4 sm:py-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.62fr)] lg:items-center">
        <motion.div
          className="min-w-0"
          initial={initialState}
          animate={animateState}
          variants={heroContainerVariants}
        >
          <motion.p className="text-label text-accent" variants={heroItemVariants}>
            {heroContent.label}
          </motion.p>

          <motion.h1
            id="home-hero-title"
            className="mt-5 max-w-5xl text-display-1 text-primary"
            variants={heroHeadingVariants}
          >
            {heroContent.heading}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-3xl text-body-lg text-secondary"
            variants={heroItemVariants}
          >
            {heroContent.description}
          </motion.p>

          <motion.p
            className="mt-5 max-w-3xl border-l border-border-strong pl-4 text-body-md text-secondary"
            variants={heroItemVariants}
          >
            {heroContent.position}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            variants={heroItemVariants}
          >
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
          </motion.div>

          <motion.dl
            className="mt-8 grid gap-3 sm:grid-cols-3"
            variants={heroItemVariants}
          >
            {heroFacts.map((fact) => (
              <div key={fact.label} className="border-l border-border pl-3">
                <dt className="text-label text-muted">{fact.label}</dt>
                <dd className="mt-2 text-sm font-semibold text-primary">
                  {fact.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={initialState}
          animate={animateState}
          variants={shouldReduceMotion ? undefined : heroVisualVariants}
        >
          <PortraitCard />
        </motion.div>
      </div>
    </section>
  );
}
