interface TestProgressProps {
  currentStep: number;
  totalSteps: number;
}

export const TestProgress = ({ currentStep, totalSteps }: TestProgressProps) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full max-w-xl mx-auto space-y-2">
      <div className="flex items-center justify-between text-xs text-neutral-400">
        <span>
          Question {currentStep + 1} of {totalSteps}
        </span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div
        className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={currentStep + 1}
        aria-valuemin={1}
        aria-valuemax={totalSteps}
        aria-label={`Question ${currentStep + 1} of ${totalSteps}`}
      >
        <div
          className="h-full bg-neutral-200 transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
