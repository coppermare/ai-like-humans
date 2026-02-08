"use client";

import { useEffect, useRef, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart
} from "recharts";
import { BigFiveScores } from "@/lib/types";

interface PersonalityChartProps {
  scores: BigFiveScores;
  aiScores?: BigFiveScores;
}

export const PersonalityChart = ({ scores, aiScores }: PersonalityChartProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [chartWidth, setChartWidth] = useState(600);

  useEffect(() => {
    setMounted(true);
    if (!containerRef.current) return;

    const updateWidth = () => {
      const next = Math.max(320, Math.floor(containerRef.current?.clientWidth || 600));
      setChartWidth(next);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const data = [
    { trait: "Openness", you: scores.openness, ai: aiScores?.openness || 0 },
    { trait: "Conscientiousness", you: scores.conscientiousness, ai: aiScores?.conscientiousness || 0 },
    { trait: "Extraversion", you: scores.extraversion, ai: aiScores?.extraversion || 0 },
    { trait: "Agreeableness", you: scores.agreeableness, ai: aiScores?.agreeableness || 0 },
    { trait: "Neuroticism", you: scores.neuroticism, ai: aiScores?.neuroticism || 0 }
  ];

  return (
    <div ref={containerRef} className="w-full min-h-[320px] min-w-[320px]">
      {mounted ? (
        <RadarChart width={chartWidth} height={320} data={data}>
          <PolarGrid stroke="#404040" strokeDasharray="3 3" />
          <PolarAngleAxis
            dataKey="trait"
            tick={{ fill: "#a3a3a3", fontSize: 12 }}
          />
          <PolarRadiusAxis
            domain={[0, 5]}
            tick={{ fill: "#737373", fontSize: 10 }}
            axisLine={false}
          />
          {aiScores && (
            <Radar
              name="AI Match"
              dataKey="ai"
              stroke="#a3a3a3"
              fill="#a3a3a3"
              fillOpacity={0.1}
              strokeWidth={1.5}
              strokeDasharray="4 4"
            />
          )}
          <Radar
            name="You"
            dataKey="you"
            stroke="#e5e5e5"
            fill="#e5e5e5"
            fillOpacity={0.3}
            strokeWidth={2}
          />
        </RadarChart>
      ) : (
        <div className="w-full h-full rounded-lg bg-neutral-900/40" />
      )}
    </div>
  );
};
