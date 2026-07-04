"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

function subscribe(callback) {
  window.addEventListener("theme-changed", callback);
  // Re-check right after hydration: the inline head script may have already
  // set the "dark" class before React attached, so the server snapshot
  // (assumed light) needs a one-time resync against the real DOM state.
  const raf = requestAnimationFrame(callback);
  return () => {
    window.removeEventListener("theme-changed", callback);
    cancelAnimationFrame(raf);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

export default function ThemeToggle({ className = "" }) {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    window.dispatchEvent(new Event("theme-changed"));
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink-2 shadow-soft transition-transform active:scale-90 ${className}`}
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
