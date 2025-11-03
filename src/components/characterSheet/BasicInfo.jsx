import React from 'react';

const cultures = [
  "Skaivania", "Nostrio", "Gufrailand", "Flaigua", "Gyso", "New Kiblic",
  "Marmanio", "Ebra", "The Dwarven Brotherhood", "The Shan-maris Conclave",
  "Rugliorhiel", "Yeotall", "Jaster", "Teflin", "Leoman", "The Holy Order of Quora",
  "Pontifex Xefras", "The Empire of Nemon the Magnificent", "Oshos", "Ascar",
  "Alistia Jungle", "Tyme Lakes", "Masha-Masha Mountains", "Rasi Desert",
  "Palast and Baras", "Freeport"
];

export default function BasicInfo({ character, setCharacter }) {
  return (
    <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
      <h4 className="text-xl font-bold text-blue-400 mb-4">Basic Information</h4>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-blue-300 mb-2">
            Character Name
          </label>
          <input
            type="text"
            value={character.name}
            onChange={(e) => setCharacter({ ...character, name: e.target.value })}
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
            placeholder="Enter name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-blue-300 mb-2">
            Race
          </label>
          <input
            type="text"
            value={character.race}
            onChange={(e) => setCharacter({ ...character, race: e.target.value })}
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
            placeholder="e.g., Human, Dwarf"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-blue-300 mb-2">
            Class
          </label>
          <input
            type="text"
            value={character.class}
            onChange={(e) => setCharacter({ ...character, class: e.target.value })}
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
            placeholder="e.g., Fighter, Wizard"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-blue-300 mb-2">
            Level
          </label>
          <input
            type="number"
            min="1"
            max="20"
            value={character.level}
            onChange={(e) => setCharacter({ ...character, level: parseInt(e.target.value) || 1 })}
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-blue-300 mb-2">
            Background (Culture)
          </label>
          <select
            value={character.background}
            onChange={(e) => setCharacter({ ...character, background: e.target.value })}
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Select a culture...</option>
            {cultures.map(culture => (
              <option key={culture} value={culture}>{culture}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}