import React, { useState } from 'react';
import { Plus, X, Package, ChevronDown, ChevronUp } from 'lucide-react';

export default function SpellsList({ spells = [], setSpells }) {
  const [newSpell, setNewSpell] = useState({ 
    name: '', 
    description: '', 
    level: 0, 
    prepared: false 
  });
  const [expandedSpell, setExpandedSpell] = useState(null);

  const addSpell = () => {
    if (newSpell.name.trim()) {
      setSpells([...spells, {
        name: newSpell.name.trim(),
        description: newSpell.description.trim(),
        level: newSpell.level,
        prepared: newSpell.prepared
      }]);
      setNewSpell({ name: '', description: '', level: 0, prepared: false });
    }
  };

  const removeSpell = (index) => {
    setSpells(spells.filter((_, i) => i !== index));
  };

  const togglePrepared = (index) => {
    const updatedSpells = [...spells];
    updatedSpells[index] = {
      ...updatedSpells[index],
      prepared: !updatedSpells[index].prepared
    };
    setSpells(updatedSpells);
  };

  return (
    <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
      <div className="flex items-center gap-2 mb-4">
        <Package className="text-blue-400" size={24} />
        <h4 className="text-xl font-bold text-blue-400">Spells</h4>
      </div>

      {/* Add Spell Form */}
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newSpell.name}
            onChange={(e) => setNewSpell({ ...newSpell, name: e.target.value })}
            className="flex-1 px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
            placeholder="Spell name..."
          />
          <input
            type="number"
            min="0"
            max="9"
            value={newSpell.level}
            onChange={(e) => setNewSpell({ ...newSpell, level: parseInt(e.target.value) || 0 })}
            className="w-20 px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
            placeholder="Level"
          />
        </div>
        <textarea
          value={newSpell.description}
          onChange={(e) => setNewSpell({ ...newSpell, description: e.target.value })}
          className="px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          placeholder="Spell description..."
          rows={3}
        />
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2 text-slate-300">
            <input
              type="checkbox"
              checked={newSpell.prepared}
              onChange={(e) => setNewSpell({ ...newSpell, prepared: e.target.checked })}
              className="w-4 h-4 rounded border-slate-600"
            />
            Prepared
          </label>
          <button
            onClick={addSpell}
            className="ml-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2 transition-colors"
          >
            <Plus size={18} />
            Add Spell
          </button>
        </div>
      </div>

      {/* Spells List */}
      <div className="space-y-2">
        {spells.length === 0 ? (
          <p className="text-slate-400 text-center py-4">No spells added yet</p>
        ) : (
          spells.map((spell, index) => (
            <div
              key={index}
              className="bg-slate-800 p-3 rounded border border-slate-600"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={spell.prepared}
                      onChange={() => togglePrepared(index)}
                      className="w-4 h-4 rounded border-slate-600"
                    />
                  </label>
                  <span className="text-slate-300">
                    {spell.name}
                    <span className="ml-2 text-sm text-slate-400">
                      (Level {spell.level})
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setExpandedSpell(expandedSpell === index ? null : index)}
                    className="text-slate-400 hover:text-slate-300 p-1 transition-colors"
                  >
                    {expandedSpell === index ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  <button
                    onClick={() => removeSpell(index)}
                    className="text-red-400 hover:text-red-300 p-1 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              {expandedSpell === index && spell.description && (
                <p className="mt-2 text-slate-400 text-sm border-t border-slate-700 pt-2">
                  {spell.description}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}