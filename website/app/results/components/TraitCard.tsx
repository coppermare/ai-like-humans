interface TraitCardProps {
  label: string;
  score: number;
  description: string;
}

export const TraitCard = ({ label, score, description }: TraitCardProps) => {
  return (
    <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-neutral-200">{label}</p>
        <span className="text-sm text-neutral-400">{score.toFixed(1)}</span>
      </div>
      <div className="h-2 bg-neutral-800 rounded-full overflow-hidden mt-3">
        <div
          className="h-full bg-neutral-200"
          style={{ width: `${(score / 5) * 100}%` }}
        />
      </div>
      <p className="text-xs text-neutral-500 mt-3">{description}</p>
    </div>
  );
};
