import type { ProjectType } from "@/types/project";
import { Button } from "../ui";

export type ProjectFilter = "all" | ProjectType;

export type ProjectFiltersProps = {
  selectedFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
};

const projectFilterOptions = [
  { value: "all", label: "All" },
  { value: "full-stack", label: "Full Stack" },
  { value: "backend", label: "Backend" },
  { value: "frontend", label: "Frontend" },
  { value: "open-source", label: "Open Source" },
] satisfies ReadonlyArray<{
  value: ProjectFilter;
  label: string;
}>;

export function ProjectFilters({
  selectedFilter,
  onFilterChange,
}: ProjectFiltersProps) {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-2"
    >
      {projectFilterOptions.map((option) => {
        const isActive = selectedFilter === option.value;

        return (
          <Button
            key={option.value}
            as="button"
            type="button"
            variant={isActive ? "secondary" : "outline"}
            aria-pressed={isActive}
            onClick={() => onFilterChange(option.value)}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}
