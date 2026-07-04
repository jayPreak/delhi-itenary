import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ItinerarySection from "@/components/ItinerarySection";
import SavedPlacesSection from "@/components/SavedPlacesSection";
import SectionDivider from "@/components/SectionDivider";
import MapFab from "@/components/MapFab";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pb-24 sm:pb-16">
        <Hero />
        <SectionDivider emoji="✦ ❤ ✦" />
        <ItinerarySection />
        <SectionDivider emoji="✦ ❤ ✦" />
        <SavedPlacesSection />
        <footer className="mx-auto max-w-2xl px-6 pt-6 pb-4 text-center text-xs text-ink-3">
          Made with a little too much love, for our Delhi weekend. 🌸
        </footer>
      </main>
      <MapFab />
    </>
  );
}
