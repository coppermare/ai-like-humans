export interface BigFiveScores {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

export interface AIPersonality {
  id: string;
  name: string;
  nickname: string;
  scores: BigFiveScores;
  characterMatch: string;
  description: string;
  color: string;
}

export interface AIMatch {
  bestMatch: AIPersonality;
  similarity: number;
  runnerUp: AIPersonality;
  runnerUpSimilarity: number;
  allMatches: Array<{
    ai: AIPersonality;
    similarity: number;
  }>;
}

export interface UserResults {
  scores: BigFiveScores;
  match: AIMatch;
  explanation: string;
  timestamp: number;
  consistency?: number;
}
