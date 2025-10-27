import React from 'react';

export default function TabButton({ id, icon: Icon, label, activeTab, onClick }) {
  const baseClasses = "flex items-center gap-2 px-6 py-3 font-semibold transition-all";
  const activeClasses = activeTab === id 
    ? "bg-blue-600 text-white shadow-lg" 
    : "bg-slate-700 text-slate-300 hover:bg-slate-600";
  
  return (
    <button
      onClick={() => onClick(id)}
      className={`${baseClasses} ${activeClasses}`}
    >
      <Icon size={20} />
      {label}
    </button>
  );
}