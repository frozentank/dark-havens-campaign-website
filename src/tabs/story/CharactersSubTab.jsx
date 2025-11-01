import React from 'react';
import SectionCard from '../../components/SectionCard';
import CharacterCard from '../../components/CharacterCard';

export default function CharactersSubTab() {
  return (
    <SectionCard>
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Player Characters</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <CharacterCard
          name="Scoot Bootin"
          details="Human • Artificer • 7"
          description="Brief character description and personality. What drives this character? What's their role in the party?"
          additionalInfo="Player: Tucker"
        />
        <CharacterCard
          name="Erwin"
          details="Human(variant) • Rogue • 7(inactive)"
          description="Mastermind rogue from New Kiblic"
          additionalInfo="Player: Chip"
        />
        <CharacterCard
          name="Pip"
          details="Gnome • Bard • 4(dead)"
          description="Bard of necromancy"
          additionalInfo="Player: Aaron"
        />
        <CharacterCard
          name="Roland"
          details="Human(variant) • Druid • 7"
          description="Warden of the Large Hump Mountain"
          additionalInfo="Player: Aaron"
        />
        <CharacterCard
          name="Gatler"
          details="Human(variant) • Hunter • 7"
          description="Deadly bowman from Jasper"
          additionalInfo="Player: Dalen"
        />
        <CharacterCard
          name="Humba"
          details="Goliath • Fighter • 6(inactive)"
          description="Massive wrestling goliath"
          additionalInfo="Player: Connor"
        />
        <CharacterCard
          name="Humba"
          details="Human(variant) • Paladin • 7"
          description="Paladin of Xefras"
          additionalInfo="Player: Arthur"
        />
        <CharacterCard
          name="REL"
          details="Pixie • Hunter • 6(inactive)"
          description="Pixie that enjoyed following the group around."
          additionalInfo="NPC Follower"
        />
      </div>
    </SectionCard>
  );
}