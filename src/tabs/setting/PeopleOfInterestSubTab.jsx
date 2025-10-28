import React from 'react';
import SectionCard from '../../components/SectionCard';
import SubsectionTitle from '../../components/SubsectionTitle';
import NPCCard from '../../components/NPCCard';

export default function PeopleOfInterestSubTab() {
  return (
    <SectionCard>
      <h2 className="text-3xl font-bold text-blue-400 mb-6">People of Interest</h2>
      
      <div className="space-y-6">
        <div>
          <SubsectionTitle>Leoman</SubsectionTitle>
          <div className="space-y-4">
            <NPCCard
              name="Duke Matthias Bronson"
              description="Human Male, adult. Duke of Leoman."
              imagePath="/images/people/matthias-bronson.jpeg"
            />
            <NPCCard
              name="Barinon de Bulbec"
              description="Human Male, adult. Ex-knight of Leoman. Took credit for the heroic actions of his squire."
            />
            <NPCCard
              name="Jomorac"
              description="Human male, adult. Captian of the guards in Blackglen. Died during the events caused by Elista Nostrom."
            />
            <NPCCard
              name="Bertran of Yellow"
              description="Half-elf male, older. Ex-knight of the Rose. Injured his leg and attempted to retire to Littlehorn. Survived the massacre during the awaken of the Leech."
            />
            <NPCCard
              name="Elshenus"
              description="Human Male, older. Originally from Blackglen, is now the priest/researcher for the Duke."
            />
            <NPCCard
              name="Ariana Duststone"
              description="Human female, young. Knight in service to the Duke. Was once Barinon de Bulbec's squire."
            />
            <NPCCard
              name="Uranos Foxsmile"
              description="Human male, older. Trader that used to deal in silks but now deals in the Leoman cheese trade."
            />
            <NPCCard
              name="Durlan the Wizard"
              description="Unknown male. A wizard that lived several hundred years ago in Blackglen."
            />
            <NPCCard
              name="Nocturnum"
              description="Human female, child. Little girl that was lost in the Whispering Thicket. Parents have passed and is now an orphan living in Leoman's capital."
            />
            <NPCCard
              name="Carman"
              description="Half-elf male, adult. Erwin's contact in Blackglen."
            />
          </div>
        </div>

        <div>
          <SubsectionTitle>New Kiblic</SubsectionTitle>
          <div className="space-y-4">
            <NPCCard
              name="Arbash Halfhit"
              description="Dwarf male, young. Assistant to Karfic. Died in a revolt that took place in the Dwarven Brotherhood."
            />
            <NPCCard
              name="Karfic Hillmail"
              description="Dwarf male, adult. Blacksmith in the Dwarven Brotherhood. Helped lead the assualt against Sijen to defend the Brotherhood against corruption."
            />
            <NPCCard
              name="Lonestalker"
              description="Goliath male, young. Mountain guide near Redyard. Died to a Yeti attack near Large Hump Mountain."
            />
            <NPCCard
              name="Heartcrusher"
              description="Goliath female, older. Retired mountain guide in Redyard."
            />
            <NPCCard
              name="Raul"
              description="Cat male, unknown. Leader of a cat colony that lives just north of New Kiblic's capital."
            />
            <NPCCard
              name="Silva 'Lightfoot' Milhuk"
              description="Half-elf female, young. Linguist in New Kiblic."
            />
            <NPCCard
              name="Ward Dogheart"
              description="Dwarf male, adult. Nudist that roams New Kiblic."
            />
            <NPCCard
              name="Walsh Tenly"
              description="Dwarf male, adult. Blacksmith in New Kiblic's capital city. Gave the group information on how to access the Dwarven Brotherhood."
            />
            <NPCCard
              name="Magranar"
              description="Goliath male, adult. Horse thief captured in New Kiblic capital."
            />
            <NPCCard
              name="Ponelope Everson"
              description="Human female, young. Owner of the Green Hornet in Grasswell. Was saved by the group from a troll attack."
            />
            <NPCCard
              name="Jorondess"
              description="Copper Dragonborn male, young. Sherrif of a group of Oshos."
            />
            <NPCCard
              name="Kijeness"
              description="Gold Dragonborn male, adult. Leader of a group of Oshos now living on the Isle of Mur."
            />
          </div>
        </div>

        <div>
          <SubsectionTitle>Gulfrailand</SubsectionTitle>
          <div className="space-y-4">
            <NPCCard
              name="Elturin"
              description="Dwarf male, adult. Leader of a group of Ascar traders."
            />
            <NPCCard
              name="Befarin"
              description="Dwarf male, adult. Smith in Elturin's caravan."
            />
            <NPCCard
              name="Heggear, son of Sikhuli"
              description="Dwarf male, adult. Cousin to the King of the Ascar."
              imagePath="/images/people/heggear.jpeg"
            />
            <NPCCard
              name="Budoc, son of Radderlig. Konugr undir fjallim"
              description="Dwarf male, adult. King of the Ascar. True King under the mountain."
              imagePath="/images/people/budoc.jpeg"
            />
          </div>
        </div>
      </div>
    </SectionCard>
  );
}