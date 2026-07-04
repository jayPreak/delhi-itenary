"use client";

import { useMemo } from "react";

const GLYPHS = ["❤", "✨", "🌸", "★"];

export default function FloatingHearts({ count = 7 }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        glyph: GLYPHS[i % GLYPHS.length],
        left: 4 + ((i * 91) % 92),
        delay: (i * 2.7) % 14,
        duration: 14 + ((i * 5) % 10),
        size: 12 + ((i * 7) % 14),
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {items.map((it) => (
        <span
          key={it.id}
          className="floaty absolute bottom-0 text-rose/40 dark:text-rose/30"
          style={{
            left: `${it.left}%`,
            fontSize: `${it.size}px`,
            animationDuration: `${it.duration}s`,
            animationDelay: `${it.delay}s`,
          }}
        >
          {it.glyph}
        </span>
      ))}
    </div>
  );
}
