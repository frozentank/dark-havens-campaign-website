import React, { useState } from 'react';
import { Plus, X, Package } from 'lucide-react';

export default function EquipmentList({ equipment, setEquipment }) {
  const [newEquipment, setNewEquipment] = useState('');

  const addEquipment = () => {
    if (newEquipment.trim()) {
      setEquipment([...equipment, newEquipment.trim()]);
      setNewEquipment('');
    }
  };

  const removeEquipment = (index) => {
    setEquipment(equipment.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
      <div className="flex items-center gap-2 mb-4">
        <Package className="text-blue-400" size={24} />
        <h4 className="text-xl font-bold text-blue-400">Equipment & Items</h4>
      </div>

      {/* Add Equipment Form */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newEquipment}
          onChange={(e) => setNewEquipment(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addEquipment()}
          className="flex-1 px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          placeholder="Add equipment item..."
        />
        <button
          onClick={addEquipment}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2 transition-colors"
        >
          <Plus size={18} />
          Add
        </button>
      </div>

      {/* Equipment List */}
      <div className="space-y-2">
        {equipment.length === 0 ? (
          <p className="text-slate-400 text-center py-4">No equipment added yet</p>
        ) : (
          equipment.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-slate-800 p-3 rounded border border-slate-600"
            >
              <span className="text-slate-300">{item}</span>
              <button
                onClick={() => removeEquipment(index)}
                className="text-red-400 hover:text-red-300 p-1 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}