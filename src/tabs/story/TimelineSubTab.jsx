import React, { useState } from 'react';
import { Info, Clock } from 'lucide-react';
import SectionCard from '../../components/SectionCard';
import Timeline from '../../components/timeline/Timeline';
import { calendars } from '../../data/calendars';
import { historicalEvents } from '../../data/timelineEvents';

export default function TimelineSubTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <SectionCard>
        <div className="flex items-center gap-4">
          <Clock className="text-blue-400" size={48} />
          <div>
            <h2 className="text-3xl font-bold text-blue-400">Campaign Timeline</h2>
            <p className="text-slate-400 mt-1">Major historical events</p>
          </div>
        </div>
      </SectionCard>

      {/* Calendar Legend */}
      <SectionCard>
        <div className="flex items-center gap-2 mb-4">
          <Info className="text-blue-400" size={20} />
          <h4 className="font-semibold text-blue-300">Calendar Systems</h4>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {calendars.map(cal => (
            <div key={cal.id} className="flex items-start gap-3 p-3 bg-slate-800 rounded">
              <div 
                className="w-4 h-4 rounded-full flex-shrink-0 mt-1"
                style={{ backgroundColor: cal.color }}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h5 className="font-semibold text-slate-300">{cal.name}</h5>
                  <span className="text-xs px-2 py-0.5 bg-slate-700 text-slate-400 rounded">
                    {cal.abbreviation}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{cal.culture}</p>
                <p className="text-xs text-slate-500 mt-1">
                  Epoch: {cal.epochName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Timeline */}
      <SectionCard>
        <Timeline events={historicalEvents} />
      </SectionCard>
    </div>
  );
}