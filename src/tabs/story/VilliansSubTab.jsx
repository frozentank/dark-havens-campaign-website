import React from 'react';
import { Skull } from 'lucide-react';
import SectionCard from '../../components/SectionCard';
import SubsectionTitle from '../../components/SubsectionTitle';
import InfoBox from '../../components/InfoBox';
import VillainCard from '../../components/VillainCard';

export default function VilliansSubTab() {
  return (
    <SectionCard>
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Villains</h2>
      
      <div className="space-y-6">
        <div>
          <SubsectionTitle>Primary Antagonists</SubsectionTitle>
          <div className="space-y-4">
            <VillainCard
              name="The Leech"
              title="Great Horror"
              description="Ancient horror the group unleashed from the Crimson Tower."
              status="Imprisoned"
              imagePath="./images/villains/leech.jpeg"
              isPrimary={true}
              />

            <VillainCard
              name="Digheno, the Barbarian"
              title="White Dragon"
              description="Dragon that was hunted by the group for his hide. A shaman that worshipped the dragon was able to return him back to life. Amassed a raiding force of Goliath to attack the group. Was defeated a second time. Afterwards the group found the shaman and defeated him as well."
              status="Defeated (twice)"
              imagePath="./images/villains/digheno.jpeg"
              isPrimary={true}
              />

            <VillainCard
              name="Sir Pentadrake III 'Rabidmark'"
              title="New Kiblic Spymaster"
              description="Older bronze Dragonborn. Led the New Kiblic spy ring that infiltrated Leoman in an attempt to subvert the population and financially bankrupt the nation."
              status="Banished from New Kiblic"
              imagePath="./images/villains/rabidmark.jpeg"
              isPrimary={true}
              />

            <VillainCard
              name="Kloompa"
              title="Devil of the Fourth Layer"
              description="Possess the bodies of recently deceased humanoids. Made a deal with some of the party members for their souls. His soul was found in a gem the group later destroyed."
              status="Unable to return to the mortal plane"
              imagePath="./images/villains/kloompa.jpeg"
              isPrimary={true}
              />
          </div>
        </div>

        <div>
          <SubsectionTitle>Secondary Threats</SubsectionTitle>
          <div className="space-y-4">
            <VillainCard
              name="Emissary Sijen"
              title="Dwarven Brotherhood representative"
              description="Discovered a corrupted iron that caused her to attempt a coup of the Dwarven Brotherhood."
              status="Being handled by the Dwarven Brotherhood"
              imagePath="./images/villains/sijen.jpeg"
              isPrimary={false}
              />
            <VillainCard
              name="Osarkic"
              title="Spy Handler"
              description="Worked under Rabidmark."
              status="Killed by the Iron Ring"
              imagePath="./images/villains/osarkic.jpeg"
              isPrimary={false}
              />
            <VillainCard
              name="Elista Nostrom"
              title="Necromancer"
              description="Beautiful woman that was searching Blackglen for a spellbook owned by Durlan the Wizard. Slaughtered a large portion of Blackglen in the effort."
              status="Killed and turned to water"
              imagePath="./images/villains/elista-nostrom.jpeg"
              isPrimary={false}
              />
            <VillainCard
              name="The Iron Ring"
              title="Assassin's Guild"
              description="Were hired to clean up New Kiblic's spy network."
              status="Unknown if job complete"
              imagePath="./images/villains/iron-ring.jpeg"
              isPrimary={false}
              />
          </div>
        </div>
      </div>
    </SectionCard>
  );
}