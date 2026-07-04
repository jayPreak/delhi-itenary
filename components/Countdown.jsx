"use client";

import { useMemo, useSyncExternalStore } from "react";
import { TRIP } from "@/lib/trip";

function diff(target) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
    done: ms <= 0,
  };
}

function createCountdownStore(target) {
  let snapshot = diff(target);
  const listeners = new Set();
  let intervalId = null;

  function tick() {
    snapshot = diff(target);
    listeners.forEach((l) => l());
    if (snapshot.done && intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  return {
    subscribe(listener) {
      listeners.add(listener);
      if (intervalId === null && !snapshot.done) {
        intervalId = setInterval(tick, 1000);
      }
      // Resync once right after hydration the store may have been created
      // a render or two before this subscription attaches.
      const raf = requestAnimationFrame(() => listener());
      return () => {
        listeners.delete(listener);
        cancelAnimationFrame(raf);
        if (listeners.size === 0 && intervalId !== null) {
          clearInterval(intervalId);
          intervalId = null;
        }
      };
    },
    getSnapshot() {
      return snapshot;
    },
    getServerSnapshot() {
      return null;
    },
  };
}

export default function Countdown() {
  const target = useMemo(() => new Date(TRIP.startDate).getTime(), []);
  const store = useMemo(() => createCountdownStore(target), [target]);
  const time = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);

  if (!time) {
    return <div className="h-[76px]" aria-hidden="true" />;
  }

  if (time.done) {
    return (
      <p className="font-display text-xl italic text-rose-deep">We&rsquo;re here. Go enjoy it. 🎉</p>
    );
  }

  const units = [
    { label: "days", value: time.days },
    { label: "hrs", value: time.hours },
    { label: "min", value: time.minutes },
    { label: "sec", value: time.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-2.5 sm:gap-3.5" role="timer" aria-live="off">
      {units.map((u) => (
        <div
          key={u.label}
          className="flex w-14 flex-col items-center rounded-2xl border border-line bg-surface/80 py-2 shadow-soft backdrop-blur sm:w-16"
        >
          <span className="font-display text-xl font-semibold tabular-nums text-ink sm:text-2xl">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-wide text-ink-3">{u.label}</span>
        </div>
      ))}
    </div>
  );
}
