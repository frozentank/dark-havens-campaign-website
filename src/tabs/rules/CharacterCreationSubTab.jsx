import React from 'react';
import SectionCard from '../../components/SectionCard';

export default function CharacterCreationSubTab() {
  return (
    <SectionCard>
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Character Creation</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Source Books</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>PHB</li>
            <li>Xanathar's Guide to Everything</li>
            <li>Tasha's Cauldron of Everything (excluding peace/twilight cleric)</li>
            <li>Fizban's Treasury of Dragons</li>
            <li>All Critical Roll Subclasses</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Rolling for Stats / Character Creation</h3>
          <div className='mt-4 mb-2 text-slate-300'>
            Stats will be rolled in person with physical dice. I will roll 21d6. From that dice pool you will combine the dice into your 6 base stats. You must follow these rules:
          </div>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>No more than 3 dice per stat</li>
            <li>No stat can be below 5</li>
            <li>The total resulting stat can't be over 20 (so if you have a +2 your base stat must be below 18)</li>
          </ul>
          <div className='mt-4 mb-2 text-slate-300'>
            The unused dice from that pool will be used for your starting gold (x15). You will not get base gear for your class, you must purchase everything you need with that gold pool. For characters starting beyond level 1, gain an additional 20g per level.
          </div>
          <div className='mt-4 mb-2 text-slate-300'>
            Here are the starting dice rolls:
          </div>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>2 - 6s</li>
            <li>3 - 5s</li>
            <li>4 - 4s</li>
            <li>6 - 3s</li>
            <li>3 - 2s</li>
            <li>3 - 1s</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Classes</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Fighter</li>
            <li>Paladin</li>
            <li>Ranger <a href='https://www.gmbinder.com/share/-Noyu6FfR6VcCMNr07-z' className="text-blue-400 hover:text-blue-300 underline">(use this)</a></li>
            <li>Rogue</li>
            <li>Barbarian</li>
            <li>Monk</li>
            <li>Wizard (max level 6)</li>
            <li>Cleric (max level 6)</li>
            <li>Bard (max level 6)</li>
            <li>Druid (max level 6)</li>
          </ul>
          <div className='mt-4 mb-2 text-slate-300'>
            Multi-classing - For spells level 4-9 you can't have any more than the equivalent character level paladin/ranger. So a 12 lvl Wizard/Cleric has 4-1st, 3-2nd, and 3-3rd; they have no 4th or 5th level spells.
          </div>
          <div className='mt-4 mb-2 text-slate-300'>
            Reminder, you don't start with the items listed in your class and must purchase items with your starting gold.
          </div>
          <div className='mt-4 mb-2 italic text-slate-300'>
            Magic is dwindling; the ability for magic to manifest without difficulty is no longer possible.
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Races</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Dwarf (Mountain, Hill, Ascar)</li>
            <li>Goliath</li>
            <li>Gnome</li>
            <li>Halfling</li>
            <li>Half-Elf - Many Half-Elves think of themselves as full Elves</li>
            <li>Human (Standard and Variant) - Variant Humans often trace their heritage back to Half-Elves</li>
            <li>Half-Orc - You will not be trusted; many towns will not let you enter.</li>
            <li>Dragonborn - Your people do not have a home nation, though some nations have taken Dragonborn in and given them space to live. Overall, Dragonborn are not universally accepted. There are two nations of Dragonborn: Oshos and Shan-maris Conclave</li>
          </ul>
          <div className='mt-4 mb-2 italic text-slate-300'>
            Many races have simply vanished. Specifically, Elves and Tieflings.
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Languages</h3>
          <div className='mt-4 mb-2 text-slate-300'>
            Goliath does not have a "your choice of language"; that choice is "Giant".
          </div>
          <div className='mt-4 mb-2 text-slate-300'>
            Any "your choice" selection in the standard rules is "your choice of standard language" until you have every listed language. Then you can choose Exotic languages. - Don't try too hard at this. I don't want to have players with exotic languages; it won't make much sense.
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Backgrounds</h3>
          <div className='mt-4 mb-2 text-slate-300'>
            None from the books, these have been replaced by different social origins related to the Dark Shores setting. See the Cultures section in the Setting info. Each will give you two skills, one or two languages. They may have a racial restriction on who can access them.
          </div>
          <div className='mt-4 mb-2 text-slate-300'>
            Tool skills are no longer necessary. If you've purchased the tools, you are proficient enough to use them. If you find them, then spending a long rest with them will give you the same level of proficiency.
          </div>
          <div className='mt-4 mb-2 text-slate-300'>
            Riding/Driving/Sailing - If you think your character would be able to do these things, they probably can. They are not an expert; they're an expert Adventurer. They wouldn't be doing this if they were trying to be an expert sailor or a coachman. Or at least they wouldn't for very long.
          </div>
          <div className='mt-4 mb-2 text-slate-300'>
            All players have the character feature "I know a guy" - This feature is usable once per session. You can state that your character "knows a guy," then describe how this person could help, who they are, and why you might <span className='font-bold'>not</span> want to get them involved. They are now an NPC. I will handle anything past that, but they will help you with your task. - The intent of this is to solve social issues that may arise from time to time.
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Feats</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Lucky - change the text "regain all on long rest" to "regain one on a long rest"</li>
            <li>Metamagic Adept and Eldritch Adept are allowed (basically, you would have been a sorcerer or warlock, but there's not enough magic)</li>
          </ul>
        </div>
      </div>
    </SectionCard>
  );
}