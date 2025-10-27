import React from 'react';

export default function SectionTitle({ children, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {Icon && <Icon className="text-blue-400" size={32} />}
      <h2 className="text-3xl font-bold text-blue-400">{children}</h2>
    </div>
  );
}