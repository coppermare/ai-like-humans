"use client";

import { useState } from "react";
import Image from "next/image";
import { aiModels } from "@/lib/ai-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { Github, ExternalLink, X, Info } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { getCharacterImage } from "@/lib/ai-data";

export default function Home() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);

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
      <div className="sticky top-0 z-50 bg-neutral-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-[family-name:var(--font-jersey-25)]">AI&gt;&lt;Humans</h1>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <a href="https://github.com/coppermare/ai-like-humans" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[85vh] flex items-end">
        {/* Image Background */}
        <Image
          src="/hero_image.png"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-neutral-950" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-16 pb-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent font-[family-name:var(--font-jersey-25)]">
              Do AIs Have Personalities?
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed">
              We gave 8 leading AI models the same personality test used in groundbreaking research by <strong>Google DeepMind</strong>. 
              The results? Each AI exhibited remarkably distinct traits—from philosophical sages to irreverent mavericks. 
              Discover which AI thinks like you.
            </p>
            <div className="mt-6 flex justify-center">
              <Button size="lg" asChild>
                <a href="/test">Take the test</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Models Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Models Grid - Cards */}
        <div className="grid grid-cols-1 gap-6 mb-20">
          {aiModels.map((model) => (
            <div
              key={model.id}
              className="bg-neutral-900/50 rounded-xl p-6 cursor-pointer transition-colors hover:bg-neutral-900/80"
              onClick={() => setSelectedModel(model.id)}
            >
              {/* Mobile Layout (Single Column) */}
              <div className="block md:hidden space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3 flex-1">
                      {/* Model Icon */}
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center overflow-hidden"
                      >
                        <Image
                          src={model.logo}
                          alt={`${model.name} logo`}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      {/* Model Name and Nickname */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold leading-tight mb-1">{model.name}</h3>
                        <p className="text-sm font-semibold text-neutral-400">
                          {model.nickname}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-0 hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2">
                    {model.description}
                  </p>
                </div>

                {/* Character Avatars */}
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Characters</p>
                    <div 
                      className="relative group"
                      onMouseEnter={() => setHoveredTooltip(`characters-mobile-${model.id}`)}
                      onMouseLeave={() => setHoveredTooltip(null)}
                    >
                      <Info className="w-3.5 h-3.5 text-neutral-500 cursor-help" />
                      {hoveredTooltip === `characters-mobile-${model.id}` && (
                        <div className="absolute z-10 left-0 top-5 w-64 bg-neutral-800 text-neutral-200 text-xs rounded-lg p-3 shadow-lg">
                          Famous people and fictional characters with similar personality traits
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Horizontal scrollable character list */}
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {model.characterName.split(' / ').map((character, index) => (
                      <div
                        key={character.trim()}
                        className="flex flex-col items-center gap-2 flex-shrink-0"
                      >
                        <div
                          className="w-20 h-20 rounded-full overflow-hidden"
                          title={character.trim()}
                        >
                          <Image
                            src={`/character_images/${getCharacterImage(character.trim())}`}
                            alt={character.trim()}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs font-semibold text-neutral-300 leading-tight text-center">
                          {character.trim()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Archetype */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Archetype</p>
                    <div 
                      className="relative group"
                      onMouseEnter={() => setHoveredTooltip(`archetype-mobile-${model.id}`)}
                      onMouseLeave={() => setHoveredTooltip(null)}
                    >
                      <Info className="w-3.5 h-3.5 text-neutral-500 cursor-help" />
                      {hoveredTooltip === `archetype-mobile-${model.id}` && (
                        <div className="absolute z-10 left-0 top-5 w-64 bg-neutral-800 text-neutral-200 text-xs rounded-lg p-3 shadow-lg">
                          A thematic category that summarizes the AI's overall personality pattern
                        </div>
                      )}
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs font-medium">
                    {model.archetype}
                  </Badge>
                </div>

                {/* Personality Scores - Compact version for cards */}
                <div className="space-y-3 pt-2">
                  {Object.entries(model.scores).map(([trait, score]) => (
                    <div key={trait} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="text-xs capitalize text-neutral-400 font-medium">
                          {trait}
                        </div>
                        <div className="text-xs font-semibold text-neutral-300">
                          {score.toFixed(1)}
                        </div>
                      </div>
                      <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full transition-all bg-neutral-400"
                          style={{
                            width: `${(score / 5) * 100}%`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Layout (Two Columns) */}
              <div className="hidden md:flex gap-6">
                {/* Left Column - Description */}
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-3 flex-1">
                        {/* Model Icon */}
                        <div
                          className="w-8 h-8 rounded-md flex items-center justify-center shadow-md overflow-hidden"
                        >
                          <Image
                            src={model.logo}
                            alt={`${model.name} logo`}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        {/* Model Name and Nickname */}
                        <div className="flex-1">
                          <h3 className="text-lg font-bold leading-tight mb-1">{model.name}</h3>
                          <p className="text-xs font-semibold text-neutral-400">
                            {model.nickname}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-0 hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {model.description}
                    </p>
                  </div>

                  {/* Archetype */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Archetype</p>
                      <div 
                        className="relative group"
                        onMouseEnter={() => setHoveredTooltip(`archetype-desktop-${model.id}`)}
                        onMouseLeave={() => setHoveredTooltip(null)}
                      >
                        <Info className="w-3.5 h-3.5 text-neutral-500 cursor-help" />
                        {hoveredTooltip === `archetype-desktop-${model.id}` && (
                          <div className="absolute z-10 left-0 top-5 w-64 bg-neutral-800 text-neutral-200 text-xs rounded-lg p-3 shadow-lg">
                            A thematic category that summarizes the AI's overall personality pattern
                          </div>
                        )}
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs font-medium px-2 py-1">
                      {model.archetype}
                    </Badge>
                  </div>
                </div>

                {/* Right Column - Characters & Scores */}
                <div className="flex-1 space-y-4">
                  {/* Character Avatars */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Characters</p>
                      <div 
                        className="relative group"
                        onMouseEnter={() => setHoveredTooltip(`characters-desktop-${model.id}`)}
                        onMouseLeave={() => setHoveredTooltip(null)}
                      >
                        <Info className="w-3.5 h-3.5 text-neutral-500 cursor-help" />
                        {hoveredTooltip === `characters-desktop-${model.id}` && (
                          <div className="absolute z-10 left-0 top-5 w-64 bg-neutral-800 text-neutral-200 text-xs rounded-lg p-3 shadow-lg">
                            Famous people and fictional characters with similar personality traits
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                      {model.characterName.split(' / ').map((character, index) => (
                        <div
                          key={character.trim()}
                          className="flex flex-col items-center gap-2 flex-shrink-0"
                        >
                          <div
                            className="w-20 h-20 rounded-full overflow-hidden"
                            title={character.trim()}
                          >
                            <Image
                              src={`/character_images/${getCharacterImage(character.trim())}`}
                              alt={character.trim()}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-xs font-semibold text-neutral-300 leading-tight text-center">
                            {character.trim()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Personality Scores */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Personality Scores</p>
                    {Object.entries(model.scores).map(([trait, score]) => (
                      <div key={trait} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium capitalize text-neutral-400">{trait}</span>
                          <span className="text-xs font-semibold text-neutral-300">{score.toFixed(1)}</span>
                        </div>
                        <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-neutral-400 transition-all"
                            style={{
                              width: `${(score / 5) * 100}%`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="space-y-3 p-6 bg-neutral-900/20 rounded-lg min-h-[120px] flex flex-col justify-center">
                <p className="text-2xl font-bold text-neutral-300">O</p>
                <p className="font-semibold text-base text-neutral-200">Openness</p>
                <p className="text-sm text-neutral-400 leading-tight">Creativity & curiosity</p>
              </div>
              <div className="space-y-3 p-6 bg-neutral-900/20 rounded-lg min-h-[120px] flex flex-col justify-center">
                <p className="text-2xl font-bold text-neutral-300">C</p>
                <p className="font-semibold text-base text-neutral-200">Conscientiousness</p>
                <p className="text-sm text-neutral-400 leading-tight">Organization & reliability</p>
              </div>
              <div className="space-y-3 p-6 bg-neutral-900/20 rounded-lg min-h-[120px] flex flex-col justify-center">
                <p className="text-2xl font-bold text-neutral-300">E</p>
                <p className="font-semibold text-base text-neutral-200">Extraversion</p>
                <p className="text-sm text-neutral-400 leading-tight">Energy & sociability</p>
              </div>
              <div className="space-y-3 p-6 bg-neutral-900/20 rounded-lg min-h-[120px] flex flex-col justify-center">
                <p className="text-2xl font-bold text-neutral-300">A</p>
                <p className="font-semibold text-base text-neutral-200">Agreeableness</p>
                <p className="text-sm text-neutral-400 leading-tight">Cooperation & empathy</p>
              </div>
              <div className="space-y-3 p-6 bg-neutral-900/20 rounded-lg min-h-[120px] flex flex-col justify-center">
                <p className="text-2xl font-bold text-neutral-300">N</p>
                <p className="font-semibold text-base text-neutral-200">Neuroticism</p>
                <p className="text-sm text-neutral-400 leading-tight">Emotional sensitivity</p>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Methodology</h3>
            <p className="text-base text-neutral-400 leading-relaxed">
              This project uses the <strong className="text-neutral-200">BFI-44</strong> (Big Five Inventory), a 44-item validated psychometric instrument 
              that measures personality traits. Our methodology follows Google DeepMind's 2025 research published in 
              <em>Nature Machine Intelligence</em>, which validated personality measurements in large language models.
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

          <Separator />

          {/* About the Project */}
          <div className="py-12">
            <h3 className="text-2xl font-bold mb-6">Why This Project Exists</h3>
            <div className="space-y-4 text-base text-neutral-400 leading-relaxed">
              <p>
                When choosing an AI assistant, most people rely on benchmarks or brand names. But what if AI models have 
                distinct "personalities" that affect how they communicate and solve problems?
              </p>
              <p>
                We applied the same personality test used by Google DeepMind researchers to 8 leading AI models. 
                The results revealed something fascinating: <strong className="text-neutral-200">each AI exhibits remarkably 
                different behavioral patterns</strong>—from the philosophical depth of Claude Opus to the irreverent 
                confidence of Grok.
              </p>
              <p>
                To make these abstract personality scores relatable, we matched each AI to <strong className="text-neutral-200">famous 
                people and fictional characters</strong> who share similar traits. When we say "Claude Sonnet is like Samwise Gamgee" 
                or "Mistral Large resembles Tony Stark," you instantly understand the AI's communication style and approach.
              </p>
              <p className="text-neutral-300 font-medium pt-2">
                This isn't about claiming AI has consciousness—it's about understanding consistent behavioral patterns that can help 
                you choose the right AI for your needs.
              </p>
            </div>
          </div>

          <Separator />

          {/* Call to Action */}
          <div className="py-12">
            <h3 className="text-2xl font-bold mb-4">Want to Contribute?</h3>
            <p className="text-base text-neutral-400 leading-relaxed max-w-3xl mb-6">
              This research is open source and we welcome contributions! Test new AI models, improve the methodology,
              enhance the website, or share your insights. Every contribution helps advance our understanding of AI personalities.
            </p>
            <Button
              variant="default"
              size="lg"
              asChild
            >
              <a href="https://github.com/coppermare/ai-like-humans" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Contribute on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Model Detail Drawer */}
      <Drawer open={!!selectedModel} onOpenChange={() => setSelectedModel(null)}>
        <DrawerContent>
          <DrawerHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src={selectedModelData?.logo || ''}
                    alt={`${selectedModelData?.name} logo`}
                    width={48}
                    height={48}
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex-1">
                  <DrawerTitle>
                    {selectedModelData && (
                      <>
                        {selectedModelData.name}
                      </>
                    )}
                  </DrawerTitle>
                  <DrawerDescription>
                    {selectedModelData?.nickname} · {selectedModelData?.archetype}
                  </DrawerDescription>
                </div>
              </div>
              <button
                onClick={() => setSelectedModel(null)}
                className="p-2 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </DrawerHeader>
          <div className="p-4">
            {selectedModelData && (
              <div className="space-y-6">
                {/* Character Section */}
                <div className="bg-neutral-900/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Characters</h3>
                  <div className="flex gap-4 overflow-x-auto pb-2">
                    {selectedModelData.characterName.split(' / ').map((character, index) => (
                      <div
                        key={character.trim()}
                        className="flex flex-col items-center gap-2 flex-shrink-0"
                      >
                        <div className="w-24 h-24 rounded-full overflow-hidden">
                          <Image
                            src={`/character_images/${getCharacterImage(character.trim())}`}
                            alt={character.trim()}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-sm text-neutral-300 text-center">
                          {character.trim()}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-neutral-400 italic mt-4">
                    "{selectedModelData.characterQuote}"
                  </p>
                </div>

                {/* Personality Scores */}
                <div className="bg-neutral-900/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Personality Scores</h3>
                  <div className="space-y-3">
                    {Object.entries(selectedModelData.scores).map(([trait, score]) => (
                      <div key={trait} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium capitalize text-neutral-400">{trait}</span>
                          <span className="text-sm font-semibold text-neutral-300">{score.toFixed(1)}</span>
                        </div>
                        <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-neutral-400 transition-all"
                            style={{
                              width: `${(score / 5) * 100}%`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Distinctive Traits */}
                <div className="bg-neutral-900/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Distinctive Traits</h3>
                  <ul className="space-y-2">
                    {selectedModelData.distinctiveTraits.map((trait, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-neutral-500 mt-1">•</span>
                        <span className="text-sm text-neutral-300">{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Model Description */}
                <div className="bg-neutral-900/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Personality Analysis</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {selectedModelData.description}
                  </p>
                </div>

                <hr className="border-neutral-800" />

                {/* Full Response */}
                <div className="bg-neutral-900/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Model's Self-Reflection</h3>
                  <div className="text-sm text-neutral-300 leading-relaxed">
                    <ReactMarkdown
                      components={{
                        strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                        p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
                        ul: ({ children }) => <ul className="mb-3 ml-4 list-disc space-y-1">{children}</ul>,
                        li: ({ children }) => <li className="text-neutral-300">{children}</li>,
                      }}
                    >
                      {selectedModelData.fullResponse}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DrawerContent>
      </Drawer>

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
