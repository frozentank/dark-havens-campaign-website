import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { calendars, getCalendarYear } from '../../data/calendars';

export default function Timeline({ events }) {
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [visibleCalendars, setVisibleCalendars] = useState(new Set(calendars.map(c => c.id)));

  // Sort events by principal year (newest first for display)
  const sortedEvents = [...events].sort((a, b) => b.principalYear - a.principalYear);

  // Group calendar epochs as events
  const calendarEpochs = calendars.map(cal => ({
    id: `epoch-${cal.id}`,
    principalYear: cal.epochYear,
    title: `${cal.epochName}`,
    type: 'epoch',
    calendar: cal,
    description: `The ${cal.culture} begin their calendar with this event.`
  }));

  // Combine events and epochs, then sort
  const allTimelineItems = [...sortedEvents, ...calendarEpochs].sort((a, b) => b.principalYear - a.principalYear);

  const toggleCalendar = (calendarId) => {
    const newVisible = new Set(visibleCalendars);
    if (newVisible.has(calendarId)) {
      newVisible.delete(calendarId);
    } else {
      newVisible.add(calendarId);
    }
    setVisibleCalendars(newVisible);
  };

  return (
    <div className="space-y-6">
      {/* Calendar Toggle */}
      <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
        <h4 className="text-sm font-semibold text-blue-300 mb-3">Visible Calendars</h4>
        <div className="flex flex-wrap gap-2">
          {calendars.map(cal => {
            const isVisible = visibleCalendars.has(cal.id);
            return (
              <button
                key={cal.id}
                onClick={() => toggleCalendar(cal.id)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  isVisible ? 'opacity-100' : 'opacity-30'
                }`}
                style={{
                  backgroundColor: cal.color + '30',
                  borderColor: cal.color,
                  borderWidth: '2px',
                  color: isVisible ? cal.color : '#64748b'
                }}
              >
                {cal.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Main vertical line */}
        <div 
          className="absolute bg-slate-600"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            width: '3px',
            top: 0,
            bottom: 0
          }}
        />

        {/* Timeline Items */}
        <div className="space-y-8">
          {allTimelineItems.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              visibleCalendars={visibleCalendars}
              isExpanded={expandedEvent === item.id}
              onToggleExpand={() => setExpandedEvent(expandedEvent === item.id ? null : item.id)}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* End marker */}
        <div className="flex justify-center pt-8">
          <div className="text-center">
            <div 
              className="w-6 h-6 rounded-full bg-slate-600 mx-auto mb-2"
              style={{ boxShadow: '0 0 0 4px #0f172a' }}
            />
            <p className="text-slate-500 text-sm">Ancient History</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ item, visibleCalendars, isExpanded, onToggleExpand, isLeft }) {
  const isEpoch = item.type === 'epoch';
  const activeCalendars = calendars.filter(cal => visibleCalendars.has(cal.id));

  return (
    <div className="relative">
      {/* Calendar year indicators */}
      <div className="grid grid-cols-2 gap-8 mb-2">
        {/* Left side calendars */}
        <div className="text-right space-y-1">
          {activeCalendars.slice(0, Math.ceil(activeCalendars.length / 2)).map(cal => (
            <CalendarYearBadge
              key={cal.id}
              calendar={cal}
              principalYear={item.principalYear}
              isLeft={true}
            />
          ))}
        </div>
        
        {/* Right side calendars */}
        <div className="text-left space-y-1">
          {activeCalendars.slice(Math.ceil(activeCalendars.length / 2)).map(cal => (
            <CalendarYearBadge
              key={cal.id}
              calendar={cal}
              principalYear={item.principalYear}
              isLeft={false}
            />
          ))}
        </div>
      </div>

      {/* Event Content */}
      <div className="grid grid-cols-2 gap-8 items-center">
        {/* Left side */}
        <div className={isLeft ? 'text-right' : ''}>
          {isLeft && (
            <EventCard
              item={item}
              isExpanded={isExpanded}
              onToggleExpand={onToggleExpand}
              isEpoch={isEpoch}
            />
          )}
        </div>

        {/* Right side */}
        <div className={!isLeft ? 'text-left' : ''}>
          {!isLeft && (
            <EventCard
              item={item}
              isExpanded={isExpanded}
              onToggleExpand={onToggleExpand}
              isEpoch={isEpoch}
            />
          )}
        </div>
      </div>

      {/* Center dot on main timeline */}
      <div 
        className="absolute rounded-full"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: isEpoch ? '20px' : '16px',
          height: isEpoch ? '20px' : '16px',
          backgroundColor: isEpoch ? item.calendar.color : '#3b82f6',
          boxShadow: '0 0 0 4px #0f172a',
          border: isEpoch ? '3px solid #0f172a' : '2px solid #0f172a'
        }}
      />
    </div>
  );
}

function CalendarYearBadge({ calendar, principalYear, isLeft }) {
  const year = getCalendarYear(principalYear, calendar);
  const isBefore = year < 0;

  return (
    <div 
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
        isLeft ? 'flex-row-reverse' : 'flex-row'
      }`}
      style={{
        backgroundColor: calendar.color + '20',
        borderColor: calendar.color + '40',
        borderWidth: '1px',
        color: calendar.color
      }}
    >
      <span className="font-semibold">{calendar.abbreviation}</span>
      <span className={isBefore ? 'opacity-60' : ''}>
        {isBefore ? `${Math.abs(year)} before` : year}
      </span>
    </div>
  );
}

function EventCard({ item, isExpanded, onToggleExpand, isEpoch }) {
  if (isEpoch) {
    return (
      <div 
        className="inline-block bg-slate-800 rounded-lg p-4 border-2 max-w-md"
        style={{ 
          borderColor: item.calendar.color,
          backgroundColor: item.calendar.color + '10'
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: item.calendar.color }}
          />
          <h4 className="font-bold text-lg" style={{ color: item.calendar.color }}>
            {item.title}
          </h4>
        </div>
        <p className="text-sm text-slate-400">{item.description}</p>
        {/* <div className="mt-2 text-xs text-slate-500">
          Principal Year {item.principalYear}
        </div> */}
      </div>
    );
  }

  return (
    <div className="inline-block bg-slate-800 rounded-lg border border-slate-600 hover:border-blue-500 transition-colors max-w-md cursor-pointer">
      <div 
        onClick={onToggleExpand}
        className="p-4"
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h4 className="font-bold text-lg text-blue-300 mb-1">{item.title}</h4>
            {/* <div className="text-xs text-slate-500 mb-2">
              Principal Year {item.principalYear}
            </div> */}
            {!isExpanded && item.description && (
              <p className="text-sm text-slate-400 line-clamp-2">
                {item.description}
              </p>
            )}
          </div>
          {isExpanded ? (
            <ChevronUp size={20} className="text-slate-400 flex-shrink-0" />
          ) : (
            <ChevronDown size={20} className="text-slate-400 flex-shrink-0" />
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4 border-t border-slate-700 space-y-3 pt-3">
          {item.description && (
            <p className="text-sm text-slate-300 whitespace-pre-wrap">{item.description}</p>
          )}
          
          {item.significance && (
            <div>
              <span className="text-xs font-semibold text-blue-300">Significance: </span>
              <span className="text-sm text-slate-400">{item.significance}</span>
            </div>
          )}

          {item.location && (
            <div>
              <span className="text-xs font-semibold text-blue-300">Location: </span>
              <span className="text-sm text-slate-400">{item.location}</span>
            </div>
          )}

          {item.participants && item.participants.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-blue-300 mb-1">Key Figures:</div>
              <div className="flex flex-wrap gap-1">
                {item.participants.map((p, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}