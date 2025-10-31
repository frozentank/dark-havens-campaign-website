import React, { useState } from 'react';
import { Dices, Plus, Trash2, RotateCcw } from 'lucide-react';

export default function DiceRoller() {
  const [rolls, setRolls] = useState([]);
  const [selectedDice, setSelectedDice] = useState('d20');
  const [modifier, setModifier] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const diceTypes = [
    { value: 'd4', label: 'd4', sides: 4 },
    { value: 'd6', label: 'd6', sides: 6 },
    { value: 'd8', label: 'd8', sides: 8 },
    { value: 'd10', label: 'd10', sides: 10 },
    { value: 'd12', label: 'd12', sides: 12 },
    { value: 'd20', label: 'd20', sides: 20 },
    { value: 'd100', label: 'd100', sides: 100 }
  ];

  const rollDice = (sides, count) => {
    const results = [];
    for (let i = 0; i < count; i++) {
      results.push(Math.floor(Math.random() * sides) + 1);
    }
    return results;
  };

  const handleRoll = () => {
    const dice = diceTypes.find(d => d.value === selectedDice);
    const results = rollDice(dice.sides, quantity);
    const total = results.reduce((sum, val) => sum + val, 0) + modifier;

    const newRoll = {
      id: Date.now(),
      dice: selectedDice,
      quantity,
      modifier,
      results,
      total,
      timestamp: new Date().toLocaleTimeString()
    };

    setRolls([newRoll, ...rolls]);
  };

  const clearHistory = () => {
    setRolls([]);
  };

  const deleteRoll = (id) => {
    setRolls(rolls.filter(roll => roll.id !== id));
  };

  const getRollColor = (dice, result) => {
    const sides = diceTypes.find(d => d.value === dice)?.sides;
    if (result === sides) return 'text-green-400 font-bold'; // Max roll
    if (result === 1) return 'text-red-400 font-bold'; // Min roll
    return 'text-slate-300';
  };

  return (
    <div className="space-y-6">
      {/* Dice Roller Interface */}
      <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
        <div className="flex items-center gap-3 mb-6">
          <Dices className="text-blue-400" size={32} />
          <h3 className="text-2xl font-bold text-blue-400">Roll Dice</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          {/* Quantity */}
          <div>
            <label className="block text-sm font-semibold text-blue-300 mb-2">
              Quantity
            </label>
            <input
              type="number"
              min="1"
              max="20"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Dice Type */}
          <div>
            <label className="block text-sm font-semibold text-blue-300 mb-2">
              Dice Type
            </label>
            <select
              value={selectedDice}
              onChange={(e) => setSelectedDice(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
            >
              {diceTypes.map(dice => (
                <option key={dice.value} value={dice.value}>{dice.label}</option>
              ))}
            </select>
          </div>

          {/* Modifier */}
          <div>
            <label className="block text-sm font-semibold text-blue-300 mb-2">
              Modifier
            </label>
            <input
              type="number"
              value={modifier}
              onChange={(e) => setModifier(parseInt(e.target.value) || 0)}
              className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Roll Button */}
          <div className="flex items-end">
            <button
              onClick={handleRoll}
              className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded flex items-center justify-center gap-2 transition-colors"
            >
              <Dices size={20} />
              Roll
            </button>
          </div>
        </div>

        {/* Quick Roll Buttons */}
        <div className="flex flex-wrap gap-2">
          <span className="text-slate-400 text-sm self-center mr-2">Quick Roll:</span>
          {diceTypes.map(dice => (
            <button
              key={dice.value}
              onClick={() => {
                setSelectedDice(dice.value);
                setQuantity(1);
                setModifier(0);
                setTimeout(handleRoll, 50);
              }}
              className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-sm transition-colors border border-slate-600"
            >
              {dice.label}
            </button>
          ))}
        </div>
      </div>

      {/* Roll History */}
      <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-blue-400">Roll History</h3>
          {rolls.length > 0 && (
            <button
              onClick={clearHistory}
              className="px-3 py-1 bg-red-900 hover:bg-red-800 text-white rounded text-sm flex items-center gap-2 transition-colors"
            >
              <RotateCcw size={16} />
              Clear History
            </button>
          )}
        </div>

        {rolls.length === 0 ? (
          <p className="text-slate-400 text-center py-8">No rolls yet. Roll some dice above!</p>
        ) : (
          <div className="space-y-3 max-h-[600px] overflow-y-auto">
            {rolls.map(roll => (
              <div
                key={roll.id}
                className="bg-slate-800 p-4 rounded border border-slate-600 flex items-center justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-blue-300 font-semibold">
                      {roll.quantity}{roll.dice}
                      {roll.modifier !== 0 && (
                        <span className="text-slate-400">
                          {roll.modifier > 0 ? '+' : ''}{roll.modifier}
                        </span>
                      )}
                    </span>
                    <span className="text-slate-500 text-sm">{roll.timestamp}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-sm">Rolls:</span>
                    <div className="flex gap-2 flex-wrap">
                      {roll.results.map((result, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 bg-slate-900 rounded text-sm ${getRollColor(roll.dice, result)}`}
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-xs text-slate-400 mb-1">Total</div>
                    <div className="text-2xl font-bold text-blue-400">{roll.total}</div>
                  </div>
                  <button
                    onClick={() => deleteRoll(roll.id)}
                    className="text-red-400 hover:text-red-300 p-2 transition-colors"
                    title="Delete roll"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}