import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-slate-100 text-slate-950 hover:bg-white",
  secondary: "border-transparent bg-slate-800 text-slate-100 hover:bg-slate-700",
  outline:
    "border-slate-700 bg-transparent text-slate-100 hover:border-slate-500 hover:bg-slate-900",
  ghost:
    "border-transparent bg-transparent text-slate-300 hover:bg-slate-900 hover:text-white",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        "inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variantClasses[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
