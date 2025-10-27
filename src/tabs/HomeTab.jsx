import React from 'react';
import { Scroll } from 'lucide-react';
import SectionCard from '../components/SectionCard';
import SectionTitle from '../components/SectionTitle';
import InfoBox from '../components/InfoBox';

export default function HomeTab() {
  return (
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
          Welcome to Dark Havens. A unique world created for our campaign. Magic here feels more like desperation, not spectacle. The wilds are dangerous to travel, and wounds persist for days.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <InfoBox title="Current Level">
            Level 7
          </InfoBox>
        </div>
      </SectionCard>
    </div>
  );
}