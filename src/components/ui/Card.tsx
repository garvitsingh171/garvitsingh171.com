import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cardInteractionVariants } from "../../config/animations";

type CardProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({
  title,
  description,
  children,
  className = "",
  interactive = false,
}: CardProps) {
  const hasHeaderContent = Boolean(title || description);
  const shouldReduceMotion = useReducedMotion();
  const [hasFocusWithin, setHasFocusWithin] = useState(false);
  const shouldAnimateInteraction = interactive && !shouldReduceMotion;
  const interactionState = hasFocusWithin ? "focus" : "rest";

  return (
    <motion.article
      initial={false}
      animate={shouldAnimateInteraction ? interactionState : undefined}
      whileHover={shouldAnimateInteraction ? "hover" : undefined}
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
        "rounded-card border border-border bg-surface p-6 shadow-subtle transition duration-200",
        interactive ? "hover:border-border-strong" : "",
        className,
      ].join(" ")}
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
    </motion.article>
  );
}
