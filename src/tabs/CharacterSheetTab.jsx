import React from 'react';
import SectionCard from '../components/SectionCard';
import AuthLogin from '../components/AuthLogin';
import CharacterSheet from '../components/CharacterSheet';

export default function CharacterSheetTab() {
  return (
    <div className="space-y-6">
      {/* Login Section */}
      <SectionCard>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-blue-400">My Character</h2>
          <AuthLogin />
        </div>
      </SectionCard>

      {/* Character Sheet */}
      <CharacterSheet />
    </div>
  );
}