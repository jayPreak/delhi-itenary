"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import TimeBlock from "./TimeBlock";
import CoupleTips from "./CoupleTips";

export default function DayCard({ day, index, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-soft">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
      >
        <span className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose/15 text-lg font-semibold text-rose-deep">
          {index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold tracking-wide text-ink-3 uppercase">{day.label}</p>
          <h3 className="font-display truncate text-lg font-semibold text-ink sm:text-xl">{day.heading}</h3>
          <p className="mt-0.5 text-sm text-ink-3">
            {day.blocks.map((b) => b.emoji).join("  ")}
          </p>
        </div>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 text-ink-3">
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-7 px-5 pb-6 sm:px-6">
              {day.blocks.map((block, i) => (
                <TimeBlock key={block.key} block={block} isLast={i === day.blocks.length - 1} />
              ))}
              <CoupleTips tips={day.tips} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
