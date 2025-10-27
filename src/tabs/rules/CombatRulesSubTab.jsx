import React from 'react';
import SectionCard from '../../components/SectionCard';
import ShieldTable from './components/ShieldTable';

export default function CombatRulesSubTab() {
  return (
    <SectionCard>
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Combat Rules</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Initiative</h3>
          <div className='mt-4 mb-2 text-slate-300'>
            Players will not roll initiative. You will use a static order of 10+Int (or Wis, depending on the situation). Ties are resolved with Wis, then Cha, Dex, Con, and Str. Monsters will reroll initiative each turn and go accordingly. This removes 2 issues: order is set and predictable for your turn (A always goes after B), and you can't predict when the enemy will go.
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Concentration</h3>
          <div className='mt-4 mb-2 italic text-slate-300'>
            Concentration is hard in a battle.
          </div>
          <div className='mt-4 mb-2 text-slate-300'>
            To continue concentrating, you must roll at the end of each turn to maintain. You will still get that round of effect through your turn. The DC increases by 1 with each turn, starting at 10 (max is 19 for a 1-minute concentration). You still have to roll for getting hit the same way; this does not increase the DC per round. Outside of combat, if the spell's duration is 1 minute or less, you do not need to concentrate. Otherwise, it is one roll every 1/10 of the max duration (every 6 minutes for an hour length). The first time you would fail (in or out of combat), you can instead take damage to maintain the spell. Take (spell level)d6 psychic damage; this damage cannot be mitigated in any way. The second time you fail the spell is lost.
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Dying and Death</h3>
          <div className='mt-4 mb-2 italic text-slate-300'>
            Your physical body has limits.
          </div>
          <div className='mt-4 mb-2 text-slate-300'>
            At the start, your character has 5 Failed Death-saving slots; you still only need 3 Successful Death-saving throws to get back up. When you go down but get back up, you have 1 less failed death save slot (even if you didn't fail any). If you have no slots available and go down, you're dead, and the body can't be revived. Your new character will use the same pool of dice (I'll record it), but you start at half the level of the highest level party member (don't worry, you'll get XP to boost you back, but it will be a few sessions).
          </div>
          <div className='mt-4 mb-2 text-slate-300'>
            Long-term recovery - it is possible to reduce the number of death saves you have failed. This can be done once per year. You will need a month of recovery with an experienced healer. Finding an appropriately skilled person is no easy task and may require some travel. Often, they are druid-like or cleric-like, hidden away. Or they are expensive and in high demand if they are in a city. Expect to pay &gt;20g for this process.
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Inspiration</h3>
          <div className='mt-4 mb-2 text-slate-300'>
            I won't hand out inspiration. You will have 1 inspiration for each session. It will reset the next session.
          </div>
          <div className='mt-4 mb-2 text-slate-300'>
            Inspiration roll also works a bit differently; you can force the reroll of any one dice roll. So if you roll a nat 1, you can reroll that. Or if another player rolls. Or a roll I make. Or if the damage dice are all low, you can inspiration all the damage dice. It also takes into account advantage/disadvantage. So if you roll with advantage in the first place, you can reroll with advantage again.
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Low-Light</h3>
          <div className='mt-4 mb-2 text-slate-300'>
            Only dwarves have dark vision. All the other races have low-light vision. Low-light has the following rule:
          </div>
          <div className='mt-4 mb-2 italic text-slate-300'>
            A creature with low-light vision can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions of shadowy illumination. It retains the ability to distinguish color and detail under these conditions. A spellcaster with low-light vision can read a scroll as long as even the tiniest of candle flame is next to her as a source of light.
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Shields</h3>
          <ShieldTable />
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Spellcasting</h3>
          <div className='mt-4 mb-2 text-slate-300'>
            Focuses are no longer present in the world. Instead, there are component pouches that give a caster their abilities. Each pouch costs 25g (PHB) and has 50 charges.
          </div>
        </div>
      </div>
    </SectionCard>
  );
}