import React, { useState } from 'react';
import { UserPlus, Swords } from 'lucide-react';
import SubTabButton from '../components/SubTabButton';
import CharacterCreationSubTab from './rules/CharacterCreationSubTab';
import CombatRulesSubTab from './rules/CombatRulesSubTab';

export default function RulesTab() {
  const [activeSubTab, setActiveSubTab] = useState('creation');

  return (
    <div className="space-y-8">
      {/* Sub-navigation for Rules */}
      <div className="bg-slate-800 rounded-lg p-4 shadow-xl border border-slate-700">
        <div className="flex gap-2 overflow-x-auto flex-wrap">
          <SubTabButton 
            id="creation" 
            icon={UserPlus} 
            label="Character Creation" 
            activeSubTab={activeSubTab} 
            onClick={setActiveSubTab} 
          />
          <SubTabButton 
            id="combat" 
            icon={Swords} 
            label="Combat Rules" 
            activeSubTab={activeSubTab} 
            onClick={setActiveSubTab} 
          />
        </div>
      </div>

      {/* Content */}
      {activeSubTab === 'creation' && <CharacterCreationSubTab />}
      {activeSubTab === 'combat' && <CombatRulesSubTab />}
    </div>
  );
}