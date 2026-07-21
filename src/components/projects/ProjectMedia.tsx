import { motion, useReducedMotion } from "motion/react";
import { cardMediaVariants } from "../../config/animations";
import type { ProjectImage } from "../../types/project";
import { useResolvedTheme } from "../../hooks/useResolvedTheme";
import { resolveProjectImageSrc } from "../../utils/projectImage";

export type ProjectMediaProps = {
  image?: ProjectImage;
  projectTitle: string;
  priority?: boolean;
  aspect?: "standard" | "wide" | "featured";
  className?: string;
};

const aspectClasses = {
  standard: "",
  wide: "",
  featured: "lg:h-full",
} as const;

export function ProjectMedia({
  image,
  projectTitle,
  priority = false,
  aspect = "standard",
  className = "",
}: ProjectMediaProps) {
  const resolvedTheme = useResolvedTheme();
  const shouldReduceMotion = useReducedMotion();
  const imageSrc = image ? resolveProjectImageSrc(image, resolvedTheme) : "";

  return (
    <figure
      className={[
        "flex items-center justify-center overflow-hidden rounded-media border border-border bg-subtle p-2.5 transition duration-200 group-hover:bg-surface-hover sm:p-3 lg:p-4",
        "dark:bg-surface-elevated dark:group-hover:bg-surface-hover",
        aspect === "featured" ? "lg:p-5" : "",
        aspectClasses[aspect],
        className,
      ].join(" ")}
    >
      {image && imageSrc ? (
        <div className="aspect-[4/3] w-full overflow-hidden rounded-card border border-border bg-surface">
          <motion.img
            src={imageSrc}
            alt={image.alt}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            variants={shouldReduceMotion ? undefined : cardMediaVariants}
            className="h-full w-full object-contain object-center"
          />
        </div>
      ) : (
        <div className="flex aspect-[4/3] w-full items-center justify-center rounded-card border border-border bg-surface p-6 text-center">
          <span className="text-label text-muted">{projectTitle}</span>
        </div>
      )}
    </figure>
  );
}
