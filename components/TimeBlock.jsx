import PlaceCard from "./PlaceCard";

export default function TimeBlock({ block, isLast }) {
  return (
    <div className="relative pl-9">
      <span className="absolute top-1 left-0 flex h-7 w-7 items-center justify-center rounded-full bg-surface-2 text-sm shadow-soft">
        {block.emoji}
      </span>
      {!isLast && <span className="absolute top-9 bottom-[-1.25rem] left-[13px] w-px bg-line" />}

      <h3 className="font-display text-lg font-semibold text-ink">{block.title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-ink-2">{block.text}</p>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {block.items.map((item, i) => (
          <PlaceCard key={item.id || `${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}
