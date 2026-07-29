import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-blue text-white hover:bg-brand-blue/90 shadow-sm",
  secondary: "bg-brand-orange text-white hover:bg-brand-orange/90 shadow-sm",
  outline: "border-2 border-brand-border text-brand-navy hover:border-brand-navy/20",
  ghost: "text-brand-blue hover:bg-brand-blue/10",
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg px-6 py-2.5 text-sm font-medium transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
