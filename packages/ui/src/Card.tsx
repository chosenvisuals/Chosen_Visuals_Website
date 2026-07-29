import React from "react";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-brand-border bg-white p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-lg font-semibold text-brand-navy mb-2 ${className}`}>{children}</h3>;
}

export function CardBody({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`text-sm text-gray-600 ${className}`}>{children}</div>;
}
