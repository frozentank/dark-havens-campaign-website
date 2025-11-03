import React from 'react';
import { Coins } from 'lucide-react';

export default function Currency({ currency, setCurrency }) {
  const updateCurrency = (type, value) => {
    setCurrency({
      ...currency,
      [type]: parseInt(value) || 0
    });
  };

  const totalInGold = () => {
    const cp = currency.copper / 100;
    const sp = currency.silver / 10;
    const gp = currency.gold;
    const pp = currency.platinum * 10;
    return (cp + sp + gp + pp).toFixed(2);
  };

  return (
    <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
      <div className="flex items-center gap-2 mb-4">
        <Coins className="text-blue-400" size={24} />
        <h4 className="text-xl font-bold text-blue-400">Currency</h4>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs text-slate-400 mb-2 uppercase font-semibold">
            Copper (CP)
          </label>
          <input
            type="number"
            value={currency.copper}
            onChange={(e) => updateCurrency('copper', e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none text-center"
            min="0"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-2 uppercase font-semibold">
            Silver (SP)
          </label>
          <input
            type="number"
            value={currency.silver}
            onChange={(e) => updateCurrency('silver', e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none text-center"
            min="0"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-2 uppercase font-semibold">
            Gold (GP)
          </label>
          <input
            type="number"
            value={currency.gold}
            onChange={(e) => updateCurrency('gold', e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none text-center"
            min="0"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-2 uppercase font-semibold">
            Platinum (PP)
          </label>
          <input
            type="number"
            value={currency.platinum}
            onChange={(e) => updateCurrency('platinum', e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none text-center"
            min="0"
          />
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-800 rounded text-center">
        <span className="text-slate-400 text-sm">Total Value: </span>
        <span className="text-blue-400 font-bold text-lg">{totalInGold()} GP</span>
      </div>
    </div>
  );
}