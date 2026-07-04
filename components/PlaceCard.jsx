import { MapPin, Clock } from "lucide-react";
import { getPlace } from "@/lib/places";
import { CATEGORY_META, TAG_META, mapsSearchUrl } from "@/lib/trip";

export default function PlaceCard({ item }) {
  const resolved = item.kind === "place" ? { ...getPlace(item.id), tag: getPlace(item.id)?.tag } : { ...item, category: item.category || "activity", tag: "ai" };

  if (!resolved || !resolved.name) return null;

  const category = CATEGORY_META[resolved.category] || CATEGORY_META.activity;
  const tag = TAG_META[resolved.tag] || TAG_META.ai;

  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-4 shadow-soft">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-lg leading-none">{category.emoji}</span>
          <h4 className="font-display text-base leading-snug font-semibold text-ink">{resolved.name}</h4>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold whitespace-nowrap ${
            resolved.tag === "favourite"
              ? "bg-rose-deep/15 text-rose-deep"
              : resolved.tag === "ai"
                ? "bg-lavender/20 text-lavender-deep"
                : "bg-sage/20 text-sage-deep"
          }`}
        >
          {tag.emoji} {tag.label}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-ink-2">{resolved.why}</p>

      {resolved.note && (
        <p className="text-xs text-ink-3 italic">{resolved.note}</p>
      )}

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-3">
        {resolved.area && <span>📍 {resolved.area}</span>}
        {resolved.price && resolved.price !== "—" && <span>{resolved.price}</span>}
        {typeof resolved.rating === "number" && <span>{resolved.rating.toFixed(1)}★</span>}
        {resolved.bestTime && (
          <span className="inline-flex items-center gap-1">
            <Clock size={12} /> {resolved.bestTime}
          </span>
        )}
        {resolved.duration && <span>· {resolved.duration}</span>}
      </div>

      {resolved.reminderOnly ? (
        <p className="text-xs text-ink-3">A reference point, not a planned visit.</p>
      ) : (
        <a
          href={mapsSearchUrl(resolved.name, resolved.area)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-line bg-surface-2 px-3 py-1.5 text-xs font-semibold text-ink-2 transition-colors hover:border-rose-deep/40 hover:text-rose-deep"
        >
          <MapPin size={13} /> Open in Google Maps
        </a>
      )}
    </div>
  );
}
