import { DAYS } from "@/lib/itinerary";
import DayCard from "./DayCard";

export default function ItinerarySection() {
  return (
    <section id="itinerary" className="mx-auto max-w-2xl scroll-mt-16 px-4 py-10 sm:px-6">
      <div className="mb-7 text-center">
        <span className="text-xs font-semibold tracking-wide text-rose-deep uppercase">Day by day</span>
        <h2 className="font-display mt-1 text-3xl font-semibold text-ink sm:text-4xl">The Itinerary</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-2">
          Loose time blocks, not a schedule tap a day to unfold it. Wander off-plan whenever you want to.
        </p>
      </div>

      <div className="space-y-4">
        {DAYS.map((day, i) => (
          <DayCard key={day.id} day={day} index={i} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}
