import React from 'react';
import SectionCard from '../../components/SectionCard';

export default function CharacterCreationSubTab() {
  return (
    <SectionCard>
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Character Creation</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Setting</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            This campaign will focus on exploring the Imperial City. It is set in the year 4487 GS, 966 years before the Imperial City becomes New Kiblic. The narrative will focus on exploring the city and it's many hidden dungeons. You should expect these things:
            <li>We won't be exploring the wilderness</li>
            <li>There will be several dungeon crawls</li>
            <li>Crawls may extend further than what would be considered the "city."</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Source Books</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            You are welcome to create a character with any official material for 5e (2014 or 2024). This tool is extremely good for creating a character with almost all of the rules correctly implemented: <a href="https://ice5e.com">https://ice5e.com</a>.
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Rolling for Stats / Character Creation</h3>
          <div className='mt-4 mb-2 text-slate-300'>
            Use the standard array:
          </div>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>15</li>
            <li>14</li>
            <li>13</li>
            <li>12</li>
            <li>10</li>
            <li>8</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Classes</h3>
          <div className='mt-4 mb-2 text-slate-300'>
            Multi-classing - There are no minimum requirements for taking another class.
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Races</h3>
          <div className='mt-4 mb-2 italic text-slate-300'>
            You are welcome to play any official race with the following exclusions:
          </div>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Plasmoid</li>
            <li>Geppettin</li>
            <li>Mandrake</li>
            <li>Scourgeborne</li>
            <li>The Disembodied</li>
            <li>Cnidaran</li>
            <li>Oozekin</li>
            <li>Snowborn</li>
            <li>Any of the Dinosaur races</li>
          </ul>
          <div className='mt-4 mb-2 text-slate-300'>
            These races simply don't make sense in the setting.
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Cultures</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            The cultures of Dark Havens can be used to expand your backstory. There are some notes for the current campaign:
            <li>New Kiblic is currently called the Empire</li>
            <li>Gufrailand, Gyso, Ebra, Jaster, Leoman, Rugliorhiel, Teflin, and Freeport are all part of the Empire. These cultures are regional clans</li>
            <li>The Oshos are currently the Freesh, which is also a part of the Empire</li>
            <li>Nostrio isn't established as a primary group and is instead just "the Elves"</li>
            <li>The Empire of Nemon the Magnificent does not exist yet</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Feats</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>All Feats will use 2024 rules.</li>
            <li>You may wish to avoid Feats that give bonuses to initiative as we will not be rolling that.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Challenge Mode</h3>
          For those that want to push the boundaries of what a character can be, I would like to encourage you to attempt a character outside the norms of their class's norms. For example:
          <ul className="list-disc list-inside space-y-2 text-slate-300 mt-2">
            <li>A wizard that has 8 intelligence</li>
            <li>A ranged Paladin</li>
            <li>A Bard with stage fright</li>
          </ul>
          <div className="mt-4">
            To complement this, set the primary state of your class to your lowest score. Here are the primary stats for each class:
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2 list-disc list-inside text-slate-300 mt-2">
              <li>Paladin - Cha/Str</li>
              <li>Barbarian - Str</li>
              <li>Bard - Cha</li>
              <li>Druid - Wis</li>
              <li>Ranger - Dex/Wis</li>
              <li>Rogue - Dex</li>
              <li>Wizard - Int</li>
              <li>Cleric - Wis</li>
              <li>Sorcerer - Cha</li>
              <li>Monk - Str/Dex</li>
              <li>Fighter - Str</li>
              <li>Warlock - Cha</li>
              <li>Artificer - Int</li>
            </ul>
          </div>
          <p className="text-slate-300 mt-2">
            If you multi-class, you are welcome to shift your scores so that you ensure your classes stay at low scores.
          </p>
          <div>
            <h2 className="text-xl text-slate-100 mt-2 italic">
              Remember the goal of this is to have fun. It's not to win.
            </h2>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}