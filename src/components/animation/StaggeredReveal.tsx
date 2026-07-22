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
  as?: "div" | "ul" | "ol";
};

type StaggeredRevealItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
};

export function StaggeredReveal({
  children,
  className = "",
  as = "div",
}: StaggeredRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component =
    as === "ul" ? motion.ul : as === "ol" ? motion.ol : motion.div;

  return (
    <Component
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={staggerViewport}
      variants={shouldReduceMotion ? undefined : staggerContainerVariants}
      className={className}
    >
      {children}
    </Component>
  );
}

export function StaggeredRevealItem({
  children,
  className = "",
  as = "div",
}: StaggeredRevealItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      variants={shouldReduceMotion ? undefined : staggerItemVariants}
      className={cn("min-w-0", className)}
    >
      {children}
    </Component>
  );
}
