import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cardInteractionVariants } from "@/config/animations";

type CardElement = "article" | "div" | "aside";

type CardProps = {
  as?: CardElement;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  interactive?: boolean;
  id?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
};

export function Card({
  as = "article",
  title,
  description,
  children,
  className = "",
  interactive = false,
  ...props
}: CardProps) {
  const hasHeaderContent = Boolean(title || description);
  const shouldReduceMotion = useReducedMotion();
  const [hasFocusWithin, setHasFocusWithin] = useState(false);
  const shouldAnimateInteraction = interactive && !shouldReduceMotion;
  const interactionState = hasFocusWithin ? "focus" : "rest";
  const Component =
    as === "aside" ? motion.aside : as === "div" ? motion.div : motion.article;

  return (
    <Component
      initial={false}
      animate={shouldAnimateInteraction ? interactionState : undefined}
      whileHover={shouldAnimateInteraction ? "hover" : undefined}
      whileTap={shouldAnimateInteraction ? "tap" : undefined}
      variants={shouldAnimateInteraction ? cardInteractionVariants : undefined}
      onFocusCapture={() => {
        if (interactive) {
          setHasFocusWithin(true);
        }
      }}
      onBlurCapture={(event) => {
        if (!interactive) {
          return;
        }

        const nextFocusedElement = event.relatedTarget;

        if (
          !nextFocusedElement ||
          !event.currentTarget.contains(nextFocusedElement as Node)
        ) {
          setHasFocusWithin(false);
        }
      }}
      className={[
        "surface-card p-6 transition duration-200",
        interactive ? "hover:border-border-strong" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {title ? (
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
      ) : null}

      {description ? (
        <p className="mt-3 leading-7 text-secondary">{description}</p>
      ) : null}

      {children ? (
        <div className={hasHeaderContent ? "mt-5" : ""}>{children}</div>
      ) : null}
    </Component>
  );
}
