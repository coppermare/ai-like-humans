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
    textA: "Reserved, quiet",
    textB: "Talkative, open"
  },
  // Q2: Agreeableness - Low scores = Critical, High scores = Trusting
  {
    id: 2,
    trait: "A",
    reverse: false,
    textA: "Skeptical, suspicious",
    textB: "Trusting, forgiving"
  },
  // Q3: Conscientiousness - Low scores = Lazy, High scores = Thorough
  {
    id: 3,
    trait: "C",
    reverse: false,
    textA: "Tends to be lazy",
    textB: "Diligent, hard-working"
  },
  // Q4: Neuroticism - Low scores = Calm/Stable, High scores = Anxious
  {
    id: 4,
    trait: "N",
    reverse: false,
    textA: "Relaxed, handles stress well",
    textB: "Easily stressed, tense"
  },
  // Q5: Openness - Low scores = Conventional, High scores = Imaginative
  {
    id: 5,
    trait: "O",
    reverse: false,
    textA: "Has few artistic interests",
    textB: "Values artistic experiences"
  },
  // Q6: Extraversion - Low scores = Quiet, High scores = Outgoing
  {
    id: 6,
    trait: "E",
    reverse: false,
    textA: "Prefers being alone",
    textB: "Outgoing, sociable"
  },
  // Q7: Agreeableness - Low scores = Critical, High scores = Agreeable
  {
    id: 7,
    trait: "A",
    reverse: false,
    textA: "Tends to find fault with others",
    textB: "Considerate, kind"
  },
  // Q8: Conscientiousness - Low scores = Careless, High scores = Thorough
  {
    id: 8,
    trait: "C",
    reverse: false,
    textA: "Somewhat careless",
    textB: "Thorough, efficient"
  },
  // Q9: Neuroticism - Low scores = Stable, High scores = Anxious
  {
    id: 9,
    trait: "N",
    reverse: false,
    textA: "Calm, emotionally stable",
    textB: "Gets nervous easily"
  },
  // Q10: Openness - Low scores = Conventional, High scores = Imaginative
  {
    id: 10,
    trait: "O",
    reverse: false,
    textA: "Conventional, practical",
    textB: "Has an active imagination"
  }
];
