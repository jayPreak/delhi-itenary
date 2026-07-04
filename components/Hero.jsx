import { Heart } from "lucide-react";
import { TRIP } from "@/lib/trip";
import Countdown from "./Countdown";
import FloatingHearts from "./FloatingHearts";
import WeatherCard from "./WeatherCard";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-10 sm:pt-20">
      <div
        className="absolute inset-0 -z-[1]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, var(--rose) 0%, transparent 70%), radial-gradient(55% 45% at 85% 15%, var(--lavender) 0%, transparent 70%), radial-gradient(50% 40% at 10% 10%, var(--peach) 0%, transparent 70%)",
          opacity: 0.22,
        }}
        aria-hidden="true"
      />
      <FloatingHearts />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/80 px-3.5 py-1 text-xs font-medium text-ink-2 shadow-soft backdrop-blur">
          <Heart size={12} className="text-rose-deep" fill="currentColor" />
          A little scrapbook for us
        </span>

        <h1 className="font-display mt-5 text-4xl leading-tight font-semibold text-ink sm:text-6xl">
          {TRIP.title}
        </h1>
        <p className="font-display mt-1 text-2xl italic text-rose-deep sm:text-3xl">{TRIP.subtitle}</p>

        <p className="mx-auto mt-4 max-w-md text-sm text-ink-2 sm:text-base">
          {TRIP.startLabel} → {TRIP.endLabel}
        </p>

        <div className="mt-7">
          <Countdown />
        </div>

        <blockquote className="font-display mx-auto mt-8 max-w-md text-lg leading-relaxed text-ink-2 italic sm:text-xl">
          &ldquo;{TRIP.quote}&rdquo;
        </blockquote>

        <div className="mx-auto mt-8 max-w-xs">
          <WeatherCard />
        </div>
      </div>
    </section>
  );
}
