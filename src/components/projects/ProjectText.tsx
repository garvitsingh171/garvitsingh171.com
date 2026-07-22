import type { ProjectTextContent } from "@/types/project";
import { getTextItems } from "./projectTextUtils";

export type ProjectTextProps = {
  content: ProjectTextContent;
};

export function ProjectText({ content }: ProjectTextProps) {
  const items = getTextItems(content);

  if (items.length === 1) {
    return (
      <p className="max-w-3xl text-body-md text-secondary">
        {items[0]}
      </p>
    );
  }

  return (
    <ul className="max-w-3xl list-disc space-y-3 pl-5 text-body-md text-secondary">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
