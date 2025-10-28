import React, { useState } from 'react';
import { UserPlus, Swords } from 'lucide-react';
import SubTabButton from '../components/SubTabButton';
import CharacterCreationSubTab from './rules/CharacterCreationSubTab';
import CombatRulesSubTab from './rules/CombatRulesSubTab';

export default function RulesTab() {
  // Parse URL hash to get the rules sub-tab
  const getInitialSubTab = () => {
    const hash = window.location.hash.slice(1); // Remove '#'
    if (hash.startsWith('rules/')) {
      const parts = hash.split('/');
      return parts[1] || 'creation';
    }
    return 'creation';
  };

  const [activeSubTab, setActiveSubTab] = useState(getInitialSubTab());

  // Update URL hash when sub-tab changes
  const handleSubTabChange = (newSubTab) => {
    setActiveSubTab(newSubTab);
    window.location.hash = `rules/${newSubTab}`;
  };

  // Listen for hash changes (browser back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const subTab = getInitialSubTab();
      setActiveSubTab(subTab);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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