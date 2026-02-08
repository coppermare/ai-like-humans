/* eslint-disable @next/next/no-img-element */
import { AIPersonality } from "@/lib/types";

interface AIMatchCardProps {
  match: AIPersonality;
  similarity: number;
  explanation: string;
}

export const AIMatchCard = ({
  match,
  similarity,
  explanation
}: AIMatchCardProps) => {
  const getModelLogo = (id: string): string => {
    if (id.includes("claude")) return "/claude_ai.png";
    if (id.includes("chatgpt")) return "/openai.png";
    if (id.includes("gemini")) return "/gemini.png";
    if (id.includes("mistral")) return "/mistral.png";
    if (id.includes("deepseek")) return "/DeepSeek_logo.svg";
    if (id.includes("grok")) return "/grok.png";
    return "/claude_ai.png";
  };

  const getCharacterImages = (characterMatch: string): string[] => {
    // Map character names to their exact filenames
    const filenameMap: Record<string, string> = {
      "Atticus Finch": "Atticus_Finch.png",
      "Barack Obama": "Barack_Obama.png",
      "Mahatma Gandhi": "Mahatma_Gandhi.png",
      "Neil deGrasse Tyson": "NeildeGrasseTyson.png",
      "Samwise Gamgee": "SamwiseGamgee.png",
      "Tim Cook": "TimCook.png",
      "Ted Lasso": "TedLasso.png",
      "Tom Hanks": "TomHanks.png",
      "Hermione Granger": "HermioneGranger.png",
      "Leslie Knope": "LeslieKnope.png",
      "Dwayne Johnson": "DwayneJohnson.png",
      "Tony Stark": "TonyStark.png",
      "Steve Jobs": "SteveJobs.png",
      "Baymax": "Baymax.png",
      "Bill Gates": "BillGates.png",
      "Tyrion Lannister": "TyrionLannister.png",
      "Elon Musk": "ElonMusk.png"
    };
    
    const images: string[] = [];
    const characters = characterMatch.split(" / ");
    
    for (const char of characters) {
      const normalized = char.trim();
      const filename = filenameMap[normalized];
      if (filename) {
        images.push(`/character_images/${filename}`);
      } else {
        // Fallback: remove spaces
        images.push(`/character_images/${normalized.replace(/\s+/g, "")}.png`);
      }
    }
    
    return images;
  };

  const characterImages = getCharacterImages(match.characterMatch);
  const characterNames = match.characterMatch.split(" / ").map((name) => name.trim());

  return (
    <div
      className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/60"
      data-model-logo={getModelLogo(match.id)}
      data-character-1={characterImages[0]}
      data-character-2={characterImages[1]}
      data-character-name-1={characterNames[0]}
      data-character-name-2={characterNames[1]}
      data-match-nickname={match.nickname}
      data-match-description={match.description}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden border border-neutral-800 flex-shrink-0">
            <img
              src={getModelLogo(match.id)}
              alt={`${match.name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Your AI Match
            </p>
            <h2 className="text-2xl font-semibold text-neutral-100 mt-1" data-match-name>
              {match.name}
            </h2>
            <p className="text-sm text-neutral-400">{match.nickname}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Similarity
          </p>
          <p className="text-3xl font-semibold text-neutral-100" data-similarity>
            {similarity}%
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <p className="text-sm text-neutral-400">{match.description}</p>
        <p className="text-sm text-neutral-300">{explanation}</p>
        
        <div className="pt-2">
          <p className="text-xs uppercase tracking-wider text-neutral-500 mb-3">
            Similar characters
          </p>
          <div className="flex items-start gap-4">
            {characterImages.map((src, idx) => (
              <div key={src} className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-neutral-800 flex-shrink-0">
                  <img
                    src={src}
                    alt={characterNames[idx]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-neutral-300 text-center max-w-[6rem]">
                  {characterNames[idx]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
