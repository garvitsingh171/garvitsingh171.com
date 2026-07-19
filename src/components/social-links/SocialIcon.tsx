import type { ReactNode, SVGProps } from "react";
import type { SocialLinkIconName } from "../../data/socialLinks";

type IconComponent = (props: SVGProps<SVGSVGElement>) => ReactNode;

type SocialIconProps = {
  icon: SocialLinkIconName;
  className?: string;
};

function IconBase({
  children,
  ...props
}: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M15 22v-3.8a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.4-3.7 1.4a12.7 12.7 0 0 0-6.8 0C5.6.8 4.5 1.2 4.5 1.2a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3 8.4c0 5.2 3.1 6.4 6.1 6.7a3 3 0 0 0-.8 1.8c-.8.4-2.8 1-4-1.1 0 0-.7-1.3-2.1-1.4 0 0-1.3 0-.1.8 0 0 .9.4 1.5 2 0 0 .8 2.7 4.7 1.8V22" />
    </IconBase>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </IconBase>
  );
}

function EmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </IconBase>
  );
}

const socialIconMap: Record<SocialLinkIconName, IconComponent> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
};

export function SocialIcon({ icon, className = "" }: SocialIconProps) {
  const Icon = socialIconMap[icon];

  return <Icon className={className} />;
}
