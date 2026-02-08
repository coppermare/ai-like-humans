import { useEffect } from "react";
import { Answer, Question } from "@/lib/bfi-10";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuestionStepProps {
  question: Question;
  currentAnswer: Answer | null;
  onAnswer: (answer: Answer) => void;
  onContinue: () => void;
  canGoBack: boolean;
  onBack?: () => void;
  currentStep: number;
  totalSteps: number;
}

export const QuestionStep = ({
  question,
  currentAnswer,
  onAnswer,
  onContinue,
  canGoBack,
  onBack,
  currentStep,
  totalSteps
}: QuestionStepProps) => {
  const getOptionLabel = (option: Answer): string => {
    switch (option) {
      case 1:
        return `Very ${question.textA.toLowerCase()}`;
      case 2:
        return `Somewhat ${question.textA.toLowerCase()}`;
      case 3:
        return "Neutral / Both";
      case 4:
        return `Somewhat ${question.textB.toLowerCase()}`;
      case 5:
        return `Very ${question.textB.toLowerCase()}`;
    }
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        if (currentAnswer) onContinue();
      }

      if (event.key === "Escape" && canGoBack) {
        onBack?.();
      }

      if (["1", "2", "3", "4", "5"].includes(event.key)) {
        onAnswer(parseInt(event.key, 10) as Answer);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentAnswer, onContinue, onAnswer, onBack, canGoBack]);

  useEffect(() => {
    const firstButton = document.querySelector<HTMLButtonElement>(
      "[data-answer-button]"
    );
    firstButton?.focus();
  }, [question.id]);

  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <div className="w-full sticky top-0 z-10 bg-neutral-950 pt-2 pb-4">
        <div className="max-w-xl w-full mx-auto">
          <div className="flex items-center justify-center gap-3 relative">
            <button
              onClick={canGoBack ? onBack : undefined}
              aria-label="Go back"
              aria-disabled={!canGoBack}
              className={`absolute left-0 flex items-center justify-center h-8 w-8 rounded-full text-neutral-400 transition-colors ${
                canGoBack
                  ? "hover:text-neutral-200 hover:bg-neutral-900/60"
                  : "opacity-40 cursor-default"
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div
              className="h-1.5 w-48 bg-neutral-800 rounded-full overflow-hidden"
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
        </div>
      </div>

      <div className="max-w-xl w-full space-y-10 flex flex-col flex-1">
        <div className="flex-1 overflow-y-auto pr-2 space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-neutral-100">
            I see myself as someone who is...
          </h2>

          <div className="space-y-3">
            {([1, 2, 3, 4, 5] as Answer[]).map((option) => (
              <button
                key={option}
                data-answer-button={option === 1 ? "true" : undefined}
                onClick={() => onAnswer(option)}
                className={`w-full p-4 rounded-lg border text-left transition-all ${
                  currentAnswer === option
                    ? "border-neutral-200 bg-neutral-800 text-neutral-100"
                    : "border-neutral-800 bg-neutral-900/40 text-neutral-300 hover:border-neutral-600"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{getOptionLabel(option)}</span>
                  <span className="text-xs text-neutral-500">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {currentAnswer && (
          <div className="sticky bottom-4 bg-neutral-950 pt-4">
            <Button size="lg" className="w-full" onClick={onContinue}>
              Continue →
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
