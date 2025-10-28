import React, { useState, useEffect } from 'react';
import { BookOpen, Swords, Shield, Map, Globe, MapPin, Users, User, Skull } from 'lucide-react';
import TabButton from './components/TabButton';
import SubTabButton from './components/SubTabButton';
import HomeTab from './tabs/HomeTab';
import CharacterCreationSubTab from './tabs/rules/CharacterCreationSubTab';
import CombatRulesSubTab from './tabs/rules/CombatRulesSubTab';
import CulturesSubTab from './tabs/setting/CulturesSubTab';
import MapsSubTab from './tabs/setting/MapsSubTab';
import CharactersSubTab from './tabs/setting/CharactersSubTab';
import PeopleOfInterestSubTab from './tabs/setting/PeopleOfInterestSubTab';
import VilliansSubTab from './tabs/setting/VilliansSubTab';
import DeitiesSubTab from './tabs/setting/DeitiesSubTab';

export default function DnDCampaign() {
// Parse URL hash on load
  const getInitialTab = () => {
    const hash = window.location.hash.slice(1); // Remove '#'
    if (hash) {
      const [tab, subTab] = hash.split('/');
      if (tab === 'rules'){
        return { tab: tab || 'home', settingSubTab: 'cultures', rulesSubTab: subTab || 'creation' };
      } else if (tab === 'setting') {
        return { tab: tab || 'home', settingSubTab: subTab || 'cultures', rulesSubTab: 'creation' };
      }
      
    }
    return { tab: 'home', settingSubTab: 'cultures', rulesSubTab: 'creation' };
  };

  const initial = getInitialTab();
  const [activeTab, setActiveTab] = useState(initial.tab);
  const [activeSettingSubTab, setActiveSettingSubTab] = useState(initial.settingSubTab);
  const [activeRulesSubTab, setActiveRulesSubTab] = useState(initial.rulesSubTab);

  // Update URL hash when tabs change
  useEffect(() => {
    if (activeTab === 'setting') {
      window.location.hash = `${activeTab}/${activeSettingSubTab}`;
    } else if (activeTab === 'rules') {
      window.location.hash = `${activeTab}/${activeRulesSubTab}`;
    } else {
      window.location.hash = activeTab;
    }
  }, [activeTab, activeSettingSubTab, activeRulesSubTab]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const initial = getInitialTab();
      setActiveTab(initial.tab);
      setActiveSettingSubTab(initial.settingSubTab);
      setActiveRulesSubTab(initial.rulesSubTab);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const headerClasses = "bg-slate-950 border-b-4 border-blue-600 shadow-2xl";
  const navClasses = "bg-slate-800 shadow-xl sticky top-0 z-50 border-b-2 border-slate-700";
  const subNavClasses = "bg-slate-750 border-b border-slate-600 py-3";
  const footerClasses = "bg-slate-950 border-t-2 border-slate-700 mt-16";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100">
      <header className={headerClasses}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-2">
            <Swords className="text-blue-400" size={40} />
            <h1 className="text-4xl font-bold text-blue-400">Dark Havens</h1>
          </div>
          <p className="text-slate-400 text-lg ml-14">An Epic Adventure Awaits</p>
        </div>
      </header>

      <nav className={navClasses}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto py-2">
            <TabButton id="home" icon={Shield} label="Home" activeTab={activeTab} onClick={setActiveTab} />
            <TabButton id="rules" icon={BookOpen} label="Rules" activeTab={activeTab} onClick={setActiveTab} />
            <TabButton id="setting" icon={Map} label="Setting" activeTab={activeTab} onClick={setActiveTab} />
          </div>
        </div>
      </nav>

      {activeTab === 'rules' && (
        <div className={subNavClasses}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex gap-2 overflow-x-auto flex-wrap">
              <SubTabButton id="creation" icon={Globe} label="Character Creation" activeRulesSubTab={activeRulesSubTab} onClick={setActiveRulesSubTab} />
              <SubTabButton id="combat" icon={Globe} label="Combat" activeRulesSubTab={activeRulesSubTab} onClick={setActiveRulesSubTab} />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'setting' && (
        <div className={subNavClasses}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex gap-2 overflow-x-auto flex-wrap">
              <SubTabButton id="cultures" icon={Globe} label="Cultures" activeSettingSubTab={activeSettingSubTab} onClick={setActiveSettingSubTab} />
              <SubTabButton id="deities" icon={Globe} label="Deities" activeSettingSubTab={activeSettingSubTab} onClick={setActiveSettingSubTab} />
              <SubTabButton id="maps" icon={MapPin} label="Maps" activeSettingSubTab={activeSettingSubTab} onClick={setActiveSettingSubTab} />
              <SubTabButton id="characters" icon={Users} label="Characters" activeSettingSubTab={activeSettingSubTab} onClick={setActiveSettingSubTab} />
              <SubTabButton id="people" icon={User} label="People of Interest" activeSettingSubTab={activeSettingSubTab} onClick={setActiveSettingSubTab} />
              <SubTabButton id="villains" icon={Skull} label="Villains" activeSettingSubTab={activeSettingSubTab} onClick={setActiveSettingSubTab} />
            </div>
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-6 py-12">
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'rules' && (
          <>
            {activeRulesSubTab === 'creation' && <CharacterCreationSubTab />}
            {activeRulesSubTab === 'combat' && <CombatRulesSubTab />}
          </>
        )}
        {activeTab === 'setting' && (
          <>
            {activeSettingSubTab === 'cultures' && <CulturesSubTab />}
            {activeSettingSubTab === 'deities' && <DeitiesSubTab />}
            {activeSettingSubTab === 'maps' && <MapsSubTab />}
            {activeSettingSubTab === 'characters' && <CharactersSubTab />}
            {activeSettingSubTab === 'people' && <PeopleOfInterestSubTab />}
            {activeSettingSubTab === 'villains' && <VilliansSubTab />}
          </>
        )}
      </main>

      <footer className={footerClasses}>
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-400">
          <p>Powered by imagination and dice rolls • Campaign Year 2025</p>
        </div>
      </footer>
    </div>
  );
}