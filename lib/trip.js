export const TRIP = {
  title: "Jayesh ❤️ Ishita",
  subtitle: "Delhi Diaries",
  tagline: "Our Delhi & Gurgaon weekend",
  startDate: "2026-07-15T18:00:00+05:30",
  endDate: "2026-07-19T21:00:00+05:30",
  startLabel: "Wed, 15 July 2026 evening",
  endLabel: "Sun, 19 July 2026 evening",
  quote: "Some trips are about signtseenig this one is about you and me drinking 😳",
};

export const CATEGORY_META = {
  cafe: { label: "Cafes", emoji: "☕" },
  bar: { label: "Bars", emoji: "🍸" },
  restaurant: { label: "Restaurants", emoji: "🍴" },
  park: { label: "Parks", emoji: "🌳" },
  heritage: { label: "Heritage", emoji: "🏛" },
  market: { label: "Markets", emoji: "🛍" },
  activity: { label: "Activities", emoji: "🎲" },
};

export const TAG_META = {
  jayesh: { label: "Jayesh Suggestion", emoji: "❤️" },
  favourite: { label: "Jayesh's Favourite", emoji: "❤️" },
  ai: { label: "AI Suggestion", emoji: "✨" },
};

export function mapsSearchUrl(name, areaHint) {
  const q = areaHint ? `${name}, ${areaHint}` : name;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}
