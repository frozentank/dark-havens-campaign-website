import React from 'react';
import { Dices } from 'lucide-react';

export default function Skills({ stats, proficiencyBonus, skills, setSkills }) {
  const calculateModifier = (score) => {
    return Math.floor((score - 10) / 2);
  };

  const skillsList = [
    { name: 'Acrobatics', ability: 'dexterity' },
    { name: 'Animal Handling', ability: 'wisdom' },
    { name: 'Arcana', ability: 'intelligence' },
    { name: 'Athletics', ability: 'strength' },
    { name: 'Deception', ability: 'charisma' },
    { name: 'History', ability: 'intelligence' },
    { name: 'Insight', ability: 'wisdom' },
    { name: 'Intimidation', ability: 'charisma' },
    { name: 'Investigation', ability: 'intelligence' },
    { name: 'Medicine', ability: 'wisdom' },
    { name: 'Nature', ability: 'intelligence' },
    { name: 'Perception', ability: 'wisdom' },
    { name: 'Performance', ability: 'charisma' },
    { name: 'Persuasion', ability: 'charisma' },
    { name: 'Religion', ability: 'intelligence' },
    { name: 'Sleight of Hand', ability: 'dexterity' },
    { name: 'Stealth', ability: 'dexterity' },
    { name: 'Survival', ability: 'wisdom' }
  ];

  const getSkillBonus = (skillName, ability) => {
    const abilityMod = calculateModifier(stats[ability]);
    const skill = skills.find(s => s.name === skillName) || { proficient: false, expertise: false };
    
    let bonus = abilityMod;
    if (skill.expertise) {
      bonus += proficiencyBonus * 2;
    } else if (skill.proficient) {
      bonus += proficiencyBonus;
    }
    
    return bonus;
  };

  const toggleProficiency = (skillName) => {
    const existingSkill = skills.find(s => s.name === skillName);
    
    if (!existingSkill) {
      setSkills([...skills, { name: skillName, proficient: true, expertise: false }]);
    } else {
      setSkills(skills.map(s => 
        s.name === skillName ? { ...s, proficient: !s.proficient } : s
      ));
    }
  };

  const toggleExpertise = (skillName) => {
    const existingSkill = skills.find(s => s.name === skillName);
    
    if (!existingSkill) {
      setSkills([...skills, { name: skillName, proficient: false, expertise: true }]);
    } else {
      setSkills(skills.map(s => 
        s.name === skillName ? { ...s, expertise: !s.expertise } : s
      ));
    }
  };

  const rollSkill = (skillName, ability) => {
    const d20 = Math.floor(Math.random() * 20) + 1;
    const bonus = getSkillBonus(skillName, ability);
    const total = d20 + bonus;
    
    showRollNotification(skillName, d20, bonus, total);
  };

  const showRollNotification = (skillName, d20Roll, bonus, total) => {
    const notification = document.createElement('div');
    const isCrit = d20Roll === 20;
    const isFail = d20Roll === 1;
    
    notification.className = `fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-2xl z-50 animate-roll-appear ${
      isCrit ? 'bg-green-900 text-green-100 border-4 border-green-500' :
      isFail ? 'bg-red-900 text-red-100 border-4 border-red-500' :
      'bg-blue-900 text-blue-100 border-4 border-blue-500'
    }`;
    
    notification.innerHTML = `
      <div class="text-center">
        <div class="text-lg font-semibold mb-2">${skillName}</div>
        <div class="flex items-center justify-center gap-3 text-3xl font-bold mb-2">
          <span class="${isCrit ? 'text-green-300' : isFail ? 'text-red-300' : 'text-blue-300'}">${d20Roll}</span>
          <span class="text-slate-400">+</span>
          <span class="text-slate-300">${bonus}</span>
          <span class="text-slate-400">=</span>
          <span class="text-white text-4xl">${total}</span>
        </div>
        <div class="text-sm text-slate-400">
          ${isCrit ? '🎉 Natural 20! Critical Success!' : isFail ? '💀 Natural 1! Critical Failure!' : 'd20 + modifier'}
        </div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translate(-50%, -50%) scale(0.8)';
      notification.style.transition = 'all 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 2500);
  };

  const getSkillState = (skillName) => {
    const skill = skills.find(s => s.name === skillName);
    return {
      proficient: skill?.proficient || false,
      expertise: skill?.expertise || false
    };
  };

  // Split skills into two columns
  const midpoint = Math.ceil(skillsList.length / 2);
  const leftColumn = skillsList.slice(0, midpoint);
  const rightColumn = skillsList.slice(midpoint);

  const SkillRow = ({ skill }) => {
    const bonus = getSkillBonus(skill.name, skill.ability);
    const state = getSkillState(skill.name);
    const abilityMod = calculateModifier(stats[skill.ability]);
    
    return (
      <div className="flex items-center gap-2 p-2 bg-slate-800 rounded hover:bg-slate-750 transition-colors">
        {/* Proficient Checkbox */}
        <label className="flex items-center gap-1 cursor-pointer group" title="Proficient">
          <input
            type="checkbox"
            checked={state.proficient}
            onChange={() => toggleProficiency(skill.name)}
            className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
          <span className="text-xs text-slate-500 group-hover:text-slate-400">P</span>
        </label>

        {/* Expertise Checkbox */}
        <label className="flex items-center gap-1 cursor-pointer group" title="Expertise">
          <input
            type="checkbox"
            checked={state.expertise}
            onChange={() => toggleExpertise(skill.name)}
            className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500 cursor-pointer"
          />
          <span className="text-xs text-slate-500 group-hover:text-slate-400">E</span>
        </label>

        {/* Skill Name and Ability */}
        <div className="flex-1 text-sm">
          <span className="text-slate-300">{skill.name}</span>
          <span className="text-xs text-slate-500 ml-1">
            ({skill.ability.substring(0, 3).toUpperCase()} {abilityMod >= 0 ? '+' : ''}{abilityMod})
          </span>
        </div>

        {/* Bonus */}
        <div className="w-10 text-center font-semibold text-blue-400">
          {bonus >= 0 ? '+' : ''}{bonus}
        </div>

        {/* Roll Button */}
        <button
          onClick={() => rollSkill(skill.name, skill.ability)}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-1 transition-colors text-sm"
          title={`Roll ${skill.name}`}
        >
          <Dices size={14} />
        </button>
      </div>
    );
  };

  return (
    <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xl font-bold text-blue-400">Skills</h4>
        <div className="text-xs text-slate-400 flex gap-4">
          <span>P = Proficient (+{proficiencyBonus})</span>
          <span>E = Expertise (+{proficiencyBonus * 2})</span>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-1">
          {leftColumn.map(skill => (
            <SkillRow key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-1">
          {rightColumn.map(skill => (
            <SkillRow key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}