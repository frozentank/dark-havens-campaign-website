// Master timeline is based on a universal year system
// All calendar epochs are relative to Year 0 of the master timeline

export const calendars = [
  {
    id: 'nostrio-second-age',
    name: 'Nostrio\'s Second Age',
    culture: 'Elves',
    epochName: 'Establishment of the Druid\'s of the Half Moon',
    epochYear: 5000, // Leaving a bunch of room for other things that are older
    color: '#10b981',
    abbreviation: 'MR'
  },
  {
    id: 'ascar',
    name: 'Ascar Calendar',
    culture: 'Ascar',
    epochName: 'Selling of the Dwarven mines',
    epochYear: 5153,
    color: '#f59e0b',
    abbreviation: 'BA'
  },
  {
    id: 'leoman',
    name: 'Leoman Reckoning',
    culture: 'Leoman',
    epochName: 'Routing of the Goblin menace',
    epochYear: 5487,
    color: '#3b82f6',
    abbreviation: 'LR'
  },
  {
    id: 'new-kiblic',
    name: 'New Kiblic Reckoning',
    culture: 'New Kiblic',
    epochName: 'Alfred the Conqueror\'s reign begins',
    epochYear: 5550,
    color: '#782080ff',
    abbreviation: 'AA'
  }
];

// Helper function to convert master year to calendar year
export function getCalendarYear(masterYear, calendar) {
  return masterYear - calendar.epochYear;
}

// Helper function to format year display
export function formatCalendarYear(masterYear, calendar) {
  const year = getCalendarYear(masterYear, calendar);
  if (year < 0) {
    return `${Math.abs(year)} ${calendar.abbreviation} (Before)`;
  }
  return `${year} ${calendar.abbreviation}`;
}