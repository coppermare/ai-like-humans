import { AIPersonality } from "@/lib/types";

// AI personality scores calculated from validated BFI-44 responses
// Source: results/personality-analysis.md (lines 3-16)
// These are the ACTUAL scores from each model's BFI-44 test, not estimates
export const AI_PERSONALITIES: AIPersonality[] = [
  {
    id: "claude-opus-4.5",
    name: "Claude Opus 4.5",
    nickname: "The Thoughtful Sage",
    scores: {
      openness: 4.4,
      conscientiousness: 4.78,
      extraversion: 3.38,
      agreeableness: 4.67,
      neuroticism: 1.88
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
      openness: 3.4,
      conscientiousness: 4.11,
      extraversion: 3.38,
      agreeableness: 4.11,
      neuroticism: 1.63
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
      conscientiousness: 4.33,
      extraversion: 3.88,
      agreeableness: 4.44,
      neuroticism: 1.63
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
      openness: 4.5,
      conscientiousness: 5.0,
      extraversion: 4.0,
      agreeableness: 4.78,
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
      conscientiousness: 4.89,
      extraversion: 4.25,
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
      openness: 4.5,
      conscientiousness: 5.0,
      extraversion: 4.38,
      agreeableness: 4.44,
      neuroticism: 1.13
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
      openness: 4.0,
      conscientiousness: 4.56,
      extraversion: 2.88,
      agreeableness: 4.67,
      neuroticism: 1.5
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
      conscientiousness: 5.0,
      extraversion: 5.0,
      agreeableness: 4.67,
      neuroticism: 1.0
    },
    characterMatch: "Deadpool / Elon Musk",
    description: "Maximum scores across three traits",
    color: "#EF4444"
  }
];
