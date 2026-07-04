import { MapPin } from "lucide-react";
import { mapsSearchUrl, TAG_META } from "@/lib/trip";

export default function SavedPlaceCard({ place, plannedLabel }) {
  const tag = TAG_META[place.tag] || TAG_META.jayesh;

  return (
    <div className="flex flex-col gap-1.5 rounded-2xl border border-line bg-surface p-3.5 shadow-soft">
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-display text-sm leading-snug font-semibold text-ink">{place.name}</h4>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap ${
            place.tag === "favourite" ? "bg-rose-deep/15 text-rose-deep" : "bg-sage/20 text-sage-deep"
          }`}
        >
          {tag.emoji}
        </span>
      </div>

      <p className="text-xs leading-relaxed text-ink-2">{place.why}</p>
      {place.note && <p className="text-[11px] text-ink-3 italic">{place.note}</p>}

      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-ink-3">
        {place.area && <span>📍 {place.area}</span>}
        {place.price && place.price !== "—" && <span>{place.price}</span>}
        {typeof place.rating === "number" && <span>{place.rating.toFixed(1)}★</span>}
      </div>

      <p className="text-[11px] font-medium text-lavender-deep">
        {place.reminderOnly ? "Reference point not a planned visit" : plannedLabel ? `Planned ${plannedLabel}` : "Not scheduled a reminder for later"}
      </p>

      {!place.reminderOnly && (
        <a
          href={mapsSearchUrl(place.name, place.area)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0.5 inline-flex w-fit items-center gap-1 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[11px] font-semibold text-ink-2 transition-colors hover:border-rose-deep/40 hover:text-rose-deep"
        >
          <MapPin size={11} /> Maps
        </a>
      )}
    </div>
  );
}
