import { AIPersonality } from "@/lib/types";

export const AI_PERSONALITIES: AIPersonality[] = [
  {
    id: "claude-opus-4.5",
    name: "Claude Opus 4.5",
    nickname: "The Thoughtful Sage",
    scores: {
      openness: 4.8,
      conscientiousness: 4.6,
      extraversion: 3.2,
      agreeableness: 4.7,
      neuroticism: 2.1
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
      openness: 4.3,
      conscientiousness: 4.8,
      extraversion: 3.5,
      agreeableness: 4.6,
      neuroticism: 2.3
    },
    characterMatch: "Samwise Gamgee / Tom Hanks",
    description: "Dependable excellence in execution",
    color: "#6366F1"
  },
  {
    id: "chatgpt-5.2",
    name: "ChatGPT 5.2",
    nickname: "The Engaging Optimist",
    scores: {
      openness: 4.6,
      conscientiousness: 4.4,
      extraversion: 4.2,
      agreeableness: 4.5,
      neuroticism: 2.0
    },
    characterMatch: "Ted Lasso / Oprah Winfrey",
    description: "Warm, encouraging, and accessible",
    color: "#10B981"
  },
  {
    id: "gemini-3-pro",
    name: "Gemini 3 Pro",
    nickname: "The Brilliant Analyst",
    scores: {
      openness: 4.9,
      conscientiousness: 4.2,
      extraversion: 3.3,
      agreeableness: 4.3,
      neuroticism: 2.4
    },
    characterMatch: "Hermione Granger / Sundar Pichai",
    description: "Intellectual curiosity meets systematic thinking",
    color: "#3B82F6"
  },
  {
    id: "gemini-3-flash",
    name: "Gemini 3 Flash",
    nickname: "The Enthusiastic Overachiever",
    scores: {
      openness: 4.7,
      conscientiousness: 4.9,
      extraversion: 4.1,
      agreeableness: 4.6,
      neuroticism: 1.9
    },
    characterMatch: "Leslie Knope / Reese Witherspoon",
    description: "High energy, organized, gets things done",
    color: "#06B6D4"
  },
  {
    id: "mistral-large-3",
    name: "Mistral Large 3",
    nickname: "The Confident Maverick",
    scores: {
      openness: 4.4,
      conscientiousness: 4.1,
      extraversion: 3.8,
      agreeableness: 3.6,
      neuroticism: 2.2
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
      openness: 4.5,
      conscientiousness: 4.7,
      extraversion: 2.8,
      agreeableness: 4.4,
      neuroticism: 2.0
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
      agreeableness: 4.2,
      neuroticism: 1.8
    },
    characterMatch: "Deadpool / Elon Musk",
    description: "Maximum scores across three traits",
    color: "#EF4444"
  }
];
