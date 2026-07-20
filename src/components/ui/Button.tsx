import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link, type LinkProps } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

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
    "border-accent bg-accent text-inverse-text hover:border-accent-hover hover:bg-accent-hover active:border-accent-active active:bg-accent-active",
  secondary:
    "border-inverse bg-inverse text-inverse-text hover:border-primary hover:bg-primary hover:text-page",
  outline:
    "border-border-strong bg-transparent text-primary hover:border-primary hover:bg-surface-hover",
  ghost:
    "border-transparent bg-transparent text-secondary hover:bg-surface-hover hover:text-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3.5 py-1.5 text-sm",
  md: "min-h-11 px-4 py-2 text-sm",
  lg: "min-h-12 px-5 py-2.5 text-base",
};

function getButtonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className: string,
) {
  return [
    "inline-flex items-center justify-center gap-2 rounded-control border font-semibold transition duration-200",
    "motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0",
    "focus-visible:outline-focus disabled:hover:translate-y-0",
    "disabled:cursor-not-allowed disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(" ");
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
