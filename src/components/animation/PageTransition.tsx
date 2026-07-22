import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { pageTransitionVariants } from "@/config/animations";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      animate={shouldReduceMotion ? undefined : "visible"}
      exit={shouldReduceMotion ? undefined : "exit"}
      variants={shouldReduceMotion ? undefined : pageTransitionVariants}
      className="min-w-0"
    >
      {children}
    </motion.div>
  );
}
