import React, { useState, useEffect } from 'react';
import { Save, Download, Upload, Trash2 } from 'lucide-react';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';

export default function CharacterSheet() {
  const { currentUser } = useAuth();
  const [character, setCharacter] = useState({
    name: '',
    race: '',
    class: '',
    level: 1,
    background: '',
    alignment: '',
    stats: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10
    },
    hitPoints: {
      current: 0,
      max: 0,
      temp: 0
    },
    armorClass: 10,
    speed: 30,
    proficiencyBonus: 2,
    skills: [],
    equipment: '',
    features: '',
    spells: '',
    notes: ''
  });
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (currentUser) {
      loadCharacter();
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  const loadCharacter = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, 'characters', currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCharacter(docSnap.data());
      }
    } catch (error) {
      console.error('Failed to load character:', error);
      setMessage('Failed to load character');
    } finally {
      setLoading(false);
    }
  };

  const saveCharacter = async () => {
    if (!currentUser) return;

    setSaving(true);
    setMessage('');
    
    try {
      const docRef = doc(db, 'characters', currentUser.uid);
      await setDoc(docRef, {
        ...character,
        userId: currentUser.uid,
        userEmail: currentUser.email,
        lastUpdated: new Date().toISOString()
      });
      setMessage('Character saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Save failed:', error);
      setMessage('Error saving character');
    } finally {
      setSaving(false);
    }
  };

  const deleteCharacter = async () => {
    if (!currentUser) return;
    if (!confirm('Are you sure you want to delete this character?')) return;

    try {
      const docRef = doc(db, 'characters', currentUser.uid);
      await deleteDoc(docRef);
      setCharacter({
        name: '',
        race: '',
        class: '',
        level: 1,
        background: '',
        alignment: '',
        stats: {
          strength: 10,
          dexterity: 10,
          constitution: 10,
          intelligence: 10,
          wisdom: 10,
          charisma: 10
        },
        hitPoints: { current: 0, max: 0, temp: 0 },
        armorClass: 10,
        speed: 30,
        proficiencyBonus: 2,
        skills: [],
        equipment: '',
        features: '',
        spells: '',
        notes: ''
      });
      setMessage('Character deleted');
    } catch (error) {
      console.error('Delete failed:', error);
      setMessage('Error deleting character');
    }
  };

  const exportCharacter = () => {
    const dataStr = JSON.stringify(character, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${character.name || 'character'}.json`;
    link.click();
  };

  const importCharacter = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        setCharacter(imported);
        setMessage('Character imported successfully!');
        setTimeout(() => setMessage(''), 3000);
      } catch (error) {
        console.error('Import failed:', error);
        setMessage('Error importing character');
      }
    };
    reader.readAsText(file);
  };

  const calculateModifier = (score) => {
    return Math.floor((score - 10) / 2);
  };

  if (!currentUser) {
    return (
      <div className="bg-slate-900 rounded-lg p-8 border border-slate-600 text-center">
        <p className="text-slate-400 text-lg">Please login to create or view your character sheet</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-slate-900 rounded-lg p-8 border border-slate-600 text-center">
        <p className="text-slate-400 text-lg">Loading character...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="bg-slate-900 rounded-lg p-4 border border-slate-600 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-blue-400">Character Sheet</h3>
        <div className="flex items-center gap-3">
          <button
            onClick={saveCharacter}
            disabled={saving}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2 transition-colors disabled:bg-slate-700 disabled:cursor-not-allowed"
          >
            <Save size={18} />
            {saving ? 'Saving...' : 'Save'}
          </button>
          <button
            onClick={exportCharacter}
            className="px-4 py-2 bg-green-900 hover:bg-green-800 text-white rounded flex items-center gap-2 transition-colors"
          >
            <Download size={18} />
            Export
          </button>
          <label className="px-4 py-2 bg-yellow-900 hover:bg-yellow-800 text-white rounded flex items-center gap-2 transition-colors cursor-pointer">
            <Upload size={18} />
            Import
            <input
              type="file"
              accept=".json"
              onChange={importCharacter}
              className="hidden"
            />
          </label>
          <button
            onClick={deleteCharacter}
            className="px-4 py-2 bg-red-900 hover:bg-red-800 text-white rounded flex items-center gap-2 transition-colors"
          >
            <Trash2 size={18} />
            Delete
          </button>
        </div>
      </div>

      {message && (
        <div className={`p-4 rounded ${message.includes('success') || message.includes('imported') ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`}>
          {message}
        </div>
      )}

      {/* Basic Info */}
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
          <div>
            <label className="block text-sm font-semibold text-blue-300 mb-2">
              Background
            </label>
            <input
              type="text"
              value={character.background}
              onChange={(e) => setCharacter({ ...character, background: e.target.value })}
              className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
              placeholder="e.g., Soldier, Noble"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-blue-300 mb-2">
              Alignment
            </label>
            <input
              type="text"
              value={character.alignment}
              onChange={(e) => setCharacter({ ...character, alignment: e.target.value })}
              className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
              placeholder="e.g., Lawful Good"
            />
          </div>
        </div>
      </div>

      {/* Ability Scores */}
      <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
        <h4 className="text-xl font-bold text-blue-400 mb-4">Ability Scores</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(character.stats).map(([stat, value]) => (
            <div key={stat} className="bg-slate-800 p-4 rounded text-center">
              <label className="block text-xs text-slate-400 mb-2 uppercase font-semibold">
                {stat}
              </label>
              <input
                type="number"
                value={value}
                onChange={(e) => setCharacter({
                  ...character,
                  stats: { ...character.stats, [stat]: parseInt(e.target.value) || 0 }
                })}
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

      {/* Combat Stats */}
      <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
        <h4 className="text-xl font-bold text-blue-400 mb-4">Combat Stats</h4>
        <div className="grid md:grid-cols-4 gap-4">
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

      {/* Equipment & Features */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
          <h4 className="text-xl font-bold text-blue-400 mb-4">Equipment</h4>
          <textarea
            value={character.equipment}
            onChange={(e) => setCharacter({ ...character, equipment: e.target.value })}
            className="w-full h-40 px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none resize-none"
            placeholder="List your equipment, weapons, and items..."
          />
        </div>

        <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
          <h4 className="text-xl font-bold text-blue-400 mb-4">Features & Traits</h4>
          <textarea
            value={character.features}
            onChange={(e) => setCharacter({ ...character, features: e.target.value })}
            className="w-full h-40 px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none resize-none"
            placeholder="Class features, racial traits, feats..."
          />
        </div>
      </div>

      {/* Spells */}
      <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
        <h4 className="text-xl font-bold text-blue-400 mb-4">Spells</h4>
        <textarea
          value={character.spells}
          onChange={(e) => setCharacter({ ...character, spells: e.target.value })}
          className="w-full h-40 px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none resize-none"
          placeholder="List your spells, spell slots, and spell save DC..."
        />
      </div>

      {/* Notes */}
      <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
        <h4 className="text-xl font-bold text-blue-400 mb-4">Notes</h4>
        <textarea
          value={character.notes}
          onChange={(e) => setCharacter({ ...character, notes: e.target.value })}
          className="w-full h-40 px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none resize-none"
          placeholder="Backstory, personality traits, goals, session notes..."
        />
      </div>
    </div>
  );
}