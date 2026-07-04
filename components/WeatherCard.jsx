import { CloudRain, Sun, Droplets } from "lucide-react";

export default function WeatherCard() {
  return (
    <div className="rounded-3xl border border-line bg-surface p-5 shadow-soft">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-3">
        <CloudRain size={14} />
        <span>Typical mid-July weather · Delhi NCR</span>
      </div>
      <p className="mt-1 text-[11px] text-ink-3">
        This is seasonal reference, not a live forecast check closer to the date.
      </p>
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="flex flex-col items-center gap-1">
          <Sun size={20} className="text-peach-deep" />
          <span className="font-display text-lg font-semibold">28–34°C</span>
          <span className="text-[11px] text-ink-3">day / warm</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Droplets size={20} className="text-sky" />
          <span className="font-display text-lg font-semibold">Humid</span>
          <span className="text-[11px] text-ink-3">monsoon season</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <CloudRain size={20} className="text-lavender-deep" />
          <span className="font-display text-lg font-semibold">Showers</span>
          <span className="text-[11px] text-ink-3">possible, brief</span>
        </div>
      </div>
    </div>
  );
}
