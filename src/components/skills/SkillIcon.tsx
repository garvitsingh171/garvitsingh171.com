import type { ReactNode, SVGProps } from "react";

type IconComponent = (props: SVGProps<SVGSVGElement>) => ReactNode;

type SkillIconProps = {
  icon: string;
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

function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m8 9-3 3 3 3" />
      <path d="m16 9 3 3-3 3" />
      <path d="m13 7-2 10" />
    </IconBase>
  );
}

function ServerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="4" y="5" width="16" height="6" rx="2" />
      <rect x="4" y="13" width="16" height="6" rx="2" />
      <path d="M8 8h.01" />
      <path d="M8 16h.01" />
      <path d="M12 8h4" />
      <path d="M12 16h4" />
    </IconBase>
  );
}

function RouteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M8 6h5a3 3 0 0 1 0 6h-2a3 3 0 0 0 0 6h5" />
    </IconBase>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.7-4" />
    </IconBase>
  );
}

function KeyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="8" cy="15" r="3" />
      <path d="m10.2 12.8 6.3-6.3" />
      <path d="M15 8h3v3" />
    </IconBase>
  );
}

function FileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </IconBase>
  );
}

function DatabaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </IconBase>
  );
}

function GitBranchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <path d="M6 8v8" />
      <path d="M8 6h4a4 4 0 0 1 4 4v6" />
    </IconBase>
  );
}

function KanbanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 8v8" />
      <path d="M15 8v4" />
    </IconBase>
  );
}

function ContainerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 8h16v10H4z" />
      <path d="M7 8V5h10v3" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
      <path d="M8 15h.01" />
      <path d="M12 15h.01" />
      <path d="M16 15h.01" />
    </IconBase>
  );
}

function LayersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m12 3 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 17 8 4 8-4" />
    </IconBase>
  );
}

function CloudIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M7 18h10a4 4 0 0 0 .6-8 6 6 0 0 0-11.2-1.7A4.8 4.8 0 0 0 7 18Z" />
    </IconBase>
  );
}

function TerminalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="m8 10 2 2-2 2" />
      <path d="M12 15h4" />
    </IconBase>
  );
}

function EditorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M5 4h14v16H5z" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
      <path d="M9 16h3" />
    </IconBase>
  );
}

const skillIconMap: Record<string, IconComponent> = {
  nodejs: ServerIcon,
  express: RouteIcon,
  api: RouteIcon,
  typescript: CodeIcon,
  authentication: ShieldIcon,
  zod: ShieldIcon,
  jwt: KeyIcon,
  bcrypt: KeyIcon,
  multer: FileIcon,
  swagger: FileIcon,
  postgresql: DatabaseIcon,
  mongodb: DatabaseIcon,
  prisma: DatabaseIcon,
  mongoose: DatabaseIcon,
  sql: DatabaseIcon,
  supabase: DatabaseIcon,
  neon: DatabaseIcon,
  git: GitBranchIcon,
  github: GitBranchIcon,
  "github-projects": KanbanIcon,
  docker: ContainerIcon,
  "docker-compose": LayersIcon,
  postman: RouteIcon,
  linux: TerminalIcon,
  vscode: EditorIcon,
  vercel: CloudIcon,
  render: CloudIcon,
  netlify: CloudIcon,
  "github-actions": GitBranchIcon,
};

export function SkillIcon({ icon }: SkillIconProps) {
  const Icon = skillIconMap[icon] ?? CodeIcon;

  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent-border bg-accent-soft text-accent">
      <Icon className="h-5 w-5" />
    </span>
  );
}
