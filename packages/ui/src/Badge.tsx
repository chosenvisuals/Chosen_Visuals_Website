import React from "react";

type BadgeVariant = "primary" | "success" | "warning" | "gray";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-brand-blue text-white",
  success: "bg-green-600 text-white",
  warning: "bg-brand-orange text-white",
  gray: "bg-gray-100 text-gray-700",
};

export function Badge({ variant = "primary", className = "", children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
