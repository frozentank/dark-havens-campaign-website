import React, { useState, useEffect } from 'react';
import { Save, Download, Upload, Trash2 } from 'lucide-react';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import BasicInfo from './characterSheet/BasicInfo';
import AbilityScores from './characterSheet/AbilityScores';
import CombatStats from './characterSheet/CombatStats';
import WeaponAttack from './characterSheet/WeaponAttack';
import Currency from './characterSheet/Currency';
import EquipmentList from './characterSheet/EquipmentList';
import SpellsList from './characterSheet/SpellsList';
import Skills from './characterSheet/Skills';
import FeatsTracker from './characterSheet/FeatsTracker';

export default function CharacterSheet() {
  const { currentUser } = useAuth();
  const [character, setCharacter] = useState({
    name: '',
    race: '',
    class: '',
    level: 1,
    background: '',
    stats: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10
    },
    savingThrows: [],
    skills: [],
    feats: [],
    hitPoints: {
      current: 0,
      max: 0,
      temp: 0
    },
    armorClass: 10,
    speed: 30,
    proficiencyBonus: 2,
    weapons: [],
    currency: {
      copper: 0,
      silver: 0,
      gold: 0,
      platinum: 0
    },
    equipment: [],
    features: '',
    spells: [],
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
        const data = docSnap.data();
        setCharacter({
          ...data,
          equipment: data.equipment || [],
          spells: data.spells || [],
          weapons: data.weapons || [],
          currency: data.currency || { copper: 0, silver: 0, gold: 0, platinum: 0 },
          skills: data.skills || [],
          savingThrows: data.savingThrows || [],
          feats: data.feats || [] 
        });
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
        stats: {
          strength: 10,
          dexterity: 10,
          constitution: 10,
          intelligence: 10,
          wisdom: 10,
          charisma: 10
        },
        skills: [],
        feats: [],
        savingThrows: [],
        hitPoints: { current: 0, max: 0, temp: 0 },
        armorClass: 10,
        speed: 30,
        proficiencyBonus: 2,
        weapons: [],
        currency: { copper: 0, silver: 0, gold: 0, platinum: 0 },
        equipment: [],
        features: '',
        spells: [],
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
        setCharacter({
          ...imported,
          equipment: imported.equipment || [],
          spells: imported.spells || [],
          weapons: imported.weapons || [],
          currency: imported.currency || { copper: 0, silver: 0, gold: 0, platinum: 0 },
          skills: imported.skills || [],
          feats: imported.feats || [],
          savingThrows: imported.savingThrows || []
        });
        setMessage('Character imported successfully!');
        setTimeout(() => setMessage(''), 3000);
      } catch (error) {
        console.error('Import failed:', error);
        setMessage('Error importing character');
      }
    };
    reader.readAsText(file);
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
      <div className="bg-slate-900 rounded-lg p-4 border border-slate-600 flex items-center justify-between flex-wrap gap-3">
        <h3 className="text-2xl font-bold text-blue-400">Character Sheet</h3>
        <div className="flex items-center gap-3 flex-wrap">
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
      <BasicInfo character={character} setCharacter={setCharacter} />

      {/* Combat Stats */}
      <CombatStats character={character} setCharacter={setCharacter} />

      {/* Ability Scores */}
      <AbilityScores 
        stats={character.stats} 
        setStats={(stats) => setCharacter({ ...character, stats })}
        proficiencyBonus={character.proficiencyBonus}
        savingThrows={character.savingThrows}
        setSavingThrows={(savingThrows) => setCharacter({ ...character, savingThrows })}
      />

      {/* Skills */}
      <Skills 
        stats={character.stats}
        proficiencyBonus={character.proficiencyBonus}
        skills={character.skills}
        setSkills={(skills) => setCharacter({ ...character, skills })}
      />

      {/* Weapon Attacks */}
      <WeaponAttack 
        weapons={character.weapons} 
        setWeapons={(weapons) => setCharacter({ ...character, weapons })} 
      />

      {/* Currency */}
      <Currency 
        currency={character.currency} 
        setCurrency={(currency) => setCharacter({ ...character, currency })} 
      />

      {/* Equipment */}
      <EquipmentList 
        equipment={character.equipment} 
        setEquipment={(equipment) => setCharacter({ ...character, equipment })} 
      />

      {/* Features & Traits */}
      <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
        <h4 className="text-xl font-bold text-blue-400 mb-4">Features & Traits</h4>
        <textarea
          value={character.features}
          onChange={(e) => setCharacter({ ...character, features: e.target.value })}
          className="w-full h-40 px-4 py-2 bg-slate-800 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none resize-none"
          placeholder="Class features, racial traits, feats..."
        />
      </div>

      {/* Feats */}
      <FeatsTracker 
        feats={character.feats} 
        setFeats={(feats) => setCharacter({ ...character, feats })} 
      />

      {/* Spells */}
      <SpellsList 
        spells={character.spells} 
        setSpells={(spells) => setCharacter({ ...character, spells })} 
      />

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