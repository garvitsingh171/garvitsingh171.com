import type { ProjectTextContent } from "../../types/project";

export function getTextItems(content?: ProjectTextContent) {
  if (Array.isArray(content)) {
    return content.map((item) => item.trim()).filter(Boolean);
  }

  return content?.trim() ? [content.trim()] : [];
}

export function hasTextContent(
  content?: ProjectTextContent,
): content is ProjectTextContent {
  return getTextItems(content).length > 0;
}
