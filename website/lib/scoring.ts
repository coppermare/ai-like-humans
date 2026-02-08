import { Answer, Answers, Question } from "@/lib/bfi-10";
import { AIMatch, BigFiveScores, UserResults, AIPersonality } from "@/lib/types";

export const reverseScore = (answer: Answer): Answer => {
  return (6 - answer) as Answer;
};

export const applyReverseScoring = (
  answers: Answers,
  questions: Question[]
): number[] => {
  return answers.map((answer, index) => {
    const question = questions[index];
    return question.reverse ? reverseScore(answer) : answer;
  });
};

export const calculateBigFive = (
  answers: Answers,
  questions: Question[]
): BigFiveScores => {
  const scored = applyReverseScoring(answers, questions);
  const traitAnswers: Record<string, number[]> = {
    O: [],
    C: [],
    E: [],
    A: [],
    N: []
  };

  scored.forEach((score, index) => {
    const trait = questions[index].trait;
    traitAnswers[trait].push(score);
  });

  const mean = (values: number[]): number => {
    return values.reduce((sum, val) => sum + val, 0) / values.length;
  };

  return {
    openness: mean(traitAnswers.O),
    conscientiousness: mean(traitAnswers.C),
    extraversion: mean(traitAnswers.E),
    agreeableness: mean(traitAnswers.A),
    neuroticism: mean(traitAnswers.N)
  };
};

export const calculateSimilarity = (
  userScores: BigFiveScores,
  aiScores: BigFiveScores
): number => {
  const dimensions: (keyof BigFiveScores)[] = [
    "openness",
    "conscientiousness",
    "extraversion",
    "agreeableness",
    "neuroticism"
  ];

  const squaredDifferences = dimensions.map((trait) => {
    const diff = userScores[trait] - aiScores[trait];
    return diff * diff;
  });

  const sumSquares = squaredDifferences.reduce((sum, val) => sum + val, 0);
  const distance = Math.sqrt(sumSquares);
  const maxDistance = Math.sqrt(5 * Math.pow(4, 2));
  const similarity = (1 - distance / maxDistance) * 100;

  return Math.round(similarity);
};

export const findBestMatch = (
  userScores: BigFiveScores,
  aiPersonalities: AIPersonality[]
): AIMatch => {
  const matches = aiPersonalities.map((ai) => ({
    ai,
    similarity: calculateSimilarity(userScores, ai.scores)
  }));

  matches.sort((a, b) => b.similarity - a.similarity);

  return {
    bestMatch: matches[0].ai,
    similarity: matches[0].similarity,
    runnerUp: matches[1].ai,
    runnerUpSimilarity: matches[1].similarity,
    allMatches: matches
  };
};

export const generateMatchExplanation = (
  userScores: BigFiveScores,
  aiScores: BigFiveScores
): string => {
  const traitLabels: Record<keyof BigFiveScores, string> = {
    openness: "Openness",
    conscientiousness: "Conscientiousness",
    extraversion: "Extraversion",
    agreeableness: "Agreeableness",
    neuroticism: "Emotional Stability"
  };

  const similarTraits: string[] = [];

  Object.entries(traitLabels).forEach(([trait, label]) => {
    const key = trait as keyof BigFiveScores;
    const diff = Math.abs(userScores[key] - aiScores[key]);
    if (diff <= 0.7) {
      similarTraits.push(label);
    }
  });

  if (similarTraits.length >= 3) {
    return `You both score similarly on ${similarTraits.slice(0, 3).join(", ")}.`;
  }

  if (similarTraits.length > 0) {
    return `You share similar levels of ${similarTraits.join(" and ")}.`;
  }

  return "You share a balanced personality profile.";
};

export const validateAnswers = (
  answers: (Answer | null)[]
): { isValid: boolean; errors: string[]; warnings: string[] } => {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (answers.some((answer) => answer === null)) {
    errors.push("Test incomplete: All questions must be answered.");
  }

  if (answers.length !== 10) {
    errors.push(`Expected 10 answers, got ${answers.length}.`);
  }

  answers.forEach((answer, i) => {
    if (answer !== null && (answer < 1 || answer > 5)) {
      errors.push(`Question ${i + 1}: Invalid answer ${answer}.`);
    }
  });

  const nonNull = answers.filter((answer): answer is Answer => answer !== null);
  const unique = new Set(nonNull);

  if (unique.size === 1 && nonNull.length === 10) {
    warnings.push(
      "You answered the same for all questions. Your results may not be accurate."
    );
  }

  let alternating = 0;
  for (let i = 1; i < nonNull.length; i += 1) {
    if (Math.abs(nonNull[i] - nonNull[i - 1]) >= 3) {
      alternating += 1;
    }
  }

  if (alternating >= 7) {
    warnings.push(
      "Response pattern detected. Please answer authentically for best results."
    );
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

export const calculateConsistency = (
  answers: Answers,
  questions: Question[]
): number => {
  const traitPairs: Record<string, number[]> = {
    O: [],
    C: [],
    E: [],
    A: [],
    N: []
  };

  const scored = applyReverseScoring(answers, questions);
  scored.forEach((score, i) => {
    traitPairs[questions[i].trait].push(score);
  });

  let totalCorr = 0;
  Object.values(traitPairs).forEach((pair) => {
    if (pair.length === 2) {
      const [a, b] = pair;
      const diff = Math.abs(a - b);
      const corr = 1 - diff / 4;
      totalCorr += corr;
    }
  });

  const alpha = totalCorr / 5;
  return alpha;
};

export const encodeResults = (results: UserResults): string => {
  return btoa(JSON.stringify(results));
};

export const decodeResults = (encoded: string): UserResults => {
  return JSON.parse(atob(encoded));
};
