import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link, type LinkProps } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type SharedButtonProps = {
  variant?: ButtonVariant;
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
  primary: "border-transparent bg-slate-100 text-slate-950 hover:bg-white",
  secondary: "border-transparent bg-slate-800 text-slate-100 hover:bg-slate-700",
  outline:
    "border-slate-700 bg-transparent text-slate-100 hover:border-slate-500 hover:bg-slate-900",
  ghost:
    "border-transparent bg-transparent text-slate-300 hover:bg-slate-900 hover:text-white",
};

function getButtonClasses(variant: ButtonVariant, className: string) {
  return [
    "inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400",
    "disabled:cursor-not-allowed disabled:opacity-50",
    variantClasses[variant],
    className,
  ].join(" ");
}

export function Button({
  as = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const buttonClasses = getButtonClasses(variant, className);

  if (as === "link") {
    return (
      <Link className={buttonClasses} {...(props as LinkProps)}>
        {children}
      </Link>
    );
  }

  if (as === "anchor") {
    return (
      <a
        className={buttonClasses}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
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
