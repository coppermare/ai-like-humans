import { UserResults } from "@/lib/types";

const STORAGE_KEY = "ai-personality-test-results";

export const saveResults = (results: UserResults) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
};

export const loadResults = (): UserResults | null => {
  if (typeof window === "undefined") return null;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) return null;
  try {
    return JSON.parse(saved) as UserResults;
  } catch (error) {
    console.error("Failed to parse saved results:", error);
    return null;
  }
};

export const clearResults = () => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
};
