"use client";

import { useEffect, useState } from "react";
import { Home, CalendarHeart, BookHeart, Heart } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#top", label: "Home", icon: Home },
  { href: "#itinerary", label: "Itinerary", icon: CalendarHeart },
  { href: "#saved", label: "Saved", icon: BookHeart },
];

export default function NavBar() {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop / tablet top nav */}
      <header className="sticky top-0 z-40 hidden border-b border-line bg-bg/85 backdrop-blur-md sm:block">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
          <a href="#top" className="font-display text-lg font-semibold text-ink">
            Jayesh <Heart className="mb-0.5 inline text-rose-deep" size={15} fill="currentColor" /> Ishita
          </a>
          <nav className="flex items-center gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  active === l.href ? "bg-rose/15 text-rose-deep" : "text-ink-2 hover:bg-surface-2"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] sm:hidden">
        <div className="mx-auto flex max-w-md items-center justify-around px-2 py-1.5">
          {LINKS.map((l) => {
            const Icon = l.icon;
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`flex flex-col items-center gap-0.5 rounded-2xl px-4 py-1.5 text-[11px] font-medium transition-colors ${
                  isActive ? "text-rose-deep" : "text-ink-3"
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.4 : 2} />
                {l.label}
              </a>
            );
          })}
          <ThemeToggle className="!h-8 !w-8" />
        </div>
      </nav>
    </>
  );
}
