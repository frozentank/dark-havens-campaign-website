import React from 'react';

export default function ShieldTable() {
  const shields = [
    {
      type: "Buckler",
      cost: "5 gp",
      ac: "+1",
      notes: "Can wield a light weapon in the same hand, can't counterattack.",
      weight: "3 lb."
    },
    {
      type: "Kite",
      cost: "10 gp",
      ac: "+2",
      notes: "",
      weight: "6 lb."
    },
    {
      type: "Tower",
      cost: "25 gp",
      ac: "+4",
      notes: "Disadvantage on Stealth, requires 15 Str, requires Shield Master feat",
      weight: "15 lb."
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-blue-300">
        <thead className="bg-blue-900">
          <tr>
            <th className="border border-blue-300 px-4 py-2 text-left font-semibold text-blue-100">Type</th>
            <th className="border border-blue-300 px-4 py-2 text-left font-semibold text-blue-100">Cost</th>
            <th className="border border-blue-300 px-4 py-2 text-left font-semibold text-blue-100">AC</th>
            <th className="border border-blue-300 px-4 py-2 text-left font-semibold text-blue-100">Notes</th>
            <th className="border border-blue-300 px-4 py-2 text-left font-semibold text-blue-100">Weight</th>
          </tr>
        </thead>
        <tbody>
          {shields.map((shield, index) => (
            <tr key={index} className="hover:bg-slate-700">
              <td className="border border-blue-300 px-4 py-2 text-slate-300">{shield.type}</td>
              <td className="border border-blue-300 px-4 py-2 text-slate-300">{shield.cost}</td>
              <td className="border border-blue-300 px-4 py-2 text-slate-300">{shield.ac}</td>
              <td className="border border-blue-300 px-4 py-2 text-slate-300">{shield.notes}</td>
              <td className="border border-blue-300 px-4 py-2 text-slate-300">{shield.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}