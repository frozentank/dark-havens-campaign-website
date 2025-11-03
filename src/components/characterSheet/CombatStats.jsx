import React from 'react';

export default function CombatStats({ character, setCharacter }) {
  return (
    <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
      <h4 className="text-xl font-bold text-blue-400 mb-4">Combat Stats</h4>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div>
          <label className="block text-sm font-semibold text-blue-300 mb-2">
            Armor Class
          </label>
          <input
            type="number"
            value={character.armorClass}
            onChange={(e) => setCharacter({ ...character, armorClass: parseInt(e.target.value) || 0 })}
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-blue-300 mb-2">
            Speed
          </label>
          <input
            type="number"
            value={character.speed}
            onChange={(e) => setCharacter({ ...character, speed: parseInt(e.target.value) || 0 })}
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-blue-300 mb-2">
            Proficiency Bonus
          </label>
          <input
            type="number"
            value={character.proficiencyBonus}
            onChange={(e) => setCharacter({ ...character, proficiencyBonus: parseInt(e.target.value) || 0 })}
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div>
          <label className="block text-sm font-semibold text-blue-300 mb-2">
            Current HP
          </label>
          <input
            type="number"
            value={character.hitPoints.current}
            onChange={(e) => setCharacter({
              ...character,
              hitPoints: { ...character.hitPoints, current: parseInt(e.target.value) || 0 }
            })}
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-blue-300 mb-2">
            Max HP
          </label>
          <input
            type="number"
            value={character.hitPoints.max}
            onChange={(e) => setCharacter({
              ...character,
              hitPoints: { ...character.hitPoints, max: parseInt(e.target.value) || 0 }
            })}
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-blue-300 mb-2">
            Temp HP
          </label>
          <input
            type="number"
            value={character.hitPoints.temp}
            onChange={(e) => setCharacter({
              ...character,
              hitPoints: { ...character.hitPoints, temp: parseInt(e.target.value) || 0 }
            })}
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}