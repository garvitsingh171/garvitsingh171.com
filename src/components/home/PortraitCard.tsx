import { useResolvedTheme } from "@/hooks/useResolvedTheme";

const portrait = {
  alt: "Portrait of Garvit Singh",
  width: 1122,
  height: 1402,
} as const;

export function PortraitCard() {
  const resolvedTheme = useResolvedTheme();
  const portraitSrc =
    resolvedTheme === "dark"
      ? "/images/profile/garvit-singh-profile-dark.png"
      : "/images/profile/garvit-singh-profile-light.png";

  return (
    <figure className="group relative isolate mx-auto w-full max-w-[23rem] sm:max-w-[25rem] lg:mx-0 lg:max-w-[24rem] xl:max-w-[26rem]">
      <span
        aria-hidden="true"
        className="absolute inset-0 hidden translate-x-3 translate-y-3 rounded-media border border-accent opacity-70 transition duration-500 motion-safe:group-hover:translate-x-4 motion-safe:group-hover:translate-y-2 sm:block"
      />

      <div className="relative z-10 overflow-hidden rounded-media border border-border bg-surface shadow-subtle transition duration-500 motion-safe:group-hover:-translate-y-1">
        <div className="aspect-[4/5] overflow-hidden bg-subtle">
          <img
            src={portraitSrc}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-top transition duration-700 motion-safe:group-hover:scale-[1.015]"
          />
        </div>

        <figcaption className="border-t border-border bg-surface px-5 py-4">
          <p className="text-label text-accent">Profile / 2026</p>
          <p className="mt-2 text-base font-semibold text-primary">
            Garvit Singh
          </p>
          <p className="mt-1 text-sm text-secondary">
            Software Product Engineering Student
          </p>
        </figcaption>
      </div>
    </figure>
  );
}
