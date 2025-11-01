import React from 'react';
import SectionCard from '../../components/SectionCard';
import SubsectionTitle from '../../components/SubsectionTitle';
import InfoBox from '../../components/InfoBox';

export default function DeitiesSubTab() {
  return (
    <SectionCard>
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Deities</h2>
      
      <div className="space-y-6">
        <div>
          <SubsectionTitle>True Deities</SubsectionTitle>
          <div className="space-y-4">
            <InfoBox title="Quroa">
              Lawful Good. Non-physical being of righteous justice.
            </InfoBox>
            <InfoBox title="Uthra">
              Lawful Neutral. High Elf, male. The final Judge.
            </InfoBox>
            <InfoBox title="Jio">
              Lawful Evil. Non physical being. All things dark and evil. Slavery, oppression, abuse of power.
            </InfoBox>
            <InfoBox title="Neo Latra Mora">
              Neutral Good. Gnome, Female. Servant of the People. Savior of the lost.
            </InfoBox>
            <InfoBox title="Xefra">
              Neutral. Non-physical being. God of Creation.
            </InfoBox>
            <InfoBox title="Saluti">
              Neutral Evil. Tiefling, Female. Death and War.
            </InfoBox>
            <InfoBox title="Olga">
              Chaotic Good. Non-physical being. Nature, life, love.
            </InfoBox>
            <InfoBox title="Bruno Thunderfist">
              Chaotic Neutral. Dwarf, male. God of luck. The blessed one.
            </InfoBox>
            <InfoBox title="Kalish">
              Chaotic Evil. Non-physical being. God of the weather, sea.
            </InfoBox>
          </div>
        </div>

        <div>
          <SubsectionTitle>Patrons</SubsectionTitle>
          <div className="space-y-4">
            <InfoBox title="Tund the Vigilant">
              Lawful Neutral / Neutral Good. Goliath, male. Patron of the Watchmen and Vanguards.
            </InfoBox>
            <InfoBox title="Rhymith">
              Lawful Evil / Neutral. Tabaxi, male. Patron of the Assassins.
            </InfoBox>
            <InfoBox title="Milerate">
              Neutral / Chaotic Good. Halfling, female. Patron of the Healers.
            </InfoBox>
            <InfoBox title="Emera">
              Chaotic Neutral / Neutral Evil. Genie. Patron of the Jesters and Spies.
            </InfoBox>
            <InfoBox title="Eneri">
              Neutral Good / Chaotic Neutral. Genie. Patron of the Thieves.
            </InfoBox>
            <InfoBox title="Fruish">
              Lawful Good / Neutral. Gold Dragonborn, male. Patron of Justice, guards and, bounty hunters.
            </InfoBox>
            <InfoBox title="Zytheros">
              Neutral / Chaotic Evil. Human female. Patron of Undeath.
            </InfoBox>
            <InfoBox title="Emero">
              Lawful Neutral / Neutral Evil. Genie. Patron of the Crime Lords and Corrupt.
            </InfoBox>
          </div>
        </div>

        
      </div>
    </SectionCard>
  );
}