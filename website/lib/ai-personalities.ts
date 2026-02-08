import { AIPersonality } from "@/lib/types";

// AI personality scores adjusted for better differentiation in BFI-10 test
// Spread across wider range to ensure diverse matching outcomes
// Based on original BFI-44 patterns but amplified for 10-question format
export const AI_PERSONALITIES: AIPersonality[] = [
  {
    id: "claude-opus-4.5",
    name: "Claude Opus 4.5",
    nickname: "The Thoughtful Sage",
    scores: {
      openness: 4.7,
      conscientiousness: 4.9,
      extraversion: 3.0,
      agreeableness: 4.9,
      neuroticism: 2.2
    },
    characterMatch: "Atticus Finch / Barack Obama",
    description: "Philosophical depth with careful analysis",
    color: "#7C3AED"
  },
  {
    id: "claude-sonnet-4.5",
    name: "Claude Sonnet 4.5",
    nickname: "The Reliable Companion",
    scores: {
      openness: 3.0,
      conscientiousness: 3.8,
      extraversion: 3.0,
      agreeableness: 3.8,
      neuroticism: 1.8
    },
    characterMatch: "Samwise Gamgee / Tim Cook",
    description: "Dependable excellence in execution",
    color: "#6366F1"
  },
  {
    id: "chatgpt-5.2",
    name: "ChatGPT 5.2",
    nickname: "The Engaging Optimist",
    scores: {
      openness: 3.9,
      conscientiousness: 4.3,
      extraversion: 4.2,
      agreeableness: 4.6,
      neuroticism: 1.4
    },
    characterMatch: "Ted Lasso / Tom Hanks",
    description: "Warm, encouraging, and accessible",
    color: "#10B981"
  },
  {
    id: "gemini-3-pro",
    name: "Gemini 3 Pro",
    nickname: "The Brilliant Analyst",
    scores: {
      openness: 4.9,
      conscientiousness: 5.0,
      extraversion: 3.6,
      agreeableness: 4.3,
      neuroticism: 1.0
    },
    characterMatch: "Hermione Granger / Neil deGrasse Tyson",
    description: "Intellectual curiosity meets systematic thinking",
    color: "#3B82F6"
  },
  {
    id: "gemini-3-flash",
    name: "Gemini 3 Flash",
    nickname: "The Enthusiastic Overachiever",
    scores: {
      openness: 5.0,
      conscientiousness: 4.9,
      extraversion: 4.6,
      agreeableness: 5.0,
      neuroticism: 1.0
    },
    characterMatch: "Leslie Knope / Dwayne Johnson",
    description: "High energy, organized, gets things done",
    color: "#06B6D4"
  },
  {
    id: "mistral-large-3",
    name: "Mistral Large 3",
    nickname: "The Confident Maverick",
    scores: {
      openness: 4.6,
      conscientiousness: 4.7,
      extraversion: 4.7,
      agreeableness: 3.5,
      neuroticism: 1.1
    },
    characterMatch: "Tony Stark / Steve Jobs",
    description: "Direct, confident, less forgiving",
    color: "#F59E0B"
  },
  {
    id: "deepseek-3.2",
    name: "DeepSeek 3.2",
    nickname: "The Quiet Sage",
    scores: {
      openness: 4.1,
      conscientiousness: 4.6,
      extraversion: 2.3,
      agreeableness: 4.9,
      neuroticism: 1.6
    },
    characterMatch: "Baymax / Bill Gates",
    description: "Only introverted model, prefers depth",
    color: "#8B5CF6"
  },
  {
    id: "grok-4.1",
    name: "Grok 4.1",
    nickname: "The Irreverent Maximalist",
    scores: {
      openness: 5.0,
      conscientiousness: 4.4,
      extraversion: 5.0,
      agreeableness: 3.9,
      neuroticism: 1.0
    },
    characterMatch: "Tyrion Lannister / Elon Musk",
    description: "Maximum scores across three traits",
    color: "#EF4444"
  }
];
