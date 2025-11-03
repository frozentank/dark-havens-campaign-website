import React from 'react';

export default function AbilityScores({ stats, setStats }) {
  const calculateModifier = (score) => {
    return Math.floor((score - 10) / 2);
  };

  return (
    <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
      <h4 className="text-xl font-bold text-blue-400 mb-4">Ability Scores</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Object.entries(stats).map(([stat, value]) => (
          <div key={stat} className="bg-slate-800 p-4 rounded text-center">
            <label className="block text-xs text-slate-400 mb-2 uppercase font-semibold">
              {stat}
            </label>
            <input
              type="number"
              value={value}
              onChange={(e) => setStats({ ...stats, [stat]: parseInt(e.target.value) || 0 })}
              className="w-full px-3 py-2 bg-slate-900 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none text-center text-lg font-bold mb-2"
            />
            <div className="text-2xl font-bold text-blue-400">
              {calculateModifier(value) >= 0 ? '+' : ''}{calculateModifier(value)}
            </div>
            <div className="text-xs text-slate-500">modifier</div>
          </div>
        ))}
      </div>
    </div>
  );
}