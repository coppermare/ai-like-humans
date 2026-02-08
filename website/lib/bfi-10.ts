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

export const BFI_10_QUESTIONS: Question[] = [
  {
    id: 1,
    trait: "E",
    reverse: true,
    textA: "Reserved, quiet",
    textB: "Outgoing, sociable"
  },
  {
    id: 2,
    trait: "A",
    reverse: true,
    textA: "Critical, skeptical",
    textB: "Trusting, forgiving"
  },
  {
    id: 3,
    trait: "C",
    reverse: true,
    textA: "Disorganized, careless",
    textB: "Thorough, organized"
  },
  {
    id: 4,
    trait: "N",
    reverse: false,
    textA: "Calm, relaxed",
    textB: "Gets nervous easily"
  },
  {
    id: 5,
    trait: "O",
    reverse: false,
    textA: "Few interests, conventional",
    textB: "Many interests, creative"
  },
  {
    id: 6,
    trait: "E",
    reverse: false,
    textA: "Quiet, reserved",
    textB: "Full of energy, enthusiastic"
  },
  {
    id: 7,
    trait: "A",
    reverse: false,
    textA: "Fault-finding, critical",
    textB: "Respectful, kind"
  },
  {
    id: 8,
    trait: "C",
    reverse: false,
    textA: "Tends to procrastinate",
    textB: "Follows through reliably"
  },
  {
    id: 9,
    trait: "N",
    reverse: true,
    textA: "Often worried, anxious",
    textB: "Calm, emotionally stable"
  },
  {
    id: 10,
    trait: "O",
    reverse: false,
    textA: "Prefers routine, familiar",
    textB: "Loves new experiences"
  }
];
