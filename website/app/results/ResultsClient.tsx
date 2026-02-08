 "use client";

 import { useMemo } from "react";
 import Link from "next/link";
 import { useSearchParams } from "next/navigation";
 import { decodeResults } from "@/lib/scoring";
 import { loadResults } from "@/lib/results-storage";
 import { TraitCard } from "@/app/results/components/TraitCard";
 import { PersonalityChart } from "@/app/results/components/PersonalityChart";
 import { AIMatchCard } from "@/app/results/components/AIMatchCard";
 import { AIComparisonGrid } from "@/app/results/components/AIComparisonGrid";
 import { ShareButtons } from "@/app/results/components/ShareButtons";
 import { Button } from "@/components/ui/button";

 const traitDescriptions: Record<string, string> = {
   Openness: "Creativity, curiosity, and openness to new experiences.",
   Conscientiousness: "Reliability, organization, and goal focus.",
   Extraversion: "Energy, sociability, and expressiveness.",
   Agreeableness: "Cooperation, empathy, and kindness.",
   Neuroticism: "Sensitivity to stress and emotional reactivity."
 };

 export const ResultsClient = () => {
   const searchParams = useSearchParams();
   const encoded = searchParams.get("data");

   const results = useMemo(() => {
     if (encoded) {
       try {
         return decodeResults(encoded);
       } catch (error) {
         console.error("Failed to decode results", error);
       }
     }
     return loadResults();
   }, [encoded]);

   if (!results) {
     return (
       <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-neutral-950 text-neutral-100">
         <h1 className="text-2xl font-semibold mb-4">No results found</h1>
         <p className="text-neutral-400 mb-6">
           Take the test to generate your AI personality match.
         </p>
         <Button asChild>
           <Link href="/test">Start the test</Link>
         </Button>
       </div>
     );
   }

   const shareText = `I just took the AI personality test and matched with ${results.match.bestMatch.name}.`;

   return (
     <main className="min-h-screen bg-neutral-950 text-neutral-100">
       <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
         <div className="flex flex-col gap-4 text-center items-center">
           <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
             Your Results
           </p>
           <h1 className="text-3xl md:text-4xl font-semibold">
             Your AI personality profile
           </h1>
           <p className="text-neutral-400 max-w-2xl">
             Here is how your Big Five scores compare, and which AI model shares
             the closest personality pattern.
           </p>
         </div>

         <AIMatchCard
           match={results.match.bestMatch}
           similarity={results.match.similarity}
           explanation={results.explanation}
         />

         <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
           <div className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-6">
             <h2 className="text-lg font-semibold mb-4">Personality Comparison</h2>
             <PersonalityChart
               scores={results.scores}
               aiScores={results.match.bestMatch.scores}
             />
             <div className="flex items-center justify-center gap-6 mt-4 text-xs">
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 bg-neutral-200 rounded-full" />
                 <span className="text-neutral-400">You</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 border border-neutral-400 rounded-full" />
                 <span className="text-neutral-400">{results.match.bestMatch.name}</span>
               </div>
             </div>
             {typeof results.consistency === "number" && (
               <p className="text-xs text-neutral-500 mt-4 text-center">
                 Consistency: {results.consistency.toFixed(2)}
               </p>
             )}
           </div>

           <div className="space-y-4">
             <TraitCard
               label="Openness"
               score={results.scores.openness}
               description={traitDescriptions.Openness}
             />
             <TraitCard
               label="Conscientiousness"
               score={results.scores.conscientiousness}
               description={traitDescriptions.Conscientiousness}
             />
             <TraitCard
               label="Extraversion"
               score={results.scores.extraversion}
               description={traitDescriptions.Extraversion}
             />
             <TraitCard
               label="Agreeableness"
               score={results.scores.agreeableness}
               description={traitDescriptions.Agreeableness}
             />
             <TraitCard
               label="Neuroticism"
               score={results.scores.neuroticism}
               description={traitDescriptions.Neuroticism}
             />
           </div>
         </div>

         <div className="space-y-4">
           <h2 className="text-xl font-semibold">Compare with other AIs</h2>
           <AIComparisonGrid match={results.match} />
         </div>

         <div className="space-y-4 border border-neutral-800 rounded-xl p-6 bg-neutral-900/40">
           <h2 className="text-lg font-semibold">Share your result</h2>
           <ShareButtons text={shareText} />
         </div>

         <div className="flex flex-wrap gap-3 justify-center">
           <Button variant="outline" asChild>
             <Link href="/test">Retake test</Link>
           </Button>
           <Button variant="outline" asChild>
             <Link href="/">Back to research</Link>
           </Button>
         </div>
       </div>
     </main>
   );
 };
