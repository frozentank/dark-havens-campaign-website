import React from 'react';
import { User } from 'lucide-react';

export default function CharacterCard({ name, details, description, additionalInfo = "" }) {
  return (
    <div className="bg-slate-900 p-6 rounded-lg border border-slate-600">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
          <User size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-300">{name}</h3>
          <p className="text-slate-400">{details}</p>
        </div>
      </div>
      <p className="text-slate-300 mb-3">{description}</p>
      {additionalInfo && (
        <div className="text-sm text-slate-400">
          {additionalInfo}
        </div>
      )}
    </div>
  );
}