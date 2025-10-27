import React from 'react';

export default function InfoBox({ title, children, className = "" }) {
  return (
    <div className={`bg-slate-900 p-4 rounded border border-slate-600 ${className}`}>
      {title && <h4 className="font-bold text-blue-300 mb-2">{title}</h4>}
      <div className="text-slate-400">{children}</div>
    </div>
  );
}