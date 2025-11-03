import React, { useState } from 'react';
import { Plus, X, Swords } from 'lucide-react';

export default function WeaponAttack({ weapons, setWeapons }) {
  const [newWeapon, setNewWeapon] = useState({
    name: '',
    attackBonus: 0,
    damageType: '',
    damageDice: '',
    notes: ''
  });

  const addWeapon = () => {
    if (newWeapon.name.trim()) {
      setWeapons([...weapons, { ...newWeapon, id: Date.now() }]);
      setNewWeapon({
        name: '',
        attackBonus: 0,
        damageType: '',
        damageDice: '',
        notes: ''
      });
    }
  };

  const removeWeapon = (id) => {
    setWeapons(weapons.filter(w => w.id !== id));
  };

  return (
    <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
      <div className="flex items-center gap-2 mb-4">
        <Swords className="text-blue-400" size={24} />
        <h4 className="text-xl font-bold text-blue-400">Weapon Attacks</h4>
      </div>

      {/* Add Weapon Form */}
      <div className="grid md:grid-cols-2 gap-3 mb-4 p-4 bg-slate-800 rounded">
        <input
          type="text"
          value={newWeapon.name}
          onChange={(e) => setNewWeapon({ ...newWeapon, name: e.target.value })}
          className="px-4 py-2 bg-slate-900 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          placeholder="Weapon name"
        />
        <input
          type="text"
          value={newWeapon.damageDice}
          onChange={(e) => setNewWeapon({ ...newWeapon, damageDice: e.target.value })}
          className="px-4 py-2 bg-slate-900 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          placeholder="Damage (e.g., 1d8+3)"
        />
        <input
          type="number"
          value={newWeapon.attackBonus}
          onChange={(e) => setNewWeapon({ ...newWeapon, attackBonus: parseInt(e.target.value) || 0 })}
          className="px-4 py-2 bg-slate-900 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          placeholder="Attack bonus"
        />
        <input
          type="text"
          value={newWeapon.damageType}
          onChange={(e) => setNewWeapon({ ...newWeapon, damageType: e.target.value })}
          className="px-4 py-2 bg-slate-900 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          placeholder="Damage type"
        />
        <input
          type="text"
          value={newWeapon.notes}
          onChange={(e) => setNewWeapon({ ...newWeapon, notes: e.target.value })}
          className="md:col-span-2 px-4 py-2 bg-slate-900 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          placeholder="Notes (e.g., Finesse, Versatile)"
        />
        <button
          onClick={addWeapon}
          className="md:col-span-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center justify-center gap-2 transition-colors"
        >
          <Plus size={18} />
          Add Weapon
        </button>
      </div>

      {/* Weapons List */}
      <div className="space-y-3">
        {weapons.length === 0 ? (
          <p className="text-slate-400 text-center py-4">No weapons added yet</p>
        ) : (
          weapons.map((weapon) => (
            <div
              key={weapon.id}
              className="bg-slate-800 p-4 rounded border border-slate-600"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h5 className="text-lg font-bold text-blue-300">{weapon.name}</h5>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span className="text-slate-300">
                      <span className="text-slate-400">Attack:</span> +{weapon.attackBonus}
                    </span>
                    <span className="text-slate-300">
                      <span className="text-slate-400">Damage:</span> {weapon.damageDice}
                    </span>
                    {weapon.damageType && (
                      <span className="text-slate-300">
                        <span className="text-slate-400">Type:</span> {weapon.damageType}
                      </span>
                    )}
                  </div>
                  {weapon.notes && (
                    <p className="text-slate-400 text-sm mt-1">{weapon.notes}</p>
                  )}
                </div>
                <button
                  onClick={() => removeWeapon(weapon.id)}
                  className="text-red-400 hover:text-red-300 p-1 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}