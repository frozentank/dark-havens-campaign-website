import React, { useState } from 'react';
import { Scroll, BookOpen, Swords, Shield, Map, Globe, MapPin, Users, User, Skull } from 'lucide-react';

const TabButton = ({ id, icon: Icon, label, activeTab, onClick }) => {
  const baseClasses = "flex items-center gap-2 px-6 py-3 font-semibold transition-all";
  const activeClasses = activeTab === id 
    ? "bg-blue-600 text-white shadow-lg" 
    : "bg-slate-700 text-slate-300 hover:bg-slate-600";
  
  return (
    <button
      onClick={() => onClick(id)}
      className={`${baseClasses} ${activeClasses}`}
    >
      <Icon size={20} />
      {label}
    </button>
  );
};

const SubTabButton = ({ id, icon: Icon, label, activeSubTab, onClick }) => {
  const baseClasses = "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all rounded";
  const activeClasses = activeSubTab === id 
    ? "bg-blue-500 text-white" 
    : "bg-slate-700 text-slate-300 hover:bg-slate-600";
  
  return (
    <button
      onClick={() => onClick(id)}
      className={`${baseClasses} ${activeClasses}`}
    >
      <Icon size={16} />
      {label}
    </button>
  );
};

const SectionCard = ({ children, className = "" }) => (
  <section className={`bg-slate-800 rounded-lg p-8 shadow-xl border border-slate-700 ${className}`}>
    {children}
  </section>
);

