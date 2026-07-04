export default function SectionDivider({ emoji = "✦" }) {
  return (
    <div className="mx-auto flex max-w-2xl items-center gap-4 px-6 py-2" aria-hidden="true">
      <span className="h-px flex-1 bg-line" />
      <span className="text-sm text-rose-deep/70">{emoji}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
