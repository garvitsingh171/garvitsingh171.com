import type { WritingCategory, WritingCategoryId } from "../../types/writing";
import { Button } from "../ui";

export type WritingFilter = "all" | WritingCategoryId;

export type WritingCategoryFilterProps = {
  categories: WritingCategory[];
  selectedCategory: WritingFilter;
  onCategoryChange: (category: WritingFilter) => void;
};

export function WritingCategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: WritingCategoryFilterProps) {
  const filterOptions: Array<{
    value: WritingFilter;
    label: string;
  }> = [
    {
      value: "all",
      label: "All",
    },
    ...categories.map((category) => ({
      value: category.id,
      label: category.label,
    })),
  ];

  return (
    <div
      role="group"
      aria-label="Filter writing by category"
      className="flex flex-wrap gap-2"
    >
      {filterOptions.map((option) => {
        const isActive = selectedCategory === option.value;

        return (
          <Button
            key={option.value}
            as="button"
            type="button"
            variant={isActive ? "secondary" : "outline"}
            aria-pressed={isActive}
            className="min-h-10 max-w-full whitespace-normal"
            onClick={() => onCategoryChange(option.value)}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}
