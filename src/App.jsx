import React, { useState, useEffect } from 'react';
import { BookOpen, Swords, Shield, Map, Globe, MapPin, Users, User, Skull, Dices, Home, Crown, BookHeart, Clock} from 'lucide-react';
import TabButton from './components/TabButton';
import SubTabButton from './components/SubTabButton';
import HomeTab from './tabs/HomeTab';
import DiceTab from './tabs/DiceTab'; 
import CharacterCreationSubTab from './tabs/rules/CharacterCreationSubTab';
import CombatRulesSubTab from './tabs/rules/CombatRulesSubTab';
import CulturesSubTab from './tabs/story/CulturesSubTab';
import MapsSubTab from './tabs/story/MapsSubTab';
import CharactersSubTab from './tabs/story/CharactersSubTab';
import PeopleOfInterestSubTab from './tabs/story/PeopleOfInterestSubTab';
import VilliansSubTab from './tabs/story/VilliansSubTab';
import DeitiesSubTab from './tabs/story/DeitiesSubTab';
import CharacterSheetTab from './tabs/CharacterSheetTab';
import TimelineSubTab from './tabs/story/TimelineSubTab';
import { ScrollText } from 'lucide-react';

export default function DnDCampaign() {
// Parse URL hash on load
  const getInitialTab = () => {
    const hash = window.location.hash.slice(1); // Remove '#'
    if (hash) {
      const [tab, subTab] = hash.split('/');
      if (tab === 'rules'){
        return { tab: tab || 'home', storySubTab: 'cultures', rulesSubTab: subTab || 'creation' };
      } else if (tab === 'story') {
        return { tab: tab || 'home', storySubTab: subTab || 'cultures', rulesSubTab: 'creation' };
      } else if (tab === 'dice' || tab === 'character' || tab === 'home') {
        return { tab: tab || 'home', storySubTab: subTab || 'cultures', rulesSubTab: subTab || 'creation' };
      }
    }
    return { tab: 'home', storySubTab: 'cultures', rulesSubTab: 'creation' };
  };

  const initial = getInitialTab();
  const [activeTab, setActiveTab] = useState(initial.tab);
  const [activeStorySubTab, setActiveStorySubTab] = useState(initial.storySubTab);
  const [activeRulesSubTab, setActiveRulesSubTab] = useState(initial.rulesSubTab);

  // Update URL hash when tabs change
  useEffect(() => {
    if (activeTab === 'story') {
      window.location.hash = `${activeTab}/${activeStorySubTab}`;
    } else if (activeTab === 'rules') {
      window.location.hash = `${activeTab}/${activeRulesSubTab}`;
    } else {
      window.location.hash = activeTab;
    }
  }, [activeTab, activeStorySubTab, activeRulesSubTab]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const initial = getInitialTab();
      setActiveTab(initial.tab);
      setActiveStorySubTab(initial.storySubTab);
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
            <TabButton id="home" icon={Home} label="" activeTab={activeTab} onClick={setActiveTab} />
            <TabButton id="rules" icon={BookOpen} label="Rules" activeTab={activeTab} onClick={setActiveTab} />
            <TabButton id="story" icon={Map} label="Story" activeTab={activeTab} onClick={setActiveTab} />
            <TabButton id="dice" icon={Dices} label="Dice Roller" activeTab={activeTab} onClick={setActiveTab} />
            <TabButton id="character" icon={ScrollText} label="My Character" activeTab={activeTab} onClick={setActiveTab} />
          </div>
        </div>
      </nav>

      {activeTab === 'rules' && (
        <div className={subNavClasses}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex gap-2 overflow-x-auto flex-wrap">
              <SubTabButton id="creation" icon={Globe} label="Character Creation" activeRulesSubTab={activeRulesSubTab} onClick={setActiveRulesSubTab} />
              <SubTabButton id="combat" icon={Shield} label="Combat" activeRulesSubTab={activeRulesSubTab} onClick={setActiveRulesSubTab} />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'story' && (
        <div className={subNavClasses}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex gap-2 overflow-x-auto flex-wrap">
              <SubTabButton id="cultures" icon={BookHeart} label="Cultures" activeStorySubTab={activeStorySubTab} onClick={setActiveStorySubTab} />
              <SubTabButton id="deities" icon={Crown} label="Deities" activeStorySubTab={activeStorySubTab} onClick={setActiveStorySubTab} />
              <SubTabButton id="maps" icon={MapPin} label="Maps" activeStorySubTab={activeStorySubTab} onClick={setActiveStorySubTab} />
              <SubTabButton id="timeline" icon={Clock} label="Timeline" activeStorySubTab={activeStorySubTab} onClick={setActiveStorySubTab} />
              <SubTabButton id="characters" icon={User} label="Characters" activeStorySubTab={activeStorySubTab} onClick={setActiveStorySubTab} />
              <SubTabButton id="people" icon={Users} label="People of Interest" activeStorySubTab={activeStorySubTab} onClick={setActiveStorySubTab} />
              <SubTabButton id="villains" icon={Skull} label="Villains" activeStorySubTab={activeStorySubTab} onClick={setActiveStorySubTab} />
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
        {activeTab === 'story' && (
          <>
            {activeStorySubTab === 'cultures' && <CulturesSubTab />}
            {activeStorySubTab === 'deities' && <DeitiesSubTab />}
            {activeStorySubTab === 'maps' && <MapsSubTab />}
            {activeStorySubTab === 'timeline' && <TimelineSubTab />}
            {activeStorySubTab === 'characters' && <CharactersSubTab />}
            {activeStorySubTab === 'people' && <PeopleOfInterestSubTab />}
            {activeStorySubTab === 'villains' && <VilliansSubTab />}
          </>
        )}
        {activeTab === 'dice' && <DiceTab />}
        {activeTab === 'character' && <CharacterSheetTab />}
      </main>

      <footer className={footerClasses}>
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-400">
          <p>Powered by imagination and dice rolls • Campaign Year 2025</p>
        </div>
      </footer>
    </div>
  );
}