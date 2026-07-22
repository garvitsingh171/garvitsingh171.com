import type { ResumeButtonVariant } from "@/types/resume.js";
import { resumeConfig } from "@/data/resume";
import { Button } from "../ui";

export type ResumeDownloadButtonProps = {
  label?: string;
  variant?: ResumeButtonVariant;
  className?: string;
};

export function ResumeDownloadButton({
  label = "Download Resume",
  variant = "secondary",
  className = "",
}: ResumeDownloadButtonProps) {
  return (
    <Button
      as="anchor"
      href={resumeConfig.filePath}
      download
      variant={variant}
      className={className}
      aria-label="Download Garvit Singh's resume as a PDF"
    >
      {label}
    </Button>
  );
}
