import React from 'react';
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

export default function NPCCard({ 
  name, 
  description, 
  imagePath
}) {
  // Convert name to image filename (lowercase, replace spaces with hyphens)
  const imageFileName = name.toLowerCase().replace(/['\s]/g, '-').replace(/--+/g, '-');
  const fullImagePath = imagePath || `./images/people/${imageFileName}.jpeg`;

  return (
    <div className="bg-slate-900 p-4 rounded-lg border border-slate-600 hover:border-blue-500 transition-colors">
      <div className="flex gap-4">
        {/* Image */}
        <div className="flex-shrink-0">
          <div className="w-16 h-24 bg-slate-800 rounded-lg border-2 border-blue-600 overflow-hidden flex items-center justify-center">
            <Zoom>
                <img 
                src={fullImagePath} 
                alt={name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-slate-500 text-4xl">👤</span>';
                }}
                />
            </Zoom>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-blue-300 text-lg mb-2">{name}</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}