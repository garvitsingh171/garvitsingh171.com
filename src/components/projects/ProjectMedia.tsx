import type { ProjectImage } from "../../types/project";

export type ProjectMediaProps = {
  image?: ProjectImage;
  projectTitle: string;
  priority?: boolean;
  aspect?: "standard" | "wide" | "featured";
  className?: string;
};

const aspectClasses = {
  standard: "aspect-[4/3]",
  wide: "aspect-[16/10]",
  featured: "aspect-[16/10] lg:h-full lg:aspect-auto",
} as const;

export function ProjectMedia({
  image,
  projectTitle,
  priority = false,
  aspect = "standard",
  className = "",
}: ProjectMediaProps) {
  return (
    <figure
      className={[
        "overflow-hidden rounded-media border border-border bg-subtle",
        aspectClasses[aspect],
        className,
      ].join(" ")}
    >
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="h-full w-full object-contain p-3 transition duration-300 motion-safe:group-hover:scale-[1.015]"
        />
      ) : (
        <div className="flex h-full items-center justify-center p-6 text-center">
          <span className="text-label text-muted">{projectTitle}</span>
        </div>
      )}
    </figure>
  );
}
