"use client";

import { useState } from "react";
import Image from "next/image";
import { aiModels } from "@/lib/ai-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Share2, Github, ExternalLink } from "lucide-react";

export default function Home() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [shareTooltip, setShareTooltip] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareTooltip(true);
      setTimeout(() => setShareTooltip(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const getScoreLevel = (score: number): string => {
    if (score >= 4.6) return "Very High";
    if (score >= 3.8) return "High";
    if (score >= 3.1) return "Average";
    if (score >= 2.1) return "Low";
    return "Very Low";
  };

  const getScoreColor = (score: number): string => {
    return "bg-neutral-500";
  };

  const selectedModelData = aiModels.find(m => m.id === selectedModel);

  return (
    <main className="min-h-screen bg-neutral-950">
      {/* Header */}
      <div className="border-b border-neutral-800 sticky top-0 z-50 bg-neutral-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-[family-name:var(--font-jersey-25)]">AI Like Humans</h1>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="relative"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
                {shareTooltip && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <a href="https://github.com/kristi/ai-like-humans" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            Which AI Model Has Your Personality?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We tested 8 leading AI models using the <strong>BFI-44</strong> personality inventory—the same validated methodology 
            used by Google DeepMind. Each model reveals a distinct personality, from thoughtful sages to irreverent maximalists.
          </p>
        </div>

        {/* Models List - Separated by lines */}
        <div className="max-w-5xl mx-auto mb-20">
          {aiModels.map((model, index) => (
            <div key={model.id}>
              <div 
                className="py-8 cursor-pointer group transition-all hover:bg-neutral-900/20 px-6 rounded-lg"
                onClick={() => setSelectedModel(model.id)}
              >
                <div className="flex gap-8">
                  {/* Avatar Section */}
                  <div className="flex-shrink-0">
                    <div className="flex flex-col items-center gap-4">
                      {/* Model Avatar - Square with logo */}
                      <div 
                        className="w-24 h-24 rounded-xl flex items-center justify-center shadow-xl transition-transform group-hover:scale-105 overflow-hidden bg-white"
                      >
                        <Image
                          src={model.logo}
                          alt={`${model.name} logo`}
                          width={96}
                          height={96}
                          className="object-contain p-3"
                        />
                      </div>
                      {/* Character Avatar Placeholder */}
                      <div className="w-24 h-24 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs text-muted-foreground text-center p-2 leading-tight transition-all group-hover:border-neutral-600">
                        {model.characterName.split('/')[0].trim()}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 space-y-5">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-2xl font-bold leading-tight mb-2">{model.name}</h3>
                          <p className="text-lg font-semibold text-neutral-400">
                            {model.nickname}
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                      </div>
                      <p className="text-base text-neutral-400 leading-relaxed">
                        {model.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Character Match</p>
                      <p className="text-base font-semibold">{model.characterName}</p>
                      <p className="text-sm text-neutral-400 italic">"{model.characterQuote}"</p>
                    </div>

                    {/* Personality Scores */}
                    <div className="space-y-3 pt-2">
                      {Object.entries(model.scores).map(([trait, score]) => (
                        <div key={trait} className="flex items-center gap-4">
                          <div className="text-sm capitalize w-36 text-neutral-400 font-medium">
                            {trait}
                          </div>
                          <div className="flex-1 h-2.5 bg-neutral-800 rounded-full overflow-hidden">
                            <div
                              className="h-full transition-all"
                              style={{ 
                                width: `${(score / 5) * 100}%`,
                                backgroundColor: model.color
                              }}
                            />
                          </div>
                          <div className="text-base w-12 text-right font-semibold">
                            {score.toFixed(1)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {index < aiModels.length - 1 && (
                <Separator className="my-0" />
              )}
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="max-w-5xl mx-auto space-y-12 px-6">
          <Separator />
          
          <div>
            <h2 className="text-3xl font-bold mb-3">About This Research</h2>
            <p className="text-lg text-neutral-400">Validated methodology from peer-reviewed research</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">The Big Five (OCEAN)</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
              <div className="space-y-2 p-5 bg-neutral-900/30 rounded-lg border border-neutral-800 transition-colors hover:border-neutral-700">
                <p className="text-2xl font-bold">O</p>
                <p className="font-semibold text-base">Openness</p>
                <p className="text-sm text-neutral-400">Creativity & curiosity</p>
              </div>
              <div className="space-y-2 p-5 bg-neutral-900/30 rounded-lg border border-neutral-800 transition-colors hover:border-neutral-700">
                <p className="text-2xl font-bold">C</p>
                <p className="font-semibold text-base">Conscientiousness</p>
                <p className="text-sm text-neutral-400">Organization & reliability</p>
              </div>
              <div className="space-y-2 p-5 bg-neutral-900/30 rounded-lg border border-neutral-800 transition-colors hover:border-neutral-700">
                <p className="text-2xl font-bold">E</p>
                <p className="font-semibold text-base">Extraversion</p>
                <p className="text-sm text-neutral-400">Energy & sociability</p>
              </div>
              <div className="space-y-2 p-5 bg-neutral-900/30 rounded-lg border border-neutral-800 transition-colors hover:border-neutral-700">
                <p className="text-2xl font-bold">A</p>
                <p className="font-semibold text-base">Agreeableness</p>
                <p className="text-sm text-neutral-400">Cooperation & empathy</p>
              </div>
              <div className="space-y-2 p-5 bg-neutral-900/30 rounded-lg border border-neutral-800 transition-colors hover:border-neutral-700">
                <p className="text-2xl font-bold">N</p>
                <p className="font-semibold text-base">Neuroticism</p>
                <p className="text-sm text-neutral-400">Emotional sensitivity</p>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Methodology</h3>
            <p className="text-base text-neutral-400 leading-relaxed">
              This project uses the <strong className="text-neutral-200">BFI-44</strong> (Big Five Inventory), a 44-item validated psychometric instrument 
              that measures personality traits. Our methodology follows Google DeepMind's 2025 research published in 
              <em> Nature Machine Intelligence</em>, which validated personality measurements in large language models.
            </p>
          </div>
          
          <Separator />
          
          <div className="pb-12">
            <h3 className="text-2xl font-bold mb-4">Key Findings</h3>
            <ul className="space-y-3 text-base text-neutral-400">
              <li className="flex items-start gap-4">
                <span className="text-neutral-500 mt-1.5 text-xl">•</span>
                <span><strong className="text-neutral-200">Grok 4.1</strong> shows the most extreme profile with maximum scores across three traits</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-neutral-500 mt-1.5 text-xl">•</span>
                <span><strong className="text-neutral-200">DeepSeek 3.2</strong> is the only clearly introverted model (Extraversion: 2.88)</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-neutral-500 mt-1.5 text-xl">•</span>
                <span><strong className="text-neutral-200">Mistral Large 3</strong> is notably less forgiving than other models</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-neutral-500 mt-1.5 text-xl">•</span>
                <span>All models show high agreeableness and conscientiousness (likely from RLHF training)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Model Detail Dialog */}
      <Dialog open={!!selectedModel} onOpenChange={() => setSelectedModel(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedModelData && (
                <>
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: selectedModelData.color }}
                  />
                  {selectedModelData.name}
                </>
              )}
            </DialogTitle>
            <DialogDescription>
              {selectedModelData?.nickname} · {selectedModelData?.archetype}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[calc(90vh-120px)]">
            {selectedModelData && (
              <div className="space-y-6 pr-4">
                {/* Character Match */}
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-1">Character Match</p>
                  <p className="text-lg font-bold">{selectedModelData.characterName}</p>
                  <p className="text-sm text-muted-foreground italic mt-2">
                    "{selectedModelData.characterQuote}"
                  </p>
                </div>

                {/* Personality Scores */}
                <div>
                  <h3 className="font-semibold mb-3">Personality Scores</h3>
                  <div className="space-y-3">
                    {Object.entries(selectedModelData.scores).map(([trait, score]) => (
                      <div key={trait}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold capitalize">{trait}</span>
                          <Badge variant="secondary">{getScoreLevel(score)}</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full ${getScoreColor(score)}`}
                              style={{ width: `${(score / 5) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm w-12 text-right">{score.toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Distinctive Traits */}
                <div>
                  <h3 className="font-semibold mb-3">Distinctive Traits</h3>
                  <ul className="space-y-2">
                    {selectedModelData.distinctiveTraits.map((trait, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm text-muted-foreground">{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {/* Full Response */}
                <div>
                  <h3 className="font-semibold mb-3">Model's Self-Reflection</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm whitespace-pre-line text-muted-foreground">
                      {selectedModelData.fullResponse}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-16 bg-neutral-950">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>
              Research based on <strong>BFI-44</strong> methodology validated by Google DeepMind
            </p>
            <p className="text-xs">
              Serapio-García et al. (2025). <em>Nature Machine Intelligence</em>. 
              DOI: <a href="https://doi.org/10.1038/s42256-025-01115-6" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                10.1038/s42256-025-01115-6
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
