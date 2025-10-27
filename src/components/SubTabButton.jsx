import React from 'react';

export default function SubTabButton({ id, icon: Icon, label, activeSubTab, onClick }) {
  const baseClasses = "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all rounded";
  const activeClasses = activeSubTab === id 
    ? "bg-blue-500 text-white" 
    : "bg-slate-700 text-slate-300 hover:bg-slate-600";
  
  return (
    <button
      onClick={() => onClick(id)}
      className={`${baseClasses} ${activeClasses}`}
    >
      <Icon size={16} />
      {label}
    </button>
  );
}