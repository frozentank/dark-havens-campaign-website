// src/tabs/setting/MapsSubTab.jsx
import React from 'react';
import { MapPin } from 'lucide-react';
import SectionCard from '../../components/SectionCard';
import SubsectionTitle from '../../components/SubsectionTitle';
import InfoBox from '../../components/InfoBox';
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

export default function MapsSubTab() {
  return (
    <SectionCard>
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Maps</h2>

      <div className="space-y-6">
        <div>
          <SubsectionTitle>World Geography</SubsectionTitle>
          <p className="text-slate-300 leading-relaxed mb-4">
            The world of Dark Havens spans diverse climates and terrains, from frozen tundras to scorching deserts.
          </p>
          <div className="bg-slate-900 rounded border border-slate-600 overflow-hidden">
            <Zoom>
              <img
                src="./images/maps/world-map.jpeg"
                alt="World Map of Dark Havens"
                className="w-full h-auto"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            </Zoom>
            <div className="p-8 text-center hidden flex-col items-center justify-center min-h-[300px]">
              <MapPin className="text-blue-400 mb-2" size={48} />
              <p className="text-slate-400">Map placeholder - Add your world map image to /public/images/maps/</p>
            </div>
          </div>
        </div>

        <div>
          <SubsectionTitle>Naulistria</SubsectionTitle>
          <p className="text-slate-300 leading-relaxed mb-4">
            The continent that we are currently within.
          </p>
          <div className="bg-slate-900 rounded border border-slate-600 overflow-hidden">
            <Zoom>
              <img
                src="./images/maps/nausalistia.jpeg"
                alt="World Map of Dark Havens"
                className="w-full h-auto"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            </Zoom>
            <div className="p-8 text-center hidden flex-col items-center justify-center min-h-[300px]">
              <MapPin className="text-blue-400 mb-2" size={48} />
              <p className="text-slate-400">Map placeholder - Add your world map image to /public/images/maps/</p>
            </div>
          </div>
        </div>

        <div>
          <SubsectionTitle>Alistia</SubsectionTitle>
          <p className="text-slate-300 leading-relaxed mb-4">
            The continent North of Naulistria
          </p>
          <div className="bg-slate-900 rounded border border-slate-600 overflow-hidden">
            <Zoom>
              <img
                src="./images/maps/alistia.jpeg"
                alt="World Map of Dark Havens"
                className="w-full h-auto"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            </Zoom>
            <div className="p-8 text-center hidden flex-col items-center justify-center min-h-[300px]">
              <MapPin className="text-blue-400 mb-2" size={48} />
              <p className="text-slate-400">Map placeholder - Add your world map image to /public/images/maps/</p>
            </div>
          </div>
        </div>

        <div>
          <SubsectionTitle>Naulistria</SubsectionTitle>
          <div className="space-y-4">
            <InfoBox title="Leoman">
              <Zoom>
                <img
                  src="./images/maps/leoman.jpeg"
                  alt="Leoman"
                  className="w-full h-full object-cover rounded mb-2"
                />
              </Zoom>
              <p>A small landlock nation where the campaign started.</p>
            </InfoBox>

            <InfoBox title="Eastern New Kiblic">
              <Zoom>
                <img
                  src="./images/maps/eastern-new-kiblic.jpeg"
                  alt="Eastern New Kiblic"
                  className="w-full h-auto object-cover rounded mb-2"
                />
              </Zoom>
            </InfoBox>

            <InfoBox title="Southern New Kiblic">
              <Zoom>
                <img
                  src="./images/maps/southern-new-kiblic.jpeg"
                  alt="Southern New Kiblic"
                  className="w-full h-auto object-cover rounded mb-2"
                />
              </Zoom>
            </InfoBox>
            <InfoBox title="Western New Kiblic">
              <Zoom>
                <img
                  src="./images/maps/western-new-kiblic.jpeg"
                  alt="Western New Kiblic"
                  className="w-full h-auto object-cover rounded mb-2"
                />
              </Zoom>
            </InfoBox>
            <InfoBox title="Rugliorhiel">
              <Zoom>
                <img
                  src="./images/maps/rugliorhiel.jpeg"
                  alt="Rugliorhiel"
                  className="w-full h-auto object-cover rounded mb-2"
                />
              </Zoom>
            </InfoBox>
            <InfoBox title="Jaster">
              <Zoom>
                <img
                  src="./images/maps/jaster.jpeg"
                  alt="Jaster"
                  className="w-full h-auto object-cover rounded mb-2"
                />
              </Zoom>
            </InfoBox>
            <InfoBox title="Gufrailand, Forgotten Mountain, and the Holy Order of Quora">
              <Zoom>
                <img
                  src="./images/maps/forgotten-mountain.jpeg"
                  alt="Gufrailand, Forgotten Mountain, and the Holy Order of Quora"
                  className="w-full h-auto object-cover rounded mb-2"
                />
              </Zoom>
            </InfoBox>
            <InfoBox title="Northwestern Nausalistria">
              <Zoom>
                <img
                  src="./images/maps/northwestern-nausalistria.jpeg"
                  alt="Northwestern Nausalistria"
                  className="w-full h-auto object-cover rounded mb-2"
                />
              </Zoom>
            </InfoBox>
            <InfoBox title="New Kiblic Capital">
              <Zoom>
                <img
                  src="./images/maps/new-kiblic-capital.jpeg"
                  alt="New Kiblic Capital"
                  className="w-full h-auto object-cover rounded mb-2"
                />
              </Zoom>
            </InfoBox>
            <InfoBox title="Forgotten Mountain City">
              <Zoom>
                <img
                  src="./images/maps/forgotten-mountain-city.jpeg"
                  alt="Forgotten Mountain City"
                  className="w-full h-auto object-cover rounded mb-2"
                />
              </Zoom>
            </InfoBox>
            <InfoBox title="Redyard">
              <Zoom>
                <img
                  src="./images/maps/redyard.jpeg"
                  alt="Redyard"
                  className="w-full h-auto object-cover rounded mb-2"
                />
              </Zoom>
            </InfoBox>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}