const SectionTitle = ({ children, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-6">
    {Icon && <Icon className="text-blue-400" size={32} />}
    <h2 className="text-3xl font-bold text-blue-400">{children}</h2>
  </div>
);

const SubsectionTitle = ({ children }) => (
  <h3 className="text-xl font-bold text-blue-300 mb-3">{children}</h3>
);

const InfoBox = ({ title, children, className = "" }) => (
  <div className={`bg-slate-900 p-4 rounded border border-slate-600 ${className}`}>
    {title && <h4 className="font-bold text-blue-300 mb-2">{title}</h4>}
    <div className="text-slate-400">{children}</div>
  </div>
);

const CharacterCard = ({ name, details, description, additionalInfo = "" }) => (
  <div className="bg-slate-900 p-6 rounded-lg border border-slate-600">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
        <User size={24} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-blue-300">{name}</h3>
        <p className="text-slate-400">{details}</p>
      </div>
    </div>
    <p className="text-slate-300 mb-3">{description}</p>
    {additionalInfo && (
      <div className="text-sm text-slate-400">
        {additionalInfo}
      </div>
    )}
  </div>
);

const HomeTab = () => (
  <div className="space-y-8">
    <SectionCard>
      <SectionTitle icon={Scroll}>Welcome, Adventurers!</SectionTitle>
      <p className="text-slate-300 text-lg leading-relaxed">
        Welcome to our D&D campaign hub. Here you'll find everything you need for our adventures:
        house rules, world lore, character information, and more. Check the navigation above to
        explore different sections.
      </p>
    </SectionCard>

    <SectionCard>
      <h3 className="text-2xl font-bold text-blue-400 mb-4">Campaign Overview</h3>
      <p className="text-slate-300 leading-relaxed mb-4">
        Add your campaign's elevator pitch here. What's the main conflict? What makes this
        campaign unique? What should players know before diving in?
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <InfoBox title="Session Schedule">
          Weekly on Fridays, 7 PM EST
        </InfoBox>
        <InfoBox title="Current Level">
          Level 5
        </InfoBox>
      </div>
    </SectionCard>
  </div>
);

const RulesTab = () => (
  <div className="space-y-8">
    <SectionCard>
      <h2 className="text-3xl font-bold text-blue-400 mb-6">House Rules</h2>
      
      <div className="space-y-6">
        <div>
          <SubsectionTitle>Character Creation</SubsectionTitle>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Point buy or standard array for ability scores</li>
            <li>All official sourcebooks allowed</li>
            <li>Starting equipment as per your class and background</li>
          </ul>
        </div>

        <div>
          <SubsectionTitle>Combat Rules</SubsectionTitle>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Flanking gives advantage (optional rule)</li>
            <li>Healing potions can be used as a bonus action</li>
            <li>Critical hits: maximize weapon damage dice, then roll additional dice</li>
          </ul>
        </div>

        <div>
          <SubsectionTitle>Resting & Resources</SubsectionTitle>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Short rest: 1 hour of light activity</li>
            <li>Long rest: 8 hours, requires a safe location</li>
            <li>Hit dice recover on long rest as normal</li>
          </ul>
        </div>

        <div>
          <SubsectionTitle>Homebrew & Modifications</SubsectionTitle>
          <p className="text-slate-300">
            All homebrew content must be approved before use. Discuss any custom items, 
            feats, or abilities with the DM before incorporating them into your character.
          </p>
        </div>
      </div>
    </SectionCard>
  </div>
);

const CulturesSubTab = () => (
  <SectionCard>
    <h2 className="text-3xl font-bold text-blue-400 mb-6">Cultures</h2>
    
    <div className="space-y-6">
      <div>
        <SubsectionTitle>Overview</SubsectionTitle>
        <p className="text-slate-300 leading-relaxed">
          Describe the major cultures and civilizations in your campaign world. What are their values,
          traditions, and beliefs? How do they interact with one another?
        </p>
      </div>

      <div className="space-y-4">
        <InfoBox title="Human Kingdoms">
          Describe the human civilizations - their government structures, cultural practices,
          and role in the world.
        </InfoBox>
        <InfoBox title="Elven Enclaves">
          Detail the elven societies - their ancient traditions, magical heritage, and
          relationship with nature.
        </InfoBox>
        <InfoBox title="Dwarven Holds">
          Explain dwarven culture - their craftsmanship, clan structure, and mountain strongholds.
        </InfoBox>
      </div>
    </div>
  </SectionCard>
);

const MapsSubTab = () => (
  <SectionCard>
    <h2 className="text-3xl font-bold text-blue-400 mb-6">Maps</h2>
    
    <div className="space-y-6">
      <div>
        <SubsectionTitle>World Geography</SubsectionTitle>
        <p className="text-slate-300 leading-relaxed mb-4">
          Add descriptions of your world's geography here. You can also upload or link to map images.
        </p>
        <div className="bg-slate-900 p-8 rounded border border-slate-600 text-center">
          <MapPin className="inline-block text-blue-400 mb-2" size={48} />
          <p className="text-slate-400">Map placeholder - Add your world map image here</p>
        </div>
      </div>

      <div>
        <SubsectionTitle>Major Regions</SubsectionTitle>
        <div className="space-y-4">
          <InfoBox title="The Northern Wastes">
            Frozen tundra and mountain ranges. Home to hardy peoples and ancient dangers.
          </InfoBox>
          <InfoBox title="The Central Kingdoms">
            Fertile lands where most civilizations thrive. Trade routes and political intrigue.
          </InfoBox>
          <InfoBox title="The Southern Jungles">
            Dense rainforests hiding lost civilizations and primal magic.
          </InfoBox>
        </div>
      </div>
    </div>
  </SectionCard>
);

const CharactersSubTab = () => (
  <SectionCard>
    <h2 className="text-3xl font-bold text-blue-400 mb-6">Player Characters</h2>
    
    <div className="grid md:grid-cols-2 gap-6">
      <CharacterCard
        name="Character Name"
        details="Race • Class • Level"
        description="Brief character description and personality. What drives this character? What's their role in the party?"
        additionalInfo="Player: Player Name"
      />
      <CharacterCard
        name="Character Name"
        details="Race • Class • Level"
        description="Add more characters as needed. Include backstory highlights, goals, and connections to other party members."
        additionalInfo="Player: Player Name"
      />
    </div>
  </SectionCard>
);

const PeopleOfInterestSubTab = () => (
  <SectionCard>
    <h2 className="text-3xl font-bold text-blue-400 mb-6">People of Interest</h2>
    
    <div className="space-y-6">
      <div>
        <SubsectionTitle>Allies & Quest Givers</SubsectionTitle>
        <div className="space-y-4">
          <InfoBox title="NPC Name - Quest Giver">
            Description of this NPC, their role in the campaign, and how the party has interacted with them.
          </InfoBox>
          <InfoBox title="NPC Name - Ally">
            An important ally who has aided the party. Include their motivations and what they can offer.
          </InfoBox>
        </div>
      </div>

      <div>
        <SubsectionTitle>Notable Figures</SubsectionTitle>
        <div className="space-y-4">
          <InfoBox title="NPC Name - Merchant">
            A merchant or shopkeeper the party frequents. What do they sell? What do they know?
          </InfoBox>
          <InfoBox title="NPC Name - Informant">
            Someone who provides information or services. Their network and reliability.
          </InfoBox>
        </div>
      </div>
    </div>
  </SectionCard>
);

const VilliansSubTab = () => (
  <SectionCard>
    <h2 className="text-3xl font-bold text-blue-400 mb-6">Villains</h2>
    
    <div className="space-y-6">
      <div>
        <SubsectionTitle>Primary Antagonists</SubsectionTitle>
        <div className="space-y-4">
          <div className="bg-slate-900 p-6 rounded-lg border border-red-900">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <Skull size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400">Main Villain Name</h3>
                <p className="text-slate-400">Title or Role</p>
              </div>
            </div>
            <p className="text-slate-300 mb-3">
              Describe the main villain - their goals, methods, and why they're a threat. What's their
              backstory and motivation?
            </p>
            <div className="text-sm text-slate-400">
              <span className="font-semibold">Status:</span> Active threat
            </div>
          </div>
        </div>
      </div>

      <div>
        <SubsectionTitle>Secondary Threats</SubsectionTitle>
        <div className="space-y-4">
          <InfoBox title="Antagonist Name - Lieutenant">
            A secondary villain who serves the main threat or has their own agenda. Their capabilities
            and how they've interacted with the party.
          </InfoBox>
          <InfoBox title="Antagonist Name - Rival">
            Someone who opposes the party but may not be purely evil. Complicated motivations and
            potential for negotiation or alliance.
          </InfoBox>
        </div>
      </div>
    </div>
  </SectionCard>
);

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
            <h1 className="text-4xl font-bold text-blue-400">Campaign Title</h1>
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