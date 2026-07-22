import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "@/lib/cn";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link"
  | "destructive"
  | "project";
type ButtonSize = "sm" | "md" | "lg" | "icon";

type SharedButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  SharedButtonProps & {
    as?: "button";
  };

type RouterLinkButtonProps = LinkProps &
  SharedButtonProps & {
    as: "link";
  };

type AnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  SharedButtonProps & {
    as: "anchor";
    href: string;
  };

type ButtonProps =
  | NativeButtonProps
  | RouterLinkButtonProps
  | AnchorButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-2 border-button-primary bg-button-primary text-button-primary-foreground shadow-elevated hover:border-button-primary-hover hover:bg-button-primary-hover active:border-button-primary-active active:bg-button-primary-active",
  secondary:
    "border-2 border-button-secondary bg-button-secondary text-button-secondary-foreground shadow-elevated hover:border-button-secondary-hover hover:bg-button-secondary-hover active:border-button-secondary-active active:bg-button-secondary-active",
  outline:
    "border-2 border-button-outline bg-surface text-button-outline-foreground shadow-subtle hover:border-button-outline-hover hover:bg-button-outline-hover hover:text-button-outline-hover-foreground active:border-button-primary-active active:bg-button-primary-active",
  ghost:
    "border border-transparent bg-button-ghost text-button-ghost-foreground hover:border-border hover:bg-button-ghost-hover hover:text-button-ghost-hover-foreground",
  link:
    "border border-transparent bg-transparent px-0 text-accent hover:text-accent-hover active:text-accent-active",
  destructive:
    "border-2 border-danger bg-danger text-primary-foreground shadow-elevated hover:border-danger hover:bg-danger active:border-danger active:bg-danger",
  project:
    "border-2 border-button-secondary bg-button-secondary text-button-secondary-foreground shadow-elevated hover:border-button-secondary-hover hover:bg-button-secondary-hover active:border-button-secondary-active active:bg-button-secondary-active",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3.5 py-1.5 text-sm",
  md: "min-h-11 px-4 py-2 text-sm",
  lg: "min-h-12 px-5 py-2.5 text-base",
  icon: "h-11 w-11 p-0 text-sm",
};

function getButtonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className: string,
) {
  return cn(
    "button-motion inline-flex items-center justify-center gap-2 rounded-control border font-semibold",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:hover:translate-y-0",
    "disabled:cursor-not-allowed disabled:opacity-60",
    sizeClasses[size],
    variantClasses[variant],
    className,
  );
}

export function Button({
  as = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const buttonClasses = getButtonClasses(variant, size, className);

  if (as === "link") {
    return (
      <Link className={buttonClasses} {...(props as LinkProps)}>
        {children}
      </Link>
    );
  }

  if (as === "anchor") {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    const safeRel =
      anchorProps.target === "_blank"
        ? (anchorProps.rel ?? "noopener noreferrer")
        : anchorProps.rel;

    return (
      <a
        className={buttonClasses}
        {...anchorProps}
        rel={safeRel}
      >
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={buttonClasses}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
