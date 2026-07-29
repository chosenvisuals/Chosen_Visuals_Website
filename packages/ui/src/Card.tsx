import React from "react";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold text-cv-navy mb-2">{children}</h3>;
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="text-sm text-gray-600">{children}</div>;
}
