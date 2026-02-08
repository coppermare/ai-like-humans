"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { BFI_10_QUESTIONS, Answer, Answers } from "@/lib/bfi-10";
import { AI_PERSONALITIES } from "@/lib/ai-personalities";
import {
  calculateBigFive,
  encodeResults,
  findBestMatch,
  generateMatchExplanation,
  validateAnswers,
  calculateConsistency
} from "@/lib/scoring";
import { saveResults } from "@/lib/results-storage";
import { TestProvider, useTest } from "@/app/test/TestContext";
import { TestIntro } from "@/app/test/components/TestIntro";
import { QuestionStep } from "@/app/test/components/QuestionStep";
import { ProcessingScreen } from "@/app/test/components/ProcessingScreen";

const TestFlow = () => {
  const router = useRouter();
  const { state, start, setAnswer, nextStep, prevStep, reset } = useTest();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentQuestion = useMemo(
    () => BFI_10_QUESTIONS[state.currentStep],
    [state.currentStep]
  );

  const currentAnswer = state.answers[state.currentStep] as Answer | null;

  useEffect(() => {
    if (!state.isComplete) return;

    const validation = validateAnswers(state.answers);
    if (!validation.isValid) {
      setError(validation.errors[0] || "Please answer all questions.");
      reset();
      return;
    }

    setIsProcessing(true);

    const timer = window.setTimeout(() => {
      try {
        const answers = state.answers as unknown as Answers;
        const scores = calculateBigFive(answers, BFI_10_QUESTIONS);
        const match = findBestMatch(scores, AI_PERSONALITIES);
        const explanation = generateMatchExplanation(
          scores,
          match.bestMatch.scores
        );
        const consistency = calculateConsistency(answers, BFI_10_QUESTIONS);

        const results = {
          scores,
          match,
          explanation,
          timestamp: Date.now(),
          consistency
        };

        saveResults(results);

        let encoded = "";
        try {
          encoded = encodeResults(results);
        } catch (error) {
          console.error("Failed to encode results", error);
        }

        if (encoded) {
          router.push(`/results?data=${encodeURIComponent(encoded)}`);
        } else {
          router.push("/results");
        }
      } catch (error) {
        console.error("Failed to calculate results", error);
        setError("Something went wrong. Please try again.");
        setIsProcessing(false);
      }
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [state.isComplete, state.answers, router, reset]);

  if (!state.hasStarted) {
    return <TestIntro onStart={start} />;
  }

  if (isProcessing) {
    return <ProcessingScreen />;
  }

  return (
    <div className="bg-neutral-950 text-neutral-100">
      {error && (
        <div className="max-w-xl mx-auto px-6 pb-4 text-sm text-red-400">
          {error}
        </div>
      )}
      <QuestionStep
        question={currentQuestion}
        currentAnswer={currentAnswer}
        onAnswer={(answer) => {
          setAnswer(state.currentStep, answer);
          setError(null);
        }}
        onContinue={nextStep}
        canGoBack
        onBack={() => {
          if (state.currentStep === 0) {
            reset();
          } else {
            prevStep();
          }
        }}
        currentStep={state.currentStep}
        totalSteps={10}
      />
    </div>
  );
};

export default function TestPage() {
  return (
    <TestProvider>
      <TestFlow />
    </TestProvider>
  );
}
