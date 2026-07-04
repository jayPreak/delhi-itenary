import { MapPin } from "lucide-react";
import { mapsSearchUrl } from "@/lib/trip";

export default function MapFab() {
  return (
    <a
      href={mapsSearchUrl("Gurgaon, Haryana, India")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Google Maps"
      className="fixed right-4 bottom-20 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-rose-deep text-white shadow-lift transition-transform hover:scale-105 active:scale-95 sm:right-6 sm:bottom-6"
      style={{ height: 52, width: 52 }}
    >
      <MapPin size={22} />
    </a>
  );
}
