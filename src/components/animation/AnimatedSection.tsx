import type { HTMLMotionProps } from "motion/react";
import { motion, useReducedMotion } from "motion/react";
import { sectionRevealVariants, sectionViewport } from "../../config/animations";

type AnimatedSectionProps = HTMLMotionProps<"section">;

export function AnimatedSection({
  children,
  ...sectionProps
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={sectionViewport}
      variants={sectionRevealVariants}
      {...sectionProps}
    >
      {children}
    </motion.section>
  );
}
