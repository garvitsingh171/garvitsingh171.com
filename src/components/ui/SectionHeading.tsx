type SectionHeadingProps = {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  id,
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
        <p className="text-label text-accent">
          {label}
        </p>
      ) : null}

      <h2
        id={id}
        className="text-heading-2 text-primary"
      >
        {title}
      </h2>

      {description ? (
        <p className="text-body-md text-secondary">{description}</p>
      ) : null}
    </div>
  );
}
