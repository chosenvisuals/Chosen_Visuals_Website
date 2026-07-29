import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-cv-navy text-white hover:bg-cv-navy/90",
  secondary: "bg-cv-gold text-cv-navy hover:bg-cv-gold/90",
  outline: "border border-cv-navy text-cv-navy hover:bg-cv-navy/5",
};

// One Button used across Services, Academy, Visuals Talk, School Tour, and Impact —
// so the five modules feel like one brand instead of five separate sites.
export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
