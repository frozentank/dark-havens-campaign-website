import React from 'react';

export default function SectionCard({ children, className = "" }) {
  return (
    <section className={`bg-slate-800 rounded-lg p-8 shadow-xl border border-slate-700 ${className}`}>
      {children}
    </section>
  );
}