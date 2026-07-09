type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignmentClasses =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={["max-w-2xl space-y-3", alignmentClasses, className].join(" ")}>
      {label ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
          {label}
        </p>
      ) : null}

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="text-base leading-7 text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}
