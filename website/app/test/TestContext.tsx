"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Answer } from "@/lib/bfi-10";

export interface TestState {
  currentStep: number;
  answers: (Answer | null)[];
  startTime: number;
  isComplete: boolean;
  hasStarted: boolean;
}

interface TestContextValue {
  state: TestState;
  start: () => void;
  setAnswer: (index: number, answer: Answer) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
}

const TestContext = createContext<TestContextValue | null>(null);

const STORAGE_KEY = "ai-personality-test-progress";

const createInitialState = (): TestState => ({
  currentStep: 0,
  answers: Array.from({ length: 10 }, () => null),
  startTime: Date.now(),
  isComplete: false,
  hasStarted: false
});

const loadProgress = (): TestState | null => {
  if (typeof window === "undefined") return null;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) return null;

  try {
    const parsed = JSON.parse(saved) as TestState;
    const isFresh = Date.now() - parsed.startTime < 3600000;
    const isInProgress = !parsed.isComplete;
    if (isFresh && isInProgress) {
      return parsed;
    }
  } catch (error) {
    console.error("Failed to load progress:", error);
  }

  window.localStorage.removeItem(STORAGE_KEY);
  return null;
};

const saveProgress = (state: TestState) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const TestProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<TestState>(createInitialState);
  const savedProgressRef = useRef<TestState | null>(null);

  useEffect(() => {
    const loaded = loadProgress();
    if (loaded) {
      savedProgressRef.current = loaded;
      setState({
        ...loaded,
        hasStarted: false
      });
    }
  }, []);

  useEffect(() => {
    saveProgress(state);
  }, [state]);

  const start = useCallback(() => {
    if (savedProgressRef.current) {
      setState({
        ...savedProgressRef.current,
        hasStarted: true
      });
      return;
    }
    setState({
      ...createInitialState(),
      hasStarted: true
    });
  }, []);

  const setAnswer = useCallback((index: number, answer: Answer) => {
    setState((prev) => {
      const nextAnswers = [...prev.answers];
      nextAnswers[index] = answer;
      return {
        ...prev,
        answers: nextAnswers
      };
    });
  }, []);

  const nextStep = useCallback(() => {
    setState((prev) => {
      if (prev.currentStep >= 9) {
        return {
          ...prev,
          isComplete: true
        };
      }
      return {
        ...prev,
        currentStep: prev.currentStep + 1
      };
    });
  }, []);

  const prevStep = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentStep: Math.max(prev.currentStep - 1, 0)
    }));
  }, []);

  const reset = useCallback(() => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setState(createInitialState());
  }, []);

  const value = useMemo(
    () => ({
      state,
      start,
      setAnswer,
      nextStep,
      prevStep,
      reset
    }),
    [state, start, setAnswer, nextStep, prevStep, reset]
  );

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};

export const useTest = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error("useTest must be used within TestProvider");
  }
  return context;
};
