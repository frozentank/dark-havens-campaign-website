import React from 'react';
import { Skull, ZoomIn } from 'lucide-react';
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

export default function VillainCard({ 
  name, 
  title,
  description, 
  status,
  imagePath,
  isPrimary = false
}) {
  const borderColor = isPrimary ? 'border-red-900' : 'border-red-800';
  const iconBg = isPrimary ? 'bg-red-600' : 'bg-red-700';
  const titleColor = isPrimary ? 'text-red-400' : 'text-red-500';

  return (
    <div className={`bg-slate-900 p-6 rounded-lg border ${borderColor} hover:border-red-600 transition-colors`}>
      <div className="flex gap-4">
        {/* Villain Image */}
        <div className="flex-shrink-0">
          <div className="w-22 h-32 bg-slate-800 rounded-lg border-2 border-red-600 overflow-hidden flex items-center justify-center">
            <Zoom>
                <img 
                src={imagePath} 
                alt={name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-red-500 text-6xl">💀</span>';
                }}
                />
            </Zoom>
          </div>
        </div>

        {/* Villain Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center`}>
              <Skull size={24} />
            </div>
            <div>
              <h3 className={`text-xl font-bold ${titleColor}`}>{name}</h3>
              {title && <p className="text-slate-400 text-sm">{title}</p>}
            </div>
          </div>
          
          <p className="text-slate-300 mb-3 leading-relaxed">
            {description}
          </p>
          
          {status && (
            <div className="text-sm">
              <span className="font-semibold text-red-400">Status:</span>{' '}
              <span className="text-slate-400">{status}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}