import type { ProjectImage } from "@/types/project";
import type { ThemePreference } from "./theme";

export function resolveProjectImageSrc(
  image: ProjectImage,
  resolvedTheme: ThemePreference,
) {
  if (resolvedTheme === "dark" && image.dark) {
    return image.dark;
  }

  if (image.light) {
    return image.light;
  }

  return image.src ?? "";
}
