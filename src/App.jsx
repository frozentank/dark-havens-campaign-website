import React, { useState } from 'react';
import { BookOpen, Swords, Shield, Map, Globe, MapPin, Users, User, Skull } from 'lucide-react';
import TabButton from './components/TabButton';
import SubTabButton from './components/SubTabButton';
import HomeTab from './tabs/HomeTab';
import RulesTab from './tabs/RulesTab';
import CulturesSubTab from './tabs/setting/CulturesSubTab';
import MapsSubTab from './tabs/setting/MapsSubTab';
import CharactersSubTab from './tabs/setting/CharactersSubTab';
import PeopleOfInterestSubTab from './tabs/setting/PeopleOfInterestSubTab';
import VilliansSubTab from './tabs/setting/VilliansSubTab';

export default function DnDCampaign() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeSubTab, setActiveSubTab] = useState('cultures');

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

      {activeTab === 'setting' && (
        <div className={subNavClasses}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex gap-2 overflow-x-auto flex-wrap">
              <SubTabButton id="cultures" icon={Globe} label="Cultures" activeSubTab={activeSubTab} onClick={setActiveSubTab} />
              <SubTabButton id="maps" icon={MapPin} label="Maps" activeSubTab={activeSubTab} onClick={setActiveSubTab} />
              <SubTabButton id="characters" icon={Users} label="Characters" activeSubTab={activeSubTab} onClick={setActiveSubTab} />
              <SubTabButton id="people" icon={User} label="People of Interest" activeSubTab={activeSubTab} onClick={setActiveSubTab} />
              <SubTabButton id="villains" icon={Skull} label="Villains" activeSubTab={activeSubTab} onClick={setActiveSubTab} />
            </div>
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-6 py-12">
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'rules' && <RulesTab />}
        {activeTab === 'setting' && (
          <>
            {activeSubTab === 'cultures' && <CulturesSubTab />}
            {activeSubTab === 'maps' && <MapsSubTab />}
            {activeSubTab === 'characters' && <CharactersSubTab />}
            {activeSubTab === 'people' && <PeopleOfInterestSubTab />}
            {activeSubTab === 'villains' && <VilliansSubTab />}
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