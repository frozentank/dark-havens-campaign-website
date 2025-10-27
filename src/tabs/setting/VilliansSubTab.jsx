import React from 'react';
import { Skull } from 'lucide-react';
import SectionCard from '../../components/SectionCard';
import SubsectionTitle from '../../components/SubsectionTitle';
import InfoBox from '../../components/InfoBox';

export default function VilliansSubTab() {
  return (
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
                  <h3 className="text-xl font-bold text-red-400">The Leech</h3>
                  <p className="text-slate-400">Great Horror</p>
                </div>
              </div>
              <p className="text-slate-300 mb-3">
                Ancient horror the group unleashed from the Crimson Tower.
              </p>
              <div className="text-sm text-slate-400">
                <span className="font-semibold">Status:</span> Imprisoned
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-red-900">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Skull size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-400">Digheno, the Barbarian</h3>
                  <p className="text-slate-400">White Dragon</p>
                </div>
              </div>
              <p className="text-slate-300 mb-3">
                Dragon that was hunted by the group for his hide. A shaman that worshipped the dragon was able to return him back to life. Amassed a raiding force of Goliath to attack the group. Was defeated a second time. Afterwards the group found the shaman and defeated him as well.
              </p>
              <div className="text-sm text-slate-400">
                <span className="font-semibold">Status:</span> Defeated (twice)
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-red-900">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Skull size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-400">Sir Pentadrake III "Rabidmark"</h3>
                  <p className="text-slate-400">New Kiblic Spymaster</p>
                </div>
              </div>
              <p className="text-slate-300 mb-3">
                Older bronze Dragonborn. Led the New Kiblic spy ring that infiltrated Leoman in an attempt to subvert the population and financially bankrupt the nation.
              </p>
              <div className="text-sm text-slate-400">
                <span className="font-semibold">Status:</span> Banished from New Kiblic
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-red-900">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Skull size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-400">Kloompa</h3>
                  <p className="text-slate-400">Devil of the Fourth Layer</p>
                </div>
              </div>
              <p className="text-slate-300 mb-3">
                Possess the bodies of recently deceased humanoids. Made a deal with some of the party members for their souls. His soul was found in a gem the group later destroyed.
              </p>
              <div className="text-sm text-slate-400">
                <span className="font-semibold">Status:</span> Unable to return to the mortal plane
              </div>
            </div>

          </div>
        </div>

        <div>
          <SubsectionTitle>Secondary Threats</SubsectionTitle>
          <div className="space-y-4">
            <InfoBox title="Emissary Sijen">
              Discovered a corrupted iron that caused her to attempt a coup of the Dwarven Brotherhood.
            </InfoBox>
            <InfoBox title="Osarkic">
              Spy handler working under Rabidmark. Killed by Iron Ring assassins.
            </InfoBox>
            <InfoBox title="Elista Nostrom">
              Human female, adult. Beautiful necromancer that slaughtered much of Blackglen and was searching for a spellbook from Durlan the Wizard.
            </InfoBox>
            <InfoBox title="The Iron Ring">
              Group of assassins that were hired to clean up the New Kiblic spy network.
            </InfoBox>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}