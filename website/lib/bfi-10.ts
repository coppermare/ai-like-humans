export type Trait = "O" | "C" | "E" | "A" | "N";

export type Answer = 1 | 2 | 3 | 4 | 5;

export type Answers = [
  Answer,
  Answer,
  Answer,
  Answer,
  Answer,
  Answer,
  Answer,
  Answer,
  Answer,
  Answer
];

export interface Question {
  id: number;
  trait: Trait;
  reverse: boolean;
  textA: string;
  textB: string;
}

// Validated BFI-10 adapted for bipolar response format
// Based on Rammstedt & John (2007) BFI-10
// IMPORTANT: In bipolar format (textA vs textB with scale 1-5), reverse scoring is NOT needed
// because the polarity is already expressed in the question wording itself.
// Low scores (1-2) = More like textA, High scores (4-5) = More like textB
// All items set to reverse: false to avoid cancellation artifacts
export const BFI_10_QUESTIONS: Question[] = [
  // Q1: Extraversion - Low scores = Reserved, High scores = Outgoing
  {
    id: 1,
    trait: "E",
    reverse: false,
    textA: "reserved and quiet",
    textB: "outgoing and talkative"
  },
  // Q2: Agreeableness - Low scores = Critical, High scores = Trusting
  {
    id: 2,
    trait: "A",
    reverse: false,
    textA: "critical and skeptical",
    textB: "trusting and forgiving"
  },
  // Q3: Conscientiousness - Low scores = Lazy, High scores = Thorough
  {
    id: 3,
    trait: "C",
    reverse: false,
    textA: "disorganized and lazy",
    textB: "disciplined and thorough"
  },
  // Q4: Neuroticism - Low scores = Calm/Stable, High scores = Anxious
  {
    id: 4,
    trait: "N",
    reverse: false,
    textA: "calm and relaxed",
    textB: "anxious and easily stressed"
  },
  // Q5: Openness - Low scores = Conventional, High scores = Imaginative
  {
    id: 5,
    trait: "O",
    reverse: false,
    textA: "practical with few artistic interests",
    textB: "creative and values art"
  },
  // Q6: Extraversion - Low scores = Quiet, High scores = Outgoing
  {
    id: 6,
    trait: "E",
    reverse: false,
    textA: "introverted and private",
    textB: "sociable and outgoing"
  },
  // Q7: Agreeableness - Low scores = Critical, High scores = Agreeable
  {
    id: 7,
    trait: "A",
    reverse: false,
    textA: "critical of others",
    textB: "kind and considerate"
  },
  // Q8: Conscientiousness - Low scores = Careless, High scores = Thorough
  {
    id: 8,
    trait: "C",
    reverse: false,
    textA: "careless and disorganized",
    textB: "thorough and efficient"
  },
  // Q9: Neuroticism - Low scores = Stable, High scores = Anxious
  {
    id: 9,
    trait: "N",
    reverse: false,
    textA: "emotionally stable",
    textB: "nervous and moody"
  },
  // Q10: Openness - Low scores = Conventional, High scores = Imaginative
  {
    id: 10,
    trait: "O",
    reverse: false,
    textA: "conventional and practical",
    textB: "imaginative and creative"
  }
];
