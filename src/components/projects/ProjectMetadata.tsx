export type ProjectMetadataItem = {
  label: string;
  value?: string;
};

export type ProjectMetadataProps = {
  items: ProjectMetadataItem[];
};

function hasValue(item: ProjectMetadataItem): item is Required<ProjectMetadataItem> {
  return Boolean(item.value?.trim());
}

export function ProjectMetadata({ items }: ProjectMetadataProps) {
  const visibleItems = items.filter(hasValue);

  if (visibleItems.length === 0) {
    return null;
  }

  return (
    <dl className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {visibleItems.map((item) => (
        <div
          key={item.label}
          className="rounded-card border border-border bg-subtle p-4"
        >
          <dt className="text-label text-muted">
            {item.label}
          </dt>
          <dd className="mt-2 text-sm font-semibold text-primary">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
