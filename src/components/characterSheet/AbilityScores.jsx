import React from 'react';
import { Dices } from 'lucide-react';

export default function AbilityScores({ stats, setStats, proficiencyBonus, savingThrows, setSavingThrows }) {
  // Define the order explicitly
  const abilityOrder = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

  const calculateModifier = (score) => {
    return Math.floor((score - 10) / 2);
  };

  const getSaveBonus = (ability) => {
    const modifier = calculateModifier(stats[ability]);
    const isProficient = savingThrows?.includes(ability) || false;
    return modifier + (isProficient ? proficiencyBonus : 0);
  };

  const toggleSaveProficiency = (ability) => {
    const currentSaves = savingThrows || [];
    if (currentSaves.includes(ability)) {
      setSavingThrows(currentSaves.filter(s => s !== ability));
    } else {
      setSavingThrows([...currentSaves, ability]);
    }
  };

  const rollAbilityCheck = (ability) => {
    const d20 = Math.floor(Math.random() * 20) + 1;
    const modifier = calculateModifier(stats[ability]);
    const total = d20 + modifier;
    
    showRollNotification(`${ability.charAt(0).toUpperCase() + ability.slice(1)} Check`, d20, modifier, total);
  };

  const rollSavingThrow = (ability) => {
    const d20 = Math.floor(Math.random() * 20) + 1;
    const bonus = getSaveBonus(ability);
    const total = d20 + bonus;
    
    showRollNotification(`${ability.charAt(0).toUpperCase() + ability.slice(1)} Save`, d20, bonus, total);
  };

  const showRollNotification = (rollName, d20Roll, bonus, total) => {
    const notification = document.createElement('div');
    const isCrit = d20Roll === 20;
    const isFail = d20Roll === 1;
    
    notification.className = `fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-2xl z-50 animate-roll-appear ${
      isCrit ? 'bg-green-900 text-green-100 border-4 border-green-500' :
      isFail ? 'bg-red-900 text-red-100 border-4 border-red-500' :
      'bg-blue-900 text-blue-100 border-4 border-blue-500'
    }`;
    
    notification.innerHTML = `
      <div class="text-center">
        <div class="text-lg font-semibold mb-2">${rollName}</div>
        <div class="flex items-center justify-center gap-3 text-3xl font-bold mb-2">
          <span class="${isCrit ? 'text-green-300' : isFail ? 'text-red-300' : 'text-blue-300'}">${d20Roll}</span>
          <span class="text-slate-400">+</span>
          <span class="text-slate-300">${bonus}</span>
          <span class="text-slate-400">=</span>
          <span class="text-white text-4xl">${total}</span>
        </div>
        <div class="text-sm text-slate-400">
          ${isCrit ? '🎉 Natural 20! Critical Success!' : isFail ? '💀 Natural 1! Critical Failure!' : 'd20 + modifier'}
        </div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translate(-50%, -50%) scale(0.8)';
      notification.style.transition = 'all 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 2500);
  };

  return (
    <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
      <h4 className="text-xl font-bold text-blue-400 mb-4">Ability Scores</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {abilityOrder.map((stat) => {
          const value = stats[stat];
          const modifier = calculateModifier(value);
          const saveBonus = getSaveBonus(stat);
          const isSaveProficient = savingThrows?.includes(stat) || false;

          return (
            <div key={stat} className="bg-slate-800 p-4 rounded">
              {/* Ability Name */}
              <label className="block text-xs text-slate-400 mb-2 uppercase font-semibold text-center">
                {stat}
              </label>
              
              {/* Ability Score Input */}
              <input
                type="number"
                value={value}
                onChange={(e) => setStats({ ...stats, [stat]: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2 bg-slate-900 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none text-center text-lg font-bold mb-2"
              />
              
              {/* Modifier */}
              <div className="text-center mb-3">
                <div className="text-2xl font-bold text-blue-400">
                  {modifier >= 0 ? '+' : ''}{modifier}
                </div>
                <div className="text-xs text-slate-500">modifier</div>
              </div>

              {/* Ability Check Roll Button */}
              <button
                onClick={() => rollAbilityCheck(stat)}
                className="w-full px-2 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center justify-center gap-1 transition-colors text-xs mb-2"
                title={`Roll ${stat} check`}
              >
                <Dices size={12} />
                Check
              </button>

              {/* Saving Throw Section */}
              <div className="border-t border-slate-700 pt-2">
                <div className="flex items-center justify-between mb-1">
                  <label className="flex items-center gap-1 cursor-pointer text-xs">
                    <input
                      type="checkbox"
                      checked={isSaveProficient}
                      onChange={() => toggleSaveProficiency(stat)}
                      className="w-3 h-3 rounded border-slate-600 bg-slate-700 text-green-600 focus:ring-green-500 cursor-pointer"
                    />
                    <span className="text-slate-400">Save</span>
                  </label>
                  <span className="text-xs font-semibold text-green-400">
                    {saveBonus >= 0 ? '+' : ''}{saveBonus}
                  </span>
                </div>
                <button
                  onClick={() => rollSavingThrow(stat)}
                  className="w-full px-2 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded flex items-center justify-center gap-1 transition-colors text-xs"
                  title={`Roll ${stat} saving throw`}
                >
                  <Dices size={12} />
                  Save
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 p-3 bg-slate-800 rounded text-xs text-slate-400">
        <p className="mb-1">
          <span className="font-semibold">Check:</span> d20 + modifier | 
          <span className="font-semibold ml-2">Save:</span> d20 + modifier {proficiencyBonus > 0 && `(+${proficiencyBonus} if proficient)`}
        </p>
        <p>Check the "Save" box to add proficiency bonus to that saving throw.</p>
      </div>
    </div>
  );
}