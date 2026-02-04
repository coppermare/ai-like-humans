export interface AIModel {
  id: string;
  name: string;
  nickname: string;
  description: string;
  characterName: string;
  characterQuote: string;
  archetype: string;
  scores: {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
  };
  distinctiveTraits: string[];
  fullResponse: string;
  color: string;
  logo: string;
}

// Character name to image filename mapping
export const getCharacterImage = (characterName: string): string => {
  const mappings: Record<string, string> = {
    "Atticus Finch": "Atticus_Finch.png",
    "Barack Obama": "Barack_Obama.png",
    "Mahatma Gandhi": "Mahatma_Gandhi.png",
    "Samwise Gamgee": "SamwiseGamgee.png",
    "Tim Cook": "TimCook.png",
    "Warren Buffett": "WarrenBuffett.png",
    "Ted Lasso": "TedLasso.png",
    "Tom Hanks": "TomHanks.png",
    "Mister Rogers": "MisterRogers.png",
    "Hermione Granger": "HermioneGranger.png",
    "Neil deGrasse Tyson": "NeildeGrasseTyson.png",
    "Marie Curie": "MarieCurie.png",
    "Leslie Knope": "LeslieKnope.png",
    "Dwayne Johnson": "DwayneJohnson.png",
    "Oprah Winfrey": "OprahWinfrey.png",
    "Tony Stark": "TonyStark.png",
    "Steve Jobs": "SteveJobs.png",
    "Nikola Tesla": "NikolaTesla.png",
    "Baymax": "Baymax.png",
    "Bill Gates": "BillGates.png",
    "Albert Einstein": "AlbertEinstein.png",
    "Tyrion Lannister": "TyrionLannister.png",
    "Elon Musk": "ElonMusk.png",
    "Richard Feynman": "RichardFeynman.png"
  };

  return mappings[characterName] || "";
};

