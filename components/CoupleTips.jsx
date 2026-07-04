import { Car, Wallet, Camera, Sunset, Umbrella, TrainFront } from "lucide-react";

const ROWS = [
  { key: "travel", label: "Travel time", icon: Car },
  { key: "transport", label: "Metro vs Uber", icon: TrainFront },
  { key: "cost", label: "Approx. cost", icon: Wallet },
  { key: "photoSpot", label: "Best photo spots", icon: Camera },
  { key: "sunset", label: "Sunset", icon: Sunset },
  { key: "rainBackup", label: "Rain backup", icon: Umbrella },
];

export default function CoupleTips({ tips }) {
  return (
    <div className="mt-6 rounded-2xl border border-line bg-surface-2 p-4">
      <h4 className="font-display flex items-center gap-1.5 text-sm font-semibold text-rose-deep">
        ❤️ Couple Tips
      </h4>
      <dl className="mt-3 space-y-2.5">
        {ROWS.map(({ key, label, icon: Icon }) => (
          <div key={key} className="flex gap-2.5 text-sm">
            <Icon size={15} className="mt-0.5 shrink-0 text-ink-3" />
            <div>
              <dt className="font-semibold text-ink-2">{label}</dt>
              <dd className="text-ink-2/90 leading-snug">{tips[key]}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
