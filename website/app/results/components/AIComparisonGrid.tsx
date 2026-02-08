/* eslint-disable @next/next/no-img-element */
import { AIMatch } from "@/lib/types";

interface AIComparisonGridProps {
  match: AIMatch;
}

const getModelLogo = (id: string): string => {
  if (id.includes("claude")) return "/claude_ai.png";
  if (id.includes("chatgpt")) return "/openai.png";
  if (id.includes("gemini")) return "/gemini.png";
  if (id.includes("mistral")) return "/mistral.png";
  if (id.includes("deepseek")) return "/DeepSeek_logo.svg";
  if (id.includes("grok")) return "/grok.png";
  return "/claude_ai.png";
};

export const AIComparisonGrid = ({ match }: AIComparisonGridProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {match.allMatches.map((item) => (
        <div
          key={item.ai.id}
          className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/40"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden bg-neutral-800 flex-shrink-0">
                <img
                  src={getModelLogo(item.ai.id)}
                  alt={`${item.ai.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-neutral-100 truncate">
                  {item.ai.name}
                </p>
                <p className="text-xs text-neutral-500 truncate">{item.ai.nickname}</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-neutral-200 flex-shrink-0">
              {item.similarity}%
            </p>
          </div>
          <div className="h-2 bg-neutral-800 rounded-full overflow-hidden mt-3">
            <div
              className="h-full transition-[width] duration-500 ease-out"
              style={{
                width: `${item.similarity}%`,
                backgroundColor: item.ai.color
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
