import { PLACES, placesByCategory } from "@/lib/places";
import { CATEGORY_META } from "@/lib/trip";
import { DAYS } from "@/lib/itinerary";
import SavedPlaceCard from "./SavedPlaceCard";

function buildPlannedMap() {
  const map = new Map();
  for (const day of DAYS) {
    for (const block of day.blocks) {
      for (const item of block.items) {
        if (item.kind === "place" && !map.has(item.id)) {
          map.set(item.id, day.label);
        }
      }
    }
  }
  return map;
}

const CATEGORY_ORDER = ["cafe", "bar", "restaurant", "park", "heritage", "market", "activity"];

export default function SavedPlacesSection() {
  const grouped = placesByCategory();
  const plannedMap = buildPlannedMap();

  return (
    <section id="saved" className="mx-auto max-w-3xl scroll-mt-16 px-4 py-10 sm:px-6">
      <div className="mb-7 text-center">
        <span className="text-xs font-semibold tracking-wide text-rose-deep uppercase">Every pin, accounted for</span>
        <h2 className="font-display mt-1 text-3xl font-semibold text-ink sm:text-4xl">Jayesh&rsquo;s Saved Places</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-ink-2">
          All {PLACES.length} spots from the saved Google Maps list, grouped by type. Some made it into the
          itinerary above; the rest are here as reminders for another time.
        </p>
      </div>

      <div className="space-y-9">
        {CATEGORY_ORDER.filter((key) => grouped[key]?.length).map((key) => {
          const meta = CATEGORY_META[key];
          return (
            <div key={key}>
              <h3 className="font-display mb-3 flex items-center gap-2 text-lg font-semibold text-ink">
                <span>{meta.emoji}</span> {meta.label}
                <span className="text-sm font-normal text-ink-3">({grouped[key].length})</span>
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[key].map((place) => (
                  <SavedPlaceCard key={place.id} place={place} plannedLabel={plannedMap.get(place.id)} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
