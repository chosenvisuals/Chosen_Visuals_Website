import React from "react";

// Used at the top of every module page (Services, Academy, Visuals Talk, School Tour, Impact)
// so each section opens with the same visual rhythm.
export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="border-b border-gray-200 pb-8 mb-10">
      {eyebrow && (
        <p className="text-cv-gold font-semibold text-sm uppercase tracking-wide mb-2">{eyebrow}</p>
      )}
      <h1 className="text-3xl md:text-4xl font-bold text-cv-navy mb-3">{title}</h1>
      {description && <p className="text-gray-600 max-w-2xl">{description}</p>}
    </div>
  );
}
