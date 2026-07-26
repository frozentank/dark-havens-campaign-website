import React from 'react';
import SectionCard from '../../components/SectionCard';

export default function CombatRulesSubTab() {
  return (
    <SectionCard>
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Combat Rules</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Initiative</h3>
          <div className='mt-4 mb-2 text-slate-300'>
            Players will not roll initiative. I will decide the order as we're playing.
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
            Inspiration roll also works a bit differently; you can force the reroll of any player dice roll. So if you roll a nat 1, you can reroll that. Or if another player rolls. Or if the damage dice are all low, you can inspiration all the damage dice. It also takes into account advantage/disadvantage. So if you roll with advantage in the first place, you can reroll with advantage again.
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-300 mb-3">Low-Light</h3>
          <div className='mt-4 mb-2 text-slate-300'>
            We will use 2024 rules for Darkvision.
          </div>
        </div>
      </div>
    </SectionCard>
  );
}