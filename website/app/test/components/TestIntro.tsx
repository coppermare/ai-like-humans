import { Button } from "@/components/ui/button";

interface TestIntroProps {
  onStart: () => void;
}

export const TestIntro = ({ onStart }: TestIntroProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          AI Personality Test
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-neutral-100">
          Which AI Thinks Like You?
        </h1>
        <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
          Answer 10 quick questions based on the validated BFI-10 personality
          inventory. You will see your Big Five scores and the AI model that
          matches your profile.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm text-neutral-400">
          <span>10 questions</span>
          <span className="hidden sm:inline">•</span>
          <span>3 to 5 minutes</span>
          <span className="hidden sm:inline">•</span>
          <span>No sign-up</span>
        </div>
        <Button size="lg" onClick={onStart}>
          Start the test
        </Button>
      </div>
    </div>
  );
};
