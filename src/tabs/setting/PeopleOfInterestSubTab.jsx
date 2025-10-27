import React from 'react';
import SectionCard from '../../components/SectionCard';
import SubsectionTitle from '../../components/SubsectionTitle';
import InfoBox from '../../components/InfoBox';

export default function PeopleOfInterestSubTab() {
  return (
    <SectionCard>
      <h2 className="text-3xl font-bold text-blue-400 mb-6">People of Interest</h2>
      
      <div className="space-y-6">
        <div>
          <SubsectionTitle>Leoman</SubsectionTitle>
          <div className="space-y-4">
            <InfoBox title="Barinon de Bulbec">
              Human Male, adult. Ex-knight of Leoman. Took credit for the heroic actions of his squire.
            </InfoBox>
            <InfoBox title="Jomorac">
              Human male, adult. Captian of the guards in Blackglen. Died during the events caused by Elista Nostrom.
            </InfoBox>
            <InfoBox title="Bertran of Yellow">
              Half-elf male, older. Ex-knight of the Rose. Injured his leg and attempted to retire to Littlehorn. Survived the massacre during the awaken of the Leech.
            </InfoBox>
            <InfoBox title="Elshenus">
              Human Male, older. Originally from Blackglen, is now the priest/researcher for the Duke.
            </InfoBox>
            <InfoBox title="Ariana Duststone">
              Human female, young. Knight in service to the Duke. Was once Barinon de Bulbec's squire.
            </InfoBox>
            <InfoBox title="Uranos Foxsmile">
              Human male, older.Trader that used to deal in silks but now deals in the Leoman cheese trade.
            </InfoBox>
            <InfoBox title="Durlan the Wizard">
              Unknown male. A wizard that lived several hundred years ago in Blackglen.
            </InfoBox>
            <InfoBox title="Nocturnum">
              Human female, child. Little girl that was lost in the Whispering Thicket. Parents have passed and is now an orphan living in Leoman's capital.
            </InfoBox>
            <InfoBox title="Carman">
              Half-elf male, adult. Erwin's contact in Blackglen.
            </InfoBox>
          </div>
        </div>

        <div>
          <SubsectionTitle>New Kiblic</SubsectionTitle>
          <div className="space-y-4">
            <InfoBox title="Arbash Halfhit">
              Dwarf male, young. Assistant to Karfic. Died in a revolt that took place in the Dwarven Brotherhood.
            </InfoBox>
            <InfoBox title="Karfic Hillmail">
              Dwarf male, adult. Blacksmith in the Dwarven Brotherhood. Helped lead the assualt against Sijen to defend the Brotherhood against corruption.
            </InfoBox>
            <InfoBox title="Lonestalker">
              Goliath male, young. Mountain guide near Redyard. Died to a Yeti attack near Large Hump Mountain.
            </InfoBox>
            <InfoBox title="Heartcrusher">
              Goliath female, older. Retired mountain guide in Redyard.
            </InfoBox>
            <InfoBox title="Raul">
              Cat male, unknown. Leader of a cat colony that lives just north of New Kiblic's capital.
            </InfoBox>
            <InfoBox title="Silva 'Lightfoot' Milhuk">
              Half-elf female, young. Linguist in New Kiblic.
            </InfoBox>
            <InfoBox title="Ward Dogheart">
              Dwarf male, adult. Nudist that roams New Kiblic.
            </InfoBox>
            <InfoBox title="Walsh Tenly">
              Dwarf male, adult. Blacksmith in New Kiblic's capital city. Gave the group information on how to access the Dwarven Brotherhood.
            </InfoBox>
            <InfoBox title="Magranar">
              Goliath male, adult. Horse thief captured in New Kiblic capital.
            </InfoBox>
            <InfoBox title="Ponelope Everson">
              Human female, young. Owner of the Green Hornet in Grasswell. Was saved by the group from a troll attack.
            </InfoBox>
            <InfoBox title="Ward Dogheart">
              Dwarf male, adult. Nudist that roams New Kiblic.
            </InfoBox>
            <InfoBox title="Jorondess">
              Copper Dragonborn male, young. Sherrif of a group of Oshos.
            </InfoBox>
            <InfoBox title="Kijeness">
              Gold Dragonborn male, adult. Leader of a group of Oshos now living on the Isle of Mur.
            </InfoBox>
          </div>
        </div>

        <div>
          <SubsectionTitle>Gulfrailand</SubsectionTitle>
          <div className="space-y-4">
            <InfoBox title="Elturin">
              Dwarf male, adult. Leader of a group of Ascar traders.
            </InfoBox>
            <InfoBox title="Befarin">
              Dwarf male, adult. Smith in Elturin's caravan.
            </InfoBox>
            <InfoBox title="Heggear, son of Sikhuli">
              Dwarf male, adult. Cousin to the King of the Ascar.
            </InfoBox>
            <InfoBox title="Budoc, son of Radderlig. Konugr undir fjallim">
              Dwarf male, adult. King of the Ascar. True King under the mountain.
            </InfoBox>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}