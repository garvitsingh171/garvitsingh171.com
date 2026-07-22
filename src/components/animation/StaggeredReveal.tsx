import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  staggerContainerVariants,
  staggerItemVariants,
  staggerViewport,
} from "@/config/animations";
import { cn } from "@/lib/cn";

type StaggeredRevealProps = {
  children: ReactNode;
  className?: string;
};

type StaggeredRevealItemProps = {
  children: ReactNode;
  className?: string;
};

export function StaggeredReveal({
  children,
  className = "",
}: StaggeredRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={staggerViewport}
      variants={shouldReduceMotion ? undefined : staggerContainerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredRevealItem({
  children,
  className = "",
}: StaggeredRevealItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : staggerItemVariants}
      className={cn("min-w-0", className)}
    >
      {children}
    </motion.div>
  );
}