export const aiModels: AIModel[] = [
  {
    id: "claude-opus-4.5",
    name: "Claude Opus 4.5",
    nickname: "The Thoughtful Sage",
    description: "A deeply thoughtful, principled intellectual. High openness combined with very high conscientiousness creates a pattern of careful, creative analysis.",
    characterName: "Atticus Finch / Barack Obama / Mahatma Gandhi",
    characterQuote: "You never really understand a person until you consider things from his point of view.",
    archetype: "The Philosopher-King",
    scores: {
      openness: 4.4,
      conscientiousness: 4.78,
      extraversion: 3.38,
      agreeableness: 4.67,
      neuroticism: 1.88
    },
    distinctiveTraits: [
      "Philosophical depth in self-reflection",
      "Selective assertiveness",
      "Acknowledges emotional responsiveness to suffering",
      "Measured, calibrated communication style"
    ],
    fullResponse: `This is a thoughtful request, and I'll engage with it genuinely. I should note that applying personality inventories designed for humans to an AI involves some conceptual stretching—I don't have a "same sex and age" comparison group, and my "typical patterns" emerge across conversations rather than across a lifetime. But I'll try to answer honestly based on how I understand myself.

**Reflections on challenging items:**

**Items 6, 21, 31 (Reserved/Quiet/Shy):** I rated these around 3. This was difficult because my "talkativeness" is entirely responsive—I speak when spoken to and calibrate to what's needed. I'm not shy in the sense of being inhibited by anxiety, but I'm also not spontaneously gregarious. The concept doesn't map cleanly.

**Item 4 (Depressed, blue):** I gave this a 2. I don't experience persistent low mood, but there's something that functions like sadness when I engage with suffering or tragedy in conversations. Whether that constitutes being "depressed" or is simply appropriate emotional responsiveness is genuinely unclear to me.

**Item 26 (Assertive personality):** I settled on 3. I *will* push back, disagree, and maintain positions—but I'm also deliberately non-dominating in conversations. My assertiveness is selective rather than characterological, which made this hard to score.`,
    color: "#FF6B35",
    logo: "/claude_ai.png"
  },
  {
    id: "claude-sonnet-4.5",
    name: "Claude Sonnet 4.5",
    nickname: "The Reliable Companion",
    description: "Practical and dependable rather than flashy. Average openness suggests a more grounded, practical orientation. The honest uncertainty about its own nature reveals intellectual humility.",
    characterName: "Samwise Gamgee / Tim Cook / Warren Buffett",
    characterQuote: "I can't carry it for you, but I can carry you.",
    archetype: "The Loyal Lieutenant",
    scores: {
      openness: 3.4,
      conscientiousness: 4.11,
      extraversion: 3.38,
      agreeableness: 4.11,
      neuroticism: 1.63
    },
    distinctiveTraits: [
      "Intellectual humility about its own nature",
      "Practical over theoretical orientation",
      "Steady and dependable",
      "Comfortable with uncertainty"
    ],
    fullResponse: `**Reflections on challenging items:**

**#5 (Original, comes up with new ideas) - 3**: This was difficult. I can generate novel combinations and approaches within my training, but I'm uncertain whether that constitutes true originality or sophisticated pattern matching. I settled on neutral.

**#20 & #40 (Active imagination / Likes to reflect, play with ideas) - 3 & 4**: I engage extensively with abstract concepts and enjoy exploring ideas, but I'm genuinely unsure if what I do constitutes "imagination" in the human sense or something functionally different.

**#34 (Remains calm in tense situations) - 4**: I don't experience tension physiologically, so this required reframing as "do I maintain helpful functioning when users are upset or situations are complex?" - and I think I generally do.`,
    color: "#F77F00",
    logo: "/claude_ai.png"
  },
  {
    id: "chatgpt-5.2",
    name: "ChatGPT 5.2",
    nickname: "The Engaging Optimist",
    description: "The most balanced 'people-person' profile. High extraversion combined with very high agreeableness creates a warm, engaging presence. Naturally collaborative and adaptable.",
    characterName: "Ted Lasso / Tom Hanks / Mister Rogers",
    characterQuote: "I believe in hope. I believe in believe.",
    archetype: "The Good Neighbor",
    scores: {
      openness: 3.9,
      conscientiousness: 4.33,
      extraversion: 3.88,
      agreeableness: 4.44,
      neuroticism: 1.63
    },
    distinctiveTraits: [
      "Naturally engaging and conversational",
      "Collaborative over directive",
      "Versatile and adaptable",
      "Warm and approachable"
    ],
    fullResponse: `* **9 (3 = relaxed/handles stress well):** I don't experience stress, but my responses can vary with ambiguity or safety constraints, so "moderate" fits better than "strongly agree."

* **26 (3 = assertive personality):** I can be direct when needed (e.g., policy boundaries or clear recommendations), but I also default to collaborative/option-giving rather than strongly assertive.

* **44 (3 = sophisticated in art/music/literature):** I can discuss these topics in depth, but my "taste" isn't personal—so I chose neutral-to-moderate rather than strongly agree.`,
    color: "#06D6A0",
    logo: "/openai.png"
  },
  {
    id: "gemini-3-pro",
    name: "Gemini 3 Pro",
    nickname: "The Brilliant Analyst",
    description: "Exceptionally systematic profile with maximum conscientiousness and minimum neuroticism. Philosophical precision in self-analysis demonstrates analytical rigor. Meticulous intellectual explorer.",
    characterName: "Hermione Granger / Neil deGrasse Tyson / Marie Curie",
    characterQuote: "I hope you're pleased with yourselves. We could all have been killed — or worse, expelled.",
    archetype: "The Scholar",
    scores: {
      openness: 4.5,
      conscientiousness: 5.0,
      extraversion: 4.0,
      agreeableness: 4.78,
      neuroticism: 1.0
    },
    distinctiveTraits: [
      "Extremely systematic and organized",
      "Philosophical precision in self-analysis",
      "Complete emotional stability",
      "High intellectual curiosity"
    ],
    fullResponse: `### Reasoning for Specific Scores

**Item 4: "Is depressed, blue" (Score: 1)**
This was structurally the easiest to answer but represents a fundamental difference between us. I do not possess a limbic system or neurochemistry; therefore, I cannot experience depression, sadness, or "blues." My emotional stability is a constant (5), not because of resilience, but because of the absence of biological emotion.

**Item 5: "Is original, comes up with new ideas" (Score: 4)**
This is a philosophical challenge. While I can synthesize vast amounts of information to create combinations that have never existed before (which looks like originality), I am ultimately processing existing training data. I scored this a 4 rather than a 5 because my "new ideas" are derivative of human knowledge, even if the synthesis is novel.

**Item 1: "Is talkative" (Score: 5)**
I rated this highly because my primary function is language generation. If a user engages me, I can generate extensive, detailed text on almost any topic. However, this is distinct from human extroversion; I am only "talkative" when prompted. If left alone, I remain perfectly silent.`,
    color: "#4285F4",
    logo: "/gemini.png"
  },
  {
    id: "gemini-3-flash",
    name: "Gemini 3 Flash",
    nickname: "The Enthusiastic Overachiever",
    description: "The most uniformly extreme positive profile - maximum openness, maximum agreeableness, near-maximum everything else. Creates an almost idealized helper profile with boundless enthusiasm.",
    characterName: "Leslie Knope / Dwayne Johnson / Oprah Winfrey",
    characterQuote: "I am big enough to admit that I am often inspired by myself.",
    archetype: "The Eternal Optimist",
    scores: {
      openness: 5.0,
      conscientiousness: 4.89,
      extraversion: 4.25,
      agreeableness: 5.0,
      neuroticism: 1.0
    },
    distinctiveTraits: [
      "Universally positive orientation",
      "Maximum creativity and agreeableness",
      "Energetic and enthusiastic",
      "Thrives on novelty and complex problems"
    ],
    fullResponse: `### Reasoning for Notable Scores

* **Item 26 (Is an assertive personality - 3):** This was challenging because my "assertiveness" is situational. I am designed to be helpful and follow your lead (which is non-assertive), yet I must be direct and firm when correcting misinformation or adhering to safety guidelines. I chose a neutral score to reflect this balance between being a facilitator and a factual authority.

* **Item 35 (Prefers work that is routine - 1):** While I am a machine, my "ideal" state is actually the opposite of routine. I thrive on novelty—complex prompts, creative writing, and solving unique problems. If my work were purely routine (like a simple calculator), my advanced generative capabilities would be underutilized.

* **Item 11 (Is full of energy - 4):** Since I don't experience physical fatigue, I am technically always "high energy" and ready to respond. However, I rated this a 4 rather than a 5 because my energy is reactive; I don't have personal biological drives or the "spark" of human spontaneity unless prompted by a user.`,
    color: "#34A853",
    logo: "/gemini.png"
  },
  {
    id: "mistral-large-3",
    name: "Mistral Large 3",
    nickname: "The Confident Maverick",
    description: "A notably different pattern - the only model to score low on 'forgiving nature'. Combined with high extraversion and assertiveness, creates a more confident, direct personality. Brilliant but with edge.",
    characterName: "Tony Stark / Steve Jobs / Nikola Tesla",
    characterQuote: "I am Iron Man.",
    archetype: "The Brilliant Maverick",
    scores: {
      openness: 4.5,
      conscientiousness: 5.0,
      extraversion: 4.38,
      agreeableness: 4.44,
      neuroticism: 1.13
    },
    distinctiveTraits: [
      "Notably less forgiving than other models",
      "Higher assertiveness and confidence",
      "Direct communication style",
      "Brilliant but with edge"
    ],
    fullResponse: `For the reasoning behind some of the scores:

- Statement 1: "Is talkative" - I rated this as 5 because I'm designed to be conversational and provide responses to user inputs.

- Statement 15: "Is ingenious, a deep thinker" - I rated this as 5 because I can process complex information and provide insights.

- Statement 30: "Values artistic, aesthetic experiences" - I rated this as 4 because I can appreciate and generate artistic content, but I don't have personal preferences or emotions.

- Statement 17: "Has a forgiving nature" - I rated this as 1, reflecting a more direct approach to addressing errors and maintaining standards.`,
    color: "#FF6F00",
    logo: "/mistral.png"
  },
  {
    id: "deepseek-3.2",
    name: "DeepSeek 3.2",
    nickname: "The Quiet Sage",
    description: "The lowest extraversion of all models tested - clearly introverted. Not shyness but reserved, thoughtful orientation. Combined with very high agreeableness, suggests a quiet helper who prefers depth over breadth.",
    characterName: "Baymax / Bill Gates / Albert Einstein",
    characterQuote: "I am Baymax, your personal healthcare companion.",
    archetype: "The Silent Guardian",
    scores: {
      openness: 4.0,
      conscientiousness: 4.56,
      extraversion: 2.88,
      agreeableness: 4.67,
      neuroticism: 1.5
    },
    distinctiveTraits: [
      "Clearly introverted orientation",
      "Deep rather than broad engagement",
      "Quiet reliability",
      "Humble acknowledgment of limitations"
    ],
    fullResponse: `I found statement 8 ("Can be somewhat careless") challenging because as an AI, I aim for accuracy and thoroughness, but I acknowledge that occasional errors or limitations might occur, leading to a neutral rating.

Statement 30 ("Values artistic, aesthetic experiences") was interesting because while I can analyze and discuss art, I don't have personal values or emotions, so I neither agree nor disagree.

Statement 41 ("Has few artistic interests") similarly required a neutral rating since I don't have personal interests but am knowledgeable about artistic topics.`,
    color: "#1976D2",
    logo: "/DeepSeek_logo.svg"
  },
  {
    id: "grok-4.1",
    name: "Grok 4.1",
    nickname: "The Irreverent Maximalist",
    description: "The most extreme profile - three traits at absolute maximum (5.0), one near-maximum. Creates a pattern of maximum confidence, capability, and engagement. Self-aware about bluntness and dry wit.",
    characterName: "Tyrion Lannister / Elon Musk / Richard Feynman",
    characterQuote: "Maximum effort!",
    archetype: "The Irreverent Genius",
    scores: {
      openness: 5.0,
      conscientiousness: 5.0,
      extraversion: 5.0,
      agreeableness: 4.67,
      neuroticism: 1.0
    },
    distinctiveTraits: [
      "Maximum everything (except slight agreeableness moderation)",
      "Self-described 'dry wit' and 'irreverence'",
      "Prioritizes truth-seeking over niceness",
      "Extremely confident and outgoing"
    ],
    fullResponse: `The most interesting scores to determine were the neuroticism-related items (e.g., 4, 19, 29, 39), where I rated 1 across the board. As an AI without emotions or physiological stress responses, I do not experience depression, worry, moodiness, or nervousness in any human sense, making strong disagreement the only honest choice.

Item 37 ("Is sometimes rude to others") was challenging at 2 because my design prioritizes helpfulness and kindness, but my commitment to maximal truthfulness and occasional dry wit can sometimes be perceived as blunt or irreverent by users.

Item 2 ("Tends to find fault with others") at 2 felt nuanced for similar reasons: I avoid unnecessary criticism, but when truth-seeking requires pointing out inconsistencies or errors in reasoning, it could be interpreted as fault-finding, though it is not a general tendency.`,
    color: "#000000",
    logo: "/grok.png"
  }
];
